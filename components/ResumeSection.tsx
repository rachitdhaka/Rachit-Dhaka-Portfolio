"use client";
import React, { memo, useCallback } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Fileicon from "@/public/IconSvg/Fileicon";
import FileDescriptionIcon from "./ui/file-description-icon";
import SendIcon from "./ui/send-icon";

export const ResumeSection = memo(() => {
  const handleGetInTouch = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="py-4 px-2 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <Button className="cursor-pointer w-full sm:w-auto " asChild>
        <Link href="/Documents/Resume.pdf" download="Rachit_Dhaka_Resume.pdf">
          <FileDescriptionIcon />
          Resume
        </Link>
      </Button>


      <button
        className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 has-[>svg]:px-3 rounded-md flex items-center gap-2 "
        onClick={handleGetInTouch}
      >
        <SendIcon />
        Get in Touch
      </button>
    </div>
  );
});
ResumeSection.displayName = "ResumeSection";
