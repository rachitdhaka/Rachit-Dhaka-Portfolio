"use client";
import React, { useEffect, useRef, useState, useMemo, memo } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  LazyMotion,
  domAnimation,
} from "motion/react";
import { cn } from "@/lib/utils";

// Memoized SVG path component to prevent re-renders
const GradientPath = memo(
  ({ svgHeight, y1, y2 }: { svgHeight: number; y1: any; y2: any }) => {
    const pathD = useMemo(
      () => `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
      [svgHeight]
    );

    return (
      <svg
        viewBox={`0 0 20 ${svgHeight}`}
        width="20"
        height={svgHeight}
        className="ml-4 block will-change-transform"
        aria-hidden="true"
      >
        <path d={pathD} fill="none" stroke="#9091A0" strokeOpacity="0.16" />
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.25"
          className="motion-reduce:hidden"
          style={{ willChange: "auto" }}
        />
        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1}
            y2={y2}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="0.325" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    );
  }
);
GradientPath.displayName = "GradientPath";

// Memoized indicator dot component
const IndicatorDot = memo(() => (
  <div className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm">
    <div className="h-2 w-2 rounded-full border border-neutral-300 bg-emerald-500" />
  </div>
));
IndicatorDot.displayName = "IndicatorDot";

export const TracingBeam = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    // Optimize spring config for smoother animations with less computation
    const springConfig = useMemo(() => ({ stiffness: 300, damping: 60 }), []);

    const y1 = useSpring(
      useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
      springConfig
    );
    const y2 = useSpring(
      useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
      springConfig
    );

    useEffect(() => {
      if (!contentRef.current) return;

      // Use ResizeObserver for efficient height tracking
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setSvgHeight(entry.contentRect.height);
        }
      });

      observer.observe(contentRef.current);
      setSvgHeight(contentRef.current.offsetHeight);

      return () => observer.disconnect();
    }, []);

    return (
      <LazyMotion features={domAnimation}>
        <div
          ref={ref}
          className={cn("relative mx-auto h-full w-full max-w-3xl", className)}
        >
          <div className="absolute top-3 -left-4 md:-left-20 will-change-transform">
            <IndicatorDot />
            {svgHeight > 0 && (
              <GradientPath svgHeight={svgHeight} y1={y1} y2={y2} />
            )}
          </div>
          <div ref={contentRef} className="pl-8 md:pl-4">
            {children}
          </div>
        </div>
      </LazyMotion>
    );
  }
);
TracingBeam.displayName = "TracingBeam";
