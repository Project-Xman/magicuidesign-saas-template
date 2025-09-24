"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1];

export default function AppDownload() {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Get Started Today
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Download the FinWage app and take control of your finances. Access your earned wages whenever you need them.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="h-8 w-8" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="h-8 w-8" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-33.6-81.5 81.5 81.5 81.5 58.9-33.6c16.2-9.2 16.2-32.4 0-41.6l-58.9-33.6 58.9-33.6c16.2-9.2 16.2-32.4 0-41.6zm-425.2 41.8L104.6 499l280.8-161.2-60.1-60.1L47 267.4z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            className="relative max-w-lg mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease }}
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Now</h4>
                      <div className="text-3xl font-bold text-primary mb-1">$247.50</div>
                      <p className="text-sm text-gray-600">60% of earned wages</p>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                        Request $200
                      </button>
                      <p className="text-xs text-gray-500">Funds available instantly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                24/7 Available
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                No Credit Check
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-semibold">Instant Transfer</div>
              <div className="text-sm opacity-80">Money in seconds, not days</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5c-.268 0-.518.035-.75.1C14.044 4.157 11.15 2 7.72 2c-4.142 0-7.5 3.358-7.5 7.5 0 .379.03.748.085 1.107C.035 11.15 0 11.4 0 11.72c0 4.142 3.358 7.5 7.5 7.5" />
                </svg>
              </div>
              <div className="font-semibold">Secure & Private</div>
              <div className="text-sm opacity-80">Bank-level security guaranteed</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="font-semibold">Simple & Easy</div>
              <div className="text-sm opacity-80">Setup in under 5 minutes</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}