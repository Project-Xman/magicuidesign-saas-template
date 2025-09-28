import Image from "next/image";
import styles from "./logos.module.css";
import { BorderBeam } from "../magicui/border-beam";
import BlurFade from "../magicui/blur-fade";
import LogoLoop from "../LogoLoop";
import CountUp from "../CountUp";

const companies = [
  { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google", href: "https://www.google.com" },
  { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft", href: "https://www.microsoft.com" },
  { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: "Amazon", href: "https://www.amazon.com" },
  { src: "https://cdn.magicui.design/companies/Netflix.svg", alt: "Netflix", href: "https://www.netflix.com" },
  { src: "https://cdn.magicui.design/companies/Uber.svg", alt: "Uber", href: "https://www.uber.com" },
  { src: "https://cdn.magicui.design/companies/Spotify.svg", alt: "Spotify", href: "https://www.spotify.com" },
  { src: "https://cdn.magicui.design/companies/Airbnb.svg", alt: "Airbnb", href: "https://www.airbnb.com" },
  { src: "https://cdn.magicui.design/companies/Tesla.svg", alt: "Tesla", href: "https://www.tesla.com" },
  { src: "https://cdn.magicui.design/companies/Shopify.svg", alt: "Shopify", href: "https://www.shopify.com" },
  { src: "https://cdn.magicui.design/companies/Stripe.svg", alt: "Stripe", href: "https://www.stripe.com" },
];

const trustStats = [
  {
    label: "Active employees",
    value: "2.5M+",
  },
  {
    label: "Global payroll regions",
    value: "42",
  },
  {
    label: "Same-day payouts",
    value: "740K/mo",
  },
];



export default function Logos() {
  return (
    <section id="logos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Trusted by <span className="text-[#f64162]">10,000+</span> Companies Worldwide
          </h2>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
            Join industry leaders who trust FinWage with their payroll management and compliance
          </p>
        </div>
        <div className="relative">
          <LogoLoop
            logos={companies}
            speed={80}
            direction="left"
            logoHeight={68}
            gap={40}
            pauseOnHover
            scaleOnHover
            grayscaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
                />
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-muted/30 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-muted/30 to-transparent"></div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustStats.map((stat, index) => {
            const parseValue = (value: string): number => {
              const numStr = value.replace(/[^0-9.]/g, '');
              if (value.includes('M')) {
              return parseFloat(numStr) * 1000000;
              } else if (value.includes('K')) {
              return parseFloat(numStr) * 1000;
              } else {
              return parseFloat(numStr);
              }
            };
            return (
              <BlurFade key={stat.label} delay={index * 0.1} inView>
              <div className="relative h-full rounded-2xl border border-primary/10 bg-white/70 p-6 text-center shadow-md shadow-primary/5 backdrop-blur dark:bg-neutral-900/70">
                <BorderBeam size={200} duration={16} borderWidth={1} delay={index * 2} className="opacity-30" />
                <CountUp
                from={0}
                to={parseValue(stat.value)}
                separator=","
                direction="up"
                duration={0.4}
                className="text-4xl font-bold text-[#1d45c3]"
                />
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {stat.label}
                </p>
              </div>
              </BlurFade>
            );
            })}
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
