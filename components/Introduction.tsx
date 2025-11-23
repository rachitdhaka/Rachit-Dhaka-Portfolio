"use client";
import React from "react";
import gfg from "@/public/Images/gfg.png";
import { Tooltip } from "@/components/ui/tooltip-card";

export const Introduction = () => {
  return (
    <div className="py-4 px-2 tracking-wide ">
      <div>
        I'm a Full Stack Developer and Mentor{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<TooltipCard />}
        >
          {" "}
          <a
            href="https://gfgsrmrmp.vercel.app/"
            target="/blank"
            className="underline text-lg "
          >
            GeeksforGeeks SRM RMP
          </a>
        </Tooltip>
        , passionate about building impactful web experiences and solving
        challenges through DSA and creative problem-solving.
      </div>
    </div>
  );
};

const TooltipCard = () => {
  return (
    <div>
      <img src={gfg.src} alt="Gfg SRM RMP" className="e w-full rounded-sm" />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">GFG SRM RMP</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Where Code Meets Community Join SRM Ramapuram's premier coding
          community. Learn, grow, and build together with fellow tech
          enthusiasts guided by GeeksforGeeks.
        </p>
      </div>
    </div>
  );
};
