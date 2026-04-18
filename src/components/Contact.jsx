import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiLeetcode, SiSololearn } from "react-icons/si";

const socialLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sushant-ravi-dev/",
    icon: <FaLinkedin />,
  },
  {
    name: "github",
    url: "https://github.com/Sushant-Ravi14",
    icon: <FaGithub />,
  },
  {
    name: "twitter",
    url: "https://x.com/Sushant_Ravi_",
    icon: <FaXTwitter />,
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/Sushant-Ravi/",
    icon: <SiLeetcode />,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UC2IlSckB_w0BLMgdBixUyiQ",
    icon: <FaYoutube />,
  },
  {
    name: "sololearn",
    url: "https://www.sololearn.com/en/profile/35854750",
    icon: <SiSololearn />,
  },
];

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // You can set these in your .env file or replace the hardcoded placeholders
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000); // Hide success after 5s
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-darker/60">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">Contact Me</span></h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 relative">
            
            {/* Left Column - Contact Info & Socials (Ratio 2) */}
            <div className="lg:col-span-2 glass-card p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col justify-between space-y-8 sm:space-y-12 h-full">
              <div className="space-y-6">
                <motion.a
                  href="mailto:sushant.ravi.cg@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 md:p-6 glass-card group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center text-primary min-w-[24px]">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div className="overflow-hidden w-full flex-1">
                    <p className="text-white font-medium truncate text-sm md:text-base">sushant.ravi.cg@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/917367019101"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 md:p-6 glass-card group hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center text-secondary min-w-[24px]">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div className="overflow-hidden w-full flex-1">
                    <p className="text-white font-medium text-sm md:text-base">WhatsApp</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-6 border-t border-white/10 pt-8">
                  Connect with me
                </p>
                <div className="flex flex-col items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl glass-card text-xl md:text-2xl text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 mx-auto"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (Ratio 3) */}
            <div className="lg:col-span-3 glass-card p-6 sm:p-8 md:p-10 rounded-3xl h-full">
              <motion.form
                ref={form}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 h-full flex flex-col"
                onSubmit={sendEmail}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="Your Email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-grow">
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full h-full min-h-[180px] sm:min-h-[200px] bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <div className="mt-auto pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>

                  {submitStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-green-400 text-center font-medium mt-4"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center font-medium mt-4"
                    >
                      Failed to send message. Please try again later.
                    </motion.p>
                  )}
                </div>
              </motion.form>
            </div>

        </div>
      </div>
    </section>
  );
}
