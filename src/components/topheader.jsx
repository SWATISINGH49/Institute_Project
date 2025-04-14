import React from 'react';
import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

function TopHeader() {
  return (
    <div className="bg-blue-50 text-blue-900 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-medium">📞 +91-8084776565</span>
          <span className="hidden md:inline">|</span>
          <span className="font-medium">📧 hiit.muz@gmail.com</span>
        </div>

        {/* Right: Login/Register + Icons */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          {/* Login/Register */}
          <a href="" className="hover:underline hover:text-red-900 font-semibold">
            Login
          </a>
          <span className="text-white">/</span>
          <a href="#" className="hover:underline hover:text-red-900 font-semibold">
            Register
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400 transition transform hover:scale-110">
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-red-500 transition transform hover:scale-110">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-300 transition transform hover:scale-110">
              <FaTwitterSquare />
            </a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
