import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import HowItWorksHero from "@/components/sections/how-it-works-hero";
import EmployeeJourney from "@/components/sections/employee-journey";
import EmployerJourney from "@/components/sections/employer-journey";
import Integrations from "@/components/sections/integrations";

export default function HowItWorksPage() {
  return (
    <main>
      <Header />
      <HowItWorksHero />
      <EmployeeJourney />
      <EmployerJourney />
      <Integrations />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "How It Works | FinWage - Your Earned Wage Access Solution",
  description: "See how FinWage provides seamless earned wage access for employees and zero-disruption setup for employers. Simple 3-step process for both sides.",
};