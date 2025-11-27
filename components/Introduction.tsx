"use client";
import React from "react";
import Image from "next/image";
import gfg from "@/public/Images/gfg.png";
import { Tooltip } from "@/components/ui/tooltip-card";
import Link from 'next/link'

export const Introduction = () => {
  return (
    <div className="py-4 px-2 tracking-wide text-sm md:text-base">
      <div>
        I'm a Full Stack Developer and Mentor{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<TooltipCard />}
        >
          {" "}
          <Link
            href="https://gfgsrmrmp.vercel.app/"
            target="/blank"
            className="underline text-base md:text-lg "
          >
            GeeksforGeeks SRM RMP
          </Link>
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
      <Image
        src={gfg}
        alt="Gfg SRM RMP"
        className="w-full rounded-sm"
        width={400}
        height={200}
        sizes="(max-width: 768px) 300px, 400px"
      />
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
