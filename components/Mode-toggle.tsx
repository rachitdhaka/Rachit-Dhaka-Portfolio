"use client";

import React, { memo, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  motion,
  LazyMotion,
  domAnimation,
  type Transition,
} from "motion/react";

// Animation variants defined outside component
const iconTransition: Transition = { duration: 0.3, ease: "easeInOut" };
const buttonTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
};

export const ModeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  // Memoize animation states
  const sunAnimation = useMemo(
    () => ({
      rotate: isDark ? -90 : 0,
      scale: isDark ? 0 : 1,
    }),
    [isDark]
  );

  const moonAnimation = useMemo(
    () => ({
      rotate: isDark ? 0 : 90,
      scale: isDark ? 1 : 0,
    }),
    [isDark]
  );

  return (
    <LazyMotion features={domAnimation}>
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer overflow-hidden"
        onClick={handleToggle}
        asChild
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={buttonTransition}
        >
          <motion.div
            initial={false}
            animate={sunAnimation}
            transition={iconTransition}
            className="absolute"
            style={{ willChange: "transform" }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <motion.div
            initial={false}
            animate={moonAnimation}
            transition={iconTransition}
            className="absolute"
            style={{ willChange: "transform" }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </motion.button>
      </Button>
    </LazyMotion>
  );
});
ModeToggle.displayName = "ModeToggle";
