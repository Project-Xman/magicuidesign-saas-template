"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    title: "Integrate",
    description: "Securely connect FinWage to your existing HR & payroll system in minutes. Our team handles the heavy lifting.",
    details: [
      "API integration with 100+ payroll platforms",
      "White-glove setup by our technical team",  
      "Zero disruption to existing workflows",
      "Bank-grade security and compliance"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: "02", 
    title: "Onboard",
    description: "Invite your employees to the FinWage platform with our pre-built communication templates.",
    details: [
      "Ready-to-use email and SMS templates",
      "Multilingual support for diverse workforces",
      "HR dashboard for tracking adoption",
      "24/7 employee support during rollout"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Retain",
    description: "Offer a world-class benefit that reduces financial stress, boosts morale, and improves your bottom line.",
    details: [
      "Real-time analytics and reporting dashboard",
      "Track employee usage and satisfaction",
      "Measure impact on retention and productivity",
      "Dedicated account management support"
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function EmployerJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="employer-journey" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            A Zero-Disruption Setup in 3 Steps
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Implement a world-class employee benefit without changing your payroll process
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
                  activeStep === index ? 'bg-white text-blue-600' : 'bg-blue-200 text-blue-600'
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
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="aspect-video bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center space-y-4">
                    {/* Dashboard mockup content based on active step */}
                    {activeStep === 0 && (
                        <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Integration Setup</h4>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414L9 14.414l7.707-7.707a1 1 0 000-1.414z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">ADP Integration Complete</span>
                          </div>
                          <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414L9 14.414l7.707-7.707a1 1 0 000-1.414z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">Security Protocols Enabled</span>
                          </div>
                          <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                          </div>
                          <span className="text-sm text-gray-700">Testing Connection...</span>
                          </div>
                        </div>
                        </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Employee Onboarding</h4>
                          <span className="text-sm text-gray-500">847 employees</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Invitations Sent</span>
                            <span className="font-medium text-primary">847</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Signed Up</span>
                            <span className="font-medium text-primary">654</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '77%'}}></div>
                          </div>
                          <p className="text-xs text-gray-500 text-center">77% adoption rate</p>
                        </div>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">Impact Dashboard</h4>
                          <span className="text-sm text-gray-500">Last 30 days</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">-23%</div>
                            <div className="text-xs text-gray-600">Turnover Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">+15%</div>
                            <div className="text-xs text-gray-600">Employee NPS</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">$127K</div>
                            <div className="text-xs text-gray-600">Saved in Hiring</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">89%</div>
                            <div className="text-xs text-gray-600">Active Users</div>
                          </div>
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