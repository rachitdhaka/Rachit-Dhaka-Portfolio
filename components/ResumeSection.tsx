"use client";
import React, { memo, useCallback } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Fileicon from "@/public/IconSvg/Fileicon";
import FileDescriptionIcon from "./ui/file-description-icon";

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
          <FileDescriptionIcon/>
          Resume
        </Link>
      </Button>
      <Button
        className="cursor-pointer w-full sm:w-auto"
        variant="secondary"
        onClick={handleGetInTouch}
      >
        
        Get in Touch
      </Button>
    </div>
  );
});
ResumeSection.displayName = "ResumeSection";
