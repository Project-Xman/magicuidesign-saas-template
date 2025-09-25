"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function AboutHero() {
  return (
    <section id="about-hero" className="pt-32 pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Our Mission: To End Financial Stress and Empower the Workforce
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            We believe that working people shouldn't have to wait for payday to access the money they've already earned. FinWage is changing the way people think about paydays and financial wellness.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">78%</div>
              <div className="text-secondary font-medium">Of workers live paycheck to paycheck</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$35B</div>
              <div className="text-secondary font-medium">Spent annually on overdraft fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50%</div>
              <div className="text-secondary font-medium">Of financial stress impacts work performance</div>
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              "Finwage is your wage."
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              This simple statement represents our core belief: the money you earn through your hard work should be accessible to you when you need it, not when it's convenient for traditional payroll schedules. We're building a world where financial emergencies don't become financial disasters.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}