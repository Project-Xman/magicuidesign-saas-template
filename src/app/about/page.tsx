import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import AboutHero from "@/components/sections/about-hero";
import Mission from "@/components/sections/mission";
import Team from "@/components/sections/team";
import Values from "@/components/sections/values";
import Timeline from "@/components/sections/timeline";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <Timeline />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "About Us | FinWage - Our Mission to End Financial Stress",
  description: "Learn about FinWage's mission to empower the workforce by ending financial stress through earned wage access. Meet our team and discover our values.",
};