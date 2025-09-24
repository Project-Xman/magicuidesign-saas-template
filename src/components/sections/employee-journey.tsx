"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Download the app and securely connect to your employer's payroll.",
    details: [
      "Simple verification process with your employee ID",
      "Bank-grade security for all connections",
      "Setup completed in under 5 minutes"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    number: "02", 
    title: "Track & Access",
    description: "See your available earnings grow after each shift. Tap to transfer funds when you need them.",
    details: [
      "Real-time tracking of earned wages",
      "Access up to 60% of earned pay instantly",
      "Available 24/7, even on weekends and holidays"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Auto-Repay", 
    description: "On payday, your advance is automatically deducted. No interest, no late fees, no hassle.",
    details: [
      "Seamless integration with payroll deductions",
      "Never pay more than you borrowed",
      "No impact on credit score or employment record"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function EmployeeJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="employee-journey" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Access Your Earned Wages in 3 Steps
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Your hard-earned money, available when you need it most
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary'
                }`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  activeStep === index ? 'bg-primary-foreground text-primary' : 'bg-primary/20 text-primary'
                }`}>
                  {step.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium opacity-70">{step.number}</div>
                  <div className="font-semibold">{step.title}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Step {steps[activeStep].number}</div>
                    <h3 className="text-2xl font-bold text-primary">{steps[activeStep].title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-secondary mb-6">
                  {steps[activeStep].description}
                </p>

                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="aspect-square max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center space-y-4">
                    {/* Phone mockup content based on active step */}
                    {activeStep === 0 && (
                      <>
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900">Welcome to FinWage</h4>
                          <p className="text-sm text-gray-600">Let's get you set up</p>
                        </div>
                        <button className="w-full bg-primary text-white py-2 rounded-lg font-medium">
                          Connect to Payroll
                        </button>
                      </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <div className="w-full space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Available Balance</span>
                            <span className="text-2xl font-bold text-primary">$247.50</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <p className="text-xs text-gray-500 text-center">60% of earned wages available</p>
                        </div>
                        <button className="w-full bg-accent text-white py-3 rounded-lg font-medium">
                          Request Advance
                        </button>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900">Auto-Repayment Active</h4>
                          <p className="text-sm text-gray-600">Next payday: March 15</p>
                          <p className="text-xs text-gray-500 mt-2">$150.00 will be deducted</p>
                        </div>
                        <div className="w-full bg-green-100 text-green-800 py-2 rounded-lg text-center text-sm font-medium">
                          No Action Required
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}