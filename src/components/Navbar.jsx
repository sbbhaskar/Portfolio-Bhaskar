import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToTop = () => {
    setActiveHash("");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 overflow-x-hidden bg-gradient-to-br from-blue-800 via-red-600 to-yellow-400 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl w-full mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 py-2">
        
        {/* Logo + Name (Clickable) */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 focus:outline-none group"
          title="Go to Home"
        >
          <img
            src="/me.png"
            alt="Bhaskar Banerjee"
            className="h-10 w-10 rounded-full border-2 border-white shadow-md cursor-pointer group-hover:scale-105 transition"
          />
          <h1 className="text-white text-lg font-bold tracking-wide whitespace-nowrap cursor-pointer group-hover:text-yellow-300 transition">
            Bhaskar Banerjee
          </h1>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center flex-wrap">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`group relative font-medium px-3 py-2 transition duration-300 ${
                activeHash === item.path
                  ? "text-black bg-white font-bold rounded-md shadow-sm scale-105"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                  activeHash === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full overflow-x-hidden bg-gradient-to-br from-blue-800 via-red-600 to-yellow-400 bg-opacity-95 px-4 pb-4 pt-2 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => {
                setMenuOpen(false);
                setActiveHash(item.path);
              }}
              className={`block font-medium px-4 py-2 rounded-md transition duration-300 ${
                activeHash === item.path
                  ? "bg-white text-black font-bold"
                  : "text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
