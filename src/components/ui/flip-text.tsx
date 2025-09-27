"use client";

import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
}

export function FlipText({ 
  children, 
  className,
  duration = 0.5,
  delay = 0,
  staggerDelay = 0.03
}: FlipTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      rotateX: -90,
      opacity: 0,
    },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={cn("inline-block", className)}
      style={{ perspective: "1000px" }}
    >
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block origin-center"
          style={{ 
            whiteSpace: char === " " ? "pre" : "normal",
            transformStyle: "preserve-3d"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}