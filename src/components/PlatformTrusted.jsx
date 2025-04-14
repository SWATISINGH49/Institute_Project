import React from 'react';

function PlatformTrusted() {
  return (
    <div className="bg-gray-50 py-10 text-center">
      <h2 className="text-3xl font-bold mb-2">A Platform Trusted by Students</h2>
      <p className="text-gray-600 mb-10">
      Wits Education isn't just about promises — it's about performance. We turn ambition into achievement, with numbers that prove it!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        <div className="bg-orange-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">1Million+</h3>
          <p className="text-gray-700">Happy Students</p>
        </div>
        <div className="bg-red-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">2400+</h3>
          <p className="text-gray-700">Mock Tests</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">30+</h3>
          <p className="text-gray-700">Video Lectures</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">5000+</h3>
          <p className="text-gray-700">Practice Papers</p>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PlatformTrusted;
