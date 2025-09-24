"use client";

import { motion } from "framer-motion";

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
            transition={{ duration: 0.8, ease }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Ready to transform your workplace with FinWage? Book a demo or get the support you need.
          </motion.p>
        </div>
      </div>
    </section>
  );
}