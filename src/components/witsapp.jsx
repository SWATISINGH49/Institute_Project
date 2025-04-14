import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function WitsApp() {
  return (
    <div className="bg-[#f5f3ff] py-12 px-4 md:px-16 rounded-lg">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Section: Text + Features */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 15 Million students on the app today!
          </h2>
          <ul className="space-y-3 mb-6 text-lg text-gray-700">
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaCheckCircle className="text-indigo-600" /> Live & recorded classes available at ease
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaCheckCircle className="text-indigo-600" /> Dashboard for progress tracking
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaCheckCircle className="text-indigo-600" /> Lakhs of practice questions
            </li>
          </ul>

          <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-32"
              />
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="/mnt/data/image.png"
            alt="App Promo"
            className="max-w-[350px] rounded-xl shadow-xl"
          />
        </div>
        
      </div>
      <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-black-600 bg-blue-100">
        <div>
          <a href="#" className="mr-3 hover:underline">Privacy Policy</a> | 
          <a href="#" className="ml-3 hover:underline">Terms</a>
        </div>
        <div className="mt-2 md:mt-0">
          Made with ❤️ © 2025 HIIT
        </div>
      </div>
    </div>
    
  );
}

export default WitsApp;
