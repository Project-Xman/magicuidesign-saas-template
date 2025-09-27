"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    employees: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request:', formData);
  };

  return (
    <motion.div
      id="demo"
      className="relative bg-card rounded-2xl p-8 border border-border shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: ease as any }}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <h2 className="text-2xl font-bold text-primary mb-2">Book a Personalized Demo</h2>
      <p className="text-muted-foreground mb-6">For Employers - See how FinWage can transform your workplace</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="employees">Number of Employees</Label>
            <Input
              id="employees"
              type="number"
              value={formData.employees}
              onChange={(e) => setFormData({...formData, employees: e.target.value})}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="message">Tell us about your needs</Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="What challenges are you facing with employee retention or financial wellness?"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        
        <Button type="submit" className="w-full" size="lg">
          Request Demo
        </Button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-4">Or contact us directly:</p>
        <div className="space-y-2">
          <Link href="tel:1-800-FINWAGE" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1-800-FINWAGE
          </Link>
          <Link href="mailto:sales@finwage.com" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            sales@finwage.com
          </Link>
        </div>
      </div>
    </motion.div>
  );
}