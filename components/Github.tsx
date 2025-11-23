"use client";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Heading } from "./ui/Heading";
import { Button } from "@/components/ui/button";
export const Github = () => {
  const { theme } = useTheme();

  const Theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="my-10">
      <div>
        <Heading>Github Contribution</Heading>
      </div>
      <div className="p-4 border border-dashed border-gray-200 dark:border-neutral-700 rounded-lg ">
        <GitHubCalendar
          username="rachitdhaka"
          blockSize={9}
          blockMargin={4}
          theme={Theme}
          fontSize={14}
          blockRadius={2}
          colorScheme={theme === "dark" ? "dark" : "light"}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button variant={"ghost"} className="cursor-pointer">Github Link</Button>
      </div>
    </div>
  );
};
