import { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

import Background3D from "./components/Background3D";
import CommandPalette from "./components/CommandPalette";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold sections for better initial page load
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Certificates = lazy(() => import("./components/Certificates"));
const Projects = lazy(() => import("./components/Projects"));
const Figma = lazy(() => import("./components/Figma"));
const Hackathon = lazy(() => import("./components/Hackathon"));
const Achievements = lazy(() => import("./components/Achievements"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    // Initialize AOS for some global scroll effects where Framer Motion isn't used
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    // Initialize Vanilla Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen font-sans antialiased overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      {/* Dynamic SEO Head Tags via react-helmet-async */}
      <Helmet>
        <title>Sushant Ravi | React Developer &amp; Full Stack Engineer | Portfolio</title>
        <meta name="description" content="Sushant Ravi - Passionate React Developer and Full Stack Engineer. Showcasing projects in Frontend, Full Stack, Games, Clones, UI/UX designs, hackathons, and achievements. Built with React.js." />
        <meta property="og:title" content="Sushant Ravi | React Developer & Full Stack Engineer" />
        <meta property="og:description" content="Passionate React Developer and Full Stack Engineer. Explore projects, designs, hackathons, and achievements." />
        <meta property="og:url" content="https://portfolio-sushant-ravi.vercel.app/" />
        <link rel="canonical" href="https://portfolio-sushant-ravi.vercel.app/" />
      </Helmet>

      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg">
        Skip to main content
      </a>

      {/* Background Gradient Mesh - Static */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-dark to-black" aria-hidden="true" />
      
      {/* 3D Particle Background */}
      <Background3D />
      
      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <CommandPalette />
        <Navbar />
        
        <main id="main-content" className="flex-grow">
          <Hero />
          
          <Suspense fallback={null}>
            <div data-aos="fade-up">
              <About />
            </div>
            
            <div data-aos="fade-up">
              <Skills />
            </div>
            
            <div data-aos="fade-up">
              <Certificates />
            </div>
            
            <div data-aos="fade-up">
              <Projects />
            </div>
            
            <div data-aos="fade-up">
              <Figma />
            </div>
            
            <div data-aos="fade-up">
              <Hackathon />
            </div>
            
            <div data-aos="fade-up">
              <Achievements />
            </div>
            
            <div data-aos="fade-up">
              <Education />
            </div>
            
            <div data-aos="fade-up">
              <Contact />
            </div>
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
