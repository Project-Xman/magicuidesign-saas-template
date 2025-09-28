"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { SparklesText } from "@/components/ui/sparkles-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "5-Minute Payroll Processing",
    titleComponent: (
      <span>
        <NumberTicker value={5} delay={0.5} />-Minute Payroll Processing
      </span>
    ),
    description:
      "Process unlimited employees in minutes, not hours. Our AI handles all calculations, tax deductions, and compliance checks automatically.",
    className:
      "hover:bg-pink-100 dark:hover:bg-pink-900/20 transition-all duration-500 ease-out",
    content: (
      <>
        <Safari
          src={`/dashboard.png`}
          url="https://fincorp.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Instant Wage Access",
    description:
      "Employees access earned wages instantly through our app—no waiting, no stress, no payday loan debt. Happy employees, better retention.",
    className:
      "order-3 xl:order-0 hover:bg-green-100 dark:hover:bg-green-900/20 transition-all duration-500 ease-out",
    content: (
      <Safari
        src={`/dashboard.png`}
        url="https://fincorp.com"
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: "Zero-Error Compliance",
    titleComponent: (
      <span>
        <NumberTicker value={99.9} decimalPlaces={1} delay={1.0} />% Accurate Compliance
      </span>
    ),
    description:
      "Our AI stays updated with all tax regulations automatically. Every payroll is 99.9% accurate with built-in audit trails and compliance reporting.",
    className:
      "md:row-span-2 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-all duration-500 ease-out",
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src={`/dashboard.png`}
          url="https://fincorp.com"
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Complete HR Freedom",
    description:
      "Free your HR team from payroll drudgery. Focus on strategic initiatives while FinWage handles the complex, time-consuming calculations.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-0 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-500 ease-out",
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/dashboard.png`}
          url="https://fincorp.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      titleComponent={
        <SparklesText 
          colors={{ first: "#c6537f", second: "#1e44c1" }}
          sparklesCount={12}
        >
          The <span className="text-[#f54462]">FinWage</span> Solution
        </SparklesText>
      }
      subtitle="Everything your payroll needs, automated and error-free"
      description="Stop spending hours on payroll. FinWage's AI-powered platform handles everything—from calculations to compliance—so you can focus on growing your business."
      className="bg-primary-light/20 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-bold mb-2 text-[#1d45c3]">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
