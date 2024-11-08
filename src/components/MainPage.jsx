import React from 'react';
import fotodiri from '../assets/fotodiri1.jpeg';
import fotocontactme from '../assets/fotocontactme.png';

const MainPage = () => {
  return (
    <main className="bg-gradient-to-r from-blue-500 to-blue-700 font-sans">

      <section id="Home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">Showcasing my skills, projects, and experiences</p>
        <a href="#About" className="text-lg bg-yellow-400 text-gray-900 py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-200">Explore More</a>
      </section>

      <section id="About" className="h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-white to-yellow-100 px-8 py-20">
        <div className="lg:w-1/2">
          <img src={fotodiri} alt="Muhammad Fatih Zamzami" className="w-64 h-64 object-cover rounded-full shadow-xl transform transition duration-500 hover:scale-105" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm Muhammad Fatih Zamzami, a passionate Electrical Engineering student at Universitas Indonesia. With a strong interest in coding and technology, I am currently an intern at Exercise FTUI, working on Frontend Web Development using ReactJS and TailwindCSS.
          </p>
        </div>
      </section>

      <section id="Projects" className="h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-gray-900 px-8 py-20 flex flex-col justify-center items-center">
  <h2 className="text-4xl font-semibold mb-6 text-white text-center">My Projects</h2>
  <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
    <div className="bg-yellow-200 p-6 rounded-lg shadow-xl w-full lg:w-1/2 transform transition duration-500 hover:scale-105">
      <img src={fotocontactme} alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">Contact Me Page</h3>
      <p className="text-lg">This is a contact me page that i develop during my time in Exercise FTUI Internship 2024. It uses HTML, TailwindCSS, and a JavaScript script to execute the program</p>
    </div>
  </div>
</section>

      <section id="Experience" className="h-screen bg-gradient-to-r from-white to-yellow-100 px-8 py-20 shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Experience</h2>
        <div className="text-center">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            sdkjnknjdscvnjdsvjnsdvjnvdjnsjdvsjnds
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainPage;