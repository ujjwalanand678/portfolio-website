import React from "react";

// ✅ Local icon imports
import bootstrap from "../assets/bootstrap.svg";
import tailwindcss from "../assets/tailwindcss.svg";

import nextjs from "../assets/nextjs.svg";
import docker from "../assets/docker.svg";
import github from "../assets/github.svg";
import html5 from "../assets/html-5.svg";
import js from "../assets/js.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";

const technologies = [
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },

  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "HTML5",
    icon: html5,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "AWS",
  //   icon: aws, // Add if you have aws.svg locally
  // },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-black text-gray-200 py-20 px-6 z-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="inline-block mb-4 px-6 py-3 rounded-full text-2xl font-bold border border-blue-500 uppercase tracking-widest">
          Technologies I Work With
        </h2>
        <p className="text-gray-200 text-xl mb-12">Modern tools for modern solutions</p>
        <div className="flex justify-center gap-10">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-gray-300 rounded-xl flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <span className="mt-2 text-sm font-bold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
