import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-blue-600 w-screen h-16 flex justify-between items-center text-white fixed top-0 z-10 rounded-b-lg shadow-md px-4">
      <a href="/Home" className="text-xl font-sourGummy font-bold hover:bg-blue-500 p-2 rounded transition duration-200">
        Fatih
      </a>

      <div className="flex gap-6 text-base font-semibold">
        <a href="#About" className="hover:bg-blue-500 p-2 rounded transition duration-200">
          About
        </a>
        <a href="#Projects" className="hover:bg-blue-500 p-2 rounded transition duration-200">
          Projects
        </a>
        <a href="#Experience" className="hover:bg-blue-500 p-2 rounded transition duration-200">
          Experience
        </a>
      </div>
    </div>
  );
};

export default NavBar;