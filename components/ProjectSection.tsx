"use client";
import React from "react";
import { Heading } from "./ui/Heading";
import Image from "next/image";
import PickPawz from "@/public/Images/PickPawz.png";
import { Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
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
// importing all the images
import ethlink from "@/public/Images/Ethlink.png";
import orbitus from "@/public/Images/Orbitus.png";
import ReactRef from "@/public/Images/ReactRef.png";
import Todo from "@/public/Images/Todo.png";
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
    name: "React Ref Website",
    detail: "",
    thumbanail: ReactRef,
    url: "https://reactref.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind"],
    githubUrl: "https://github.com/rachitdhaka/React-Ref",
  },

  {
    id: 3,
    name: "Orbit Us",
    detail:
      "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer",
    thumbanail: orbitus,
    url: "https://orbitus.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind", "Solidity"],
    githubUrl: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  },
  {
    id: 4,
    name: "Eth Link",
    detail:
      "Decentralised Job Seacrhing Portal - ETHLink leverages Web3 to offer a secure, trust-based job search platform with verified companies and candidates.",
    thumbanail: ethlink,
    url: "https://eth-link-vcpn.vercel.app/",
    techStack: ["JavaScript", "React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/EthLink",
  },
  {
    id: 5,
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
];

export const ProjectSection = () => {
  return (
    <div className="px-2 py-4 mt-10 ">
      <Heading>Projects</Heading>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-4 mx-2">
          {ProjectArray.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center items-center w-fit mt-5">
          <Button variant={"secondary"}>Show All Projects</Button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: (typeof ProjectArray)[0] }) => {
  return (
    <div className=" h-full w-full overflow-hidden   border border-gray-200 dark:border-none dark:bg-neutral-900  shadow-none rounded-t-xl rounded-b-xl ">
      <a href={project.url} target="_blank">
        <div className=" aspect-video rounded-t-xl overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={project.thumbanail}
            alt={`${project.name} Project Image`}
            width={1920}
            height={1080}
          />
        </div>
      </a>

      <div className="">
        <div className="px-4 py-2  dark:border-none ">
          <div className="flex mb-2  justify-between">
            <h3 className="text-xl py-1 font-bold">{project.name}</h3>
            <div className="flex items-center gap-2">
              <a href={project.url} target="_blank">
                <Globe strokeWidth={1} size={20} />
              </a>
              <a href={project.githubUrl} target="_blank">
                <Github strokeWidth={1} size={20} />
              </a>
            </div>
          </div>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {project.detail}
          </p>
        </div>

        <div className="px-4 mb-5 flex flex-col gap-2">
          <p className="text-neutral-400 text-sm">Technologies : </p>
          <div className="flex gap-2 ">
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
                <div key={tech} className="size-6">
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
