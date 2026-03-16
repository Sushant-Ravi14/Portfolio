import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-darker/50">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">My Skills</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-6 md:p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              style={{ perspective: "1000px" }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4 text-center">
                {category.category}
              </h3>

              <div className="flex flex-col gap-5">
                {category.items.map((skill, i) => (
                  <div key={skill.name} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <skill.icon className={`text-3xl ${skill.color} drop-shadow-lg`} />
                    <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
}
