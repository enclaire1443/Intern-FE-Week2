import React from 'react';
import fotodiri from '../assets/fotodiri1.jpeg';
import fotocontactme from '../assets/fotocontactme.png';

const MainPage = () => {
  return (
    <main className="bg-gradient-to-r from-gray-800 to-gray-900 font-sans">
      <section id="Home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-800 to-gray-900 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>

        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Let's step inside!</h1>
        <p className="text-xl mb-6 text-gray-300">Welcome to my journey</p>
        <a 
          href="#About" 
          className="text-lg bg-yellow-300 text-gray-900 py-3 px-8 rounded-full hover:bg-yellow-200 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Scroll Down
        </a>
      </section>

      <section id="About" className="h-screen flex flex-col lg:flex-row justify-center items-center gap-40 g-gradient-to-r from-blue-300 to-blue-400 px-8 py-20">
        <div className="">
          <img src={fotodiri} alt="Muhammad Fatih Zamzami" className="w-64 h-64 object-cover rounded-full shadow-xl transform transition duration-500 hover:scale-105" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-4">About Me</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            I'm Muhammad Fatih Zamzami, an ambitious Electrical Engineering student at the Universitas Indonesia. Passionate about technology, science, and mathematics, I'm driven to make a positive societal impact through innovation.
          </p>
        </div>
      </section>

      <section id="Projects" className="h-screen bg-white text-gray-900 px-8 py-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-6 from-gray-800 text-center">My Projects</h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl w-full lg:w-1/2 transform transition duration-500 hover:scale-105">
            <img src={fotocontactme} alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">Contact Me Page</h3>
            <p className="text-lg text-white">This is a contact me page that I developed during my Exercise FTUI Internship 2024. It uses normal HTML, TailwindCSS, and JavaScript file for the script.</p>
          </div>
        </div>
      </section>

      <section id="Experience" className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-20 shadow-lg flex flex-col">
        <h2 className="text-4xl font-semibold text-yellow-300 mb-8 text-center tracking-wider">My Experiences</h2>
        <div className="text-center flex-grow">
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Here's a glimpse of my experiences that have shaped my journey:
          </p>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">2023 World Scout Jamboree - Indonesian Delegate</h3>
              <p className="text-base">I had the honor of representing Indonesia at the World Scout Jamboree 2023 at SaeManGeum, South Korea.</p>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Potluck Event Staff at GADEENG 2024</h3>
              <p className="text-base">I worked as a staff member for the Potluck Event at GADEENG 2024.</p>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Exercise FTUI Internship 2024</h3>
              <p className="text-base">Currently interning at Exercise FTUI, working on web development projects using ReactJS and TailwindCSS.</p>
            </div>
            <div className="col-span-2 flex justify-center items-center text-center mt-6">
              <h3 className="text-2xl font-semibold text-white">and more to come...</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;