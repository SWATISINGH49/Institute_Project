import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f5f3ff] text-gray-700 py-8" >
      {/* Contact & Social Media Section (Visible on 2XL screens) */}
      <div className="hidden 2xl:block bg-blue-50 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6 text-gray-700">
            <span>Contact: +91-8084776565</span>
            <span>Email: HIIT.muz@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-800 hover:text-blue-600">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-400">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-500">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
          </div>
        </div>
      </div>
 {/* =================================================== */}
      {/* RESPONSIVE SOCIAL ICONS GRID FOR VARIOUS BREAKPOINTS */}
      {/* =================================================== */}
      <div className="bg-pink-100 py-4 border-l-gray-700">
     
      <div className="container mx-auto p-6  rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-center text-blue-900 mb-4 "> Boost Your Career with In-Demand Skills! </h2>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <div className="border-2 border-blue-700 bg-gray-100 p-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-30  hover:bg-green-100 hover:scale-105 active:scale-95 transition  ">
      <p className=" text-md font-medium text-gray-600">✅ Crack NIMCET, CUET & MAH CET – Secure a top rank!</p>
    </div>
    <div className="border-2 border-blue-700 bg-violet-100 p-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 transition  ">
      <p className=" text-md font-medium text-gray-600">✅ Learn Programming – Build real-world applications!</p>
    </div>
    <div className="border-2 border-blue-700 bg-violet-100 p-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 transition  ">
      <p className=" text-md font-medium text-gray-600">✅ Master Web Development – High-paying career ahead!</p>
    </div>
    <div className="border-2 border-blue-700 bg-violet-100 p-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 transition  ">
      <p className=" text-md font-medium text-gray-600">✅ DCA / ADCA – Get job-ready with essential skills!</p>
    </div>
    <div className="border-2 border-blue-700 bg-violet-100 p-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 transition  ">
      <p className=" text-md font-medium text-gray-600">✅ SVSU / VGU / MAU – Unlock endless opportunities!</p>
    </div>
  </div>



  <div className="mt-6 text-center">
    <p className="text-lg font-medium text-red-700">Don’t wait! The future belongs to those who prepare for it today.</p>
    <p className="text-gray-700">Enroll now and step into a world of opportunities!</p>
    <div className="flex justify-center items-center "> {/* Centering */}
      <a href="tel:8084776565"> {/* Auto-call on click */}
        
      </a>
    </div>
  </div>
</div>

</div>

      {/* =================================================== */}
      {/* EXTRA CUSTOMIZATION SECTION (Visible on 2XL screens) */}
      {/* =================================================== */}
      {/*
        This section can be further customized to include additional information,
        promotional banners, or any other content that suits your institute's needs.
        It is currently hidden on smaller screens and only visible on 2XL screens.
      */}
      {/* Footer Grid Layout */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Company Section */}
        <div>
          <h3 className="text-lg text-red-600 underline font-bold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Entrance Exams</a></li>
            <li><a href="#" className="hover:underline">IIT JEE Maths</a></li>
          </ul>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-lg text-red-600 underline font-bold mb-3">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Computer Courses</a></li>
            <li><a href="#" className="hover:underline">Software Development</a></li>
            <li><a href="#" className="hover:underline">Web Development</a></li>
            <li><a href="#" className="hover:underline">Certifications</a></li>
            <li><a href="#" className="hover:underline">Artificial Intelligence</a></li>
          </ul>
        </div>

        {/* Resources & Support Section */}
        <div>
          <h3 className="text-lg text-red-600 underline font-bold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Reference</a></li>
          </ul>
          <h3 className="text-lg text-red-600 underline font-bold mt-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Languages Section */}
        <div>
          <h3 className="text-lg text-red-600 underline font-bold mb-3">Languages</h3>
          <ul className="space-y-2">
            <li>C</li>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>DSA</li>
          </ul>
        </div>

        {/* Types & Subjects Section */}
        <div>
          <h3 className="text-lg text-red-600 underline font-bold mb-3">Types</h3>
          <ul className="space-y-2">
            <li>Projects</li>
            <li>Challenges</li>
            <li>Educational</li>
          </ul>
          <h3 className="text-lg text-red-600 underline font-bold mt-4">Knowledge</h3>
          <ul className="space-y-2">
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
     
    </footer>
  );
}
export default Footer;
