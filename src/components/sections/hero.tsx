"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroVideoDialog from "../magicui/hero-video";
import RotatingText from "../RotatingText";
import { LaserFlow } from "../LaserFlow";
import { useRef } from "react";
import Image from "next/image";

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
          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
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
    <div className="flex w-full max-w-4xl flex-col space-y-6 overflow-hidden pt-8">
      <motion.h1
        id="hero-title"
        className="flex items-center justify-center gap-3 text-center text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
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
          mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
        className="mx-auto max-w-3xl text-center text-xl leading-8 text-secondary sm:text-2xl sm:leading-10 text-balance font-medium"
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
        className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: ease as any}}
        style={{ zIndex: 15 }}
      >
        <Link
          href="/employers"
          className={cn(
            buttonVariants({ variant: "premium", size: "xl" }),
            "w-full sm:w-auto text-primary-foreground flex gap-2 text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employer portal - Discover payroll solutions for your business"
          >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
          </svg>
          I&apos;m an Employer
        </Link>
        <Link
          href="/employees"
          className={cn(
            buttonVariants({ variant: "outline", size: "xl" }),
            "w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employee portal - Access your earned wages instantly"
        >
          I&apos;m an Employee
        </Link>
      </motion.div>
    </>
  );
}

function LaserFlowBox() {
  const revealImgRef = useRef(null);

  return (
    <div
      className="absolute inset-0"
      style={{
        height: '100vh',
        overflow: 'visible',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current as HTMLImageElement | null;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current as HTMLImageElement | null;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#f470a6"

      />
      
      <div style={{
        position: 'absolute',
        top: '113.2 %',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        maxWidth: '1000px',
        minHeight: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '25px',
        border: '2px solid #f470a6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: '2rem',
        zIndex: 25,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
          <HeroAnimation />
        <div 
        className="rounded-full"
          style={{ 
            pointerEvents: 'none',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 30
          }}
        ></div>
      </div>

      {/* <Image
        ref={revealImgRef}
        src="/dashboard.png"
        alt="Reveal effect"
        width={1200}
        height={800}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: 0,
          mixBlendMode: 'lighten',
          opacity: 0.2,
          pointerEvents: 'none',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties & { '--mx': string; '--my': string }}
      /> */}
    </div>
  );
}


function HeroAnimation() {
  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-4xl items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: ease as any}}
    >
       <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg"
      />
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
    <section id="hero" aria-labelledby="hero-title" role="banner" className="relative h-[160vh] overflow-hidden pt-28">
      {/* LaserFlowBox as background */}
      <LaserFlowBox />
      
      <div className="relative z-10 flex w-full h-[145vh] flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <header>
          <HeroTitles />
        </header>
        <HeroCTA />

        <div
          className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#181825] dark:via-[#181825cc] dark:to-transparent lg:h-1/4 z-20"
          aria-hidden="true"
        ></div>

  
      </div>
    </section>
  );
}
