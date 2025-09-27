import { Metadata } from "next";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download, Code, Book } from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation | FinWage Resources",
  description: "Complete API documentation for integrating FinWage with your payroll and HR systems.",
};

const apiSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of integrating with the FinWage API",
    items: [
      "Authentication",
      "Rate Limits",
      "Error Handling",
      "Webhooks"
    ]
  },
  {
    title: "Employee Management",
    description: "Manage employee records and eligibility",
    items: [
      "Create Employee",
      "Update Employee",
      "Check Eligibility",
      "Employment History"
    ]
  },
  {
    title: "Payroll Integration",
    description: "Real-time payroll data synchronization",
    items: [
      "Sync Pay Periods",
      "Update Earnings",
      "Process Advances",
      "Repayment Tracking"
    ]
  },
  {
    title: "Reporting & Analytics",
    description: "Access comprehensive reporting data",
    items: [
      "Usage Reports",
      "Financial Reports",
      "Employee Analytics",
      "Export Data"
    ]
  }
];

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="API Documentation"
        subtitle="Integrate FinWage with your systems"
        description="Comprehensive documentation for seamless integration with payroll and HR platforms."
      >
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="#" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              View Full Documentation
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download SDK
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Postman Collection
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {apiSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Integration?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our technical team is ready to assist with your integration. Schedule a call or reach out for support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Technical Support</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#" className="flex items-center gap-2">
                Schedule Integration Call
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}