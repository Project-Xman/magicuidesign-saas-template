"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const benefits = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Your Hard-Earned Money, On Your Schedule",
    description: "Access up to 60% of wages you've already earned, whenever you need them.",
    features: [
      "No waiting for payday",
      "Available 24/7, even weekends",
      "Instant transfer to your account"
    ]
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.25-4.5c-.268 0-.518.035-.75.1C14.044 4.157 11.15 2 7.72 2c-4.142 0-7.5 3.358-7.5 7.5 0 .379.03.748.085 1.107C.035 11.15 0 11.4 0 11.72c0 4.142 3.358 7.5 7.5 7.5" />
      </svg>
    ),
    title: "No Credit Check Required",
    description: "Your employment is your credit. No credit score impact, no financial history needed.",
    features: [
      "Simple verification with employee ID",
      "No impact on credit score",
      "No lengthy approval process"
    ]
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Transparent, Low-Cost or Free",
    description: "Many employers sponsor FinWage as a benefit. When not free, fees are always transparent.",
    features: [
      "Often employer-sponsored (free)",
      "Low, flat fees when applicable",
      "No hidden charges or interest"
    ]
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Completely Confidential",
    description: "Your employer never knows when or why you access your funds. Total privacy guaranteed.",
    features: [
      "Private between you and FinWage",
      "No employer notifications",
      "Confidential transaction history"
    ]
  }
];

const comparisonData = [
  {
    method: "FinWage",
    cost: "Free - $5",
    speed: "Instant",
    creditCheck: "No",
    interest: "Never",
    color: "primary"
  },
  {
    method: "Payday Loan",
    cost: "$15-$30 per $100",
    speed: "Same day",
    creditCheck: "Sometimes",
    interest: "400% APR",
    color: "destructive"
  },
  {
    method: "Overdraft Fee",
    cost: "$35 average",
    speed: "Instant",
    creditCheck: "No",
    interest: "N/A",
    color: "warning"
  },
  {
    method: "Credit Card Cash Advance",
    cost: "$10 + 5% fee",
    speed: "Instant",
    creditCheck: "Yes",
    interest: "25% APR",
    color: "secondary"
  }
];

export default function EmployeeBenefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 mx-auto">
        {/* Main Benefits */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            Financial Freedom at Your Fingertips
          </motion.h2>
          <motion.p
            className="text-xl text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Take control of your finances with instant access to the money you've already earned.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-secondary mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              How FinWage Compares
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              See why FinWage is the smarter choice for accessing your money when you need it.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 font-semibold text-primary">Method</th>
                  <th className="text-center py-4 px-2 font-semibold text-primary">Typical Cost</th>
                  <th className="text-center py-4 px-2 font-semibold text-primary">Speed</th>
                  <th className="text-center py-4 px-2 font-semibold text-primary">Credit Check</th>
                  <th className="text-center py-4 px-2 font-semibold text-primary">Interest/APR</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    className={`border-b border-border/50 ${index === 0 ? 'bg-primary/5' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease }}
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-2">
                        {index === 0 && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span className={`font-medium ${index === 0 ? 'text-primary' : 'text-secondary'}`}>
                          {row.method}
                        </span>
                      </div>
                    </td>
                    <td className={`text-center py-4 px-2 ${index === 0 ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                      {row.cost}
                    </td>
                    <td className={`text-center py-4 px-2 ${index === 0 ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                      {row.speed}
                    </td>
                    <td className={`text-center py-4 px-2 ${index === 0 ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                      {row.creditCheck}
                    </td>
                    <td className={`text-center py-4 px-2 ${index === 0 ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                      {row.interest}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}