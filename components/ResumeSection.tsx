"use client";
import React from "react";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export const ResumeSection = () => {
  const handleGetInTouch = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-4 px-2 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <Button className="cursor-pointer w-full sm:w-auto" asChild>
        <a href="/Documents/Resume.pdf" download="Rachit_Dhaka_Resume.pdf">
          Resume
        </a>
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
};
