"use client";
import Image from "next/image";
import dp from "@/public/Images/dp.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const dob = new Date("2004-09-29");
    const today = new Date();

    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  const words = ["Full Stack Developer", "Problem Solver"];

  return (
    <div className="px-2 py-4 flex  justify-center items-center">
      <div>
        <Image
          src={dp}
          alt="Rachit Dhaka Image"
          className="rounded-xl shadow-[0_4px_30px_rgba(255,255,255,0.25)] border-4  border-neutral-200 dark:border-neutral-500"
          height={150}
          width={150}
        />
      </div>
      <div className="ml-40 w-77 ">
        <p className="text-lg sm:text-xl geist-regular text-neutral-900 dark:text-white tracking-tighter">
          Hi, I'm
        </p>

        <h1 className="text-4xl sm:text-[3rem] text-neutral-900 dark:text-white tracking-tighter geist-regular ">
          Rachit Dhaka
        </h1>
        <div className="text-neutral-600 dark:text-neutral-400 tracking-tight text-[15px] ">
          {age && <>{age}, Chennai / Nagaur |</>}{" "}
          <FlipWords className="" words={words} />
        </div>
      </div>
    </div>
  );
};
