import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Portfolio & Dashboard",
    content: "Track holdings, performance, and P&L in real-time.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Risk Analytics",
    content: "Assess market and credit risk with robust models.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Automated Reporting",
    content: "Generate compliance-ready reports and statements automatically.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Secure Integrations",
    content: "Connect to custodians, exchanges, and accounting systems securely.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="User Flows and Navigational Structures">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
