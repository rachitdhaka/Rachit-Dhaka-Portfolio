"use client";
import React from "react"
import { Button } from "./ui/button"
import { FileText } from "lucide-react"


export const ResumeSection = () => {
  return (
    <div className="py-4 px-2  flex gap-2  ">
        <Button className="cursor-pointer">
           Resume
        </Button>
        <Button className="cursor-pointer" variant="secondary">
            Get in Touch
        </Button>
    </div>
  )
}