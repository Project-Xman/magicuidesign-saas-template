"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { HyperText } from "@/components/ui/hyper-text";
import { TextReveal } from "@/components/ui/text-reveal";
import { FlipText } from "@/components/ui/flip-text";
import { BoxReveal } from "@/components/ui/box-reveal";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MorphingText } from "@/components/ui/morphing-text";
import { SpinningText } from "@/components/ui/spinning-text";
import { ComicText } from "@/components/ui/comic-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { WordRotate } from "@/components/ui/word-rotate";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "aurora"
  | "sparkles" 
  | "hyper"
  | "textReveal"
  | "flip"
  | "boxReveal"
  | "shiny"
  | "gradient"
  | "morphing"
  | "spinning"
  | "comic"
  | "typing"
  | "wordRotate"
  | "lineShadow"
  | "none";

interface AnimatedHeadingProps {
  children: string;
  animation?: AnimationType;
  className?: string;
  // Animation-specific props
  colors?: string[];
  duration?: number;
  delay?: number;
  sparklesCount?: number;
  words?: string[]; // for wordRotate and morphing
  direction?: "up" | "down" | "left" | "right" | "horizontal" | "vertical" | "diagonal";
  animationSpeed?: number;
  trigger?: "hover" | "always" | "inView";
  shadowColor?: string;
  shadowIntensity?: number;
  bounceHeight?: number;
  as?: React.ElementType;
  boxColor?: string;
}

export function AnimatedHeading({
  children,
  animation = "none",
  className,
  colors,
  duration,
  delay,
  sparklesCount,
  words,
  direction,
  animationSpeed,
  trigger,
  shadowColor,
  shadowIntensity,
  bounceHeight,
  as = "span",
  boxColor,
  ...props
}: AnimatedHeadingProps) {
  const baseClassName = cn("inline-block", className);

  switch (animation) {
    case "aurora":
      return (
        <AuroraText 
          className={baseClassName}
          colors={colors || ["#c6537f", "#1e44c1", "#c6537f"]}
          speed={animationSpeed || 1}
        >
          {children}
        </AuroraText>
      );

    case "sparkles":
      return (
        <SparklesText
          className={baseClassName}
          sparklesCount={sparklesCount || 10}
          colors={colors ? { first: colors[0], second: colors[1] } : undefined}
        >
          {children}
        </SparklesText>
      );

    case "hyper":
      return (
        <HyperText
          className={baseClassName}
          duration={duration || 800}
          delay={delay || 0}
        >
          {children}
        </HyperText>
      );

    case "textReveal":
      return (
        <TextReveal
          className={baseClassName}
          duration={duration || 0.5}
          delay={delay || 0}
          direction={direction as "up" | "down" | "left" | "right" || "up"}
        >
          {children}
        </TextReveal>
      );

    case "flip":
      return (
        <FlipText
          className={baseClassName}
          duration={duration || 0.5}
          delay={delay || 0}
        >
          {children}
        </FlipText>
      );

    case "boxReveal":
      return (
        <BoxReveal
          className={baseClassName}
          duration={duration || 0.6}
          delay={delay || 0}
          boxColor={boxColor}
          direction={direction as "up" | "down" | "left" | "right" || "right"}
        >
          {children}
        </BoxReveal>
      );

    case "shiny":
      return (
        <AnimatedShinyText
          className={baseClassName}
          shimmerWidth={100}
          animationSpeed={animationSpeed || 3}
        >
          {children}
        </AnimatedShinyText>
      );

    case "gradient":
      return (
        <AnimatedGradientText
          className={baseClassName}
          colors={colors || ["#ff0080", "#ff8c00", "#40e0d0", "#ff0080"]}
          animationSpeed={animationSpeed || 4}
          direction={direction as "horizontal" | "vertical" | "diagonal" || "horizontal"}
        >
          {children}
        </AnimatedGradientText>
      );

    case "morphing":
      return (
        <MorphingText
          className={baseClassName}
          texts={words || [children]}
          duration={duration || 2000}
          pause={delay || 1000}
        >
        </MorphingText>
      );

    case "spinning":
      return (
        <SpinningText
          className={baseClassName}
          duration={duration || 2}
          direction={direction as "clockwise" | "counterclockwise" || "clockwise"}
          trigger={trigger || "hover"}
        >
          {children}
        </SpinningText>
      );

    case "comic":
      return (
        <ComicText
          className={baseClassName}
          colors={colors || ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b"]}
          shadowIntensity={shadowIntensity || 4}
          bounceHeight={bounceHeight || 10}
        >
          {children}
        </ComicText>
      );

    case "typing":
      return (
        <TypingAnimation
          className={baseClassName}
          duration={duration || 100}
          delay={delay || 0}
          as={as}
        >
          {children}
        </TypingAnimation>
      );

    case "wordRotate":
      return (
        <WordRotate
          className={baseClassName}
          words={words || [children]}
          duration={duration || 2500}
        />
      );

    case "lineShadow":
      return (
        <LineShadowText
          className={baseClassName}
          shadowColor={shadowColor || "black"}
          as={as}
        >
          {children}
        </LineShadowText>
      );

    default:
      const Component = as;
      return (
        <Component className={baseClassName} {...props}>
          {children}
        </Component>
      );
  }
}