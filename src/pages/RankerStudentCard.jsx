import React from "react";
import { motion } from "framer-motion";

// Student Data
const students = [
  { id: 1, name: "Aniket Mani", rank: "1st", image: "images/air1.jpeg" },
  { id: 2, name: "Emma Watson", rank: "2nd", image: "images/1.jpeg" },
  { id: 3, name: "Michael Brown", rank: "3rd", image: "images/r.jpeg" },
  { id: 4, name: "Sophia Lee", rank: "4th", image: "images/s.jpeg" },
  { id: 5, name: "Daniel Smith", rank: "5th", image: "images/a.jpeg" },
  { id: 6, name: "Olivia Martin", rank: "6th", image: "images/air1.jpeg" },
  { id: 7, name: "William Johnson", rank: "7th", image: "images/r.jpeg" },
  { id: 8, name: "Ava Davis", rank: "8th", image: "images/s.jpeg" },
  { id: 9, name: "James Wilson", rank: "9th", image: "images/r.jpeg" },
  { id: 10, name: "Isabella Lopez", rank: "10th", image: "images/a.jpeg" },
];

function RankerStudentCard() {
  return (
    <div className="overflow-hidden relative bg-gradient-to-r from-gray-200 via-yellow-100 to-yellow-200 text-center flex flex-col items-center justify-center">
      {/* Title Section */}
      <h1 className="text-xl font-extrabold text-blue-900 mb-4 tracking-wide transition-transform duration-300 transform hover:scale-110">
        🏆 NIMCET 2024 TOPPER
      </h1>
     

      {/* Auto Sliding Container */}
      <div className="w-full flex justify-center overflow-hidden">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
          }}
          whileHover={{ x: 0 }} // Stops animation on hover
        >
          {students.concat(students).map((student, index) => (
            <motion.div
              key={index}
              className="w-36 h-36 bg-blue-600 rounded-lg shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
            >
              {/* Square Image */}
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover transform transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default RankerStudentCard;
