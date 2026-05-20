"use client";
import React, { memo } from "react";
import Image from "next/image";
import gfg from "@/public/Images/gfg.png";
import { Tooltip } from "@/components/ui/tooltip-card";
import vartalaapImg from "@/public/Images/podcast.jpg";
import Link from "next/link";

// Memoized tooltip content
const TooltipCard = memo(() => (
  <div>
    <Image
      src={gfg}
      alt="Gfg SRM RMP"
      className="w-full rounded-sm"
      width={400}
      height={200}
      sizes="(max-width: 768px) 300px, 400px"
      loading="lazy"
      placeholder="blur"
    />
    <div className="my-4 flex flex-col">
      <p className="text-lg font-bold">GFG SRM RMP</p>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
        Where Code Meets Community Join SRM Ramapuram's premier coding
        community. Learn, grow, and build together with fellow tech enthusiasts
        guided by GeeksforGeeks.
      </p>
    </div>
  </div>
));
TooltipCard.displayName = "TooltipCard";

// Memoized podcast tooltip content
const PodcastTooltipCard = memo(() => (
  <div className="p-0">
    <Image
      src={vartalaapImg}
      alt="Vartalaap banner"
      className="w-full h-auto rounded-sm object-cover transform transition-transform duration-200 hover:scale-105"
      width={600}
      height={120}
      sizes="(max-width: 768px) 300px, 600px"
      priority={false}
    />
  </div>
));
PodcastTooltipCard.displayName = "PodcastTooltipCard";

export const Introduction = memo(() => {
  return (
    <div className="py-4 px-2 tracking-wide text-sm md:text-base text-muted-foreground dark:text-neutral-300">
      <div>
        I’m a software engineer building thoughtful digital experiences for the
        web. I enjoy turning ideas into products, learning new technologies, and
        solving problems through code.
      </div>

      <div className="mt-3">
        Over the years, I’ve explored problem-solving, software engineering,
        mentoring through the{" "}
        <Tooltip
          containerClassName="text-neutral-800  text-sm tracking-tight dark:text-neutral-400"
          content={<TooltipCard />}
        >
          <Link
            href="https://gfgsrmrmp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-base md:text-lg text-black dark:text-white"
          >
            GeeksforGeeks SRM RMP
          </Link>
        </Tooltip>{" "}
        community, and participating in hackathons where fast-paced building and
        collaboration excite me the most.
      </div>

      <div className="mt-3">
        I also started{" "}
        <Tooltip
          containerClassName="text-neutral-800  text-sm tracking-tight dark:text-neutral-400"
          content={<PodcastTooltipCard />}
        >
          <Link
            href="https://www.youtube.com/@Vartalaap-Podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-base md:text-lg text-black dark:text-white"
          >
            Vartalaap Podcast
          </Link>
        </Tooltip>{" "}
        during college. Probably debugging something that broke for absolutely
        no reason right now. If not, I’m likely scrolling X pretending it’s
        “research.” Let’s connect on <a href="https://x.com/profile/rachitdhaka" target="_blank" rel="noopener noreferrer" className="underline text-base md:text-lg text-black dark:text-white">X</a> or <a href="https://instagram.com/rachit.code" target="_blank" rel="noopener noreferrer" className="underline text-base md:text-lg text-black dark:text-white">Instagram</a>.
      </div>


      <div>
        
      </div>
    </div>
  );
});
Introduction.displayName = "Introduction";
