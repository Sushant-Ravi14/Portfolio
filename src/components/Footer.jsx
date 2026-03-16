import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">


        {/* Copyright & Built with */}
        <div className="pt-8 flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Sushant Ravi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
