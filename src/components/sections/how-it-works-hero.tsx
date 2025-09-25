"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

const ease = [0.16, 1, 0.3, 1];

export default function HowItWorksHero() {
  return (
    <section id="how-it-works-hero" className="pt-32 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Simple for Employees. Seamless for Employers.
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            See how FinWage provides on-demand pay without disrupting your payroll workflow.
          </motion.h2>

          {/* Flow Diagram */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
          >
            {/* Employer System */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">Employer</h3>
              <p className="text-sm text-muted-foreground text-center">Payroll System</p>
            </div>

            {/* Arrow */}
            <motion.div 
              className="flex items-center"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>

            {/* FinWage */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Icons.logo className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-primary">FinWage</h3>
              <p className="text-sm text-muted-foreground text-center">Secure Platform</p>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex items-center"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>

            {/* Employee */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary">Employee</h3>
              <p className="text-sm text-muted-foreground text-center">Mobile App</p>
            </div>
          </motion.div>

          {/* Data Flow Description */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-primary mb-2">Data Flow</h4>
              <p className="text-muted-foreground">Secure, real-time sync between your payroll system and FinWage platform</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-secondary mb-2">Fund Flow</h4>
              <p className="text-muted-foreground">Direct transfer from FinWage to employee accounts, repaid from next paycheck</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}