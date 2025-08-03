import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Github,
  Code,
  Briefcase,
  
} from "lucide-react";

const V0Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="">
      <section className="text-white max-w-2xl  mx-auto px-14 flex justify-between items-center pt-15 md:h-12 relative">
        {/* Left Side: Logo */}
        <div>
          <NavLink
            to="/"
            className="text-[12px] sm:text-[14px] font-medium font-saans"
          >
            rd
          </NavLink>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded relative group">
            <NavLink
              to="/projects"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              <div className="py-1">
                <Briefcase
                  size={20}
                  color="#ffffff"
                  strokeWidth={1.5}
                  className="hover:text-gray-300 "
                />
              </div>
            </NavLink>
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2  text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Projects
            </div>



          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded relative group">
            <a
              href="https://github.com/rachitdhaka"
              target="_blank"
              className="text-[12px] sm:text-[14px] font-medium font-saans "
            >
              <div className="py-1">
                <Github
                  size={20}
                  color="#ffffff"
                  strokeWidth={1.5}
                  className="hover:text-gray-300 "
                />
              </div>
            </a>
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2  text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              GitHub
            </div>
          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded relative group">
            <a
              href="https://leetcode.com/u/rachitdhaka/"
              target="_blank"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              <div className="py-1">
                <Code
                  size={20}
                  color="#ffffff"
                  strokeWidth={1.5}
                  className="hover:text-gray-300 "
                />
              </div>
            </a>
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2  text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              LeetCode
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Mobile Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-6 text-[16px] font-medium">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </NavLink>
          <a
            href="https://github.com/rachitdhaka"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            Github
          </a>
          <a
            href="https://leetcode.com/u/rachitdhaka/"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            Leetcode
          </a>
        </div>
      )}
    </section>
  );
};

export default V0Navbar;
