"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DottedUnderline } from "./dotted-underline";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Section() {
  const pathname = usePathname();

  const navlinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Github", href: "https://github.com/rachitdhaka" },
    { label: "Content", href: "/content" },
  ] as const;

  return (
    <div className="px-2">
      <div className="flex gap-4">
        {navlinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "group relative inline-flex items-center transition-colors",
              isActivePath(pathname, item.href)
                ? "text-neutral-900"
                : "text-muted-foreground hover:text-neutral-700 active:text-neutral-900",
            )}
          >
            {item.label}
            <DottedUnderline
              className={cn(
                "mask-x-from-90% transition-opacity duration-300",
                isActivePath(pathname, item.href)
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100",
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
