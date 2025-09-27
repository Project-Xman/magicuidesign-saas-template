"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpinningTextProps {
  children: string;
  className?: string;
  duration?: number;
  direction?: "clockwise" | "counterclockwise";
  trigger?: "hover" | "always" | "inView";
}

export function SpinningText({ 
  children, 
  className,
  duration = 2,
  direction = "clockwise",
  trigger = "hover"
}: SpinningTextProps) {
  const rotation = direction === "clockwise" ? 360 : -360;
  
  const getAnimationProps = () => {
    switch (trigger) {
      case "always":
        return {
          animate: { rotate: rotation },
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear" as const
          }
        };
      case "inView":
        return {
          whileInView: { rotate: rotation },
          viewport: { once: true },
          transition: { duration, ease: "easeInOut" as const }
        };
      default: // hover
        return {
          whileHover: { rotate: rotation },
          transition: { duration, ease: "easeInOut" as const }
        };
    }
  };

  return (
    <motion.span
      className={cn("inline-block cursor-pointer", className)}
      {...getAnimationProps()}
    >
      {children}
    </motion.span>
  );
}