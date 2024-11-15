import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 w-full h-16 flex justify-between items-center text-white fixed top-0 z-50 rounded-b-lg shadow-lg px-8">
      <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-200">
        Fatih
      </Link>

      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      <div className="hidden sm:flex gap-6 text-s font-semibold">
        <Link to="#About" onClick={() => scrollToSection('About')} className="hover:text-yellow-400 transition duration-200">
          About
        </Link>
        <Link to="#Projects" onClick={() => scrollToSection('Projects')} className="hover:text-yellow-400 transition duration-200">
          Projects
        </Link>
        <Link to="#Experience" onClick={() => scrollToSection('Experience')} className="hover:text-yellow-400 transition duration-200">
          Experience
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 right-8 bg-gray-900 text-white shadow-lg p-4 rounded-xl">
          <Link
            to="#About"
            onClick={() => {
              scrollToSection('About');
              setIsMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:text-yellow-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="#Projects"
            onClick={() => {
              scrollToSection('Projects');
              setIsMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:text-yellow-400 transition duration-200"
          >
            Projects
          </Link>
          <Link
            to="#Experience"
            onClick={() => {
              scrollToSection('Experience');
              setIsMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:text-yellow-400 transition duration-200"
          >
            Experience
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;