"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  children,
  className,
  colors = ["#c6537f", "#de7ba0", "#f2a9c2", "#c6537f"], // Pink to blue gradient
  speed = 1,
}: AuroraTextProps) {
  const gradientColors = colors.join(", ");
  
  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(45deg, ${gradientColors})`,
        backgroundSize: "200% 200%",
        animation: `aurora ${2 / speed}s ease-in-out infinite`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </span>
  );
}