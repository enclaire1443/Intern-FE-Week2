import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from './navItems';
import { scrollToSection } from '../../utils/scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleSectionClick('home')}
              className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300"
            >
              Fatih
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href.slice(1))}
                className="text-gray-300 hover:text-yellow-400 transition duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleSectionClick('contact')}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href.slice(1))}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleSectionClick('contact')}
              className="block px-4 py-2 text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;