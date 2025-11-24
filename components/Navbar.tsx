"use client";
import React from "react";
import { CodeXml, Github, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";

export const Navbar = () => {
  const navLinks = [
    { name: "Projects", icon: BriefcaseBusiness, href: "/projects" },
    { name: "Github", icon: Github, href: "https://github.com/rachitdhaka" },
    { name: "Codolio", icon: CodeXml, href: "https://codolio.com/rachitdhaka" },
  ];

  return (
    <div className="flex justify-between items-center py-4 px-2">
      <div>
        <p className="text-md tracking-tight cursor-pointer">rd</p>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-8">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.href}>
            <item.icon className="w-5 h-5 md:w-5 md:h-5" size={20} />
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};
