"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CometCard } from "@/components/ui/comet-card";
import { GlareCard } from "@/components/ui/glare-card";
import Section from "@/components/section";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  FileText,
  LineChart,
  Shield,
  Users,
  Zap,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    Icon: Shield,
    name: "Secure Payroll Processing",
    description: "Bank-grade security with end-to-end encryption for all payroll transactions.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Zap,
    name: "Lightning Fast Processing",
    description: "Process thousands of payrolls in minutes with our automated system.",
    href: "#",
    cta: "See speed",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Brain,
    name: "AI-Powered Compliance",
    description: "Stay compliant with automatic tax calculations and regulatory updates.",
    href: "#",
    cta: "Explore AI",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Users,
    name: "Employee Self-Service",
    description: "Empower employees with 24/7 access to payslips, benefits, and HR info.",
    href: "#",
    cta: "View portal",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: BarChart3,
    name: "Advanced Analytics",
    description: "Comprehensive reporting and insights to optimize your payroll strategy.",
    href: "#",
    cta: "View reports",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: FileText,
    name: "Automated Reporting",
    description: "Generate compliance-ready reports and statements automatically.",
    href: "#",
    cta: "Generate reports",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    ),
    className: "lg:col-span-1 lg:row-span-1",
  },
];

const interactiveFeatures = [
  {
    title: "Real-time Payroll Tracking",
    description: "Monitor payroll status in real-time with live updates and notifications.",
    icon: <Clock className="h-8 w-8 text-primary" />,
    stats: "99.9% Uptime",
  },
  {
    title: "Cost Optimization",
    description: "Reduce payroll costs by up to 30% with intelligent automation and insights.",
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    stats: "30% Savings",
  },
  {
    title: "Compliance Assurance",
    description: "100% compliance guarantee with automatic updates to tax laws and regulations.",
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    stats: "100% Compliant",
  },
];

export default function Component() {
  return (
    <>
      {/* Key Metrics Section */}
      <Section
        title="Trusted by Industry Leaders"
        subtitle=""
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {interactiveFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-premium p-8 h-full flex flex-col items-center group hover:card-featured transition-all duration-300 interactive-lift">
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-primary mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.stats}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Grid Section */}
      <Section
        title="Powerful Features"
        subtitle="Everything you need to revolutionize your payroll management"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name} 
              className="card-premium p-8 group hover:card-featured transition-all duration-300 interactive-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.Icon className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary transition-colors">{feature.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4 group-hover:text-foreground transition-colors">{feature.description}</p>
              <motion.a 
                href={feature.href} 
                className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {feature.cta} 
                <motion.svg 
                  className="ml-1 h-4 w-4" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </motion.svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
