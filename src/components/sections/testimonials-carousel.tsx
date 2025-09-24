import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

const sampleTestimonials = Array.from({ length: 7 }).map((_, i) => ({
  quote:
    "There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say \"living\" thing because you just never know what you are going to see on any given night of stargazing.",
  name: [
    "Leslie Alexander",
    "Alex Morgan",
    "Jordan Lee",
    "Riley Patel",
    "Taylor Nguyen",
    "Samira Khan",
    "Chris O'Neil",
  ][i % 7],
  designation: [
    "UI Designer",
    "Head of Product",
    "CTO",
    "Design Lead",
    "VP Engineering",
    "Customer Success",
    "Founder",
  ][i % 7],
  avatar: `https://randomuser.me/api/portraits/${
    i % 2 === 0 ? "women" : "men"
  }/${20 + i}.jpg`,
  company: companies[i % companies.length],
}));

export default function Component() {
  return (
    <Section
      title="Testimonial Highlight"
      subtitle="What our customers are saying"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {sampleTestimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <div className="card-featured card-premium p-6 md:p-8 flex flex-col items-center text-center">
                    <MdOutlineFormatQuote className="text-5xl text-primary mb-4" />
                    <BlurFade delay={0.25} inView>
                      <blockquote className="text-lg text-body max-w-2xl px-4 md:px-12">
                        {item.quote}
                      </blockquote>
                    </BlurFade>

                    <div className="flex items-center gap-4 mt-6">
                      <Avatar className="ring-2 ring-primary">
                        <AvatarImage
                          src={`https://randomuser.me/api/portraits/${
                            index % 2 === 0 ? "women" : "men"
                          }/${30 + index}.jpg`}
                        />
                      </Avatar>
                      <div className="text-left">
                        <h4 className="text-base font-semibold text-body">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted">{item.designation}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Image
                        width={140}
                        height={32}
                        src={`https://cdn.magicui.design/companies/${item.company}.svg`}
                        alt={`${item.company} logo`}
                        className="mx-auto w-auto h-[32px] grayscale opacity-50"
                      />
                    </div>

                    <div className="mt-6">
                      <Button variant="outline" size="sm">
                        Read case study
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
