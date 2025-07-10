import React from "react";
import myPic from "../assets/my-pic-3.JPG";

const Hero = () => {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8 px-8 py-16">
      {/* Left Content */}
      <div className="text-white relative left-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to my <br />
          <span className="inline-block mt-2 ">
            Portfolio!
          </span>
        </h1>

        <p className="mt-6 text-lg text-white">
        Passionate and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern frontend frameworks like React.js. Adept at building responsive and user-centric interfaces. Seeking to leverage my skills in a dynamic development team to deliver high-quality digital experiences.
        </p>

        {/* <div className="mt-4">
          <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
            MERN
          </span>
        </div>

        <p className="mt-4 text-gray-300">
          My expertise includes Next.js 14 ✨ & React.js for high-scale
          application development.
        </p> */}

        <div className="mt-8 flex flex-wrap gap-4">
          <button className=" bg-white text-black px-6 py-3 rounded-full">
            Hire me
          </button>
          <button className=" bg-white text-black px-6 py-3 rounded-full">
            My Resume ↓
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center items-center">
        {/* Decorative Blob */}
        <div className="absolute -top-8 -right-8 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-2xl opacity-70"></div>

        {/* Profile Image */}
        <img
          src={myPic}
          alt="My Pic"
          className="relative rounded-3xl z-10 w-full max-w-sm object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
