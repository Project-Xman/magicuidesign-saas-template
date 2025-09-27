"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

export default function EmployeesHero() {
  return (
    <section id="employees-hero" className="pt-32 pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Access Your Pay When You Need It. No Waiting, No Stress.
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Say goodbye to payday loans and overdraft fees. With FinWage, you can             Access the money you&apos;ve already earned, whenever you need it.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <Link
              href="#download"
              className={cn(
                buttonVariants({ variant: "default" }),
                "px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
              )}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Download App
            </Link>
            <Link
              href="#benefits"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              )}
            >
              Learn More
            </Link>
          </motion.div>

          {/* Key Benefits Preview */}
              <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              >
              <div className="text-center text-black">
                <div className="w-16 h-16 bg-red-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-sm">Funds hit your account in seconds, 24/7</p>
              </div>
              <div className="text-center text-black">
                <div className="w-16 h-16 bg-green-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h3 className="font-semibold mb-2">Free or Low-Cost</h3>
                <p className="text-sm">Far cheaper than overdrafts or payday loans</p>
              </div>
              <div className="text-center text-black">
                <div className="w-16 h-16 bg-yellow-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5c-.268 0-.518.035-.75.1C14.044 4.157 11.15 2 7.72 2c-4.142 0-7.5 3.358-7.5 7.5 0 .379.03.748.085 1.107C.035 11.15 0 11.4 0 11.72c0 4.142 3.358 7.5 7.5 7.5" />
                </svg>
                </div>
                <h3 className="font-semibold mb-2">No Credit Check</h3>
                <p className="text-sm">Your employment is your credit</p>
              </div>
              </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-4 border border-primary/30">
              <div className="bg-card rounded-2xl p-6 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Available Balance</h4>
                    <div className="text-3xl font-bold text-primary">$347.50</div>
                    <p className="text-sm text-muted-foreground">60% of earned wages</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium">
                    Request Advance
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Message */}
            <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            >
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              {[
              "Totally confidential",
              "Available 24/7",
              "No hidden fees",
              "Your employer never knows",
              ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm md:text-base">
                <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
                </svg>
                {item}
              </span>
              ))}
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}