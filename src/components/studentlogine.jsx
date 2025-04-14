import React from 'react';

function StudentLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-tr from-purple-300 to-indigo-400 p-10 text-white">
          <div className="text-3xl font-bold mb-4">Welcome to Wits Education!</div>
          <p className="mb-6 text-lg">India's most trusted education platform</p>

          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <span className="font-semibold">100+ </span>Offline Centres
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              📚 <span className="font-semibold">15 Million+ </span>Happy Students
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              🎥 Daily live interactive classes
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              🕒 24x7 Doubt Solving
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-6">Login / Register</h2>
          <label className="block mb-2 text-gray-700">Please enter your mobile number</label>
          <div className="flex items-center border border-gray-300 rounded-md mb-4">
            <select className="bg-transparent px-2 py-2 text-gray-600 outline-none">
              <option value="+91">IN +91</option>
            </select>
            <input
              type="text"
              placeholder="E.g 9877654335"
              className="flex-1 px-4 py-2 outline-none"
            />
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600">
            Request OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
