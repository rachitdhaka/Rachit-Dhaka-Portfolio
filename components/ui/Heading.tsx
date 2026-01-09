"use client";
import React, { memo } from "react";
import { cn } from "@/lib/utils";

export const Heading = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <p className={cn("text-2xl mb-10 font-medium", className)}>{children}</p>
    );
  }
);
Heading.displayName = "Heading";
