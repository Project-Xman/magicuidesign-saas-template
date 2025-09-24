import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Connect Your System",
    content:
      "Integrate FinWage with your existing payroll system in under 5 minutes. No complex setup or data migration required—we work with what you already have.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Employees Request Instantly",
    content:
      "Your team can request earned wages through our simple app or platform. Requests are approved automatically based on hours worked—no manager approval needed.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Money Arrives in Minutes",
    content:
      "Funds transfer instantly to employees' accounts, and repayment is automatically deducted from their next paycheck. Zero manual work for your HR team.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How FinWage Works" subtitle="From setup to payout in 3 simple steps—no headaches, no hassle">
      <Features data={data} />
    </Section>
  );
}
