"use client";
import React from "react";
import { Heading } from "./ui/Heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const SkillsAbout = () => {
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
  ];
return (
    <div className="px-2">
        <Heading>Skills</Heading>
        <div className="flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 px-8">
                {skills.map((skill, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <img
                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                    alt={skill}
                                    className="w-10 h-10"
                                    loading="lazy"
                                />
                            </TooltipTrigger>
                            <TooltipContent side={index >= 8 ? "bottom" : "top"}>
                                <p>{skill}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    </div>
  );
};


