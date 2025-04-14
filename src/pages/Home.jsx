import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const courses = [
  { name: "C", subtitle: "Basic Programming", image: "images/clang.jpg" },
  { name: "C++", subtitle: "Object-Oriented Programming", image: "images/c++.jpg" },
  { name: "Java", subtitle: "Enterprise Applications", image: "images/java.jpg" },
  { name: "Python", subtitle: "AI & Data Science", image: "images/py.jpg" },
  { name: "JavaScript", subtitle: "Web Development", image: "images/js.jpg" },
  { name: "Web Development", subtitle: "Full Stack", image: "images/webd.jpg" },
  { name: "NIMCET/CUET", subtitle: "Entrance Exam Prep", image: "https://via.placeholder.com/150" },
  { name: "DCA/ADCA", subtitle: "Diploma in Computer Applications", image: "https://via.placeholder.com/150" }
];

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const autoSlideRef = useRef(null);

  const itemsPerView = 4;

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setStartIndex(prev => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  const handleNext = () => {
    clearInterval(autoSlideRef.current);
    setStartIndex(prev => (prev + 1) % courses.length);
    autoSlideRef.current = setInterval(() => {
      setStartIndex(prev => (prev + 1) % courses.length);
    }, 3000);
  };

  const handlePrevious = () => {
    clearInterval(autoSlideRef.current);
    setStartIndex(prev => (prev - 1 + courses.length) % courses.length);
    autoSlideRef.current = setInterval(() => {
      setStartIndex(prev => (prev + 1) % courses.length);
    }, 3000);
  };

  const getVisibleCourses = () => {
    let visibleCourses = [];
    for (let i = 0; i < itemsPerView; i++) {
      visibleCourses.push(courses[(startIndex + i) % courses.length]);
    }
    return visibleCourses;
  };

  return (
    <div className="text-center mt-10 p-4 bg-gradient-to-r from-blue-100 to-indigo-60 min-h-screen flex flex-col items-center justify-center text-blue-900">
      <h2 className="text-3xl font-bold mb-4">Explore Our Courses</h2>
      <p className="text-lg max-w-md mb-8">Enhance your skills with our professional courses and stay ahead in your career.</p>
      
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        <button
          onClick={handlePrevious}
          className="absolute left-[-50px] bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <div className="flex gap-6 mx-8 overflow-hidden">
          {getVisibleCourses().map((course, index) => (
            <div 
              key={`${course.name}-${index}`} 
              className="w-60 h-64 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-gray-800 transition-transform duration-300 hover:scale-105"
            >
              <img 
                className="w-24 h-24 object-cover rounded-md mb-4" 
                src={course.image} 
                alt={course.name} 
              />
              <h3 className="font-bold text-lg mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm text-center">{course.subtitle}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-50px] bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Home;
