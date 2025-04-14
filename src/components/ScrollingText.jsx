import React from "react";

const ScrollingText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-blue-100 py-2 mt-1">
      <div className="flex space-x-1 animate-marquee">
        <span className="text-black text-sm font-bold">
          📚 Best Education in Bihar, Muzaffarpur - Enroll Now!
        </span>
        <span className="text-black text-sm font-bold">
          🎓 NIMCET No.1 Institute in Bihar – First Time Rank #1!
        </span>
        <span className="text-black text-sm font-bold">
          Join Our Powerful & Professional Training Programs!
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;
