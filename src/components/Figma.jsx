import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import GlowCard from "./GlowCard";

const figmaDesigns = [
  {
    id: 1,
    title: "Landing Page Design",
    description: "A visually compelling landing page mockup prioritizing clear call-to-actions, dynamic layouts, and a cohesive modern color palette.",
    thumbnail: "https://res.cloudinary.com/dxe4mpopf/image/upload/v1776459310/Screenshot_2026-04-18_022302_otawz5.png",
    link: "https://www.figma.com/design/wDNO99XbxdTpCqD2XUk1JJ/Untitled?node-id=298-319&t=u1IFa0ci5FFQQupU-1",
  },
  {
    id: 2,
    title: "redRail UI Clone",
    description: "A detailed UI replica of the redRail booking application, capturing its intuitive navigation, search features, and responsive design structure.",
    thumbnail: "https://res.cloudinary.com/dxe4mpopf/image/upload/v1776459310/Screenshot_2026-04-18_022415_zvqwxb.png",
    link: "https://www.figma.com/design/wDNO99XbxdTpCqD2XUk1JJ/Untitled?node-id=298-25&t=u1IFa0ci5FFQQupU-1",
  },
  {
    id: 3,
    title: "Hospital Website UI with Prototype",
    description: "A complete professional hospital website design including a fully functional Figma prototype, focusing on patient accessibility and clear service navigation.",
    thumbnail: "https://res.cloudinary.com/dxe4mpopf/image/upload/v1776459315/Screenshot_2026-04-18_022447_mtkau0.png",
    link: "https://www.figma.com/proto/wDNO99XbxdTpCqD2XUk1JJ/Untitled?node-id=298-191&t=u1IFa0ci5FFQQupU-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
  }
];

export default function Figma() {
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
    <section id="figma" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            UI / UX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Figma Designs</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {figmaDesigns.map((design) => (
            <motion.div
              key={design.id}
              variants={articleVariants}
              className="h-full"
            >
              <GlowCard className="glass-card group flex flex-col h-full hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-900 rounded-t-xl group">
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
                      <FaFigma className="text-[#F24E1E]" /> Design
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-dark/50 rounded-b-xl">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#A259FF] transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                    {design.description}
                  </p>

                  <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                    <a
                      href={design.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-500/20 text-[#A259FF] font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 min-w-[120px]"
                    >
                      <FaFigma className="text-lg" /> View Live
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute right-[-10%] top-[30%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
