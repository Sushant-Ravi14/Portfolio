import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Certificates", to: "certificates" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${isScrolled ? "pt-2 md:pt-4 px-2 md:px-4" : "pt-0 px-0"
        }`}
    >
      <header
        className={`w-full transition-all duration-300 flex flex-col justify-center ${isScrolled
          ? "glass py-3 px-6 md:px-10 rounded-2xl max-w-[95%] md:max-w-6xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10"
          : "bg-transparent py-5 px-6 md:px-12 container mx-auto"
          }`}
      >
        <div className="flex justify-between items-center w-full relative">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer text-white tracking-wider flex items-center gap-1"
          >
            {/* <span className="text-primary">&lt;</span> */}
            SR 
            {/* <span className="text-secondary">/&gt;</span> */}
          </Link>

          {/* Desktop Navigation & Socials */}
          <nav className="hidden lg:flex gap-8 items-center">
            <div className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary font-medium"
                  className="text-gray-300 hover:text-white cursor-pointer relative group transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full lg:hidden glass rounded-2xl mt-4 origin-top overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="flex flex-col py-6 px-6 gap-6">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.to}
                          smooth={true}
                          duration={500}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-300 hover:text-primary transition-colors text-lg font-medium"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
}
