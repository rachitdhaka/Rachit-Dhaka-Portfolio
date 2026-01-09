"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "motion/react";
import { cn } from "@/lib/utils";

// Animation variants defined outside component to prevent recreation
const tooltipVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

const springTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
};

export const Tooltip = memo(
  ({
    content,
    children,
    containerClassName,
  }: {
    content: string | React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const [position, setPosition] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    });

    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    // Memoized position calculator
    const calculatePosition = useCallback((mouseX: number, mouseY: number) => {
      if (!contentRef.current || !containerRef.current) {
        return { x: mouseX + 12, y: mouseY + 12 };
      }

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const tooltipWidth = 240;
      const tooltipHeight = contentRef.current.scrollHeight;

      const absoluteX = containerRect.left + mouseX;
      const absoluteY = containerRect.top + mouseY;

      let finalX = mouseX + 12;
      let finalY = mouseY + 12;

      if (absoluteX + 12 + tooltipWidth > viewportWidth) {
        finalX = mouseX - tooltipWidth - 12;
      }

      if (absoluteX + finalX < 0) {
        finalX = -containerRect.left + 12;
      }

      if (absoluteY + 12 + tooltipHeight > viewportHeight) {
        finalY = mouseY - tooltipHeight - 12;
      }

      if (absoluteY + finalY < 0) {
        finalY = -containerRect.top + 12;
      }

      return { x: finalX, y: finalY };
    }, []);

    // Throttled position update using RAF for 60fps
    const updatePositionThrottled = useCallback(
      (mouseX: number, mouseY: number) => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
          setPosition(calculatePosition(mouseX, mouseY));
        });
      },
      [calculatePosition]
    );

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setPosition(calculatePosition(mouseX, mouseY));
        setIsVisible(true);
      },
      [calculatePosition]
    );

    const handleMouseLeave = useCallback(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      setIsVisible(false);
    }, []);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isVisible) return;
        const rect = e.currentTarget.getBoundingClientRect();
        updatePositionThrottled(e.clientX - rect.left, e.clientY - rect.top);
      },
      [isVisible, updatePositionThrottled]
    );

    const handleTouchStart = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition(
          calculatePosition(touch.clientX - rect.left, touch.clientY - rect.top)
        );
        setIsVisible(true);
      },
      [calculatePosition]
    );

    const handleTouchEnd = useCallback(() => {
      setTimeout(() => setIsVisible(false), 2000);
    }, []);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.matchMedia("(hover: none)").matches) {
          e.preventDefault();
          if (isVisible) {
            setIsVisible(false);
          } else {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition(
              calculatePosition(e.clientX - rect.left, e.clientY - rect.top)
            );
            setIsVisible(true);
          }
        }
      },
      [isVisible, calculatePosition]
    );

    // Update height when content changes
    useEffect(() => {
      if (isVisible && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [isVisible, content]);

    // Cleanup RAF on unmount
    useEffect(() => {
      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }, []);

    // Memoize style object
    const tooltipStyle = useMemo(
      () => ({
        top: position.y,
        left: position.x,
        willChange: "transform, opacity" as const,
      }),
      [position.x, position.y]
    );

    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block", containerClassName)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        {children}
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                key="tooltip"
                initial={tooltipVariants.initial}
                animate={{ ...tooltipVariants.animate, height }}
                exit={tooltipVariants.exit}
                transition={springTransition}
                className="pointer-events-none absolute z-50 min-w-[15rem] overflow-hidden rounded-md border border-transparent bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5"
                style={tooltipStyle}
              >
                <div
                  ref={contentRef}
                  className="p-2 text-sm text-neutral-600 md:p-4 dark:text-neutral-400"
                >
                  {content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";
