import React from "react";
import { motion } from "framer-motion";

const skills = [
  "html", "css", "javascript", "react", "tailwind",
  "redux", "typescript", "python", "cpp", "git",
  "github", "vscode", "c", "vite", "vercel", "mysql",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      className="pt-8 sm:pt-12 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto mb-10 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <hr className="border-gray-200 my-1 mb-8" />



      <h2 className="text-2xl sm:text-3xl font-bold font-maga mb-8">
        Skillsbak bak abka bka
      </h2>

      <motion.div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <img
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt={skill}
                className="w-13 h-13"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
