"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: string;
  className?: string;
  shimmerWidth?: number;
  animationSpeed?: number;
}

export function AnimatedShinyText({ 
  children, 
  className,
  shimmerWidth = 100,
  animationSpeed = 3
}: AnimatedShinyTextProps) {
  return (
    <motion.div
      className={cn(
        "relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300",
        className
      )}
      style={{
        backgroundSize: `${shimmerWidth}% 100%`,
        backgroundPosition: "-100% 0",
        animation: `shimmer ${animationSpeed}s ease-in-out infinite`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {  
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
}