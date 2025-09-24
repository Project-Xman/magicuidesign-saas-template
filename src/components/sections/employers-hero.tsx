"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

export default function EmployersHero() {
  return (
    <section id="employers-hero" className="pt-32 pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            The Financial Wellness Benefit That Pays You Back
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Reduce turnover, attract top talent, and boost productivity with zero impact on your cash flow.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <Link
              href="/contact#demo"
              className={cn(
                buttonVariants({ variant: "default" }),
                "px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              )}
            >
              Book a Demo
            </Link>
            <Link
              href="#roi"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              )}
            >
              Calculate ROI
            </Link>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30%</div>
              <div className="text-secondary font-medium">Reduction in Turnover</div>
              <div className="text-sm text-muted-foreground mt-1">Average across all clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$0</div>
              <div className="text-secondary font-medium">Cash Flow Impact</div>
              <div className="text-sm text-muted-foreground mt-1">We fund all employee advances</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">78%</div>
              <div className="text-secondary font-medium">Would Switch for EWA</div>
              <div className="text-sm text-muted-foreground mt-1">Source: Employee Benefits Survey 2024</div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="bg-muted/30 rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            <h3 className="text-lg font-semibold text-primary mb-6">Trusted by Leading Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Company logos would go here - using placeholders */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-primary">ABC</span>
                </div>
                <span className="text-sm text-muted-foreground">ABC Corp</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-primary">XYZ</span>
                </div>
                <span className="text-sm text-muted-foreground">XYZ Industries</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-primary">DEF</span>
                </div>
                <span className="text-sm text-muted-foreground">DEF Solutions</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-primary">GHI</span>
                </div>
                <span className="text-sm text-muted-foreground">GHI Group</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}