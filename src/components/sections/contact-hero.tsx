"use client";

import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";

const ease = [0.16, 1, 0.3, 1];

export default function ContactHero() {
  return (
    <section id="contact-hero" className="pt-32 pb-10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: ease as any }}
          >
            <Highlighter action="highlight" color="#A07CFE" isView={true}>
              Let&apos;s Chat!
            </Highlighter>
            <br />
            <span className="text-3xl md:text-4xl">We Don&apos;t Bite (Much)</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: ease as any }}
          >
            Ready to <Highlighter action="highlight" color="#FE8FB5" isView={true}>revolutionize your workplace</Highlighter> and make your employees do <Highlighter action="underline" color="#FFBE7B" isView={true}>happy dances on payday</Highlighter>? 
            <br />
            <span className="font-semibold"><Highlighter action="highlight" color="#87CEFA" isView={true}>Book a demo, ask a question, or just say hi!</Highlighter></span> 
            <br />
            <span className="text-lg italic">We promise we&apos;re <Highlighter action="underline" color="#A07CFE" isView={true}>more fun than your average payroll conversation</Highlighter>.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}