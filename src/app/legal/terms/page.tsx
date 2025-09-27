import { Metadata } from "next";
import Section from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | FinWage",
  description: "FinWage's terms of service governing the use of our earned wage access platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="Terms of Service"
        subtitle="Last updated: January 1, 2025"
        description="These terms govern your use of FinWage's earned wage access platform and services."
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                By accessing or using FinWage&apos;s services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                FinWage provides earned wage access services that allow eligible employees to access 
                a portion of their earned wages before their scheduled payday. Our services include:
              </p>
              <ul>
                <li>Wage advance processing and approval</li>
                <li>Mobile and web application access</li>
                <li>Real-time wage and eligibility tracking</li>
                <li>Customer support and account management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>To use FinWage services, you must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Be employed by a participating employer</li>
                <li>Have earned wages available for advance</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fees and Repayment</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                Fees for FinWage services vary by employer arrangement and are clearly disclosed 
                before each transaction. Common fee structures include:
              </p>
              <ul>
                <li>Employer-sponsored (no cost to employee)</li>
                <li>Fixed fee per transaction</li>
                <li>Percentage-based fees</li>
              </ul>
              <p>
                Wage advances are automatically repaid through payroll deduction on your next payday 
                unless alternative arrangements are made.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>As a user of FinWage services, you agree to:</p>
              <ul>
                <li>Provide accurate and up-to-date information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use services only for lawful purposes</li>
                <li>Notify us immediately of any unauthorized account access</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                Your privacy is important to us. Our collection, use, and protection of your 
                personal information is governed by our Privacy Policy, which is incorporated 
                into these Terms of Service by reference.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                FinWage shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                or other intangible losses, resulting from your use of our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <ul>
                <li>Email: legal@finwage.com</li>
                <li>Phone: 1-800-FINWAGE</li>
                <li>Mail: FinWage Legal Department, 123 Financial St, San Francisco, CA 94105</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/legal/privacy">View Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Legal Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}