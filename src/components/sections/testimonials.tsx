"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Section from "@/components/section";

const testimonials = [
  {
    quote: "FinWage has transformed our payroll process completely. The AI-powered compliance features ensure we're always up-to-date with regulations, saving us countless hours and reducing errors significantly.",
    name: "Sarah Johnson",
    designation: "HR Director at TechCorp Solutions",
    src: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "The employee self-service portal is incredible. Our team loves the 24/7 access to payslips and benefits information. It's made our HR department much more efficient.",
    name: "Michael Chen",
    designation: "CEO at StartupFlow",
    src: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "FinWage's automated reporting has cut our compliance workload by 70%. The real-time analytics help us make better business decisions while staying fully compliant.",
    name: "Emily Rodriguez",
    designation: "CFO at Global Enterprises",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "As a growing company, we needed a payroll solution that could scale with us. FinWage has been perfect - from 50 to 500 employees, it's handled everything seamlessly.",
    name: "David Park",
    designation: "Operations Manager at InnovateLabs",
    src: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote: "The security features are top-notch. Bank-grade encryption and compliance monitoring give us complete peace of mind when handling sensitive payroll data.",
    name: "Lisa Thompson",
    designation: "IT Security Lead at SecurePay Corp",
    src: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    quote: "FinWage's customer support is exceptional. Whenever we've had questions, their team has been incredibly responsive and knowledgeable.",
    name: "James Wilson",
    designation: "Founder at Wilson Enterprises",
    src: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

export default function Testimonials() {
  return (
    <Section
      title="What Our Customers Say"
      subtitle="Trusted by businesses worldwide for reliable payroll management"
    >
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </Section>
  );
}
