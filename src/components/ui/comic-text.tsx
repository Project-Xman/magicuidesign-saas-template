"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComicTextProps {
  children: string;
  className?: string;
  colors?: string[];
  shadowIntensity?: number;
  bounceHeight?: number;
}

export function ComicText({ 
  children, 
  className,
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b"],
  shadowIntensity = 4,
  bounceHeight = 10
}: ComicTextProps) {
  const letters = children.split("");

  return (
    <motion.div
      className={cn("inline-flex font-bold uppercase tracking-wide", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block relative"
          variants={{
            hidden: { 
              y: 50, 
              opacity: 0,
              scale: 0.5,
              rotate: Math.random() * 20 - 10
            },
            visible: { 
              y: 0, 
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
              }
            },
          }}
          whileHover={{
            y: -bounceHeight,
            scale: 1.2,
            rotate: Math.random() * 20 - 10,
            transition: {
              type: "spring",
              damping: 5,
              stiffness: 300,
            }
          }}
          style={{
            color: colors[index % colors.length],
            textShadow: `
              ${shadowIntensity}px ${shadowIntensity}px 0px #000,
              -1px -1px 0px #000,
              1px -1px 0px #000,
              -1px 1px 0px #000,
              1px 1px 0px #000
            `,
            WebkitTextStroke: "1px #000",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}