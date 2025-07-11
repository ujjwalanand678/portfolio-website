import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="#home" className="text-3xl font-bold text-gray-200 tracking-wide">
          Ujjwal Anand
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 text-gray-200 rounded-md md:hidden hover:bg-white/10 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col text-2xl md:flex-row md:space-x-8 mt-4 md:mt-0 text-gray-200 font-medium bg-white/5 md:bg-transparent rounded-lg p-4 md:p-0">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="block py-2 px-3 hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
