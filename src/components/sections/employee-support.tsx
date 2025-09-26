"use client";

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";

const ease = [0.16, 1, 0.3, 1];

const supportOptions = [
  {
    title: "Email Support",
    description: "Get help with your account, technical issues, or general questions.",
    contact: "support@finwage.com",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Phone Support",
    description: "Speak directly with our support team for immediate assistance.",
    contact: "1-800-FINWAGE",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: "Live Chat",
    description: "Chat with our team directly in the app for real-time support.",
    contact: "Available in app",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

const faqs = [
  "How do I sign up for FinWage?",
  "When will I receive my advance?",
  "What fees does FinWage charge?",
  "Is my information secure?",
  "How do I update my bank account?"
];

export default function EmployeeSupport() {
  return (
    <motion.div
      className="relative bg-card rounded-2xl p-8 border border-border shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease }}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <h2 className="text-2xl font-bold text-primary mb-2">Employee Support</h2>
      <p className="text-muted-foreground mb-6">Need help with your FinWage account? We're here 24/7.</p>
      
      <div className="space-y-6 mb-8">
        {supportOptions.map((option, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
              {option.icon}
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
              <div className="text-primary font-medium">{option.contact}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-secondary mb-4">Quick Help</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <a 
              key={index}
              href="/employees#faq"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              • {faq}
            </a>
          ))}
        </div>
        <a 
          href="/employees#faq"
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium mt-4"
        >
          View all FAQs
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}