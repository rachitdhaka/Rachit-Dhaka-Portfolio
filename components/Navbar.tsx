"use client";
import React, { memo, useMemo } from "react";
import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";
import CodeXmlIcon from "@/components/ui/code-xml-icon";
import GithubIcon from "@/components/ui/github-icon";
import Stack3Icon from "@/components/ui/stack-3-icon";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

// Move static data outside component
const navLinks = [
  { name: "Projects", icon: Stack3Icon, href: "/projects" },
  { name: "Github", icon: GithubIcon, href: "https://github.com/rachitdhaka" },
  { name: "Codolio", icon: CodeXmlIcon, href: "https://codolio.com/profile/rachitdhaka" },
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
        <Link href="/">
          <p className="text-md tracking-tight cursor-pointer" >rd</p>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-8">
        {navLinkItems}
        <AnimatedThemeToggler/>
      </div>
    </div>
  );
});
Navbar.displayName = "Navbar";
