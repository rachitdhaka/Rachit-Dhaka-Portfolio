"use client";
import React, { memo, useMemo } from "react";
import { CodeXml, Github, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";

// Move static data outside component
const navLinks = [
  { name: "Projects", icon: BriefcaseBusiness, href: "/projects" },
  { name: "Github", icon: Github, href: "https://github.com/rachitdhaka" },
  { name: "Codolio", icon: CodeXml, href: "https://codolio.com/rachitdhaka" },
] as const;

// Memoized nav link item
const NavLink = memo(({ item }: { item: (typeof navLinks)[number] }) => (
  <Link href={item.href}>
    <item.icon className="w-5 h-5 md:w-5 md:h-5" size={20} />
  </Link>
));
NavLink.displayName = "NavLink";

export const Navbar = memo(() => {
  const navLinkItems = useMemo(
    () => navLinks.map((item) => <NavLink key={item.name} item={item} />),
    []
  );

  return (
    <div className="flex justify-between items-center py-4 px-2">
      <div>
        <p className="text-md tracking-tight cursor-pointer">rd</p>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-8">
        {navLinkItems}
        <ModeToggle />
      </div>
    </div>
  );
});
Navbar.displayName = "Navbar";
