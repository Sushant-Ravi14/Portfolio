import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { projects } from "../data/projects";
import GlowCard from "./GlowCard";

export default function Projects() {
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">Featured Projects</span></h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={articleVariants}
              className="h-full"
            >
              <GlowCard className="glass-card group flex flex-col h-full hover:-translate-y-2">
                {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Tech chips overlaying image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-dark/50">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-[0.6] flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600/20 text-red-400 font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <FaYoutube className="text-lg" /> Watch
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[0.5] flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 group/git"
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
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
