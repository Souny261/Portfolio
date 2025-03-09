import React, { useEffect, useState } from "react";
import { FileDownIcon, MenuIcon, XIcon } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return <header className={`sticky top-0 z-50 transition-all duration-200 
        ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-[#1E293B]">Souny MLV</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            About
          </a>
          <a href="#experience" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Contact
          </a>
          <a
            download
            href="https://drive.google.com/uc?export=download&id=1zvOjNO-vr_hhEJ_mGVxRG4ibkRqXTHIF"
            className="inline-flex items-center px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors">
            <FileDownIcon className="h-4 w-4 mr-2" />
            Download CV
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-[#1E293B]" /> : <MenuIcon className="h-6 w-6 text-[#1E293B]" />}
        </button>
      </nav>
      {isMenuOpen && <div className="md:hidden mt-4 pb-4">
        <div className="flex flex-col space-y-4">
          <a href="#about" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            About
          </a>
          <a href="#experience" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">
            Contact
          </a>
          <a
            download
            href="https://drive.google.com/uc?export=download&id=1zvOjNO-vr_hhEJ_mGVxRG4ibkRqXTHIF"
            className="inline-flex items-center px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors">
            <FileDownIcon className="h-4 w-4 mr-2" />
            Download CV
          </a>
        </div>
      </div>}
    </div>
  </header>;
};
export default Header;