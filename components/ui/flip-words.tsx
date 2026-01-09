"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
  memo,
} from "react";
import {
  AnimatePresence,
  motion,
  LazyMotion,
  domAnimation,
} from "motion/react";
import { cn } from "@/lib/utils";

// Memoized letter component to prevent re-renders
const AnimatedLetter = memo(
  ({
    letter,
    wordIndex,
    letterIndex,
  }: {
    letter: string;
    wordIndex: number;
    letterIndex: number;
  }) => (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: wordIndex * 0.3 + letterIndex * 0.05,
        duration: 0.2,
      }}
      className="inline-block"
      style={{ willChange: "transform, opacity, filter" }}
    >
      {letter}
    </motion.span>
  )
);
AnimatedLetter.displayName = "AnimatedLetter";

// Memoized word component
const AnimatedWord = memo(
  ({ word, wordIndex }: { word: string; wordIndex: number }) => (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: wordIndex * 0.3,
        duration: 0.3,
      }}
      className="inline-block whitespace-nowrap"
      style={{ willChange: "transform, opacity, filter" }}
    >
      {word.split("").map((letter, letterIndex) => (
        <AnimatedLetter
          key={`${word}-${letterIndex}`}
          letter={letter}
          wordIndex={wordIndex}
          letterIndex={letterIndex}
        />
      ))}
      <span className="inline-block">&nbsp;</span>
    </motion.span>
  )
);
AnimatedWord.displayName = "AnimatedWord";

// Animation variants defined outside component
const wordVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -40,
    x: 40,
    filter: "blur(8px)",
    scale: 2,
    position: "absolute" as const,
  },
};

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 10,
};

export const FlipWords = memo(
  ({
    words,
    duration = 3000,
    className,
  }: {
    words: string[];
    duration?: number;
    className?: string;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentWord = words[currentIndex];

    const startAnimation = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(true);
    }, [words.length]);

    useEffect(() => {
      if (!isAnimating) {
        timeoutRef.current = setTimeout(startAnimation, duration);
      }
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [isAnimating, duration, startAnimation]);

    const handleExitComplete = useCallback(() => {
      setIsAnimating(false);
    }, []);

    // Memoize the split words
    const splitWords = useMemo(() => currentWord.split(" "), [currentWord]);

    return (
      <span className="inline-block relative min-w-[180px] md:min-w-[220px]">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="popLayout" onExitComplete={handleExitComplete}>
            <motion.span
              key={currentWord}
              initial={wordVariants.initial}
              animate={wordVariants.animate}
              exit={wordVariants.exit}
              transition={springTransition}
              className={cn(
                "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                className
              )}
              style={{ willChange: "transform, opacity, filter" }}
            >
              {splitWords.map((word, wordIndex) => (
                <AnimatedWord
                  key={`${word}-${wordIndex}`}
                  word={word}
                  wordIndex={wordIndex}
                />
              ))}
            </motion.span>
          </AnimatePresence>
        </LazyMotion>
      </span>
    );
  }
);
FlipWords.displayName = "FlipWords";
