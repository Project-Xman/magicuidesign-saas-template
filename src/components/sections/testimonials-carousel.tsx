"use client";
import Section from "@/components/section";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import ShinyText from "../ShinyText";
import BlurText from "../BlurText";
import { motion } from "framer-motion";

const employerTestimonials: Array<{
  quote: string;
  name: string;
  designation: string;
  company: string;
  src: string;
  logo: string;
  metrics: { [key: string]: string };
}> = [
  {
    quote: "As a rapidly growing tech company, scaling our hiring process while maintaining quality was a major challenge. This platform has revolutionized our talent acquisition strategy. We've seen a 40% improvement in hiring efficiency and reduced our time-to-hire from 45 to 18 days, all while maintaining our high hiring standards.",
    name: "Sarah Chen",
    designation: "Chief People Officer",
    company: "TechVision Global",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    logo: "https://cdn.magicui.design/companies/Microsoft.svg",
    metrics: {
      efficiency: "+40%",
      timeToHire: "-60%",
      qualityScore: "4.8/5"
    }
  },
  {
    quote: "Operating across 12 states, compliance was our biggest concern. The platform's automated compliance features have been transformative - reducing our legal review time by 60% while ensuring 100% regulatory adherence. The seamless integration with our existing HR stack made adoption completely painless.",
    name: "Michael Rodriguez",
    designation: "SVP of Human Resources",
    company: "Enterprise Solutions Inc.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    logo: "https://cdn.magicui.design/companies/Airbnb.svg",
    metrics: {
      compliance: "100%",
      reviewTime: "-60%",
      coverage: "12 states"
    }
  },
  {
    quote: "The analytics dashboard has transformed our workforce planning. With real-time insights into hiring trends and predictive analytics, we've optimized our recruitment strategy across all departments. Our cost-per-hire decreased by 35% while our quality of hire metrics showed significant improvement.",
    name: "Emily Thompson",
    designation: "Chief Operating Officer",
    company: "Innovation Labs",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    logo: "https://cdn.magicui.design/companies/Google.svg",
    metrics: {
      costReduction: "-35%",
      qualityIncrease: "+45%",
      dataAccuracy: "99.9%"
    }
  },
  {
    quote: "With over 10,000 applications processed monthly, the AI-powered screening has been revolutionary. The automated system handles 75% of initial screenings, allowing our recruiters to focus on meaningful candidate interactions. The ROI has exceeded our expectations across all metrics.",
    name: "David Park",
    designation: "CEO",
    company: "Global Staffing Solutions",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    logo: "https://cdn.magicui.design/companies/Amazon.svg",
    metrics: {
      applications: "10k+/mo",
      automation: "75%",
      satisfaction: "96%"
    }
  }
];
export default function Component() {
  return (
    <Section
      titleComponent={
        <BlurText
          text="Enterprise Success Stories✨"
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-7xl font-extrabold text-center flex justify-center items-center" 
        />
      }
      subtitleComponent={
        <motion.p
          className="mx-auto mt-6 max-w-3xl text-xl font-medium text-secondary sm:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Learn how industry leaders are revolutionizing their hiring processes and achieving remarkable results
        </motion.p>
      }
      >
      <motion.div 
        className="relative overflow-hidden rounded-xl bg-gradient-to-b from-muted/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatedTestimonials testimonials={employerTestimonials} autoplay={true} />
      </motion.div>
    </Section>
  );
}
