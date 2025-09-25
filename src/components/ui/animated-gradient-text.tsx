"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: "horizontal" | "vertical" | "diagonal";
}

export function AnimatedGradientText({ 
  children, 
  className,
  colors = ["#ff0080", "#ff8c00", "#40e0d0", "#ff0080"],
  animationSpeed = 4,
  direction = "horizontal"
}: AnimatedGradientTextProps) {
  const getGradientDirection = () => {
    switch (direction) {
      case "vertical": return "to bottom";
      case "diagonal": return "45deg";
      default: return "to right";
    }
  };

  const gradientColors = colors.join(", ");

  return (
    <motion.span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent font-bold",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(${getGradientDirection()}, ${gradientColors})`,
        backgroundSize: direction === "horizontal" ? "200% 100%" : "100% 200%",
        animation: `gradient-shift ${animationSpeed}s ease-in-out infinite`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </motion.span>
  );
}