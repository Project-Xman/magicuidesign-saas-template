import Image from "next/image";
import styles from "./logos.module.css";
import { BorderBeam } from "../magicui/border-beam";
import BlurFade from "../magicui/blur-fade";

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
            Trusted by 10,000+ Companies Worldwide
          </h2>
          <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
            Join industry leaders who trust FinWage with their payroll management and compliance
          </p>
        </div>
        <div className="relative">
          <div className={styles.logoCarousel}>
            <div className={styles.logoSlide}>
              {[...companies, ...companies, ...companies].map((logo, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.logo} transform hover:scale-110 transition-all duration-500`}
                >
                  <Image
                    width={160}
                    height={64}
                    src={`https://cdn.magicui.design/companies/${logo}.svg`}
                    className="h-16 w-auto dark:brightness-0 dark:invert grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    alt={`${logo} - Trusted FinWage customer`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-muted/30 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-muted/30 to-transparent"></div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {trustStats.map((stat, index) => (
            <BlurFade key={stat.label} delay={index * 0.1} inView>
              <div className="relative h-full rounded-2xl border border-primary/10 bg-white/70 p-6 text-center shadow-md shadow-primary/5 backdrop-blur dark:bg-neutral-900/70">
                <BorderBeam size={200} duration={16} borderWidth={1} delay={index * 2} className="opacity-30" />
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
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
