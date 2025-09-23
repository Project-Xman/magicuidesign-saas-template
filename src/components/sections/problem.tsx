import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Data Overload",
    description:
      "Financial teams face overwhelming volumes of transactions and market data, making it hard to extract reliable insights for decision-making.",
    icon: Brain,
  },
  {
    title: "Slow Decision-Making",
    description:
      "Legacy systems and manual processes slow down critical financial operations, delaying trades, approvals, and reconciliations.",
    icon: Zap,
  },
  {
    title: "Data Security Concerns",
    description:
      "Protecting sensitive financial and customer data is paramount amid growing regulatory and cybersecurity pressures.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Manually entering your data is a hassle."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
