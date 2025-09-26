"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { PinContainer, PinProvider } from "@/components/ui/3d-pin";
import { AuroraText } from "@/components/magicui/aurora-text";

const ease = [0.16, 1, 0.3, 1];

export default function GlobeSection() {
  // Define icons for each pin
  const workIcon = (
    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 256 256">
      <path d="M100,100a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,100ZM236,68V196a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V68A20,20,0,0,1,40,48H76V40a28,28,0,0,1,28-28h48a28,28,0,0,1,28,28v8h36A20,20,0,0,1,236,68ZM100,48h56V40a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4ZM44,72v35.23A180.06,180.06,0,0,0,128,128a180,180,0,0,0,84-20.78V72ZM212,192V133.94A204.27,204.27,0,0,1,128,152a204.21,204.21,0,0,1-84-18.06V192Z"></path>
    </svg>
  );

  const earnIcon = (
    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const accessPayIcon = (
    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 256 256">
      <path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,24V88H36V68ZM36,188V112H220v76Zm172-24a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,164Zm-68,0a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h12A12,12,0,0,1,140,164Z"></path>
    </svg>
  );

  const peaceOfMindIcon = (
    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  return (
    <PinProvider>
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl mb-4">
                Product Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The journey of product - from work to financial peace of mind
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
                <PinContainer 
                  containerClassName="w-64 h-56" 
                  title="Work" 
                  icon={
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4a6fd9]/20 via-white/30 to-[#6b8ef0]/20 rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        {workIcon}
                      </div>
                    </div>
                  }
                  subheading="Begin your professional journey with meaningful work opportunities that align with your skills and career aspirations. Connect with employers who value your expertise and dedication."
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div>
                      <AuroraText className="text-xl font-bold">Work</AuroraText>
                      <p className="text-sm text-muted-foreground mt-1">Start your day</p>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>

              {/* Arrow from Work to Earn */}
              <motion.div
                className="absolute !top-[41%] left-[23%] z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                viewport={{ once: true }}
              >
                 <svg width="105" height="171" viewBox="0 0 105 171" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-28 lg:w-24 lg:h-32">
                  <path d="M86.0002 103.188L88.5002 103.188L88.5002 101.377L86.7791 100.813L86.0002 103.188ZM84.2324 169.455C85.2087 170.432 86.7916 170.432 87.768 169.455L103.678 153.545C104.654 152.569 104.654 150.986 103.678 150.01C102.702 149.034 101.119 149.034 100.142 150.01L86.0002 164.152L71.8581 150.01C70.8817 149.034 69.2988 149.034 68.3225 150.01C67.3462 150.986 67.3462 152.569 68.3225 153.545L84.2324 169.455ZM25 83.1875L22.5854 83.8353L22.9359 85.1417L24.2211 85.5631L25 83.1875ZM86.0002 103.188L83.5002 103.188L83.5002 167.687L86.0002 167.688L88.5002 167.688L88.5002 103.188L86.0002 103.188ZM3.00086 1.18896L0.586252 1.83677L22.5854 83.8353L25 83.1875L27.4146 82.5397L5.41547 0.541151L3.00086 1.18896ZM25 83.1875L24.2211 85.5631L85.2213 105.564L86.0002 103.188L86.7791 100.813L25.7789 80.8119L25 83.1875Z" fill="url(#paint0_linear_194_101)"/>
                  <defs>
                    <linearGradient id="paint0_linear_194_101" x1="7.45772" y1="23.0208" x2="74.4577" y2="168.021" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1A61FD"/>
                      <stop offset="1" stopColor="#A8A8A9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Step 2: Earn - Bottom 20% */}
              <motion.div
                className="absolute bottom-4  left-[25%] lg:bottom-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <PinContainer 
                  containerClassName="w-64 h-56" 
                  title="Earn" 
                  icon={
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4a6fd9]/20 via-white/30 to-[#6b8ef0]/20 rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        {earnIcon}
                      </div>
                    </div>
                  }
                  subheading="Generate income"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div>
                      <AuroraText className="text-xl font-bold">Earn</AuroraText>
                      <p className="text-sm text-muted-foreground mt-1">Generate income</p>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>

              {/* Arrow from Earn to Access Pay */}
              <motion.div
                className="absolute top-[46%] left-[54%] z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <svg width="163" height="271" viewBox="0 0 163 271" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-36 lg:w-28 lg:h-40">
                  <path d="M61.0025 86.6867L60.0552 84.3731L58.677 84.9374L58.517 86.418L61.0025 86.6867ZM124.501 60.687L125.449 63.0005L126.345 62.6334L126.76 61.758L124.501 60.687ZM154.355 1.84666C153.891 0.546223 152.461 -0.131932 151.161 0.331985L129.969 7.89198C128.668 8.35589 127.99 9.78619 128.454 11.0866C128.918 12.3871 130.348 13.0652 131.649 12.6013L150.486 5.8813L157.206 24.7185C157.67 26.019 159.1 26.6971 160.401 26.2332C161.701 25.7693 162.379 24.339 161.915 23.0386L154.355 1.84666ZM51.0014 179.187L53.2049 180.368L53.4347 179.939L53.4869 179.456L51.0014 179.187ZM61.0025 86.6867L61.9498 89.0003L125.449 63.0005L124.501 60.687L123.554 58.3734L60.0552 84.3731L61.0025 86.6867ZM124.501 60.687L126.76 61.758L154.26 3.75769L152.001 2.68665L149.742 1.61562L122.242 59.6159L124.501 60.687ZM2.50189 269.685L4.70541 270.866L53.2049 180.368L51.0014 179.187L48.7979 178.006L0.298382 268.504L2.50189 269.685ZM51.0014 179.187L53.4869 179.456L63.488 86.9554L61.0025 86.6867L58.517 86.418L48.5159 178.918L51.0014 179.187Z" fill="url(#paint0_linear_194_100)"/>
                  <defs>
                    <linearGradient id="paint0_linear_194_100" x1="133.539" y1="-6.68155" x2="-1.46073" y2="259.318" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#AFAFAF"/>
                      <stop offset="1" stopColor="#286BFD"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Step 3: Access Pay - Top at 55% */}
              <motion.div
                className="absolute top-4 left-[55%] lg:top-8"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <PinContainer 
                  containerClassName="w-64 h-56" 
                  title="Access Pay" 
                  icon={
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4a6fd9]/20 via-white/30 to-[#6b8ef0]/20 rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        {accessPayIcon}
                      </div>
                    </div>
                  }
                  subheading="Get your wages"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div>
                      <AuroraText className="text-xl font-bold">Access Pay</AuroraText>
                      <p className="text-sm text-muted-foreground mt-1">Get your wages</p>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>

              {/* Arrow from Access Pay to Peace of Mind */}
              <motion.div
                className="absolute top-[41%] left-[83%] z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <svg width="105" height="171" viewBox="0 0 105 171" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-28 lg:w-24 lg:h-32">
                  <path d="M86.0002 103.188L88.5002 103.188L88.5002 101.377L86.7791 100.813L86.0002 103.188ZM84.2324 169.455C85.2087 170.432 86.7916 170.432 87.768 169.455L103.678 153.545C104.654 152.569 104.654 150.986 103.678 150.01C102.702 149.034 101.119 149.034 100.142 150.01L86.0002 164.152L71.8581 150.01C70.8817 149.034 69.2988 149.034 68.3225 150.01C67.3462 150.986 67.3462 152.569 68.3225 153.545L84.2324 169.455ZM25 83.1875L22.5854 83.8353L22.9359 85.1417L24.2211 85.5631L25 83.1875ZM86.0002 103.188L83.5002 103.188L83.5002 167.687L86.0002 167.688L88.5002 167.688L88.5002 103.188L86.0002 103.188ZM3.00086 1.18896L0.586252 1.83677L22.5854 83.8353L25 83.1875L27.4146 82.5397L5.41547 0.541151L3.00086 1.18896ZM25 83.1875L24.2211 85.5631L85.2213 105.564L86.0002 103.188L86.7791 100.813L25.7789 80.8119L25 83.1875Z" fill="url(#paint0_linear_194_101)"/>
                  <defs>
                    <linearGradient id="paint0_linear_194_101" x1="7.45772" y1="23.0208" x2="74.4577" y2="168.021" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1A61FD"/>
                      <stop offset="1" stopColor="#A8A8A9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Step 4: Peace of Mind - Bottom 60% */}
              <motion.div
                className="absolute bottom-4 left-[70%] lg:bottom-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <PinContainer 
                  containerClassName="w-64 h-56" 
                  title="Peace of Mind" 
                  icon={
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4a6fd9]/20 via-white/30 to-[#6b8ef0]/20 rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        {peaceOfMindIcon}
                      </div>
                    </div>
                  }
                  subheading="Financial security"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div>
                      <AuroraText className="text-xl font-bold">Peace of Mind</AuroraText>
                      <p className="text-sm text-muted-foreground mt-1">Financial security</p>
                    </div>
                  </div>
                </PinContainer>
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
                <h3 className="text-xl font-semibold text-foreground mb-2">Worldwide Coverage</h3>
                <p className="text-muted-foreground">
                  Supporting businesses and employees across multiple countries and time zones
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Currency</h3>
                <p className="text-muted-foreground">
                Handle payments in local currencies with automatic conversion and compliance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Compliant</h3>
                <p className="text-muted-foreground">
                  Meeting international standards for data protection and financial regulations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PinProvider>
  );
}