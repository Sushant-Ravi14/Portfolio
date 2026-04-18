import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaBook } from "react-icons/fa";
import { projects } from "../data/projects";
import GlowCard from "./GlowCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filters = [
    { id: "all", label: "All" },
    { id: "games", label: "Games" },
    { id: "clones", label: "Clones" },
    { id: "full stack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [currentPage, filteredProjects]);

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
          className="text-center mb-12"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === filter.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 border border-primary"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlowCard className="glass-card group flex flex-col h-full hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-900 rounded-t-xl">
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
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-dark/50 rounded-b-xl">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-auto border-t border-white/10 pt-6">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base min-w-[100px]"
                      >
                        <FaExternalLinkAlt className="text-sm" /> Live Demo
                      </a>
                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-red-600/20 text-red-400 font-medium hover:bg-red-600 hover:text-white transition-all duration-300 text-sm sm:text-base min-w-[100px]"
                        >
                          <FaYoutube className="text-lg" /> Watch
                        </a>
                      )}
                      {project.postmanDocs && (
                        <a
                          href={project.postmanDocs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-orange-500/20 text-orange-400 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm sm:text-base min-w-[100px]"
                        >
                          <FaBook className="text-lg" /> Docs
                        </a>
                      )}
                      <a
                        href={project.github}
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
          </AnimatePresence>
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-4 relative z-20">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:hover:bg-white/5 disabled:hover:border-white/10 cursor-pointer disabled:cursor-not-allowed"
            >
              &lt;
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 cursor-pointer ${
                    currentPage === idx + 1
                      ? "bg-primary text-white shadow-lg shadow-primary/30 border border-primary"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:hover:bg-white/5 disabled:hover:border-white/10 cursor-pointer disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {/* Decorative Blob */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
