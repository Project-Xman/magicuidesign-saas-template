import { Metadata } from "next";
import Section from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Lock, FileCheck, Globe, Award, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Security | FinWage Compliance",
  description: "Learn about FinWage's comprehensive security measures and data protection protocols.",
};

const securityFeatures = [
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Bank-Level Encryption",
    description: "All data is encrypted using AES-256 encryption both in transit and at rest, meeting the highest industry standards."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Multi-Factor Authentication",
    description: "Advanced MFA protocols protect all accounts with biometric and token-based verification."
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "24/7 Monitoring",
    description: "Real-time security monitoring with automated threat detection and response systems."
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Regular Audits",
    description: "Quarterly security audits by third-party firms ensure continuous compliance and protection."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Compliance",
    description: "Compliant with GDPR, CCPA, SOX, and other international data protection regulations."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "SOC 2 Type II",
    description: "Certified SOC 2 Type II compliant, demonstrating our commitment to security excellence."
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 compliance for security, availability, and confidentiality",
    status: "Certified"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard compliance",
    status: "Certified"
  },
  {
    name: "ISO 27001",
    description: "Information Security Management System certification",
    status: "In Progress"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    status: "Compliant"
  }
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="Security & Data Protection"
        subtitle="Your security is our priority"
        description="FinWage employs enterprise-grade security measures to protect your financial data and personal information."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-primary/10 p-4 text-primary w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Certifications & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-800' :
                      cert.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Security?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our security team is available to discuss our measures and compliance standards in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Security Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/compliance">View Compliance Details</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}