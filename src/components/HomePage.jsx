import React, { useState, useEffect } from 'react';
import fototim1 from '../assets/fototim1.jpeg';
import fototim2 from '../assets/fototim2.jpeg';
import fototim3 from '../assets/fototim3.jpeg';

const HomePage = () => {
  const images = [fototim1, fototim2, fototim3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 pt-16"> {/* Added pt-16 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="w-full h-full bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center w-full h-full text-center">
        <div className="text-white">
          <h1 className="shadow-lg text-yellow-100 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Where vision turns into reality.</h1>
          <p className="text-lg sm:text-xl shadow-lg mb-6">Hi, im Muhammad Fatih Zamzami, and this is my journey</p>
          <a href="/MainPage" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-200">
            lets go.
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;