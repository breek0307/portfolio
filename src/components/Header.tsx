import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Instagram, LogOut } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-nav flex items-center justify-between ${scrolled ? "scrolled" : ""}`}>
      <div className="flex items-center gap-8">
        <div
          className="logo-text cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VEDANT
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-6 relative">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src="https://res.cloudinary.com/dkqyscpeq/image/upload/v1767630437/myphoto_nuajep.png"
            alt="Profile"
            className="w-8 h-8 rounded-sm object-cover border border-transparent group-hover:border-white transition-all"
          />
          <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-48 bg-black/90 border border-gray-800 rounded-md shadow-xl py-2 flex flex-col gap-1 backdrop-blur-sm animate-fade-in-up origin-top-right">
            <div className="px-4 py-2 border-b border-gray-800 mb-1">
              <p className="text-xs text-gray-400">Socials</p>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>

            <div className="border-t border-gray-800 mt-1 pt-1">
              <button
                onClick={() => window.location.reload()}
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-3 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign out of Netflix
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
