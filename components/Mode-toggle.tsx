"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer overflow-hidden"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      asChild
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: theme === "dark" ? -90 : 0,
            scale: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <motion.div
          initial={{ rotate: 90, scale: 0 }}
          animate={{
            rotate: theme === "dark" ? 0 : 90,
            scale: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </motion.button>
    </Button>
  );
};
