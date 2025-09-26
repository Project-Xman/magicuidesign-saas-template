"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  children: string;
  className?: string;
  animateOnLoad?: boolean;
  duration?: number;
  delay?: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export function HyperText({ 
  children, 
  className,
  animateOnLoad = true,
  duration = 800,
  delay = 0
}: HyperTextProps) {
  const [displayedText, setDisplayedText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let iteration = 0;
    const animationSpeed = duration / children.length;
    
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return children[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );
      
      if (iteration >= children.length) {
        clearInterval(interval);
        setDisplayedText(children);
        setIsAnimating(false);
      }
      
      iteration += 1 / 3;
    }, animationSpeed / 10);
  };

  useEffect(() => {
    if (animateOnLoad) {
      const timer = setTimeout(() => {
        scramble();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [animateOnLoad, delay]);

  return (
    <motion.span
      className={cn("cursor-pointer font-mono", className)}
      onMouseEnter={scramble}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {displayedText}
    </motion.span>
  );
}