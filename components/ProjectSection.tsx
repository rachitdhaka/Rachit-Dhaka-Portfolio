"use client";
import React from "react";
import { Heading } from "./ui/Heading";
import Image from "next/image";
import { Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link'
// import technologies icons
import JavaScript from "@/Technologie/JavaScript";
import TailwindCss from "@/Technologie/TailwindCss";
import { ReactIcon } from "@/Technologie/React";
import Motion from "@/Technologie/Motion";
import Express from "@/Technologie/ExpressJs";
import MongoDB from "@/Technologie/MongoDB";
import Shadcn from "@/Technologie/Shadcn";
import { Solidity } from "@/Technologie/Solidity";
import TypeScript from "@/Technologie/TypeScript";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// importing all the images
import ethlink from "@/public/ProjectImages/Ethlink.png";
import orbitus from "@/public/ProjectImages/Orbitus.png";
import ReactRef from "@/public/ProjectImages/ReactRef.png";
import Todo from "@/public/ProjectImages/Todo.png";
import PickPawz from "@/public/ProjectImages/PickPawz.png";
const ProjectArray = [
  {
    id: 1,
    name: "Pick Pawz",
    detail: "Pet Adoption Platform - Connecting loving pets with caring homes",
    thumbanail: PickPawz,
    url: "https://pick-pawz.vercel.app/",
    techStack: [
      "TypeScript",
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "Motion",
      "Shadcn",
    ],
    githubUrl: "https://github.com/rachitdhaka/PickPawz",
  },
  {
    id: 2,
    name: "Todo Application",
    detail: "Todo Application using MERN",
    thumbanail: Todo,
    url: "https://todo-application-rachit.vercel.app/",
    techStack: [
      "JavaScript",
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "Motion",
      "Shadcn",
    ],
    githubUrl: "https://github.com/rachitdhaka/Todo-Application",
  },
  {
    id: 3,
    name: "React Ref Website",
    detail: "",
    thumbanail: ReactRef,
    url: "https://reactref.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind"],
    githubUrl: "https://github.com/rachitdhaka/React-Ref",
  },
  {
    id: 4,
    name: "Orbit Us",
    detail:
      "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer",
    thumbanail: orbitus,
    url: "https://orbitus.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind", "Solidity"],
    githubUrl: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  },
  {
    id: 5,
    name: "Eth Link",
    detail:
      "Decentralised Job Seacrhing Portal - ETHLink leverages Web3 to offer a secure, trust-based job search platform with verified companies and candidates.",
    thumbanail: ethlink,
    url: "https://eth-link-vcpn.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/EthLink",
  },
];

export const ProjectSection = () => {
  return (
    <div className="px-2 py-4 mt-10 ">
      <Heading>Projects</Heading>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 w-full">
          {ProjectArray.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center items-center w-full md:w-fit mt-5">
          <Button variant={"secondary"} className="w-full md:w-auto">
            Show All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: (typeof ProjectArray)[0] }) => {
  return (
    <div className=" h-full w-full overflow-hidden   border border-gray-200 dark:border-none dark:bg-neutral-900  shadow-none rounded-t-xl rounded-b-xl hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300">
      <Link href={project.url} target="_blank">
        <div className=" aspect-video rounded-t-xl overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={project.thumbanail}
            alt={`${project.name} Project Image`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>

      <div className="">
        <div className="px-3 md:px-4 py-2  dark:border-none ">
          <div className="flex mb-2  justify-between items-start">
            <h3 className="text-lg md:text-xl py-1 font-bold">
              {project.name}
            </h3>

            <TooltipProvider>
              <div className="flex items-center gap-2 shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={project.url} target="_blank">
                      <Globe
                        className="w-5 h-5 md:w-5 md:h-5"
                        strokeWidth={1}
                        size={20}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Website</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github
                        className="w-5 h-5 md:w-5 md:h-5"
                        strokeWidth={1}
                        size={20}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          <p className="mt-1 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            {project.detail}
          </p>
        </div>

        <div className="px-3 md:px-4 mb-5 flex flex-col gap-2">
          <p className="text-neutral-400 text-xs md:text-sm">Technologies : </p>
          <div className="flex gap-2 flex-wrap">
            {project.techStack.map((tech) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                React: <ReactIcon />,
                Tailwind: <TailwindCss />,
                JavaScript: <JavaScript />,
                Node: <Express />,
                Express: <Express />,
                MongoDB: <MongoDB />,
                Motion: <Motion />,
                Shadcn: <Shadcn />,
                Solidity: <Solidity />,
                TypeScript: <TypeScript />,
              };
              return (
                <div key={tech} className="size-5 md:size-6">
                  {iconMap[tech] || null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
