"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

export default function EmployerCTA() {
  return (
    <section id="employer-cta" className="py-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Ready to Transform Your Employee Retention?
          </motion.h2>
          
          <motion.p
            className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Join hundreds of companies already using FinWage to reduce turnover, boost productivity, and create happier workplaces.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <Link
              href="/contact#demo"
              className={cn(
                "bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              )}
            >
              Book a Free Demo
            </Link>
            <Link
              href="/how-it-works"
              className={cn(
                "border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200"
              )}
            >
              See How It Works
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-semibold">5-Minute Setup</div>
              <div className="text-sm opacity-80">Quick integration with your payroll</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold">Zero Cash Flow Impact</div>
              <div className="text-sm opacity-80">We fund all employee advances</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5c-.268 0-.518.035-.75.1C14.044 4.157 11.15 2 7.72 2c-4.142 0-7.5 3.358-7.5 7.5 0 .379.03.748.085 1.107C.035 11.15 0 11.4 0 11.72c0 4.142 3.358 7.5 7.5 7.5" />
                </svg>
              </div>
              <div className="font-semibold">Bank-Grade Security</div>
              <div className="text-sm opacity-80">Fully compliant and secure</div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 text-center text-primary-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            <p className="text-sm">
              Questions? Call us at{" "}
              <a href="tel:1-800-FINWAGE" className="underline font-medium hover:text-primary-foreground">
                1-800-FINWAGE
              </a>
              {" "}or email{" "}
              <a href="mailto:sales@finwage.com" className="underline font-medium hover:text-primary-foreground">
                sales@finwage.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}