"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Mission() {
  return (
    <section id="mission" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why We Started FinWage
              </h2>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  Every two weeks, millions of workers wait for payday while bills pile up and emergencies arise. Traditional financial products like payday loans and credit cards trap people in cycles of debt with predatory rates and hidden fees.
                </p>
                <p>
                  We founded FinWage because we believe there's a better way. By connecting directly with employers and payroll systems, we can provide workers with instant access to their earned wages without the need for loans, credit checks, or exploitative fees.
                </p>
                <p>
                  Our platform serves both employees and employers, creating a win-win solution that reduces financial stress while improving employee retention and satisfaction.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">Our Impact</h3>
              <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1M+
                </div>
                <div>
                <div className="font-semibold text-secondary">Employees Served</div>
                <div className="text-sm text-muted-foreground">
                  Across hundreds of companies
                </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 shrink-0 bg-yellow-400 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                $5M+
                </div>
                <div>
                <div className="font-semibold text-secondary">In Wage Advances</div>
                <div className="text-sm text-muted-foreground">
                  Provided to workers in need
                </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                30%
                </div>
                <div>
                <div className="font-semibold text-secondary">
                  Average Turnover Reduction
                </div>
                <div className="text-sm text-muted-foreground">For partner companies</div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}