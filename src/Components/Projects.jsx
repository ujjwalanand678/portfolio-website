import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import collegeWebsit from "../assets/projects/college-website-react.PNG";
import techShop from "../assets/projects/html-css-tech-shop.PNG";
import ecommerce from "../assets/projects/frontend-ecommerce.PNG";
import mealFinder from "../assets/projects/react-meal-finder.PNG";

const projects = [
  {
    title: "Edusity",
    description: "A collage website.",
    image: collegeWebsit,
    techStack: "React JS , HTML, CSS",
    website: "https://front-end-react-js-educity-college.vercel.app/",
  },
  {
    title: "Tech-Shop",
    description:
      "A modern html & css website design sample for online tech shop website.",
    image: techShop,
    techStack: "HTML, CSS",
    website: "https://ujjwalanand678.github.io/Tech-shop-html-css-project/",
  },
  {
    title: "ECommerce",
    description:
      "ECommerce application where users can browse products, add them to a cart.",
    image: ecommerce,
    techStack: "React JS , HTML, CSS",
    website:
      "https://ujjwalanand678.github.io/FrontEnd-react-js-E-commerce-project-2/",
  },
  {
    title: "Meal Finder",
    description:
      "Meal Finder is a simple yet powerful recipe search app built with React. Users can search for meals by name, browse random recipes, and view detailed instructions and ingredients.",
    image: mealFinder,
    techStack: "React JS , HTML, CSS",
    website: "https://react-js-meal-recipe-finder-project.vercel.app/",
  },
  // Add more projects here...
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section id="projects" className="bg-black text-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="inline-block mb-4 px-6 py-3 rounded-full text-2xl font-bold border border-blue-500 uppercase tracking-widest">
          Featured Projects
        </h2>

        <p className="text-gray-200 max-w-2xl text-xl mx-auto">
          Explore{" "}
          <span className="font-semibold text-gray-100">real results</span> of
          my recent projects. Each solution delivered{" "}
          <span className="font-semibold text-gray-100">
            measurable business impact
          </span>{" "}
          for our clients.
        </p>
      </div>

      {/* Project Card */}
      <div className="relative w-[90%] mx-auto flex flex-col md:flex-row bg-[#111] rounded-2xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <div className="md:w-[70%] p-8 flex justify-center items-center px-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <div className="justify-self-start">
            <p className="inline-flex items-center gap-2 px-5 py-3 text-lg font-bold ">
              Tech-stack : {project.techStack}
            </p>
            <br />
            <br />
            <a
              href={project.website}
              target="_blank"
              className="inline-flex items-center gap-2 border bg-gray-100 text-black border-gray-600 px-5 py-3 rounded-full font-medium hover:bg-gray-300 hover:text-black transition"
            >
              Visit Website
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#222] p-2 rounded-full hover:bg-[#333]"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#222] p-2 rounded-full hover:bg-[#333]"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* View All Button */}
      {/* <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition"
        >
          View All Projects
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div> */}
    </section>
  );
};

export default Projects;
