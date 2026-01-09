"use client";
import React, { memo, useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Heading } from "./ui/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Move static theme config outside component (not readonly for compatibility)
const Theme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// Memoized GitHub Calendar wrapper
const MemoizedGitHubCalendar = memo(
  ({ colorScheme }: { colorScheme: "light" | "dark" }) => (
    <GitHubCalendar
      username="rachitdhaka"
      blockSize={9}
      blockMargin={4}
      theme={Theme}
      fontSize={14}
      blockRadius={2}
      colorScheme={colorScheme}
    />
  )
);
MemoizedGitHubCalendar.displayName = "MemoizedGitHubCalendar";

export const Github = memo(() => {
  const { theme } = useTheme();

  // Memoize the color scheme determination
  const colorScheme = useMemo(
    () => (theme === "dark" ? "dark" : "light") as "light" | "dark",
    [theme]
  );

  return (
    <div className="my-10">
      <div>
        <Heading>Github Contribution</Heading>
      </div>
      <div className="p-2 md:p-4 border border-dashed border-gray-200 dark:border-neutral-700 rounded-lg overflow-x-auto">
        <MemoizedGitHubCalendar colorScheme={colorScheme} />
      </div>

      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          className="cursor-pointer w-full sm:w-auto"
          asChild
        >
          <Link
            href="https://github.com/rachitdhaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </Link>
        </Button>
      </div>
    </div>
  );
});
Github.displayName = "Github";
