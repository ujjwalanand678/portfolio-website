import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    title: "Binns Media Group",
    description:
      "A cutting-edge digital media platform showcasing diverse content portfolio.",
    image:
      "https://images.unsplash.com/photo-1607083206173-132d86b98e65?auto=format&fit=crop&w=800&q=80",
    caseStudy: "#",
    website: "#",
  },
  {
    title: "Startup Launchpad",
    description:
      "A modern startup landing page to convert visitors into paying customers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    caseStudy: "#",
    website: "#",
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
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500 text-xs uppercase tracking-widest">
          Featured Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interactive Portfolio
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore <span className="font-semibold text-white">real results</span> from our recent projects.
          Each solution delivered <span className="font-semibold text-white">measurable business impact</span> for our clients.
        </p>
      </div>

      {/* Project Card */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row bg-[#111] rounded-2xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <div className="md:w-1/2 p-8 flex justify-center items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.caseStudy}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full font-medium transition"
            >
              View Case Study
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href={project.website}
              className="inline-flex items-center gap-2 border border-gray-600 px-5 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
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
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition"
        >
          View All Projects
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
