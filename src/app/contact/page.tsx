import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import DemoForm from "@/components/sections/demo-form";
import EmployeeSupport from "@/components/sections/employee-support";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <div className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <DemoForm />
            <EmployeeSupport />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const metadata = {
  title: "Contact Us | FinWage - Book a Demo or Get Support",
  description: "Contact FinWage for a personalized demo for employers or get support as an employee. We're here to help with all your earned wage access needs.",
};