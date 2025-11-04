import React from "react";
import GitHubCalendar from "react-github-calendar";
import { IconBrandGithub } from "@tabler/icons-react";

const V1Github = () => {
  const theme = {
    light: [
      "#ebedf0", // Level 0
      "#a8f0a2", // Level 1
      "#70e97c", // Level 2
      "#42cc61", // Level 3
      "#21b94a", // Level 4
    ],
    dark: [
      "#161b22", // Level 0 - background gray
      "#003d1f", // Level 1
      "#006d32", // Level 2
      "#26a641", // Level 3
      "#39d353", // Level 4
    ],
  };
  return (
    <section>

      <h1 className="text-white geist-medium text-lg pl-8 sm:text-xl mt-8 mb-4">
            Github Contribution
        </h1>


      <div className="overflow-auto px-10 bg-[#0a0a0a] p-4 rounded-3xl text-white">
        <GitHubCalendar
          username="rachitdhaka"
          colorScheme="dark"
          theme={theme}
        />
      </div>
      <a
        href="https://github.com/rachitdhaka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-saans flex gap-3 justify-center pt-8 hover:scale-110 duration-300">
          <p className="text-white">Github</p>
          <IconBrandGithub stroke={1} color="white" />
        </div>
      </a>
    </section>
  );
};

export default V1Github;
