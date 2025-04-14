import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import SlidingText from "./SlidingText";

// ===================================================
// Header Component: Responsive navigation bar
// ===================================================
const Header = () => {
  // State to control mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
   
      {/* =================================================== */}
      {/* MAIN NAVIGATION */}
      {/* =================================================== */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* LOGO / INSTITUTE NAME */}
          <div className="flex items-center">
            {/* Replace the src with your actual logo path */}
            <img 
  src="/images/logo.jpeg" 
  alt="hiit" 
  className="h-16 w-16 rounded-full bg-white border-2 border-gray-300 shadow-lg p-1"
/>

            <div className="flex flex-col">
              <span className="font-bold text-red-600 text-xl">
                <b>H.I.I.T</b>
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (Visible on md and up) */}
          <ul className="hidden md:flex space-x-6">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            {/* About Us Link */}
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">
                Courses
              </button>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 top-full w-56 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <li>
                  <Link
                    to="/courses/dcp"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Diploma in Computer Programming (DCP)
                  </Link>
                </li>
                <li>
                 
                </li>
                <li>
                  <Link
                    to="/courses/excel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Advanced Diploma in Computer Application (ADCA) 
                  </Link>
                  <Link
                    to="/courses/excel"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                     Diploma in Computer Application (DCA) 
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/courses/ccc"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Certificate in Computer Concepts (CCC)
                  </Link>
                </li>
              </ul>
            </li>

            {/* Industrial Training Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">
                Industrial Training
              </button>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 top-full w-56 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <li>
                  <Link
                    to="/training/bca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    BCA  full course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/mca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   C-language
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/btech-cs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    C++ 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/btech-electrical"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/btech-electrical"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/bsc-it"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    DSA
                  </Link>
                </li>
              </ul>
            </li>
            

            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">
              Entrance Exams
              </button>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 top-full w-56 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <li>
                  <Link
                    to="/training/bca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   NIMCET
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/mca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   MAH MCA CET
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/btech-cs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    CUET PG
                  </Link>
                </li>
               
              </ul>
            </li>


            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">
                IIT JEE Maths
              </button>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 top-full w-56 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <li>
                  <Link
                    to="/training/bca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   12th Maths
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/mca"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   11th Maths
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training/btech-cs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    9th-10th Maths
                  </Link>
                </li>
               
              </ul>
            </li>
            {/* Gallery Link */}
            <li>
              <Link
                to="/gallery"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>

            {/* Blogs Link */}
            <li>
              <Link
                to="/blogs"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>

            {/* Contact Us Link */}
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* MOBILE MENU TOGGLE BUTTON (Visible on smaller than md) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-blue-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger menu icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* =================================================== */}
        {/* MOBILE MENU */}
        {/* =================================================== */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="px-4 pt-4 pb-2 space-y-2">
              {/* Mobile Home Link */}
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              {/* Mobile About Us Link */}
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </li>

              {/* Mobile Courses Submenu */}
              <li className="relative">
                <button
                  className="w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  Courses
                </button>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/courses/dcp"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      Diploma in Computer Programming (DCP)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/dfa"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      Diploma in Financial Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/excel"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      Certificate in Advance Excel
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/tally"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      Certificate in Tally Prime
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/ccc"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      Certificate in Computer Concepts (CCC)
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Industrial Training Submenu */}
              <li className="relative">
                <button
                  className="w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  Industrial Training
                </button>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/training/bca"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      BCA Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training/mca"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      MCA Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training/btech-cs"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      B Tech (CS) Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training/btech-electrical"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      B Tech (Electrical) Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training/bsc-it"
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      BSc IT Students
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Gallery Link */}
              <li>
                <Link
                  to="/gallery"
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  Gallery
                </Link>
              </li>

              {/* Mobile Blogs Link */}
              <li>
                <Link
                  to="/blogs"
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  Blogs
                </Link>
              </li>

              {/* Mobile Contact Us Link */}
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

        {/* ----------------- */}


        
      {/* =================================================== */}
      {/* EXTRA CONTENT FOR LARGER BREAKPOINTS */}
      {/* =================================================== */}
      {/* This section shows extra information on XL screens and above */}
      

    

     
      <div className="hidden 2xl:block bg-gray-100 py-4 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">
                HIIT Computer Institute
              </span>
              <span className="text-md text-gray-600">
                Empowering Future Innovators
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-blue-800 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-pink-600 hover:text-pink-400 transition-colors duration-200"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-red-600 hover:text-red-400 transition-colors duration-200"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-blue-700 hover:text-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
