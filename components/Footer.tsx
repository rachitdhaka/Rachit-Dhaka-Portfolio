"use client";
import { Code, Github, Linkedin, Twitter, MoveDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/rachitdhaka_",
      Icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/rachitdhaka",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rachitdhaka/",
      Icon: Linkedin,
    },
    {
      name: "Codolio",
      href: "https://codolio.com/profile/rachitdhaka",
      Icon: Code,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <p className="text-center text-sm md:text-base">Connect with me</p>
      <div className="flex gap-4 md:gap-3 pt-2 justify-center">
        <TooltipProvider>
          {socialLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                  aria-label={link.name}
                >
                  <link.Icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    size={24}
                    strokeWidth={1}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      <div className="mt-10">
        <p className="text-sm text-center">
          Design & Developed by Rachit Dhaka <br /> © 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};
