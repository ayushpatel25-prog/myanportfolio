"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function FramerMagnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <motion.div
      className={cn(
        "relative z-10 grid h-full w-full place-content-center",
        className,
      )}
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

function useMagnetic(maxMove = 25) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * maxMove);
    y.set(yPct * maxMove);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}

export function AnimatedBeam({ className }: { className?: string }) {
  const MASK_ID = "mask-for-beam";
  const MASK_CLIP_ID = "mask-clip-for-beam";

  return (
    <div className={cn("relative h-full w-full", className)}>
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        width="100%"
        height="100%"
      >
        <defs>
          <mask id={MASK_ID}>
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              style={{
                originY: "bottom",
              }}
            />
          </mask>
          <clipPath id={MASK_CLIP_ID}>
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1.5,
              }}
              style={{
                originY: "top",
              }}
            />
          </clipPath>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="hsl(var(--primary) / 0.1)"
          mask={`url(#${MASK_ID})`}
          clipPath={`url(#${MASK_CLIP_ID})`}
        />
      </svg>
    </div>
  );
}

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export function AnimatedBeamMultipleOutput() {
  const MASK_ID = "mask-for-beam";
  const MASK_CLIP_ID = "mask-clip-for-beam";
  const color = useMotionValue(COLORS_TOP[0]);

  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute inset-0">
        <svg
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          width="100%"
          height="100%"
        >
          <defs>
            <mask id={MASK_ID}>
              <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="white"
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                }}
                style={{
                  originY: "bottom",
                }}
              />
            </mask>
            <clipPath id={MASK_CLIP_ID}>
              <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1.5,
                }}
                style={{
                  originY: "top",
                }}
              />
            </clipPath>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsl(var(--primary) / 0.1)"
            mask={`url(#${MASK_ID})`}
            clipPath={`url(#${MASK_CLIP_ID})`}
          />
        </svg>
      </div>

      <motion.div
        className="h-24 w-24 rounded-full"
        style={{
          boxShadow: "0 0 50px 20px var(--color-of-beam)",
        }}
        animate={{
          "--color-of-beam": COLORS_TOP,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}
