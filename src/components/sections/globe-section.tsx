"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AuroraText } from "@/components/magicui/aurora-text";

const ease = [0.16, 1, 0.3, 1];

export default function GlobeSection() {
  return (
    <section id="globe-section" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl mb-4">
              Global Reach
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Connecting employees and employers worldwide with our innovative payroll solutions
            </p>
          </motion.div>

          {/* Globe with Cards Container */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Globe Container */}
            <motion.div
              className="relative flex items-center justify-center mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease }}
              viewport={{ once: true }}
            >
              <div className="relative h-[700px] w-[700px] md:h-[850px] md:w-[850px] lg:h-[700px] lg:w-[950px] mx-auto">
                <Globe />
              </div>
            </motion.div>

            {/* Step 1: Work - Left Top */}
            <motion.div
              className="absolute top-4 left-0 lg:left-8 xl:left-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-48">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-xl font-bold">Work</AuroraText>
                    <p className="text-sm text-gray-600 mt-1">Start your day</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 2: Earn - Bottom 20% */}
            <motion.div
              className="absolute bottom-4  left-[25%] lg:bottom-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-48">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-xl font-bold">Earn</AuroraText>
                    <p className="text-sm text-gray-600 mt-1">Generate income</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 3: Access Pay - Top at 55% */}
            <motion.div
              className="absolute top-4 left-[55%] lg:top-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-48">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-xl font-bold">Access Pay</AuroraText>
                    <p className="text-sm text-gray-600 mt-1">Get your wages</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 4: Peace of Mind - Bottom 60% */}
            <motion.div
              className="absolute bottom-4 left-[70%] lg:bottom-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-48">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-xl font-bold">Peace of Mind</AuroraText>
                    <p className="text-sm text-gray-600 mt-1">Financial security</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>


          </div>

          {/* Additional Content */}
          <motion.div
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Worldwide Coverage</h3>
              <p className="text-secondary">
                Supporting businesses and employees across multiple countries and time zones
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">Multi-Currency</h3>
              <p className="text-secondary">
                Handle payments in local currencies with automatic conversion and compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Secure & Compliant</h3>
              <p className="text-secondary">
                Meeting international standards for data protection and financial regulations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}