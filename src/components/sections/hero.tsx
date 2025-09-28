"use client";

import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroVideoDialog from "../magicui/hero-video";
import RotatingText from "../RotatingText";
import { LaserFlow } from "../LaserFlow";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];


function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-fincorp"
      className="group relative flex w-full max-w-xl items-center gap-4 overflow-hidden rounded-full border border-primary/25 bg-white/75 px-4 py-3 text-sm shadow-lg shadow-primary/10 backdrop-blur transition-all duration-300 hover:border-primary/45 hover:shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      initial={{ opacity: 0, y: -28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -2 }}
      whileFocus={{ y: -2 }}
      transition={{ duration: 0.7, ease: ease as any}}
      aria-label="Read our blog post - Introducing Fincorp"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-24 skew-x-[-18deg] bg-gradient-to-r from-primary/25 via-primary/10 to-transparent transition-transform duration-500 group-hover:translate-x-10"
      />
      <span className="relative z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/70 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
        <motion.span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-white/25"
          animate={{ rotate: [0, 12, -12, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="#f7cf00">
            <path d="M10 1.5l2.12 4.3 4.73.69-3.43 3.35.81 4.86L10 12.87l-4.23 2.83.81-4.86-3.43-3.35 4.73-.69L10 1.5z" />
          </svg>
        </motion.span>
        Featured insight
      </span>
      <span className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-3 text-primary">
        <span className="truncate text-sm font-medium">
          Finwage introduces same-day pay for modern teams
        </span>
        <motion.span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary group-hover:text-primary-foreground"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
            <path d="M4.25 2.25L8 6l-3.75 3.75L3.5 8l2-2-2-2 0.75-1.75z" />
          </svg>
        </motion.span>
      </span>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 overflow-hidden pt-8 text-center">
      <motion.h1
        id="hero-title"
        className="flex flex-wrap items-center justify-center gap-3 text-center text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      > 
        Earn Today, <RotatingText
          texts={["Paid Today", "Paid Instantly"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-secondary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}

        />
      </motion.h1>
      <motion.h2
        className="mx-auto max-w-3xl text-balance text-xl font-medium leading-8 text-secondary sm:text-2xl sm:leading-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease,
        }}
      >
        Work Today, Get Paid Today! A financial wellness benefit that helps employees access their earned wages while saving employers time and money.
      </motion.h2>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-4 mb-2 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:space-x-6 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: ease as any}}
        style={{ zIndex: 15 }}
      >
        <Link
          href="/employers"
          className={cn(
            buttonVariants({ variant: "secondary", size: "xl" }),
            "w-full sm:w-auto text-primary-foreground flex gap-2 text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employer portal - Discover payroll solutions for your business"
          >
          I&apos;m an Employer
        </Link>
        <Link
          href="/employees"
          className={cn(
            buttonVariants({ variant: "outline", size: "xl" }),
            "w-full sm:w-auto border-primary bg-primary text-primary-foreground text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employee portal - Access your earned wages instantly"
        >
          I&apos;m an Employee
        </Link>
      </motion.div>
    </>
  );
}

type BeamConfig = {
  horizontalOffset: number;
  verticalOffset: number;
  verticalSizing: number;
  horizontalSizing: number;
};

const defaultBeamConfig: BeamConfig = {
  horizontalOffset: 0.05,
  verticalOffset: -0.06,
  verticalSizing: 1.95,
  horizontalSizing: 0.53,
};

function LaserFlowBox() {
  const [beamConfig, setBeamConfig] = useState<BeamConfig>(defaultBeamConfig);
const revealImgRef = useRef(null);


  useEffect(() => {
    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    const pickConfig = (width: number, height: number): BeamConfig => {
      const heightRatio = clamp((height - 640) / 640, 0, 1);
      const verticalAdjust = heightRatio * 0.025;

      if (width < 480) {
        return {
          horizontalOffset: 0.04,
          verticalOffset: -0.03 - verticalAdjust,
          verticalSizing: 1.72,
          horizontalSizing: 0.06,
        };
      }

      if (width < 768) {
        return {
          horizontalOffset: 0.045,
          verticalOffset: -0.045 - verticalAdjust,
          verticalSizing: 1.82,
          horizontalSizing: 0.06,
        };
      }

      if (width < 1280) {
        return {
          horizontalOffset: 0.05,
          verticalOffset: -0.07 - verticalAdjust,
          verticalSizing: 2.02,
          horizontalSizing: 0.22,
        };
      }

      if (width < 1600) {
        return {
          horizontalOffset: 0.05,
          verticalOffset: -0.095 - verticalAdjust,
          verticalSizing: 2.18,
          horizontalSizing: 0.29,
        };
      }

      return {
        horizontalOffset: 0.05,
        verticalOffset: -0.11 - verticalAdjust,
        verticalSizing: 2.32,
        horizontalSizing: 0.06,
      };
    };

    const applyConfig = () => {
      const next = pickConfig(window.innerWidth, window.innerHeight || 800);
      setBeamConfig((prev) =>
        prev.horizontalOffset === next.horizontalOffset &&
        prev.verticalOffset === next.verticalOffset &&
        prev.verticalSizing === next.verticalSizing &&
        prev.horizontalSizing === next.horizontalSizing
          ? prev
          : next
      );
    };

  applyConfig();
  window.addEventListener("resize", applyConfig, { passive: true });

    return () => window.removeEventListener("resize", applyConfig);
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{
        height: "90%",
        minHeight: "clamp(140px, 10vh, 580px)",
      }}
    >
      <LaserFlow
        className="h-full w-full left-60"
        horizontalBeamOffset={beamConfig.horizontalOffset}
        verticalBeamOffset={beamConfig.verticalOffset}
        verticalSizing={beamConfig.verticalSizing}
        horizontalSizing={beamConfig.horizontalSizing}
        color="#f470a6"
      />
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#181825] dark:via-[#181825cc] dark:to-transparent" />
    </div>
  );
}


function HeroAnimation() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-primary/25 bg-white/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur-lg transition-all duration-500"
  style={{ marginTop: "clamp(16px, 25vh, 204px)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: ease as any }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/K4TOrB7at0Y?si=pRVZQ852MhSBE1le"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="aspect-video w-full overflow-hidden rounded-[20px] border border-white/50 shadow-lg"
      />

      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1/3 rounded-b-[28px] bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#181825] dark:via-[#181825cc]" />
    </motion.div>
  );
}
function HeroFlow() {
  return (
    <motion.div
      className="absolute bottom-0 flex w-full max-w-4xl items-end justify-center pb-4 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease: ease as any}}
    >
      <div className="flex items-center justify-center space-x-8 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-primary">Work</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-secondary">Earn</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-6 h-0.5 bg-secondary"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-6 h-0.5 bg-secondary"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-secondary">Access Pay</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          <div className="w-6 h-0.5 bg-secondary"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-6 h-0.5 bg-secondary"></div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-primary">Peace of Mind</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      role="banner"
      className="relative min-h-[110vh] overflow-hidden pt-28 pb-24 sm:pt-32 md:min-h-[120vh] lg:min-h-[135vh]"
    >
      <LaserFlowBox />

      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col items-center space-y-8 px-4 pt-32 text-center sm:px-6 sm:pt-24 md:pt-28 lg:px-8">
        <HeroPill />
        <header className="w-full max-w-4xl">
          <HeroTitles />
        </header>
        <HeroCTA />
        <HeroAnimation />

        <div
          className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#181825] dark:via-[#181825cc] dark:to-transparent lg:h-1/4"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
