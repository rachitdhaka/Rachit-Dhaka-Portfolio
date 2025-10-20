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
              target="_blank"
              className="relative group flex items-center justify-center w-8 h-8 hover:bg-neutral-700 rounded transition-all duration-200"
            >
              <Briefcase size={20} color="#fff" strokeWidth={1.5} />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Projects
              </div>
            </NavLink>
          </div>

          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded relative group">
            <a
              href="https://github.com/rachitdhaka"
              
              className="relative group flex items-center justify-center w-8 h-8 hover:bg-neutral-700 rounded transition-all duration-200"
            >
              <Github size={20} color="#fff" strokeWidth={1.5} />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                GitHub
              </div>
            </a>
          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded relative group">
            <a
              href="https://github.com/rachitdhaka"
              target="_blank"
              className="relative group flex items-center justify-center w-8 h-8 hover:bg-neutral-700 rounded transition-all duration-200"
            >
              <Code size={20} color="#fff" strokeWidth={1.5} />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Leetcode
              </div>
            </a>
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
