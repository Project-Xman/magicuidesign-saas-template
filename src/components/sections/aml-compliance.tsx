"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileCheck, Shield, Search, AlertTriangle, CheckCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const amlMeasures = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Customer Due Diligence",
    description: "Comprehensive identity verification and risk assessment for all users and employer partners."
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Transaction Monitoring",
    description: "Real-time monitoring of all transactions using advanced algorithms to detect suspicious activity."
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Regulatory Reporting",
    description: "Automated reporting to regulatory authorities including SARs and CTRs as required by law."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Risk Management",
    description: "Comprehensive risk-based approach to AML compliance with regular assessments and updates."
  }
];

const complianceStandards = [
  {
    standard: "Bank Secrecy Act (BSA)",
    description: "Full compliance with BSA requirements including recordkeeping and reporting obligations.",
    status: "Compliant"
  },
  {
    standard: "USA PATRIOT Act",
    description: "Implementation of customer identification programs and enhanced due diligence procedures.", 
    status: "Compliant"
  },
  {
    standard: "FinCEN Guidelines",
    description: "Adherence to Financial Crimes Enforcement Network guidelines for fintech companies.",
    status: "Compliant"
  },
  {
    standard: "OFAC Sanctions",
    description: "Real-time screening against Office of Foreign Assets Control sanctions lists.",
    status: "Compliant"
  }
];

export default function AMLComplianceSection() {
  return (
    <section id="aml" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: ease as any }}
          >
            Anti-Money Laundering (AML) Compliance
          </motion.h2>
          
          <motion.p
            className="text-xl text-secondary font-medium mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: ease as any }}
          >
            FinWage maintains robust AML compliance programs to prevent money laundering and terrorist financing,
            protecting our platform and users from financial crimes.
          </motion.p>
        </div>

        {/* AML Measures Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: ease as any }}
        >
          {amlMeasures.map((measure, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-primary/10 p-3 text-primary w-fit">
                  {measure.icon}
                </div>
                <CardTitle className="text-lg">{measure.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{measure.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: ease as any }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Regulatory Compliance Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.standard}</CardTitle>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="bg-card rounded-2xl p-8 text-center border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: ease as any }}
        >
          <h3 className="text-2xl font-bold mb-4">AML Compliance Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our compliance team is available to discuss our AML procedures and answer any questions 
            from regulatory authorities or business partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="mailto:compliance@finwage.com">Contact Compliance Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/compliance/security">View Security Measures</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}