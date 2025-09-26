"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const privacyPrinciples = [
  {
    title: "Data Minimization",
    description: "We only collect the minimum data necessary to provide our services."
  },
  {
    title: "Purpose Limitation",
    description: "Your data is used only for the purposes you've explicitly agreed to."
  },
  {
    title: "Transparency",
    description: "You always know what data we have and how we're using it."
  },
  {
    title: "User Control",
    description: "You have full control over your data with options to view, update, or delete."
  },
  {
    title: "No Data Sales",
    description: "We never sell, rent, or share your personal data with third parties."
  },
  {
    title: "Secure Storage",
    description: "All data is stored with enterprise-grade encryption and access controls."
  }
];

export default function PrivacyCommitment() {
  return (
    <section id="privacy" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Our Privacy Commitment
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Your privacy is fundamental to our mission. We've built FinWage with privacy-first principles that go beyond compliance to ensure your personal and financial data is always protected.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {privacyPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <h3 className="font-bold text-primary mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact for Security Questions */}
        <motion.div
          className="text-center bg-card rounded-2xl p-8 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <h3 className="text-xl font-bold text-primary mb-4">
            Questions About Security or Privacy?
          </h3>
          <p className="text-secondary mb-6">
            Our security team is available to answer any questions about our data protection practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@finwage.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Security Team
            </a>
            <a
              href="/legal/privacy"
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}