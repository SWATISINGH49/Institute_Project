import { useEffect, useRef } from "react";

const SlidingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    let animation;

    if (text) {
      animation = text.animate(
        [
          { transform: "translateX(-100%)" },
          { transform: "translateX(100%)" },
        ],
        {
          duration: 5000, // Adjust speed
          iterations: Infinity,
          easing: "linear",
        }
      );
    }

    return () => animation?.cancel();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 p-4">
      <div
        ref={textRef}
        className="absolute whitespace-nowrap text-xl text-white font-bold hover:[animation-play-state:paused]"
      >
         Animated Text Sliding Left to Right 
      </div>
    </div>
  );
};

export default SlidingText;
