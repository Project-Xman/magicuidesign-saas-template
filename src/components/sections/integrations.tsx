"use client";

import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

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

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

function AnimatedIntegrationDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const finwageRef = useRef<HTMLDivElement>(null)
  const adpRef = useRef<HTMLDivElement>(null)
  const gustoRef = useRef<HTMLDivElement>(null)
  const quickbooksRef = useRef<HTMLDivElement>(null)
  const bambooRef = useRef<HTMLDivElement>(null)
  const workdayRef = useRef<HTMLDivElement>(null)
  const paychexRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[300px] max-w-2xl flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={adpRef} className="bg-blue-50">
            <span className="text-blue-600 font-bold text-sm">ADP</span>
          </Circle>
          <Circle ref={gustoRef} className="bg-green-50">
            <span className="text-green-600 font-bold text-sm">GUS</span>
          </Circle>
          <Circle ref={quickbooksRef} className="bg-yellow-50">
            <span className="text-yellow-600 font-bold text-sm">QB</span>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Circle ref={finwageRef} className="size-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border-primary">
            <span className="text-white font-bold text-lg">FW</span>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={bambooRef} className="bg-emerald-50">
            <span className="text-emerald-600 font-bold text-sm">BHR</span>
          </Circle>
          <Circle ref={workdayRef} className="bg-orange-50">
            <span className="text-orange-600 font-bold text-sm">WD</span>
          </Circle>
          <Circle ref={paychexRef} className="bg-purple-50">
            <span className="text-purple-600 font-bold text-sm">PCX</span>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={adpRef}
        toRef={finwageRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gustoRef}
        toRef={finwageRef}
        curvature={-30}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={quickbooksRef}
        toRef={finwageRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bambooRef}
        toRef={finwageRef}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={workdayRef}
        toRef={finwageRef}
        curvature={30}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={paychexRef}
        toRef={finwageRef}
        curvature={75}
        endYOffset={10}
      />
    </div>
  )
}

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
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Connect your payroll system in under 10 minutes with our automated setup wizard.</p>
          </div>

              <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                className="h-8 w-8 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                >
                <path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z"></path>
                </svg>
              </div>
              <h3 className="text-xl fo</svg>nt-semibold text-primary mb-2">Bank-Grade Security</h3>
              <p className="text-muted-foreground">All data is encrypted in transit and at rest with industry-leading security protocols.</p>
              </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Zero Disruption</h3>
            <p className="text-muted-foreground">Your existing payroll process stays exactly the same. We handle everything behind the scenes.</p>
          </div>
        </motion.div>

        {/* Animated Integration Demo */}
        <motion.div
          className="text-center mt-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            See How FinWage Connects Everything
          </h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Watch the magic happen as FinWage seamlessly connects with your existing payroll systems
          </p>
          <AnimatedIntegrationDemo />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
        >
          <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-8 text-center max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don&apos;t see your system? No problem.
            </h3>
            <p className="text-white/90 mb-6">
              Our team can integrate with virtually any payroll or HR system.             Get in touch and we&apos;ll make it happen.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-white/90 hover:text-blue-700 transition-all duration-200 shadow-lg">
              Contact Integration Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}