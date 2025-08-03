import { div, section } from "motion/react-client";
import React from "react";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import V0projectCard from "../components/V0projectCard";
import HeikiBackground from "../components/HeikiBackground";
import weather from "../assets/Images/weather.png";
import chatbot from "../assets/chatbot application.png";
import reactRef from "../assets/Images/ReactRef.png";

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
    id: 7,
    name: "React Ref Website",
    detail:
      "",
    logo: reactRef,
    url: "https://reactref.vercel.app/",
    techStack: ["React", "Tailwind" ],
    githubUrl: "https://github.com/rachitdhaka/React-Ref",
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
    name: "Tic Tac Toe",
    detail: "Simple Game",
    logo: game,
    url: "https://tictactoe-rachit.vercel.app/",
    techStack: ["React", "Tailwind"],
    githubUrl: "https://github.com/rachitdhaka/Tic-Tac-Toe",
  },

  {
    id: 5,
    name: "Weather App",
    detail:
      "Weather App - Get the current weather of any city in the world",
    logo: weather,
    url: "https://weather-rachit.vercel.app/",
    techStack: ["React", "Tailwind" , "Api"],
    githubUrl: "https://github.com/rachitdhaka/Weather-Application",
  },
  {
    id: 6,
    name: "Chat Bot Application",
    detail:
      "Chat Bot Application - Using Google AI to create a chat bot application",
    logo: chatbot,
    url: "https://chatbot-rachit.vercel.app/",
    techStack: ["React", "Tailwind" , "Api" , "Google AI"],
    githubUrl: "http://github.com/rachitdhaka/Chat-Bot-Application",
  },
];

const V0ProjectPage = () => {
  return (


      <section className="min-h-screen w-full p-5 relative">

        {/* Project section */}
        <section className="max-w-3xl mx-auto bg-neutral-950 p-5 rounded-4xl relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {projects.map((pr, index) => (
              <V0projectCard
                key={index}
                name={pr.name}
                logo={pr.logo}
                detail={pr.detail}
                url={pr.url}
                techStack={pr.techStack}
                githubUrl={pr.githubUrl}
              />
            ))}
          </div>
        </section>
      </section>
   
  );
};

export default V0ProjectPage;
