"use client";
import React from "react";

import gfg from "@/public/Images/gfglogo.png";
import ck from "@/public/Images/ck.jpeg";
import vp from "@/public/Images/VARTAA.png";
import { Heading } from "./ui/Heading";

export const Experiences = () => {
    const exp = [
  {
    id: 1,
    name: "GeeksForGeeks SRM RMP",
    position: "Core Member - Head of Operations",
    logo: gfg,
    sd: "Aug 2024",
    ed: "Apr 2025",
  },
  {
    id: 2,
    name: "Vartalaap Podcast",
    position: "Host & Co-Founder",
    logo: vp,
    sd: "Dec 2023",
    ed: "Mar 2024",
  },
  {
    id: 3,
    name: "Code Kraftors",
    position: "Web3 Domain Member",
    logo: ck,
    sd: "Nov 2022",
    ed: "Jul 2024",
  },
];
  return (
    <div className="px-2 mt-10">
        <Heading>Experiences</Heading>

        <div><section className="max-w-2xl w-full px-4 sm:px-8 mt-3 space-y-4">
      {exp.map((experience) => (
        <div key={experience.id} className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          {/* Logo */}
          <div className="w-10 h-10 shrink-0">
            <img
              src={experience.logo.src}
              alt={experience.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Company Info */}
          <div className="flex-1 min-w-[120px]">
            <p className="text-white text-sm font-medium truncate">{experience.name}</p>
            <p className="text-white/70 text-xs truncate ">{experience.position}</p>
          </div>

          {/* Date Range */}
          <div className="text-neutral-400 text-xs shrink-0 whitespace-nowrap">
            {experience.sd} <span className="mx-1">-</span> {experience.ed}
          </div>
        </div>
      ))}
    </section></div>
    </div>
  )
}