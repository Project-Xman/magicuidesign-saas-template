"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";
import Marquee from "@/components/magicui/marquee";
import Ripple from "@/components/magicui/ripple";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroVideoDialog from "../magicui/hero-video";

const ease = [0.16, 1, 0.3, 1];

const audienceCards = [
  {
    title: "For Employers",
    description: "Boost retention 27% and cut payroll processing time from hours to minutes with AI-backed automations.",
    href: "/employers",
    cta: "Explore employer platform",
  },
  {
    title: "For Employees",
    description: "Access up to 60% of earned wages instantly, budget smarter, and build savings with automated safeguards.",
    href: "/employees",
    cta: "Visit employee hub",
  },
];

const impactMetrics = [
  {
    label: "Avg. launch time",
    value: "5 min",
  },
  {
    label: "Uptake in 90 days",
    value: "+63%",
  },
  {
    label: "Support satisfaction",
    value: "4.9/5",
  },
  {
    label: "Processed volume",
    value: "$3.2B",
  },
];

function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-fincorp"
      className="group relative flex w-full max-w-xl items-center gap-4 overflow-hidden rounded-full border border-primary/25 bg-white/75 px-4 py-3 text-sm shadow-lg shadow-primary/10 backdrop-blur transition-all duration-300 hover:border-primary/45 hover:shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      initial={{ opacity: 0, y: -28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -2 }}
      whileFocus={{ y: -2 }}
      transition={{ duration: 0.7, ease }}
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
            buttonVariants({ variant: "premium", size: "xl" }),
            "w-full sm:w-auto text-primary-foreground flex gap-2 text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employer portal - Discover payroll solutions for your business"
          >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
          </svg>
          I’m an Employer
        </Link>
        <Link
          href="/employees"
          className={cn(
            buttonVariants({ variant: "outline", size: "xl" }),
            "w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg font-semibold rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          aria-label="Employee portal - Access your earned wages instantly"
        >
          I’m an Employee
        </Link>
      </motion.div>
    </>
  );
}

function HeroAudienceCards() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
      {audienceCards.map((card, index) => (
        <BlurFade key={card.title} delay={0.1 * index} inView className="h-full">
          <Link
            href={card.href}
            className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-primary/15 bg-white/60 p-6 text-left shadow-md shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:bg-neutral-900/60"
            aria-label={card.cta}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              {card.title}
            </span>
            <h3 className="text-2xl font-semibold text-foreground">
              {card.cta}
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              {card.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn more
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </span>
            <BorderBeam size={200} duration={16} borderWidth={1} delay={index * 2} className="opacity-40" />
          </Link>
        </BlurFade>
      ))}
    </div>
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

function HeroMetrics() {
  return (
    <div className="relative isolate mt-20 flex w-full flex-col items-center">
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="w-full max-w-4xl overflow-hidden rounded-full border border-primary/15 bg-background/70 shadow-lg shadow-primary/10 backdrop-blur">
        <Marquee pauseOnHover className="[--duration:28s]">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="flex min-w-[220px] items-center justify-center gap-2 px-6 py-3">
              <span className="text-2xl font-semibold text-primary">{metric.value}</span>
              <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" role="banner">
      <div className="relative flex w-full flex-col items-center justify-start overflow-hidden px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,99,255,0.18),_transparent_55%)]" aria-hidden="true" />
        <Ripple className="-z-10 opacity-80" />
        <BorderBeam size={320} duration={20} borderWidth={1} className="pointer-events-none opacity-40" />
        <HeroPill />
        <header>
          <HeroTitles />
        </header>
        <HeroCTA />
        <HeroAudienceCards />
        <HeroAnimation />
        <HeroMetrics />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent lg:h-1/4" aria-hidden="true" />
        <HeroFlow />
      </div>
    </section>
  );
}
