import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS for some global scroll effects where Framer Motion isn't used
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen font-sans antialiased overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      {/* Background Gradient Mesh - Static */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-dark to-black" />
      
      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          
          <div data-aos="fade-up">
            <About />
          </div>
          
          <div data-aos="fade-up">
            <Education />
          </div>
          
          <div data-aos="fade-up">
            <Skills />
          </div>
          
          <div data-aos="fade-up">
            <Projects />
          </div>
          
          <div data-aos="fade-up">
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
