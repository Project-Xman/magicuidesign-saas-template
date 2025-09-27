import { Metadata } from "next";
import Section from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FinWage",
  description: "FinWage's privacy policy detailing how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="Privacy Policy"
        subtitle="Last updated: January 1, 2025"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Employment information and payroll data</li>
                <li>Financial account information for wage advances</li>
                <li>Device and usage information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our earned wage access services</li>
                <li>Process wage advance requests and repayments</li>
                <li>Communicate with you about your account and our services</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Improve and develop new features</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information:
              </p>
              <ul>
                <li>With your employer for payroll integration and repayment processing</li>
                <li>With financial institutions to process transactions</li>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                This includes:
              </p>
              <ul>
                <li>AES-256 encryption for data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection</li>
                <li>Compliance with SOC 2 Type II standards</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li>Email: privacy@finwage.com</li>
                <li>Phone: 1-800-FINWAGE</li>
                <li>Mail: FinWage Privacy Office, 123 Financial St, San Francisco, CA 94105</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}