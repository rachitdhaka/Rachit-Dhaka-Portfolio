import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const V0Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="">
      <section className="text-white max-w-2xl mx-auto px-14 flex justify-between items-center pt-5 md:h-12 relative">
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
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <NavLink
              to="/projects"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              Projects
            </NavLink>
          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <a
              href="https://github.com/rachitdhaka"
              target="_blank"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              Github
            </a>
          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <a
              href="https://leetcode.com/u/rachitdhaka/"
              target="_blank"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              Leetcode
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
