"use client";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const isTouchDeviceRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const state = useRef({
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  useEffect(() => {
    prefersReducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Detect touch device only once
    const hasTouchScreen =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    
    isTouchDeviceRef.current = hasTouchScreen;
    setIsInitialized(true);
    
    // Set initial opacity based on device type
    if (refElement.current) {
      refElement.current.style.setProperty("--opacity", hasTouchScreen ? "0.5" : "0");
    }
    
    // Add touch event listener immediately after detection
    const element = refElement.current;
    if (element && hasTouchScreen) {
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 0) return;
        const touch = e.touches[0];
        const rect = element.getBoundingClientRect();
        
        const position = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
        
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };

        const { background } = state.current;
        background.x = Math.max(0, Math.min(100, 50 + percentage.x / 4 - 12.5));
        background.y = Math.max(0, Math.min(100, 50 + percentage.y / 3 - 16.67));

        element.style.setProperty("--bg-x", `${background.x}%`);
        element.style.setProperty("--bg-y", `${background.y}%`);
      };

      element.addEventListener("touchmove", handleTouchMove, { passive: true });
      return () => {
        element.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  const containerStyle = {
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0.6",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as React.CSSProperties;

  const backgroundStyle = {
    "--step": "4%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow":
      "repeating-linear-gradient( 0deg,rgb(0,255,255) calc(var(--step) * 1),rgba(0,191,255,1) calc(var(--step) * 2),rgba(50,205,50,1) calc(var(--step) * 3),rgba(0,255,200,1) calc(var(--step) * 4),rgba(30,144,255,1) calc(var(--step) * 5),rgb(100,149,237) calc(var(--step) * 6),rgb(138,43,226) calc(var(--step) * 7),rgb(0,255,255) calc(var(--step) * 8) ) 0% var(--bg-y)/200% 800% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg,#020618 0%,#020618 1.78%,rgba(46,46,255,0.4) 1.78%,rgba(46,46,255,0.4) 1.81%,#0000FF 1.81%,#0000FF 1.84%,rgba(46,46,255,0.4) 1.84%,rgba(46,46,255,0.4) 1.87%,#020618 1.87%,#020618 6% ) var(--bg-x) var(--bg-y)/400% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at 50% 50%,rgba(0,255,255,0.08) 8%,rgba(100,200,255,0.06) 22%,rgba(255,255,255,0.03) 100% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  } as React.CSSProperties;

  const updateStyles = () => {
    if (!refElement.current) return;
    const { background, rotate } = state.current;
    refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
    refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
    refElement.current.style.setProperty("--bg-x", `${background.x}%`);
    refElement.current.style.setProperty("--bg-y", `${background.y}%`);
  };

  return (
    <div
      style={containerStyle}
      className={cn(
        "relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] will-change-transform",
        className
      )}
      ref={refElement}
      onPointerMove={(event) => {
        if (!isInitialized) return;
        if (prefersReducedMotionRef.current) return;
        
        if (isTouchDeviceRef.current) {
          // On touch devices, only update background position, not rotation
          const rect = event.currentTarget.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };
          const percentage = {
            x: (100 / rect.width) * position.x,
            y: (100 / rect.height) * position.y,
          };

          const { background } = state.current;
          background.x = Math.max(0, Math.min(100, 50 + percentage.x / 4 - 12.5));
          background.y = Math.max(0, Math.min(100, 50 + percentage.y / 3 - 16.67));

          if (refElement.current) {
            refElement.current.style.setProperty("--bg-x", `${background.x}%`);
            refElement.current.style.setProperty("--bg-y", `${background.y}%`);
          }
          return;
        }
        
        // Desktop: full effect with rotation
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 10) * rotateFactor;
        rotate.y = (delta.y / 10) * rotateFactor;

        updateStyles();
      }}
      onPointerEnter={() => {
        if (!isInitialized) return;
        if (prefersReducedMotionRef.current) return;
        
        if (isTouchDeviceRef.current) {
          // On touch devices, increase opacity on touch
          if (refElement.current) {
            refElement.current.style.setProperty("--opacity", "0.75");
          }
          return;
        }
        
        // Desktop: hover effect
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        if (!isInitialized) return;
        if (prefersReducedMotionRef.current) return;
        
        if (isTouchDeviceRef.current) {
          // On touch devices, return to default opacity
          if (refElement.current) {
            refElement.current.style.setProperty("--opacity", "0.5");
          }
          return;
        }
        
        // Desktop: reset on leave
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current.style.setProperty("--r-x", "0deg");
          refElement.current.style.setProperty("--r-y", "0deg");
        }
      }}
    >
      <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-[hsl(var(--border))] md:hover:[--opacity:0.85] md:hover:[--duration:200ms] md:hover:[--easing:linear] overflow-hidden">
        <div className="[grid-area:1/1] h-full w-full">
          <div className="[grid-area:1/1] h-full w-full">
            {/* Content */}
            <div className="relative z-[2] h-full w-full">
              {children}
            </div>
          </div>
        </div>

        {/* Foil / rainbow gradient layer */}
        <div
          className="[grid-area:1/1] h-full w-full mix-blend-color-dodge opacity-[var(--opacity)] transition-opacity will-change-[background-position,opacity] [clip-path:inset(0_0_0_0_round_var(--radius))] [background-blend-mode:hue,_hue,_hue,_overlay] [background:var(--pattern),var(--rainbow),var(--diagonal),var(--shade)] relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-transparent after:mix-blend-mode-exclusion"
          style={backgroundStyle}
        />

      </div>
    </div>
  );
};
