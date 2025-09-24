"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroVideoDialog from "../magicui/hero-video";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-fincorp"
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/10 px-3 py-2 ring-2 ring-primary/20 whitespace-pre backdrop-blur-sm hover:bg-primary/15 transition-all duration-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent px-3 py-1 text-center text-xs font-semibold text-white shadow-lg">
        � Trusted
      </div>
      <p className="text-sm font-medium text-primary">
        Finwage - it's your wage
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="var(--primary)"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-6 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["Your", "Money,", "Your", "Control."].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
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
        transition={{ delay: 1.0, duration: 0.8, ease }}
      >
        <Link
          href="/employers"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary-hover flex gap-2 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          )}
          >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
          </svg>
          I'm an Employer
        </Link>
        <Link
          href="/employees"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
          )}
        >
          I'm an Employee
        </Link>
      </motion.div>
    </>
  );
}

function HeroAnimation() {
  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-4xl items-center justify-center mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
       <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-(--breakpoint-lg) mt-16"
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
      transition={{ delay: 1.4, duration: 0.8, ease }}
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
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-accent">Earn</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-6 h-0.5 bg-accent"></div>
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <div className="w-6 h-0.5 bg-accent"></div>
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
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroAnimation />

        {/* white gradient sits above the bottom and the flow is rendered after it */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent lg:h-1/4 z-0"></div>

        {/* Place the flow after the white gradient so it displays above it */}
        <HeroFlow />
      </div>
    </section>
  );
}
