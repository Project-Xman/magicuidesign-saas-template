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
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease }}
              viewport={{ once: true }}
            >
              <div className="relative h-[600px] w-[600px] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px]">
                <Globe />
              </div>
            </motion.div>

            {/* Step 1: Work - Left Side */}
            <motion.div
              className="absolute top-1/2 left-0 lg:left-8 xl:left-16 transform -translate-y-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-32 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-lg font-bold">Work</AuroraText>
                    <p className="text-sm text-gray-600">Start your day</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 2: Earn - Top Center */}
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 lg:top-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-32 bg-gradient-to-br from-green-100 to-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-lg font-bold">Earn</AuroraText>
                    <p className="text-sm text-gray-600">Generate income</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 3: Access Pay - Right Side */}
            <motion.div
              className="absolute top-1/2 right-0 lg:right-8 xl:right-16 transform -translate-y-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-32 bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-lg font-bold">Access Pay</AuroraText>
                    <p className="text-sm text-gray-600">Get your wages</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Step 4: Peace of Mind - Bottom Center */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <WobbleCard containerClassName="w-64 h-32 bg-gradient-to-br from-orange-100 to-orange-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <AuroraText className="text-lg font-bold">Peace of Mind</AuroraText>
                    <p className="text-sm text-gray-600">Financial security</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>

            {/* Dotted Curved Arrow 1: Work → Earn */}
            <motion.svg 
              className="absolute top-[25%] left-[25%] w-32 h-32 text-primary opacity-70 pointer-events-none"
              viewBox="0 0 128 128" 
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.7, pathLength: 1 }}
              transition={{ duration: 1.5, ease, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.path 
                d="M20 80 Q64 20 108 48" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="8,8"
                markerEnd="url(#arrowhead1)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease, delay: 1.0 }}
              />
              <defs>
                <marker id="arrowhead1" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                  <polygon points="0 0, 12 4, 0 8" fill="currentColor" />
                </marker>
              </defs>
            </motion.svg>

            {/* Dotted Curved Arrow 2: Earn → Access Pay */}
            <motion.svg 
              className="absolute top-[25%] right-[25%] w-32 h-32 text-accent opacity-70 pointer-events-none"
              viewBox="0 0 128 128" 
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.7, pathLength: 1 }}
              transition={{ duration: 1.5, ease, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.path 
                d="M20 48 Q64 20 108 80" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="8,8"
                markerEnd="url(#arrowhead2)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease, delay: 1.2 }}
              />
              <defs>
                <marker id="arrowhead2" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                  <polygon points="0 0, 12 4, 0 8" fill="currentColor" />
                </marker>
              </defs>
            </motion.svg>

            {/* Dotted Curved Arrow 3: Access Pay → Peace of Mind */}
            <motion.svg 
              className="absolute bottom-[25%] right-[25%] w-32 h-32 text-secondary opacity-70 pointer-events-none"
              viewBox="0 0 128 128" 
              fill="none"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.7, pathLength: 1 }}
              transition={{ duration: 1.5, ease, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <motion.path 
                d="M108 20 Q64 60 20 108" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="8,8"
                markerEnd="url(#arrowhead3)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease, delay: 1.4 }}
              />
              <defs>
                <marker id="arrowhead3" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                  <polygon points="0 0, 12 4, 0 8" fill="currentColor" />
                </marker>
              </defs>
            </motion.svg>
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