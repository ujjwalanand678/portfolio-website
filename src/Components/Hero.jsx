import React from "react";
import myPic from "../assets/my-pic-3.JPG";
import resume from "../assets/resume/UJJWAL ANAND-FrontEnd-React.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8 px-8 py-16 z-20"
    >
      {/* Left Content */}
      <div className="text-gray-200 relative left-20">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Welcome to my <br />
          <span className="inline-block mt-2 ">Portfolio!</span>
        </h1>

        <p className="mt-6 text-xl text-gray-200">
          I’m a passionate Full Stack Developer specializing in the MERN stack
          (MongoDB, Express.js, React.js, Node.js). I love building dynamic,
          scalable web applications that solve real-world problems and deliver
          exceptional user experiences.
          <br />
          <br />
          With a strong foundation in front-end and back-end development, I
          design robust APIs, craft responsive user interfaces, and ensure
          smooth deployment of modern web solutions.
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

        <div className="mt-8 flex flex-wrap gap-4 z-30">
          <button className="bg-gray-200 text-xl cursor-pointer text-black px-6 py-3 rounded-full hover:bg-blue-500 hover:text-gray-100 transition">
            Hire me
          </button>
          <a
            href={resume}
            download
            target="_blank"
            className="bg-gray-200 text-xl cursor-pointer text-black px-6 py-3 rounded-full hover:bg-blue-500 hover:text-gray-100 transition inline-block text-center"
          >
            My Resume ↓
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center items-center">
        {/* Profile Image */}
        <img
          src={myPic}
          alt="My Pic"
          className="relative z-10 w-[90%] max-w-md object-cover  mask-y-from-80%   mask-x-from-95%"
        />
      </div>
    </section>
  );
};

export default Hero;
