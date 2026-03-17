import { motion } from "framer-motion";


export default function About() {

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white tracking-widest uppercase text-sm font-semibold mb-2 block">
            Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">About Me</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mx-auto"
        >
          <div className="glass-card p-8 md:p-10 mb-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-4">My Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm Sushant Ravi, an aspiring Full Stack MERN Developer with a passion for building scalable and user-centric web applications. Currently, I am deeply immersed in mastering the MERN stack—MongoDB, Express.js, React, and Node.js—to create seamless digital experiences from front to back.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                On the frontend, I focus on crafting visually stunning and highly responsive interfaces using modern tools like React and Tailwind CSS. My foundation in HTML5, CSS3, and JavaScript allows me to bring creative designs to life, ensuring that every interaction is smooth and every layout is intuitive across all devices. When it comes to the backend, I enjoy architecting robust systems and managing data efficiently. My experience with Node.js and Express enables me to build high-performance APIs, while my proficiency in both NoSQL (MongoDB) and SQL (MySQL) databases ensures that I can handle complex data requirements with ease.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Beyond coding, I am an enthusiast of modern development workflows, utilizing Git and GitHub for version control and Figma for design collaboration. I am also familiar with languages like C, C++, and Python, and I leverage platforms like Vercel, Netlify, and Render to deploy and manage my projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
