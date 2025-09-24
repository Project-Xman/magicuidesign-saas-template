import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Uber",
  "Spotify",
  "Airbnb",
  "Tesla",
  "Shopify",
  "Stripe",
];

export default function Logos() {
  return (
    <section id="logos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Trusted by 10,000+ Companies Worldwide
          </h2>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
            Join industry leaders who trust FinWage with their payroll management and compliance
          </p>
        </div>
        <div className="relative">
          <Marquee className="max-w-full [--duration:30s]">
            {companies.map((logo, idx) => (
              <div key={idx} className="mx-8 flex items-center justify-center">
                <Image
                  width={140}
                  height={56}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-14 w-auto dark:brightness-0 dark:invert grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  alt={`${logo} - Trusted FinWage customer`}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-muted/30 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-muted/30 to-transparent"></div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            From startups to Fortune 500 companies across 50+ countries
          </p>
        </div>
      </div>
    </section>
  );
}
