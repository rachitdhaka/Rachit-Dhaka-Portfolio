import React from "react";

const skills = [
  // 🧠 Core Programming
  "cpp",
  "c",
  "python",

  // ⚙️ MERN Stack
  "react",
  "express",
  "nodejs",
  "mongodb",

  // 🎨 Frontend Styling & Tools
  "javascript",
  "typescript",
  "tailwind",
  "redux",
  "html",
  "css",

  // 🛠️ Dev Tools
  "git",
  "github",
  "vscode",
  "vite",
  "vercel",
  "postman",
  "bash",

  // 🗃️ Database / Others
  "mysql",
];


const V0skills = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-white font-semibold text-lg  sm:text-xl mt-8 mb-4">
            Skills
        </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 px-8">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="w-10 h-10"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default V0skills;
