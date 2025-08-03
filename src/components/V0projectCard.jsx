import React from "react";

const V0projectCard = ({
  logo,
  name,
  detail,
  url,
  techStack = [],
  githubUrl,
}) => {
  return (
    <section>
      <div className="border border-neutral-800 rounded-xl flex flex-col w-full max-w-xs sm:max-w-sm mx-auto bg-neutral-950 hover:bg-neutral-800 transition-colors duration-400 ">
        <div className="p-2">
          <a href={url} target="_blank" >
            <img
            src={logo}
            alt={`Preview of ${name}`}
            className="w-full h-32 sm:h-40 rounded-lg object-cover aspect-video"
          />
          </a>
        </div>

        <div className="p-3">
          <p className="text-white font-bold text-base sm:text-[16px] mb-1">
            {name}
          </p>
          <p className="text-xs sm:text-[12px] text-neutral-300">
            {detail}
          </p>
        </div>

        <div className="px-3  py-4 flex flex-col gap-2">
          <div className="flex gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-black rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-2 sm:mt-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="bg-neutral-700 text-neutral-200 rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center cursor-pointer hover:bg-neutral-600 transition-colors">
                Live
              </button>
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-neutral-700 text-neutral-200 rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center cursor-pointer hover:bg-neutral-600 transition-colors">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V0projectCard;