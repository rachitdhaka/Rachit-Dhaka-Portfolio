import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto px-4 md:px-4 py-2 selection:bg-neutral-700 selection:text-white dark:selection:bg-amber-50 dark:selection:text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
