import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-blue-700 w-full h-10 flex gap-6 justify-center items-center text-xl font-bold text-white fixed top-0 z-10">
      <a href="/Home" className="hover:text-gray-300">
        Home
      </a>
      <a href="#About" className="hover:text-gray-300">
        
        About
      </a>
      <a href="#Projects" className="hover:text-gray-300">

        Projects
      </a>
      <a href="#Experience" className="hover:text-gray-300">
        
        Experience
      </a>
    </div>
  );
};

export default NavBar;