import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import GlowCard from "./GlowCard";

const hackathons = [
  {
    id: 1,
    title: "Odoo x Amlthea Hackathon 2025",
    description: "Corporate finance teams struggle with fragmented expense tracking systems that lack proper role-based workflows, leading to manual oversight, delayed approvals, and opaque financial reporting.",
    demo: "https://teambytebusters.netlify.app/",
    github: "https://github.com/Sushant-Ravi14/Byte_busters",
    thumbnail: "https://res.cloudinary.com/dxe4mpopf/image/upload/v1776477942/Screenshot_2026-04-18_073455_jwunjm.png",
  },
  {
    id: 2,
    title: "Odoo x Gujarat Vidyapith Hackathon 2026",
    description: "Managing a modern fleet involves juggling fragmented data — from vehicle health and fuel costs to driver safety and complex delivery schedules. Without a centralized system, logistics teams face high operational overhead and data silos.",
    demo: "https://odoo-guj-vid.vercel.app/",
    github: "https://github.com/harshit-kumar-dev/odoo-Guj-Vid",
    thumbnail: "https://res.cloudinary.com/dxe4mpopf/image/upload/v1776477949/Screenshot_2026-04-18_073354_semaw2.png",
  }
];

export default function Hackathon() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const articleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hackathon" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Competitions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Hackathons</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.id}
              variants={articleVariants}
              className="h-full"
            >
              <GlowCard className="glass-card group flex flex-col h-full hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-900 rounded-t-xl group">
                  <img
                    src={hackathon.thumbnail}
                    alt={hackathon.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
                       <FaCode className="text-primary" /> Hackathon
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-dark/50 rounded-b-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {hackathon.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    Problem Statement
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                    {hackathon.description}
                  </p>

                  <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                    <a
                      href={hackathon.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base min-w-[100px]"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </a>
                    <a
                      href={hackathon.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-[0.5] flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 group/git text-sm sm:text-base"
                    >
                      <FaGithub className="text-lg group-hover/git:scale-110 transition-transform" /> Code
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute left-[-10%] top-[30%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
