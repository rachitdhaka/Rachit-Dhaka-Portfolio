"use client";
import React from "react";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export const ResumeSection = () => {
  return (
    <div className="py-4 px-2 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <Button className="cursor-pointer w-full sm:w-auto">Resume</Button>
      <Button className="cursor-pointer w-full sm:w-auto" variant="secondary">
        Get in Touch
      </Button>
    </div>
  );
};
