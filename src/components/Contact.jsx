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

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl relative">
          {/* Contact Methods Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <motion.a
              href="mailto:sushant.ravi.cg@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 glass-card group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center text-primary">
                <FaEnvelope className="text-lg" />
              </div>
              <div className="overflow-hidden">
                <p className="text-white font-medium truncate">sushant.ravi.cg@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/917367019101"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 glass-card group hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center text-secondary ">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-white font-medium">WhatsApp</p>
              </div>
            </motion.a>
          </div>

          <div className="relative flex items-center justify-center mb-12">
            <span className="relative px-6 text-gray-500 text-sm font-medium italic">or send a message</span>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 group"
            >
              <span>Send Message</span>
            </button>
          </motion.form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-6">
              Connect with me
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card text-2xl text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
