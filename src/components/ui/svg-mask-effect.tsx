"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SvgMaskEffect({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 320, y: 160 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const syncCenter = () => {
      const rect = element.getBoundingClientRect();
      setMousePosition({ x: rect.width / 2, y: rect.height / 2 });
    };

    const updateMousePosition = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    syncCenter();
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", syncCenter);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", syncCenter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none relative h-full w-full", className)}
    >
      <motion.div
        className="absolute inset-0 opacity-30 [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:220px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20"
        animate={{
          maskPosition: `${mousePosition.x - 110}px ${mousePosition.y - 110}px`,
        }}
        transition={{
          maskPosition: { duration: 0.2, ease: "linear" },
        }}
      />
    </div>
  );
}

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const updateTouchPosition = (e: TouchEvent) => {
    if (containerRef.current && e.touches.length > 0) {
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      setMousePosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    }
  };

  useEffect(() => {
    // Detect touch device and viewport size
    const checkMobile = () => {
      const hasTouchScreen =
        (typeof window !== "undefined" &&
          ("ontouchstart" in window ||
            (navigator as any).maxTouchPoints > 0)) ||
        (navigator as any).msMaxTouchPoints > 0;
      setIsMobile(hasTouchScreen);
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const element = containerRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      updateTouchPosition(e);
      setIsHovered(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      updateTouchPosition(e);
    };

    const handleTouchEnd = () => {
      setIsHovered(false);
    };

    if (isMobile) {
      // Mobile: Touch events
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove);
      element.addEventListener("touchend", handleTouchEnd);
    } else {
      // Desktop: Mouse events
      element.addEventListener("mousemove", updateMousePosition);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (element) {
        if (isMobile) {
          element.removeEventListener("touchstart", handleTouchStart);
          element.removeEventListener("touchmove", handleTouchMove);
          element.removeEventListener("touchend", handleTouchEnd);
        } else {
          element.removeEventListener("mousemove", updateMousePosition);
        }
      }
    };
  }, [isMobile]);
  
  // Adjust mask size based on viewport for better mobile experience
  const adjustedRevealSize = viewportSize.width < 768 ? Math.min(revealSize, viewportSize.width * 0.8) : revealSize;
  const maskSize = isHovered ? adjustedRevealSize : size;

  // Both mobile and desktop: Use mask reveal effect
  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen cursor-pointer", className)}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-white text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-white" />
        <div className="relative z-20 mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-20">
          {children}
        </div>
      </motion.div>

      <motion.div 
        className="flex h-full w-full items-center justify-center"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ opacity: { duration: 0.3, ease: "easeInOut" } }}
      >
        {revealText}
      </motion.div>
    </motion.div>
  );
};
