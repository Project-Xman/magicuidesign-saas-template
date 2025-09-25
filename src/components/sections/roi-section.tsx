"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1];

export default function ROISection() {
  const [employees, setEmployees] = useState<number>(100);
  const [turnoverRate, setTurnoverRate] = useState<number>(25);
  const [avgSalary, setAvgSalary] = useState<number>(35000);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const hiringCost = avgSalary * 0.5; // 50% of salary for hiring cost
    const currentTurnoverCost = (employees * turnoverRate / 100) * hiringCost;
    const reducedTurnoverCost = currentTurnoverCost * 0.7; // 30% reduction
    const annualSavings = currentTurnoverCost - reducedTurnoverCost;
    const finwageCost = employees * 2.99 * 12; // $2.99 per employee per month
    const netSavings = annualSavings - finwageCost;
    const roi = ((netSavings / finwageCost) * 100);

    return {
      currentTurnoverCost: Math.round(currentTurnoverCost),
      annualSavings: Math.round(annualSavings),
      finwageCost: Math.round(finwageCost),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <section id="roi" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Calculate Your ROI
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            See how much FinWage could save your company in reduced turnover costs and improved retention.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Company Information</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="employees" className="text-sm font-medium text-secondary">
                      Number of Employees
                    </Label>
                    <Input
                      id="employees"
                      type="number"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="mt-1"
                      min="1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="turnover" className="text-sm font-medium text-secondary">
                      Annual Turnover Rate (%)
                    </Label>
                    <Input
                      id="turnover"
                      type="number"
                      value={turnoverRate}
                      onChange={(e) => setTurnoverRate(Number(e.target.value))}
                      className="mt-1"
                      min="0"
                      max="100"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      US average is 47% for hourly workers
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="salary" className="text-sm font-medium text-secondary">
                      Average Annual Salary ($)
                    </Label>
                    <Input
                      id="salary"
                      type="number"
                      value={avgSalary}
                      onChange={(e) => setAvgSalary(Number(e.target.value))}
                      className="mt-1"
                      min="0"
                    />
                  </div>

                  <Button 
                    onClick={handleCalculate}
                    className="w-full"
                    size="lg"
                  >
                    Calculate My ROI
                  </Button>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Your Potential Savings</h3>
                {showResults ? (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          ${results.netSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-secondary">Annual Net Savings</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Current Turnover Cost</span>
                        <span className="font-semibold text-destructive">
                          ${results.currentTurnoverCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Annual Savings (30% reduction)</span>
                        <span className="font-semibold text-secondary">
                          ${results.annualSavings.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">FinWage Annual Cost</span>
                        <span className="font-semibold">
                          ${results.finwageCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 font-bold text-lg">
                        <span className="text-primary">ROI</span>
                        <span className="text-primary">
                          {results.roi}%
                        </span>
                      </div>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <p className="text-sm text-secondary font-medium">
                        💡 This calculation assumes a 30% reduction in turnover, which is the average across our client base.
                      </p>
                    </div>

                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => {
                        // In a real app, this would open a modal or navigate to a contact form
                        window.open('/contact#demo', '_blank');
                      }}
                    >
                      Get Custom ROI Report
                    </Button>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <svg className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <p>Enter your company details to see potential savings</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">90 days</div>
              <div className="text-sm text-muted-foreground">Average time to ROI</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">$15,000</div>
              <div className="text-sm text-muted-foreground">Average cost per hire</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Average turnover reduction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}