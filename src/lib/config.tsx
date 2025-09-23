import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Fincorp",
  description: "Empowering businesses with innovative financial solutions",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Fintech", "Financial Services", "Banking", "Investment", "Compliance"],
  links: {
    email: "support@fincorp.com",
    twitter: "https://twitter.com/fincorp",
    discord: "https://discord.gg/fincorp",
    github: "https://github.com/fincorp",
    instagram: "https://instagram.com/fincorp/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Financial Technology Solutions",
          description: "Advanced fintech tools for modern businesses.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Portfolio Management",
            description: "Manage investments and track performance.",
          },
          {
            href: "#",
            title: "Risk Analytics",
            description: "Assess and mitigate financial risks.",
          },
          {
            href: "#",
            title: "Automated Compliance",
            description: "Ensure regulatory compliance effortlessly.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Financial tools tailored for growing companies.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Scalable solutions for large organizations.",
          },
          {
            title: "Investment Firms",
            href: "#",
            description: "Specialized tools for investment management.",
          },
          {
            title: "Banks & Lenders",
            href: "#",
            description: "Secure banking and lending solutions.",
          },
          {
            title: "Fintech Startups",
            href: "#",
            description: "Innovative platforms for fintech innovation.",
          },
          {
            title: "Compliance Officers",
            href: "#",
            description: "Streamline regulatory compliance processes.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "STARTER",
      href: "#",
      price: "$29",
      period: "month",
      yearlyPrice: "$24",
      features: [
        "1 User",
        "Basic Portfolio Tracking",
        "Standard Reports",
        "Email Support",
        "Mobile App Access",
      ],
      description: "Perfect for individual investors and small businesses",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      href: "#",
      price: "$79",
      period: "month",
      yearlyPrice: "$65",
      features: [
        "5 Users",
        "Advanced Analytics",
        "Risk Assessment Tools",
        "Priority Support",
        "API Integration",
      ],
      description: "Ideal for growing investment firms and teams",
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$199",
      period: "month",
      yearlyPrice: "$165",
      features: [
        "Unlimited Users",
        "Custom Integrations",
        "White-label Solutions",
        "24/7 Premium Support",
        "Dedicated Account Manager",
      ],
      description: "For large financial institutions and high-volume operations",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Fincorp?",
      answer: (
        <span>
          Fincorp is a comprehensive financial technology platform that provides
          tools for portfolio management, risk assessment, compliance, and
          investment analytics to help businesses and individuals make informed
          financial decisions.
        </span>
      ),
    },
    {
      question: "How can I get started with Fincorp?",
      answer: (
        <span>
          You can get started with Fincorp by signing up for an account on our
          website, selecting a plan that fits your needs, and following our
          onboarding guide. Our team is available to assist you every step of
          the way.
        </span>
      ),
    },
    {
      question: "What financial instruments does Fincorp support?",
      answer: (
        <span>
          Fincorp supports a wide range of financial instruments including
          stocks, bonds, ETFs, mutual funds, cryptocurrencies, and derivatives.
          We continuously expand our support for new asset classes.
        </span>
      ),
    },
    {
      question: "Is Fincorp suitable for beginners in investing?",
      answer: (
        <span>
          Yes, Fincorp is designed to be user-friendly for both beginners and
          experienced investors. We offer intuitive dashboards, educational
          resources, and customizable tools to help users of all skill levels
          manage their finances effectively.
        </span>
      ),
    },
    {
      question: "What kind of support does Fincorp provide?",
      answer: (
        <span>
          Fincorp provides comprehensive support including documentation, video
          tutorials, a community forum, and dedicated customer support. We also
          offer premium support plans for enterprises with more complex needs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "API Documentation", icon: null },
        { href: "#", text: "Integrations", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Help Center", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Security", icon: null },
        { href: "#", text: "Compliance", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
