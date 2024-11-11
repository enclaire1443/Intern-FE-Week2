import React, { useState, useEffect } from 'react';
import fototim1 from '../assets/fototim1.jpeg';
import fototim2 from '../assets/fototim2.jpeg';
import fototim3 from '../assets/fototim3.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const images = [fototim3, fototim1, fototim2];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true); // For fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      // Set the next image after a short delay to allow fade-out effect
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true); // Fade back in
      }, 500); // Adjust this delay to control fade timing

    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 pt-20">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />

      <div className="relative z-10 flex justify-center items-center w-full h-full text-center">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 shadow-lg">
            Where vision turns into reality.
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 shadow-lg">
            Hi, I'm Muhammad Fatih Zamzami, and this is a glimpse of my journey
          </p>
          <Link
            to="/mainpage"
            className="bg-yellow-300 hover:bg-yellow-200 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold transition duration-200"
          >
            Let's go.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;