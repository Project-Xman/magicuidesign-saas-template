import { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Zap, BookOpen, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | FinWage",
  description: "Explore our comprehensive resources including guides, API documentation, and financial wellness tools.",
};

const resources = [
  {
    title: "Financial Wellness Guide",
    description: "Complete guide to financial wellness benefits and earned wage access best practices.",
    icon: <BookOpen className="h-6 w-6" />,
    href: "/resources/financial-wellness-guide",
    category: "Guide"
  },
  {
    title: "API Documentation",
    description: "Comprehensive documentation for integrating FinWage with your payroll systems.",
    icon: <Code className="h-6 w-6" />,
    href: "/resources/api-docs",
    category: "Developer"
  },
  {
    title: "ROI Calculator",
    description: "Calculate the return on investment of implementing FinWage for your employees.",
    icon: <Zap className="h-6 w-6" />,
    href: "/resources/roi-calculator",
    category: "Tool"
  },
  {
    title: "Implementation Guide",
    description: "Step-by-step guide for implementing FinWage in your organization.",
    icon: <FileText className="h-6 w-6" />,
    href: "/resources/implementation-guide",
    category: "Guide"
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="Resources"
        subtitle="Everything you need to get started with FinWage"
        description="Explore our comprehensive collection of guides, tools, and documentation to help you implement and maximize the benefits of earned wage access."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={resource.href}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to support you every step of the way. Get in touch for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/employees#faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}