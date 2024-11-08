import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-blue-500 w-full h-16 flex justify-between items-center text-white fixed top-0 z-10 rounded-b-lg shadow-lg px-8">
      <a href="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-200">
        Fatih
      </a>
      <div className="flex gap-6 text-xs font-semibold">
        <a href="#About" className="hover:text-yellow-400 transition duration-200">
          About
        </a>
        <a href="#Projects" className="hover:text-yellow-400 transition duration-200">
          Projects
        </a>
        <a href="#Experience" className="hover:text-yellow-400 transition duration-200">
          Experience
        </a>
      </div>
    </div>
  );
};

export default NavBar;