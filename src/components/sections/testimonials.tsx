"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "@/components/section";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { HyperText } from "@/components/ui/hyper-text";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  company: string;
  companyLogo: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const testimonials = [
  {
    quote: "FinWage has transformed our payroll process completely. The AI-powered compliance features ensure we're always up-to-date with regulations, saving us countless hours and reducing errors significantly.",
    name: "Sarah Johnson",
    designation: "HR Director at TechCorp Solutions",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "TechCorp Solutions",
    companyLogo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The employee self-service portal is incredible. Our team loves the 24/7 access to payslips and benefits information. It's made our HR department much more efficient.",
    name: "Michael Chen",
    designation: "CEO at StartupFlow",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "StartupFlow",
    companyLogo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "FinWage's automated reporting has cut our compliance workload by 70%. The real-time analytics help us make better business decisions while staying fully compliant.",
    name: "Emily Rodriguez",
    designation: "CFO at Global Enterprises",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "Global Enterprises",
    companyLogo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a growing company, we needed a payroll solution that could scale with us. FinWage has been perfect - from 50 to 500 employees, it's handled everything seamlessly.",
    name: "David Park",
    designation: "Operations Manager at InnovateLabs",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "InnovateLabs",
    companyLogo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The security features are top-notch. Bank-grade encryption and compliance monitoring give us complete peace of mind when handling sensitive payroll data.",
    name: "Lisa Thompson",
    designation: "IT Security Lead at SecurePay Corp",
    src: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "SecurePay Corp",
    companyLogo: "https://images.unsplash.com/photo-1614680376568-36cf52ac43d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "FinWage's customer support is exceptional. Whenever we've had questions, their team has been incredibly responsive and knowledgeable.",
    name: "James Wilson",
    designation: "Founder at Wilson Enterprises",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    company: "Wilson Enterprises",
    companyLogo: "https://images.unsplash.com/photo-1614680376726-3579afd91dd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-[280px] w-[300px]"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-sm mb-4 flex-grow text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-5">
          {testimonial.quote}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <Section
      titleComponent={
        <HyperText 
          duration={1000}
          delay={200}
          className="font-bold"
        >
          What Our Customers Say
        </HyperText>
      }
      subtitle="Trusted by businesses worldwide for reliable payroll management"
    >
      <div className="mt-12 w-full relative space-y-8">
        {/* First row - Left to Right */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          <Marquee className="py-2" pauseOnHover>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="mx-3">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second row - Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          <Marquee className="py-2" reverse pauseOnHover>
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <div key={index} className="mx-3">
                <TestimonialCard testimonial={testimonial} index={index + 3} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
}
