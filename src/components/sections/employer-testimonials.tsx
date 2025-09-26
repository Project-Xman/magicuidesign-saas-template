"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote: "Implementing FinWage helped us reduce early-stage turnover by 25% in just six months. It's a game-changer for employee retention.",
    author: "David L.",
    role: "HR Director",
    company: "Manufacturing Corp",
    results: {
      turnoverReduction: "25%",
      timeToROI: "6 months",
      employeeSatisfaction: "+18%"
    },
    avatar: "DL"
  },
  {
    quote: "Our employees love having access to their earned wages when they need them. It's reduced financial stress significantly and we've seen improved productivity.",
    author: "Sarah Chen",
    role: "Head of People Operations", 
    company: "Retail Solutions Inc",
    results: {
      turnoverReduction: "32%",
      timeToROI: "4 months",
      employeeSatisfaction: "+22%"
    },
    avatar: "SC"
  },
  {
    quote: "The integration was seamless and our payroll team didn't have to change anything. FinWage handles everything behind the scenes.",
    author: "Michael Rodriguez",
    role: "CFO",
    company: "Healthcare Partners",
    results: {
      turnoverReduction: "28%",
      timeToROI: "5 months", 
      employeeSatisfaction: "+20%"
    },
    avatar: "MR"
  }
];

const caseStudy = {
  company: "Global Logistics Corp",
  industry: "Transportation & Logistics",
  employees: 2400,
  challenge: "High turnover rates (45% annually) in warehouse and delivery roles, resulting in $3.2M yearly hiring costs",
  solution: "Implemented FinWage as an employee benefit to reduce financial stress and improve retention",
  results: [
    { metric: "Turnover Reduction", value: "31%", description: "From 45% to 31% annually" },
    { metric: "Cost Savings", value: "$1.4M", description: "Annual savings in hiring costs" },
    { metric: "Employee NPS", value: "+28 points", description: "Significant improvement in satisfaction" },
    { metric: "Time to Fill", value: "-35%", description: "Faster hiring due to improved reputation" }
  ],
  timeline: "Results achieved within 8 months of implementation"
};

export default function EmployerTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Trusted by Leading Employers
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            See how companies like yours are using FinWage to improve retention and boost employee satisfaction.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {/* Navigation */}
          <div className="flex justify-center mb-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-primary' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>

          {/* Active Testimonial */}
          <motion.div
            key={activeTestimonial}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                          <blockquote className="text-xl md:text-2xl font-medium text-primary mb-6 italic leading-relaxed">
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-semibold text-primary mb-4">Results Achieved</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Turnover Reduction</span>
                    <span className="font-semibold text-primary">
                      {testimonials[activeTestimonial].results.turnoverReduction}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Time to ROI</span>
                    <span className="font-semibold text-primary">
                      {testimonials[activeTestimonial].results.timeToROI}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Employee Satisfaction</span>
                    <span className="font-semibold text-primary">
                      {testimonials[activeTestimonial].results.employeeSatisfaction}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Case Study Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Featured Case Study
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-muted-foreground">
              <span className="font-semibold">{caseStudy.company}</span>
              <span className="hidden md:inline">•</span>
              <span>{caseStudy.industry}</span>
              <span className="hidden md:inline">•</span>
              <span>{caseStudy.employees.toLocaleString()} employees</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-primary mb-3">Challenge</h4>
              <p className="text-secondary mb-6">{caseStudy.challenge}</p>
              
              <h4 className="font-semibold text-primary mb-3">Solution</h4>
              <p className="text-secondary">{caseStudy.solution}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Results</h4>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center bg-card/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-secondary mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium">
              {caseStudy.timeline}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}