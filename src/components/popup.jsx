import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-cyan-500 text-white rounded-xl p-8 w-full max-w-md text-center shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-lg font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-yellow-300">Placement</h2>
        <p className="text-xl mt-2">Assistance Program</p>
        <p className="text-2xl font-semibold mt-2">on <span className="text-white">JAVA Full Stack</span></p>

        {/* Yellow Banner */}
        <div className="bg-yellow-300 text-black font-semibold mt-6 p-3 rounded-md shadow-md inline-block">
          New Batch from <br />
          14ᵗʰ April @ 11:00 AM
        </div>

        {/* Register Button */}
        <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Popup;
