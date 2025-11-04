import { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { p } from "motion/react-client";
import V0projectCard from "./V0projectCard";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import HeikiBackground from "./HeikiBackground";
import weather from "../assets/Images/weather.png";
import chatbot from "../assets/chatbot application.png";
import reactRef from "../assets/Images/ReactRef.png";
import todo from "../assets/Images/todo.png";

const personalProjects = [
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
        techStack: ["React", "Tailwind", "Solidity", "Web3" ],
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

const fullStack = [
    {
        id: 1,
        name: "Todo Application",
        detail: "Todo Application using MERN",
        logo: todo,
        url: "https://todo-application-rachit.vercel.app/",
        techStack: ["React", "Tailwind", "Node", "Express", "MongoDB" ],
        githubUrl: "https://github.com/rachitdhaka/Todo-Application",
    },

];

const V1ProjectSection = () => {

    const [activeTab, setActiveTab] = useState("personal");
    const projectsToDisplay = activeTab === 'personal' ? personalProjects : fullStack;


    return (
        <section className='max-w-2xl mx-auto px-4 sm:px-8 '>
            <h1 className="text-white font-semibold text-lg  sm:text-xl mt-8 mb-4">
                Projects
            </h1>


            {/* tab switching */}
            <div className="flex justify-evenly w-full h-8 rounded-xl p-1  bg-neutral-800 gap-1 mb-10">



                <button
                    className="relative w-[50%] cursor-pointer flex justify-center items-center rounded-lg text-sm overflow-hidden"
                    onClick={() => setActiveTab('personal')}
                >
                    {activeTab === 'personal' && (
                        <motion.span
                            layoutId="tabHighlight"
                            className="absolute inset-0 rounded-lg bg-neutral-700"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                    )}
                    <motion.span
                        className="relative z-10 text-sm font-medium"
                        animate={{ color: activeTab === 'personal' ? "#FFFFFF" : "#D4D4D4" }}
                        transition={{ duration: 0.2 }}
                        initial={false}
                    >
                        Projects
                    </motion.span>
                </button>




                <button
                    className="relative w-[50%] cursor-pointer flex justify-center items-center rounded-lg text-sm overflow-hidden"
                    onClick={() => setActiveTab('fullStack')}
                >
                    {activeTab === 'fullStack' && (
                        <motion.span
                            layoutId="tabHighlight"
                            className="absolute inset-0 rounded-lg bg-neutral-700"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                    )}
                    <motion.span
                        className="relative z-10 text-sm font-medium"
                        animate={{ color: activeTab === 'fullStack' ? "#FFFFFF" : "#D4D4D4" }}
                        transition={{ duration: 0.2 }}
                        initial={false}
                    >
                        Full Stack Projects
                    </motion.span>
                </button>

            </div>


            {/* project displaying */}

            <motion.div

                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >

                <div className="flex justify-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                        {projectsToDisplay.map((pr) => (
                            <V0projectCard
                                key={pr.id}
                                name={pr.name}
                                logo={pr.logo}
                                detail={pr.detail}
                                url={pr.url}
                                techStack={pr.techStack}
                                githubUrl={pr.githubUrl}
                            />
                        ))}
                    </div>
                </div>


            </motion.div>




        </section>
    )
}

export default V1ProjectSection

