import { useState, useEffect } from "react";
import logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Animation Variants for "Coming from Top"
  const containerVariants = {
    hidden: { opacity: 0, y: -50 }, // Starts from above with 0 opacity
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Ends at the correct position
  };

  return (
    <motion.nav
      variants={containerVariants} // Apply animation variants
      initial="hidden" // Start in the "hidden" state
      animate="visible" // Animate to the "visible" state
      className="navbar container mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 z-30 
      backdrop-blur-md bg-white/5 shadow-md flex justify-between items-center w-full px-4 py-2 text-white"
    >
      {/* Left Side: Logo and Developer Text */}
      <div className="flex items-center gap-2">
        <a href="#home" className="text-xl font-bold uppercase flex items-center gap-2 text-white text-shadow-nav">
          <img src={logo} alt="Logo" className="w-10 h-10 text-shadow-nav object-cover" />
          Developer
        </a>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? "" : <Menu size={28} />}
        </button>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden lg:flex space-x-4 text-lg">
          <li>
            <a href="#home" className="rounded-md text-white text-shadow-nav hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="rounded-md text-white text-shadow-nav hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="rounded-md text-white text-shadow-nav hover:text-yellow-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="rounded-md text-white text-shadow-nav hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 w-3/4 md:w-1/2 h-screen backdrop-blur-md bg-black/85 shadow-lg
          flex flex-col gap-4 pl-10 pt-16
          space-y-6 text-xl font-semibold text-white z-20 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        role="menu"
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 p-2 rounded-md text-white hover:bg-white/10"
          onClick={() => setIsOpen(false)} // Close the menu
          aria-label="Close Mobile Menu"
        >
          <X size={32} />
        </button>

        {/* Mobile Menu Links */}
        <a
          href="#home"
          className="hover:text-yellow-300"
          onClick={() => setIsOpen(false)} // Close the menu after clicking a link
          role="menuitem"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-yellow-300"
          onClick={() => setIsOpen(false)}
          role="menuitem"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="hover:text-yellow-300"
          onClick={() => setIsOpen(false)}
          role="menuitem"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="hover:text-yellow-300"
          onClick={() => setIsOpen(false)}
          role="menuitem"
        >
          Contact
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Header;