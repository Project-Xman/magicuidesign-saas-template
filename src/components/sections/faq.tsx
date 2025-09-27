"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BoxReveal } from "@/components/ui/box-reveal";
import { siteConfig } from "@/lib/config";
import SplitText from "../SplitText";

export default function FAQ() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background Image - Maximum Visibility */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-75"
        style={{
          // backgroundImage: 'url("/faq-bg.jpg")',
          // backgroundSize: 'contain',
        }}
      />
      
      {/* Reduced Background Pattern for better image visibility */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-primary/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-80 h-80 bg-gradient-to-br from-secondary/18 to-emerald-600/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/12 to-orange-500/12 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/12 to-purple-600/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Minimal Background Overlay for maximum image visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-card/45 to-primary/2 dark:from-background/45 dark:via-card/50 dark:to-primary/5" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
          {/* Centered Header Section */}
          <div className="text-center space-y-6 pb-16 mx-auto max-w-4xl">
            <div className="space-y-4">
                <SplitText
                  text="FAQ"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg mx-auto"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              {/* </h2> */}
              <p className="mx-auto max-w-2xl text-lg md:text-xl font-medium text-foreground leading-relaxed drop-shadow-sm text-center">
                Everything you need to know about FinWage
              </p>
            </div>
          </div>
          
          {/* Perfectly Centered FAQ Accordion */}
          <div className="mx-auto my-6 w-full max-w-3xl px-4">
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col items-center justify-center space-y-4"
            >
              {siteConfig.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="w-full opacity-0 animate-[fade-in_0.8s_ease-out_forwards] hover:scale-[1.01] transition-transform duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <AccordionItem
                    value={faq.question}
                    className="w-full max-w-4xl mx-auto bg-card/99 backdrop-blur-3xl border border-primary/20 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/40 hover:bg-card group relative overflow-hidden"
                  >
                    {/* Enhanced gradient overlay on hover - Using theme colors */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-secondary/12 to-accent/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    <AccordionTrigger className="relative py-6 font-semibold text-left hover:text-primary transition-all duration-300 text-base md:text-lg group-hover:text-primary [&[data-state=open]]:text-primary text-foreground w-full">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/25 via-secondary/25 to-accent/25 border border-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold transition-all duration-300 flex-shrink-0">
                          <span>{idx + 1}</span>
                        </div>
                        <span className="flex-1 text-left">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="relative px-14 pb-6 text-foreground/90 leading-relaxed text-base">
                      <div className="border-l-2 border-primary/30 bg-gradient-to-r from-primary/5 to-transparent pl-6 ml-2 py-3 rounded-r-md text-left">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
