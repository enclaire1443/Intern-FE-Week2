import React from 'react';
import instagramIcon from '../assets/instagram.png';
import lineIcon from '../assets/line.png';

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-4 px-6 mt-16 shadow-inner">
      <div className="max-w-3xl text-left">
        <p className="text-md font-semibold">My Contacts:</p>
        <p className="text-sm my-2">Feel free to contact me for future collaboration.</p>
        
        <div className="space-y-1">
          <a
            href="mailto:muhfatihzamzami@gmail.com"
            className="text-sm hover:text-gray-500 transition duration-200"
          >
            muhfatihzamzami@gmail.com
          </a>

          <div className="flex items-center space-x-2 mt-2">
            <a href="https://www.instagram.com/fthzami" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
              <span className="text-sm hover:text-gray-500">fthzami</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 mt-1">
            <a href="https://line.me/ti/p/haiinifatih" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
              <img src={lineIcon} alt="Line" className="w-5 h-5" />
              <span className="text-sm hover:text-gray-500">haiinifatih</span>
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          &copy; 2024 Muhammad Fatih Zamzami. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;