import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institution: "Swaminarayan University, Kalol",
      degree: "B.E. Computer Engineering",
      duration: "Jul 2025 - Jul 2029",
    },
    {
      institution: "Oxford Public School, Ranchi",
      degree: "12th",
      duration: "Jun 2023 - Mar 2025",
    },
    {
      institution: "St. Thomas School, Godda",
      degree: "10th",
      duration: "Mar 2012 - Mar 2023",
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-darker/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl">
          <div className="border-l-2 border-primary/30 ml-3 pl-8 space-y-12 relative">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-primary group-hover:scale-125 transition-transform duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(74,222,128,0.8)]"></span>
                <h4 className="font-bold text-white text-2xl group-hover:text-primary transition-colors duration-300">
                  {item.institution}
                </h4>
                <span className="text-gradient font-semibold text-lg mt-2 block">
                  {item.degree}
                </span>
                <span className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {item.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
}
