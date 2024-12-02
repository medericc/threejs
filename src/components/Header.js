import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Stats", path: "/stats" },
    { name: "Globe", path: "/#globe" },
    { name: "Biography", path: "/#biography" },
    { name: "Timeline", path: "/#timeline" },
  ];

  return (
    <nav className="relative z-50 p-4 bg-gradient-to-b from-black to-transparent">
      <div className="flex justify-between items-center mx-auto container">
        {/* Logo */}
        <div className="z-50 font-bold">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] md:w-[200px] hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="z-50 md:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-md md:hidden transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-center space-y-8 h-full text-2xl">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                className="hover:text-green-400 nav-link transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-10 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              className="hover:text-green-400 nav-link transition-colors duration-300"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
