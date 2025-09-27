import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import ComplianceHero from "@/components/sections/compliance-hero";
import SecurityFeatures from "@/components/sections/security-features";
import Certifications from "@/components/sections/certifications";
import PrivacyCommitment from "@/components/sections/privacy-commitment";
import AMLComplianceSection from "@/components/sections/aml-compliance";

export default function CompliancePage() {
  return (
    <main>
      <Header />
      <ComplianceHero />
      <SecurityFeatures />
      <Certifications />
      <AMLComplianceSection />
      <PrivacyCommitment />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "Compliance & Security | FinWage - Your Trust is Our Foundation",
  description: "Learn about FinWage's commitment to security, compliance, and privacy. Bank-grade encryption, AML compliance, and privacy-first design.",
};