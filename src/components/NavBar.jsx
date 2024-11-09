import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
      <div className="flex gap-6 text-xs font-semibold">
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
    </div>
  );
};

export default NavBar;