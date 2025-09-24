"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const integrations = [
  { name: "ADP", logo: "/integrations/adp.svg" },
  { name: "Gusto", logo: "/integrations/gusto.svg" },
  { name: "QuickBooks", logo: "/integrations/quickbooks.svg" },
  { name: "Paychex", logo: "/integrations/paychex.svg" },
  { name: "BambooHR", logo: "/integrations/bamboohr.svg" },
  { name: "Workday", logo: "/integrations/workday.svg" },
  { name: "UltiPro", logo: "/integrations/ultipro.svg" },
  { name: "Paycom", logo: "/integrations/paycom.svg" },
  { name: "Rippling", logo: "/integrations/rippling.svg" },
  { name: "Kronos", logo: "/integrations/kronos.svg" },
  { name: "Zenefits", logo: "/integrations/zenefits.svg" },
  { name: "Square", logo: "/integrations/square.svg" }
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Works With Your Existing Systems
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            FinWage integrates seamlessly with over 100 HR and payroll platforms. Setup takes minutes, not months.
          </motion.p>
        </div>

        {/* Integration Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              whileHover={{ scale: 1.05 }}
            >
              {/* For now, using text placeholders - in a real implementation, you'd use actual logos */}
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-primary font-bold text-lg">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {integration.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Connect your payroll system in under 10 minutes with our automated setup wizard.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5c-.268 0-.518.035-.75.1C14.044 4.157 11.15 2 7.72 2c-4.142 0-7.5 3.358-7.5 7.5 0 .379.03.748.085 1.107C.035 11.15 0 11.4 0 11.72c0 4.142 3.358 7.5 7.5 7.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-accent mb-2">Bank-Grade Security</h3>
            <p className="text-muted-foreground">All data is encrypted in transit and at rest with industry-leading security protocols.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Zero Disruption</h3>
            <p className="text-muted-foreground">Your existing payroll process stays exactly the same. We handle everything behind the scenes.</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't see your system? No problem.
            </h3>
            <p className="text-white/90 mb-6">
              Our team can integrate with virtually any payroll or HR system. Get in touch and we'll make it happen.
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              Contact Integration Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}