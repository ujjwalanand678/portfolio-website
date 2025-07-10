import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Hero content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Helping Entrepreneurs <br /> Dreams Come To Life
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Start your project. Bring your vision to reality.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Start Your Project →
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
            View Portfolio →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
