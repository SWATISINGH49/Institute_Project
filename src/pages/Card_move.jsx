import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  { title: 'Java', description: 'Master Java for backend dev.', icon: '☕' },
  { title: 'Python', description: 'Learn Python for automation.', icon: '🐍' },
  { title: 'JavaScript', description: 'JS for web dev.', icon: '🟨' },
  { title: 'React', description: 'UI with React.', icon: '⚛️' },
  { title: 'Node.js', description: 'Backend with Node.', icon: '🌿' },
  { title: 'MongoDB', description: 'NoSQL databases.', icon: '🍃' },
  { title: 'SQL', description: 'Relational databases.', icon: '🗄️' },
  { title: 'Git & GitHub', description: 'Version control.', icon: '🐙' },
  { title: 'C++', description: 'System programming.', icon: '💻' },
  { title: 'Swift', description: 'iOS development.', icon: '🍏' },
  { title: 'Flutter', description: 'Native apps.', icon: '🌺' },
  { title: 'Ruby', description: 'Web dev with Ruby.', icon: '🔴' },
  { title: 'Kotlin', description: 'Android dev.', icon: '🟩' },
  { title: 'PHP', description: 'Dynamic websites.', icon: '🖥️' },
  { title: 'Vue.js', description: 'Modern frontend.', icon: '🔮' },
  { title: 'Angular', description: 'Scalable apps.', icon: '📐' },

  // New Courses
  { title: 'Maths 11th', description: 'CBSE & State syllabus focused.', icon: '🧮' },
  { title: 'Maths 12th', description: 'Prepare for board & entrance.', icon: '📘' },
  { title: 'NIMCET', description: 'MCA Entrance Exam coaching.', icon: '🎓' },
  { title: 'CUET', description: 'UG Entrance preparation.', icon: '📝' },
  { title: 'NDA', description: 'Crack National Defence Academy exam.', icon: '🪖' },
  { title: 'ADCA', description: 'Advanced Diploma in Computer Apps.', icon: '💿' },
  { title: 'DCA', description: 'Diploma in Computer Applications.', icon: '🖱️' },
  { title: 'Spoken English', description: 'Improve fluency and grammar.', icon: '🗣️' },
  
];

function CourseCard({ title, description, icon }) {
  return (
    <motion.div
      className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-gray-900 border hover:border-indigo-300 hover:shadow-md transition-all duration-200"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-md font-semibold text-center">{title}</h3>
      <p className="text-xs text-center text-blue-700">{description}</p>
    </motion.div>
  );
}

function Card_move() {
  return (
    <div className="bg-blue-100 min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🎯 Skill Enhancement Plan</h1>
        <p className="text-gray-700 text-sm max-w-xl mx-auto">
          Explore top academic and career-focused courses at Wits Education. Whether you're a student or a job-seeker, we help you grow smart, practical, and job-ready!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Card_move;
