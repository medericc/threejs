import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative z-50 p-4">
      <div className="flex justify-between items-center mx-auto container">
        <div className="z-50 font-bold logo">
          <img src={logo} alt="logo" className="logo w-[150px] md:w-[200px]" />
        </div>
        <button
          className="z-50 md:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col justify-center items-center space-y-8 h-full text-2xl">
            {['Accueil', 'Prix', 'Services', 'A propos', 'Contact'].map((link) => (
              <a
                href="#"
                className="hover:text-green-400 nav-link"
                onClick={() => setIsMenuOpen(false)}
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="md:flex space-x-10 hidden font-medium">
          {['Accueil', 'Prix', 'Services', 'A propos', 'Contact'].map((link) => (
            <a href="#" className="hover:text-green-400 nav-link" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
