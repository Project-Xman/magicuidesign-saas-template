"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  boxColor?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function BoxReveal({ 
  children, 
  className,
  duration = 0.6,
  delay = 0,
  boxColor = "hsl(var(--primary))",
  direction = "right"
}: BoxRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(-100%)";
      case "down": return "translateY(100%)";
      case "left": return "translateX(-100%)";
      case "right": return "translateX(100%)";
      default: return "translateX(100%)";
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delay,
      },
    },
  };

  const revealVariants = {
    hidden: {
      transform: "translateX(0%)",
    },
    visible: {
      transform: getTransform(),
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay + 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={cn("relative inline-block overflow-hidden", className)}
    >
      <div>{children}</div>
      <motion.div
        variants={revealVariants}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: boxColor }}
      />
    </motion.div>
  );
}