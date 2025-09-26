"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Comprehensive security, availability, and confidentiality controls",
    status: "Certified"
  },
  {
    name: "PCI DSS Level 1",
    description: "Highest level of payment card industry data security standards",
    status: "Compliant"
  },
  {
    name: "GDPR",
    description: "Full compliance with European data protection regulations",
    status: "Compliant"
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance for data rights",
    status: "Compliant"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Certifications & Compliance
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            We maintain the industry&apos;s highest standards for security and regulatory compliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 border border-border text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Download Security Whitepaper CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Download Our Security Whitepaper
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Get detailed information about our security practices, compliance standards, and data protection measures.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Download Whitepaper
          </button>
        </motion.div>
      </div>
    </section>
  );
}