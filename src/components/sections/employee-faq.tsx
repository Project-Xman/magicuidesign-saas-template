"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "Is this a loan?",
    answer: "No, FinWage is not a loan. It's access to wages you've already earned. You're simply getting early access to your own money."
  },
  {
    question: "Are there any interest charges?",
    answer: "No, FinWage never charges interest. You only pay back exactly what you received, and many employers sponsor FinWage as a free benefit."
  },
  {
    question: "How much does it cost?",
    answer: "Many employers offer FinWage as a free benefit. When there is a cost, it's typically a small flat fee (usually $2-5) that's far less than overdraft fees or payday loan charges."
  },
  {
    question: "Will this affect my credit score?",
    answer: "No, FinWage does not require a credit check to sign up and does not report to credit bureaus. Your credit score is never affected."
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes, FinWage uses bank-level security with 256-bit encryption. Your data is never sold and we follow strict privacy policies. Your employer never knows when or why you access funds."
  },
  {
    question: "How quickly do I get my money?",
    answer: "Funds are typically available in your account within seconds of approval, 24/7 including weekends and holidays."
  },
  {
    question: "What if I change jobs?",
    answer: "If you change employers, you can continue using FinWage if your new employer offers it as a benefit. Any outstanding advances will be settled from your final paycheck."
  },
  {
    question: "Can I use FinWage if I'm paid biweekly or monthly?",
    answer: "Yes! FinWage works with any pay schedule. We track your earned wages daily regardless of when you're actually paid."
  }
];

export default function EmployeeFAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: ease as any}}
          >
            Your Questions, Answered
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: ease as any}}
          >
            Get answers to the most common questions about FinWage and earned wage access.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: ease as any}}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Support */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: ease as any}}
        >
          <h3 className="text-xl font-bold text-primary mb-4">
            Still have questions?
          </h3>
          <p className="text-secondary mb-6">
            Our support team is here to help 24/7. Get answers quickly and easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:support@finwage.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </Link>
            <Link
              href="tel:1-800-FINWAGE"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}