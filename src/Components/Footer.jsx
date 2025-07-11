import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-200  py-20 z-10">
      <div className=" mx-10 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {/* Start a Project */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Start a Project</h3>
          <p className="mb-6 text-gray-200">Let's create your next big idea.</p>
          <button
            href="#contact"
            className="inline-flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-300 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Get in Touch <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>SaaS Development</li>
            <li>AI Integration</li>
            
          </ul>
        </div>

        {/* Tools */}
        {/* <div>
          <h3 className="text-xl font-bold mb-4">Tools</h3>
          <ul className="space-y-2">
            <li>Website Analyzer</li>
            <li>ROI Calculator</li>
            <li>Project Timeline</li>
            <li>AI Crawler Optimization</li>
          </ul>
        </div> */}

        {/* Connect */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <FaCalendarAlt /> Schedule a Call
            </li>
            {/* <li className="flex items-center gap-2">
              <FaTrophy /> Awwwards
            </li> */}
          </ul>
        </div>
      </div>

      <hr className="my-12 border-gray-700" />

      <p className="text-center text-gray-100 text-xl ">
        © 2025 Ujjwal Anand. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
