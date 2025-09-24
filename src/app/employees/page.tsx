import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import EmployeesHero from "@/components/sections/employees-hero";
import EmployeeBenefits from "@/components/sections/employee-benefits";
import EmployeeHowItWorks from "@/components/sections/employee-how-it-works";
import EmployeeFAQ from "@/components/sections/employee-faq";
import AppDownload from "@/components/sections/app-download";

export default function EmployeesPage() {
  return (
    <main>
      <Header />
      <EmployeesHero />
      <EmployeeBenefits />
      <EmployeeHowItWorks />
      <EmployeeFAQ />
      <AppDownload />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "For Employees | FinWage - Access Your Pay When You Need It",
  description: "Get instant access to your earned wages with FinWage. No credit check, no interest, no stress. Available 24/7 when unexpected expenses arise.",
};