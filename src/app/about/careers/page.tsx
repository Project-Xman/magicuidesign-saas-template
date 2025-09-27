import { Metadata } from "next";
import Section from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Users, Award, MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | FinWage",
  description: "Join our mission to improve financial wellness. Explore career opportunities at FinWage.",
};

const openPositions = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    description: "Build scalable fintech infrastructure that serves millions of employees."
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Remote / New York, NY",
    type: "Full-time",
    description: "Drive product adoption and growth in the earned wage access market."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / Austin, TX",
    type: "Full-time",
    description: "Help our clients maximize the value of FinWage for their employees."
  },
  {
    title: "Compliance Specialist",
    department: "Legal & Compliance",
    location: "Remote / Washington, DC",
    type: "Full-time",
    description: "Ensure regulatory compliance across all financial products and services."
  }
];

const benefits = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Great Team",
    description: "Work with passionate, talented people who care about financial inclusion"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Competitive Benefits",
    description: "Health, dental, vision, 401k, and equity for all full-time employees"
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="Careers"
        subtitle="Join Our Mission"
        description="We're building the future of financial wellness. Help us make financial stress a thing of the past for millions of workers."
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto rounded-lg bg-primary/10 p-3 text-primary w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Open Positions</h3>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`mailto:careers@finwage.com?subject=Application for ${position.title}`}>
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{position.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Don&apos;t See Your Role?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented people to join our team. Send us your resume and tell us how you&apos;d like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:careers@finwage.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Your Resume
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}