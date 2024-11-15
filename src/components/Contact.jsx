import React from 'react';
import instagramIcon from '../assets/instagram.png';
import lineIcon from '../assets/line.png';
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-8 px-8 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg font-semibold mb-2 text-gray-100">Get in Touch</p>
        <p className="text-sm mb-6 text-gray-400">Connect with me using the links down below.</p>

        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-x-20">
          <div className="space-y-4 mb-6 lg:mb-0">
            <a
              href="mailto:muhfatihzamzami@gmail.com"
              aria-label="Email Muhammad Fatih Zamzami"
              className="flex items-center space-x-2 text-gray-300 text-sm font-medium hover:text-yellow-400 transition duration-200"
            >
              <img src={mailIcon} alt="Email" className="w-5 h-5 opacity-90 hover:opacity-100 transition duration-200" />
              <span>muhfatihzamzami@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/fatihzamzami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile of Fatih Zamzami"
              className="flex items-center space-x-2 text-gray-300 text-sm font-medium hover:text-yellow-400 transition duration-200"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 opacity-90 hover:opacity-100 transition duration-200" />
              <span>LinkedIn: Fatih Zamzami</span>
            </a>
          </div>

          <div className="space-y-4 text-right">
            <a
              href="https://line.me/R/ti/p/haiinifatih"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LINE profile of Fatih Zamzami"
              className="flex items-center space-x-2 text-gray-300 text-sm font-medium hover:text-yellow-400 transition duration-200"
            >
              <img src={lineIcon} alt="Line" className="w-5 h-5 opacity-90 hover:opacity-100 transition duration-200" />
              <span>LINE: haiinifatih</span>
            </a>

            <a
              href="https://www.instagram.com/fthzami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram profile of Fatih Zamzami"
              className="flex items-center space-x-2 text-gray-300 text-sm font-medium hover:text-yellow-400 transition duration-200"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 opacity-90 hover:opacity-100 transition duration-200" />
              <span>Instagram: fthzami</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-8 text-center border-t border-gray-700 pt-4">
        &copy; 2024 Muhammad Fatih Zamzami. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;