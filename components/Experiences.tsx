"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import gfg from "@/public/Images/gfglogo.png";
import ck from "@/public/Images/ck.jpeg";
import vp from "@/public/Images/VARTAA.png";
import { Heading } from "./ui/Heading";

// Move static data outside component
const experienceData = [
  {
    id: 1,
    name: "GeeksForGeeks SRM RMP",
    position: "Core Member - Head of Operations",
    link: "https://gfgsrmrmp.vercel.app/",
    logo: gfg,
    sd: "Aug 2024",
    ed: "Apr 2025",
  },
  {
    id: 2,
    name: "Vartalaap Podcast",
    position: "Host & Co-Founder",
    link: "https://www.youtube.com/@Vartalaap-Podcast",
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
] as const;

// Memoized ExperienceItem component
const ExperienceItem = memo(
  ({ experience }: { experience: (typeof experienceData)[number] }) => (
    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
      {/* Logo */}
      <div className="w-10 h-10 shrink-0">
        <Image
          src={experience.logo}
          alt={experience.name}
          className="w-full h-full object-cover rounded-full"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>

      {/* Company Info */}
      <div className="flex-1 min-w-[120px]">
        {"link" in experience ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-sm font-medium truncate hover:underline cursor-pointer block"
          >
            {experience.name}
          </a>
        ) : (
          <p className="text-black dark:text-white text-sm font-medium truncate">
            {experience.name}
          </p>
        )}
        <p className="dark:text-white/70 text-neutral-900 text-xs truncate">
          {experience.position}
        </p>
      </div>

      {/* Date Range */}
      <div className="text-neutral-400 text-xs shrink-0 whitespace-nowrap">
        {experience.sd} <span className="mx-1">-</span> {experience.ed}
      </div>
    </div>
  )
);
ExperienceItem.displayName = "ExperienceItem";

export const Experiences = memo(() => {
  // Memoize the experience items
  const experienceItems = useMemo(
    () =>
      experienceData.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      )),
    []
  );

  return (
    <div className="px-2 mt-10">
      <Heading>Experiences</Heading>

      <div>
        <section className="max-w-2xl w-full px-2 sm:px-4 md:px-8 mt-3 space-y-4">
          {experienceItems}
        </section>
      </div>
    </div>
  );
});
Experiences.displayName = "Experiences";
