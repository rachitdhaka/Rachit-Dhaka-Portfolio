"use client";
import Image from "next/image";
import dp from "@/public/Images/dp.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { memo, useMemo } from "react";

// Static words array moved outside component
const words = ["Full Stack Developer", "Problem Solver"] as const;

// Calculate age at module level (runs once)
const calculateAge = () => {
  const dob = new Date("2004-09-29");
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
};

export const HeroSection = memo(() => {
  // Memoize age calculation - only recalculates if component remounts
  const age = useMemo(() => calculateAge(), []);

  return (
    <div className="px-2 py-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
      <div className="flex-shrink-0">
        <Image
          src={dp}
          alt="Rachit Dhaka Image"
          className="rounded-xl shadow-[0_4px_30px_rgba(255,255,255,0.25)] border-4 border-neutral-200 dark:border-neutral-500"
          height={150}
          width={150}
          priority={true}
          sizes="150px"
          placeholder="blur"
        />
      </div>
      <div className="md:ml-40 w-full md:w-full text-center md:text-left">
        <p className="text-lg sm:text-xl geist-regular text-neutral-900 dark:text-white tracking-tighter">
          Hi, I'm
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-[3rem] text-neutral-900 dark:text-white tracking-tighter geist-regular">
          Rachit Dhaka
        </h1>
        <div className="text-neutral-600 dark:text-neutral-400 tracking-tight text-sm md:text-[15px]">
          {age}, Chennai / Nagaur | <FlipWords words={[...words]} />
        </div>
      </div>
    </div>
  );
});
HeroSection.displayName = "HeroSection";
