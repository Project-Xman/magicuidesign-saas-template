import Image from "next/image";

import BlurFade from "@/components/magicui/blur-fade";
import Marquee from "@/components/magicui/marquee";
import { BorderBeam } from "@/components/magicui/border-beam";

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
    <section id="logos" className="bg-muted/20 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Trusted by leading employers and frontline teams
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-medium text-secondary">
            FinWage powers modern payroll and earned wage access experiences for high-growth startups and global enterprises alike.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/10 bg-background/70 shadow-lg shadow-primary/5 backdrop-blur">
          <BorderBeam size={320} duration={18} borderWidth={1} className="opacity-40" />
          <Marquee pauseOnHover className="[--duration:30s]">
            {[...companies, ...companies].map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="flex min-w-[160px] items-center justify-center px-6 py-6"
              >
                <Image
                  width={140}
                  height={52}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-12 w-auto grayscale opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert"
                  alt={`${logo} - FinWage customer`}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
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

        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">
            From payroll scale-ups to Fortune 500s across 50+ countries, FinWage keeps mission-critical pay experiences online.
          </p>
        </div>
      </div>
    </section>
  );
}
