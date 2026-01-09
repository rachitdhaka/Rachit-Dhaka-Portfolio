"use client";
import React, { memo, useMemo } from "react";
import GithubIcon from "./ui/github-icon";
import CodeXmlIcon from "./ui/code-xml-icon";
import TwitterXIcon from "./ui/twitter-x-icon";
import LinkedinIcon from "./ui/linkedin-icon";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

// Move static data outside component
const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/rachitdhaka_",
    Icon: TwitterXIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/rachitdhaka",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rachitdhaka/",
    Icon: LinkedinIcon,
  },
  {
    name: "Codolio",
    href: "https://codolio.com/profile/rachitdhaka",
    Icon:   CodeXmlIcon,
  },
] as const;

// Memoized social link item
const SocialLink = memo(({ link }: { link: (typeof socialLinks)[number] }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Link
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
      </Link>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>{link.name}</p>
    </TooltipContent>
  </Tooltip>
));
SocialLink.displayName = "SocialLink";

export const Footer = memo(() => {
  const socialLinkItems = useMemo(
    () => socialLinks.map((link) => <SocialLink key={link.name} link={link} />),
    []
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <p className="text-center text-sm md:text-base">Connect with me</p>
      <div className="flex gap-4 md:gap-3 pt-2 justify-center">
        <TooltipProvider>{socialLinkItems}</TooltipProvider>
      </div>

      <div className="mt-10">
        <p className="text-sm text-center">
          Design & Developed by Rachit Dhaka <br /> © 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
});
Footer.displayName = "Footer";
