import React from "react";

const Hero = () => {
  const NUM_STARS = 500; // More stars = denser

  const stars = Array.from({ length: NUM_STARS }).map((_, i) => {
    const x = Math.random() * 100; // % left
    const y = Math.random() * 100; // % top
    const size = Math.random() * 2 + 1; // 1-3px
    const delay = Math.random() * 3; // random delay
    const duration = Math.random() * 2 + 1; // 1-3s

    return (
      <div
        key={i}
        className="absolute bg-white rounded-full twinkle"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
      ></div>
    );
  });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Stars */}
      {stars}

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Build great products</h1>
      </div>
    </div>
  );
};

export default Hero;
