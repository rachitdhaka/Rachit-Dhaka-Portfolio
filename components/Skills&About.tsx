"use client";
import React, { memo, useMemo } from "react";
import { Heading } from "./ui/Heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Move static data outside component - prevents recreation on re-renders
const skills = [
  "react",
  "nextjs",
  "express",
  "nodejs",
  "mongodb",
  "javascript",
  "typescript",
  "tailwind",
  "redux",
  "cpp",
  "python",
  "vercel",
  "postman",
  "bash",
  "mysql",
  "mongodb",
] as const;

// Memoized individual skill item
const SkillItem = memo(({ skill, index }: { skill: string; index: number }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <img
          src={`https://skillicons.dev/icons?i=${skill}`}
          alt={skill}
          className="w-8 h-8 md:w-10 md:h-10"
          loading="lazy"
          decoding="async"
          width={40}
          height={40}
        />
      </TooltipTrigger>
      <TooltipContent side={index >= 8 ? "bottom" : "top"}>
        <p>{skill}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
));
SkillItem.displayName = "SkillItem";

export const SkillsAbout = memo(() => {
  // Memoize skill items to prevent unnecessary re-renders
  const skillItems = useMemo(
    () =>
      skills.map((skill, index) => (
        <SkillItem key={`${skill}-${index}`} skill={skill} index={index} />
      )),
    []
  );

  return (
    <div className="px-2">
      <Heading>Skills</Heading>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 px-4 md:px-8">
          {skillItems}
        </div>
      </div>
    </div>
  );
});
SkillsAbout.displayName = "SkillsAbout";
