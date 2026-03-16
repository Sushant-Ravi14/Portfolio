import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import profilePic from "../assets/profile.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating Tech Icons */}
      <motion.div className="absolute top-1/4 left-10 text-5xl text-blue-400/50 hidden md:block" variants={floatingIconVariants} animate="animate">
        <FaReact />
      </motion.div>
      <motion.div className="absolute bottom-1/4 right-20 text-5xl text-green-500/50 hidden md:block" variants={floatingIconVariants} animate="animate" style={{ animationDelay: '1s' }}>
        <FaNodeJs />
      </motion.div>
      <motion.div className="absolute top-1/3 right-10 text-5xl text-green-600/50 hidden md:block" variants={floatingIconVariants} animate="animate" style={{ animationDelay: '2s' }}>
        <SiMongodb />
      </motion.div>
      <motion.div className="absolute bottom-1/3 left-20 text-5xl text-cyan-400/50 hidden md:block" variants={floatingIconVariants} animate="animate" style={{ animationDelay: '1.5s' }}>
        <SiTailwindcss />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            className="lg:w-7/12 text-center lg:text-left lg:pl-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-4 tracking-wide">
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter"
            >
              <span className="text-white">Sushant Ravi</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-8 text-gradient pb-2"
            >
              Aspiring MERN Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building modern web applications, bringing unique designs to life,
              and constantly learning new technologies to create seamless digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-primary cursor-pointer w-full sm:w-auto text-center"
              >
                Let's Connect
              </Link>

              <a
                href="/Sushant_Ravi_Resume.pdf"
                download="Sushant_Ravi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline cursor-pointer w-full sm:w-auto text-center"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-5/12 relative flex justify-center lg:justify-end lg:pr-12"
          >
            <div className="relative group">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden glass p-3 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={profilePic}
                  alt="Sushant Ravi"
                  className="w-full max-w-[300px] md:max-w-[380px] h-auto rounded-2xl object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating elements around image */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
