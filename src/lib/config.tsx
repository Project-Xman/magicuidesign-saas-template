import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "FinWage",
  description: "Finwage is your wage. Access your earned wages instantly with our financial wellness benefit.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Fintech", "Earned Wage Access", "Financial Wellness", "Payroll", "Employee Benefits"],
  links: {
    email: "support@finwage.com",
    twitter: "https://twitter.com/finwage",
    discord: "https://discord.gg/finwage",
    github: "https://github.com/finwage",
    instagram: "https://instagram.com/finwage/",
  },
  header: [
    {
      trigger: "How It Works",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Simple 3-Step Process",
          description: "Get paid before payday with ease.",
          href: "/how-it-works",
        },
        items: [
          {
            href: "/how-it-works#employee-journey",
            title: "For Employees",
            description: "See how easy it is to access your earned wages.",
          },
          {
            href: "/how-it-works#employer-journey",
            title: "For Employers",
            description: "Zero-disruption setup and seamless integration.",
          },
          {
            href: "/how-it-works#integrations",
            title: "Integrations",
            description: "Works with 100+ HR and payroll platforms.",
          },
        ],
      },
    },
    {
      trigger: "Employers",
      content: {
        items: [
          {
            title: "Reduce Turnover",
            href: "/employers#benefits",
            description: "Cut recruitment costs by up to 30%.",
          },
          {
            title: "ROI Calculator",
            href: "/employers#roi",
            description: "Calculate your potential savings.",
          },
          {
            title: "Case Studies",
            href: "/employers#testimonials",
            description: "See real results from companies like yours.",
          },
          {
            title: "Book a Demo",
            href: "/contact#demo",
            description: "Schedule a personalized demo today.",
          },
        ],
      },
    },
    {
      trigger: "Employees",
      content: {
        items: [
          {
            title: "Access Your Pay",
            href: "/employees#benefits",
            description: "Get up to 60% of earned wages instantly.",
          },
          {
            title: "No Credit Check",
            href: "/employees#how-it-works",
            description: "Your employment is your credit.",
          },
          {
            title: "Free or Low-Cost",
            href: "/employees#pricing",
            description: "Often employer-sponsored, always transparent.",
          },
          {
            title: "Download App",
            href: "/employees#download",
            description: "Available on iOS and Android.",
          },
        ],
      },
    },
    {
      href: "/resources",
      label: "Resources",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ],
  pricing: [
    {
      name: "STARTER",
      href: "#",
      price: "$2.99",
      period: "per employee/month",
      yearlyPrice: "$2.49",
      features: [
        "Up to 50 Employees",
        "Basic Dashboard",
        "Email Support",
        "Standard Integration",
      ],
      description: "Perfect for small businesses getting started",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      href: "#",
      price: "$4.99",
      period: "per employee/month",
      yearlyPrice: "$4.16",
      features: [
        "Up to 500 Employees",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integration",
      ],
      description: "Ideal for growing companies with HR teams",
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "Custom",
      period: "pricing",
      yearlyPrice: "Custom",
      features: [
        "Unlimited Employees",
        "White-label Solution",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
      description: "For large organizations with complex needs",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is FinWage?",
      answer: (
        <span>
          FinWage is an earned wage access platform that allows employees to
          access a portion of their earned wages before payday, helping with
          financial wellness and reducing stress.
        </span>
      ),
    },
    {
      question: "How does FinWage work for employees?",
      answer: (
        <span>
          Employees can request an advance of up to 60% of their earned wages
          through our app or platform. Funds are deposited instantly, and
          repayment is automatically deducted from the next paycheck.
        </span>
      ),
    },
    {
      question: "Is there a cost for employees?",
      answer: (
        <span>
          Many employers sponsor FinWage as a benefit, making it free for
          employees. When not sponsored, fees are typically low and transparent,
          often less than traditional payday loans.
        </span>
      ),
    },
    {
      question: "How do employers integrate FinWage?",
      answer: (
        <span>
          Integration is seamless through our API or payroll partners. We work
          with your existing HR and payroll systems to provide real-time wage
          data and automated repayment processing.
        </span>
      ),
    },
    {
      question: "Is FinWage secure and compliant?",
      answer: (
        <span>
          Yes, FinWage uses bank-level security, encryption, and complies with
          all relevant financial regulations including AML and data protection
          standards. Your data is always safe and private.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "/how-it-works", text: "How It Works", icon: null },
        { href: "/employers", text: "For Employers", icon: null },
        { href: "/employees", text: "For Employees", icon: null },
        { href: "/employers#pricing", text: "Pricing", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us", icon: null },
        { href: "/about#careers", text: "Careers", icon: null },
        { href: "/resources", text: "Resources", icon: null },
        { href: "/resources/blog", text: "Blog", icon: null },
        { href: "/contact", text: "Contact", icon: null },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/employees#faq", text: "Help Center", icon: null },
        { href: "/compliance", text: "Compliance & Security", icon: null },
        { href: "/compliance#security", text: "Security", icon: null },
        { href: "/resources#api", text: "API Docs", icon: null },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          href: "/legal/privacy",
          text: "Privacy Policy",
          icon: null,
        },
        {
          href: "/legal/terms",
          text: "Terms of Service",
          icon: null,
        },
        {
          href: "/compliance#aml",
          text: "AML Compliance",
          icon: null,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
