import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import EmployersHero from "@/components/sections/employers-hero";
import ROISection from "@/components/sections/roi-section";
import BusinessBenefits from "@/components/sections/business-benefits";
import EmployerTestimonials from "@/components/sections/employer-testimonials";
import EmployerCTA from "@/components/sections/employer-cta";

export default function EmployersPage() {
  return (
    <main>
      <Header />
      <EmployersHero />
      <BusinessBenefits />
      <ROISection />
      <EmployerTestimonials />
      <EmployerCTA />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "For Employers | FinWage - Reduce Turnover, Boost Retention",
  description: "Discover how FinWage's earned wage access benefit reduces employee turnover by up to 30%, saves hiring costs, and boosts productivity. Zero cash flow impact.",
};