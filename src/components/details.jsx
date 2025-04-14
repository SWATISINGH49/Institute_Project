import React from 'react';

function Details() {
  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-red-500 text-xl font-bold">LIVE</div>
          <h3 className="text-lg font-semibold">Daily Live</h3>
          <p>Interactive classes</p>
        </div>
        <div>
          <div className="text-blue-500 text-xl font-bold">5 Lakhs +</div>
          <h3 className="text-lg font-semibold">Tests, sample papers & notes</h3>
        </div>
        <div>
          <div className="text-purple-500 text-xl font-bold">24 x 7</div>
          <h3 className="text-lg font-semibold">Doubt solving sessions</h3>
        </div>
        <div>
          <div className="text-yellow-500 text-xl font-bold">20 +</div>
          <h3 className="text-lg font-semibold">Offline centres</h3>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Exam Categories</h2>
        <p className="text-gray-600">Wits Education Creates History, Produces AIR 1 in NIMCET
        Wits Education has made history by securing AIR 1 in the All India NIMCET Entrance Exam within just three years of its inception. Under the expert guidance of Director Ravi Kant and Shashank Saurabh, the institute has achieved extraordinary results in this highly competitive examination.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-red-50 p-4 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">NIMCET</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full border">BCA </span>
            <span className="px-3 py-1 bg-white rounded-full border">B.Sc (Computer Science)</span>
            <span className="px-3 py-1 bg-white rounded-full border">B.Sc (Mathematics) </span>
            <span className="px-3 py-1 bg-white rounded-full border">BE/B.Tech (CSE/IT)</span>
            <span className="px-3 py-1 bg-white rounded-full border">Dropper</span>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">IIT JEE/NDA</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full border">class 11</span>
            <span className="px-3 py-1 bg-white rounded-full border">class 12</span>
            <span className="px-3 py-1 bg-white rounded-full border">Dropper</span>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">CUET / CUET PG </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full border">Class 12 Passed/Appearing</span>
            <span className="px-3 py-1 bg-white rounded-full border">UG Graduates </span>
            <span className="px-3 py-1 bg-white rounded-full border">Diploma Holders </span>
            <span className="px-3 py-1 bg-white rounded-full border">Graduates </span>
            <span className="px-3 py-1 bg-white rounded-full border">Final Year UG Students</span>
            {/* <span className="px-3 py-1 bg-white rounded-full border">MA, MSc, MCom, MCA, MBA, LLM, and other postgraduate courses</span> */}
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">UGC NET</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full border">Postgraduates</span>
            <span className="px-3 py-1 bg-white rounded-full border">Final Year PG Students</span>
            <span className="px-3 py-1 bg-white rounded-full border">JRF Aspirants</span>
            <span className="px-3 py-1 bg-white rounded-full border">Assistant Professor Seekers</span>
            
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-2">GATE </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full border">B.E./B.Tech (Final Year/Completed)</span>
            <span className="px-3 py-1 bg-white rounded-full border">B.Arch/B.Sc (Research/4-year)</span>
            <span className="px-3 py-1 bg-white rounded-full border">M.Sc/MA (Maths/Physics/Stats)</span>
            <span className="px-3 py-1 bg-white rounded-full border">Integrated MS/MTech</span>
            <span className="px-3 py-1 bg-white rounded-full border">Working Professionals</span>
            <span className="px-3 py-1 bg-white rounded-full border">Dropper</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
