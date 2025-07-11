// src/Components/StarsBackground.jsx
import React from "react";
import "./StarsBackground.css"; // Or put animation here if you like

const StarsBackground = () => {
  const NUM_STARS = 500;

  const stars = Array.from({ length: NUM_STARS }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 1;

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
    <div className="fixed inset-0  overflow-hidden">
      {stars}
    </div>
  );
};

export default StarsBackground;
