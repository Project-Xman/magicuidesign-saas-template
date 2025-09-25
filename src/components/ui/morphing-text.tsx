"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  duration?: number;
  pause?: number;
}

export function MorphingText({ 
  texts, 
  className,
  duration = 2000,
  pause = 1000
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState(texts[0]);

  React.useEffect(() => {
    const morphText = () => {
      const current = texts[currentIndex];
      const next = texts[(currentIndex + 1) % texts.length];
      
      // Morphing animation
      let step = 0;
      const maxSteps = Math.max(current.length, next.length);
      
      const interval = setInterval(() => {
        let morphed = "";
        
        for (let i = 0; i < maxSteps; i++) {
          const progress = Math.min(step / maxSteps, 1);
          
          if (i < current.length && i < next.length) {
            // Morph between characters
            if (Math.random() < progress) {
              morphed += next[i];
            } else {
              morphed += current[i];
            }
          } else if (i < current.length) {
            // Fade out extra characters
            if (Math.random() < progress) {
              morphed += "";
            } else {
              morphed += current[i];
            }
          } else if (i < next.length) {
            // Fade in new characters  
            if (Math.random() < progress) {
              morphed += next[i];
            } else {
              morphed += String.fromCharCode(33 + Math.random() * 94);
            }
          }
        }
        
        setDisplayText(morphed);
        step++;
        
        if (step > maxSteps) {
          clearInterval(interval);
          setDisplayText(next);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }, 50);
    };

    const timeout = setTimeout(morphText, pause);
    return () => clearTimeout(timeout);
  }, [currentIndex, texts, pause]);

  return (
    <motion.span
      className={cn("font-mono", className)}
      key={displayText}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {displayText}
    </motion.span>
  );
}