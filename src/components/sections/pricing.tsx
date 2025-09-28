"use client";

import { CometCard } from "@/components/ui/comet-card";
import { GlareCard } from "@/components/ui/glare-card";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import TextPressure from "../TextPressure";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const {resolvedTheme} = useTheme();

  const textColor = resolvedTheme === 'dark' ? '#e0e0e0' : '#333333';

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Section 
      titleComponent={
        <div className="flex justify-center items-center w-[1000px] mr-auto ml-auto">
        <TextPressure
          text="Pricing!"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor={textColor}
          minFontSize={48}
          strokeColor="#ff0000"
        />
        </div>
      }
      subtitle="Choose the perfect plan for your payroll needs"
    >
      <div className="flex justify-center items-center mb-10 gap-4" role="group" aria-labelledby="billing-toggle">
        <span id="billing-toggle" className="sr-only">Choose billing frequency</span>
        <span className={`font-semibold ${isMonthly ? 'text-foreground' : 'text-muted-foreground'}`} aria-hidden="true">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Label className="sr-only">
            {isMonthly ? "Switch to yearly billing" : "Switch to monthly billing"}
          </Label>
          <Switch 
            checked={!isMonthly} 
            onCheckedChange={handleToggle}
            aria-describedby="billing-savings"
          />
        </label>
        <span className={`font-semibold ${!isMonthly ? 'text-foreground' : 'text-muted-foreground'}`} aria-hidden="true">Yearly</span>
        <div id="billing-savings" className="ml-2 px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
          Save 20%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className="flex justify-center"
          >
            {plan.isPopular ? (
              <CometCard className="w-full max-w-sm">
                <div className="relative p-8 bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-primary/20 backdrop-blur-sm h-full">
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="h-4 w-4 text-white fill-current" />
                      <span className="text-white text-sm font-semibold">Most Popular</span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#1d45c3]">
                        {isMonthly ? plan.price : plan.yearlyPrice}
                      </span>
                      {plan.period !== "Next 3 months" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {isMonthly ? "billed monthly" : "billed annually"}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#1d45c3]" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "w-full font-semibold rounded-xl"
                    )}
                  >
                    {plan.buttonText}
                  </Link>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    {plan.description}
                  </p>
                </div>
              </CometCard>
            ) : (
              <GlareCard className="w-full max-w-sm">
                <div className="p-8 card-premium h-full hover:border-primary/20 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#1d45c3]">
                        {isMonthly ? plan.price : plan.yearlyPrice}
                      </span>
                      {plan.period !== "Next 3 months" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {isMonthly ? "billed monthly" : "billed annually"}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#1d45c3] mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl"
                    )}
                  >
                    {plan.buttonText}
                  </Link>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    {plan.description}
                  </p>
                </div>
              </GlareCard>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
