import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Payroll Takes Forever",
    description:
      "HR teams spend hours each pay period calculating wages, taxes, and deductions manually—time that could be spent on strategic initiatives.",
    icon: Brain,
  },
  {
    title: "Employees Can't Wait",
    description:
      "74% of employees live paycheck to paycheck. Waiting two weeks for earned wages creates financial stress and impacts productivity.",
    icon: Zap,
  },
  {
    title: "Compliance Nightmares",
    description:
      "Tax regulations change constantly. One small error in payroll can result in costly penalties and damage your company's reputation.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="The Payroll Pain Points"
      subtitle="Why traditional payroll is broken and costing you money"
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
