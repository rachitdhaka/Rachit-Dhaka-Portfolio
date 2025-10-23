import gfg from "../assets/Images/gfglogo.png";
import dp from "../assets/Images/Orginal.jpg";
import V0exp from "./V0exp"; // Assuming V0exp handles its own responsiveness
import vp from "../assets/Images/VARTAA.png";
import ck from "../assets/Images/download.jpeg";
import V0skills from "./V0skills"; // Assuming V0skills handles its own responsiveness
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import V0projectCard from "./V0projectCard";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import chatbot from "../assets/chatbot application.png";
import game from "../assets/Images/game.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import V0Github from "./V0Github";
import weather from "../assets/Images/weather.png";
import GitHubCalendar from "react-github-calendar";
import HeikiBackground from "../components/HeikiBackground";
import reactRef from "../assets/Images/ReactRef.png";
import resume from "../assets/resume/RachitResume.pdf"
import ProjectMain from "./ProjectMain";
import resumeSvg from "../assets/Images/resume.png";
import { FileText, Github, Linkedin, X } from "lucide-react";
const projects = [
  {
    id: 1,
    name: "Paste Application",
    detail:
      "Paste Application - Save, edit, delete your notes, code and information",
    logo: paste,
    url: "https://paste-saving.vercel.app/",
    techStack: ["React", "Tailwind", "Redux"],
    githubUrl: "https://github.com/rachitdhaka/Paste-Application",
  },

  {
    id: 2,
    name: "Orbit Us",
    detail:
      "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer",
    logo: orbitus,
    url: "https://orbitus.vercel.app/",
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  },
  {
    id: 3,
    name: "Eth Link",
    detail:
      "Decentralised Job Seacrhing Portal - ETHLink leverages Web3 to offer a secure, trust-based job search platform with verified companies and candidates.",
    logo: ethlinkImg,
    url: "https://eth-link-vcpn.vercel.app/",
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/EthLink",
  },

  {
    id: 4,
    name: "Chat Bot Application",
    detail:
      "Chat Bot Application - Using Google AI to create a chat bot application",
    logo: chatbot,
    url: "https://chatbot-rachit.vercel.app/",
    techStack: ["React", "Tailwind", "Api", "Google AI"],
    githubUrl: "http://github.com/rachitdhaka/Chat-Bot-Application",
  },
  {
    id: 5,
    name: "React Ref Website",
    detail: "",
    logo: reactRef,
    url: "https://reactref.vercel.app/",
    techStack: ["React", "Tailwind"],
    githubUrl: "https://github.com/rachitdhaka/React-Ref",
  },
];

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

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/rachitdhaka_",
    Icon: IconBrandX,
  },
  {
    name: "GitHub",
    href: "https://github.com/rachitdhaka",
    Icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rachitdhaka/",
    Icon: IconBrandLinkedin,
  },
  {
    name: "Codolio",
    href: "https://codolio.com/profile/rachitdhaka",
    Icon: IconCode,
  },
];

const V0 = () => {

  const dob = new Date("2004-09-29");
  const today = new Date();


  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();


  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }



  return (
    <div className="w-full min-h-screen relative">
      {/* main section */}
      {/* Added responsive padding px-4 for smaller screens, p-8 for larger */}
      <div className="max-w-2xl mx-auto  px-4 sm:px-8 relative">
        {/* naming and intro */}

        <div className="flex flex-col sm:flex-row p-4 sm:p-8 items-center sm:items-start text-center sm:text-left">
          {/* right side */}
          <motion.div
            className="w-full sm:w-[30%] flex justify-center sm:justify-center items-center py-4 sm:py-2 mt-6 sm:mt-0 "
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <img
              src={dp}
              alt="Rachit Dhaka"
              className="h-20 w-20 sm:h-27 sm:w-27 rounded-4xl aspect-square shadow-[0_4px_30px_rgba(255,255,255,0.25)]"
            />
          </motion.div>
          {/* left side */}
          <div className="w-full sm:w-[70%] flex justify-center sm:justify-end items-center">
            {/* content div */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-center sm:text-left"
            >
              <p className="text-lg sm:text-xl geist-regular text-white tracking-tighter">
                Hi, I'm
              </p>
              {/* Adjusted font size for different screens */}
              <h1 className="text-4xl sm:text-[3rem] text-white tracking-tighter geist-regular ">
                Rachit Dhaka
              </h1>
              <p className="text-neutral-400 tracking-tight text-[15px] ">
                {age}, Chennai | Full Stack Developer - Problem Solver
              </p>
            </motion.div>
          </div>
        </div>


        {/* about section */}
        {/* Adjusted padding */}
        <motion.div
          className="px-4 sm:px-8 mt-4 sm:mt-0 flex flex-col gap-2"
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div>

            <p className="text-neutral-400 text-[15px]  geist-regular">
              I'm a Full Stack Developer and Mentor at <a href="https://gfgsrmrmp.vercel.app/" className="underline text-neutral-200">GeeksforGeeks SRM RMP</a>, passionate about building impactful web experiences and solving challenges through DSA and creative problem-solving.
            </p>
            <br />
            <a
              href={resume}
              download="Rachit_Dhaka_Resume.pdf"
              className="flex items-center gap-2 w-fit bg-neutral-900 text-white px-5 py-2.5 text-sm rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all duration-300 shadow-md"

            >
              <FileText className="w-5 h-5" />
              <p className="geist-regular">Resume / CV</p>
            </a>
          </div>

          {/* Project sections */}
          <ProjectMain />

        </motion.div>

        {/* guthub contribution calndar  */}
        <V0Github />

        {/* skills section */}
        <motion.div
          className="px-4 sm:px-8" // Ensure consistent padding
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <V0skills />
        </motion.div>

        {/* Experience */}
        <motion.div
          className="max-w-2xl px-4 sm:px-8" // Ensure consistent padding
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white geist-medium text-lg sm:text-xl mt-8 mb-4">
            Experiences
          </h1>

          {exp.map((e) => (
            <V0exp
              key={e.id}
              name={e.name}
              position={e.position}
              logo={e.logo}
              sd={e.sd}
              ed={e.ed}
            />
          ))}
        </motion.div>
        {/* Get in touch */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mt-10 flex-col px-4 sm:px-8 pb-10"
        >
          {/* Adjusted font size for responsiveness */}
          <h1 className="text-white text-xl  ">
            Get in Touch
          </h1>


          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ name, href, Icon }, index) => (
              <a
                key={index}
                href={href}
                className="relative group font-saans"
                aria-label={`Link to ${name} profile`} // Optional, accessible
              >
                <Icon stroke={1} color="white" size={24} />

                {/* Tooltip below the icon */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none bg-black">
                  {name}
                </div>
              </a>
            ))}
          </div>




        </motion.div>

        <div className=" text-white flex flex-col justify-center  items-center gap-5  pb-10">

          <p className="text-[12px] flex flex-col text-center">
            Design & Developed by Rachit Dhaka <br></br>
            © 2025. All rights reserved.
          </p>
          <NavLink
            to="/version1"
            className="text-white text-[10px] font-thin hover:bg-neutral-700 px-2 py-0.5 rounded "
          >
            v <span className="text-md">1</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default V0;
