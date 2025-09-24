"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Icons } from "@/components/icons";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarLogo, NavbarThemeToggle, NavbarButton } from "@/components/ui/resizable-navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Info } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "How It Works", link: "/how-it-works" },
  { name: "Employers", link: "/employers" },
  { name: "Employees", link: "/employees" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const floatingDockItems = [
  {
    title: "Home",
    icon: <Icons.logo className="h-full w-full" />,
    href: "/",
  },
  {
    title: "GitHub",
    icon: <Icons.github className="h-full w-full" />,
    href: "https://github.com",
  },
  {
    title: "Twitter",
    icon: <Icons.twitter className="h-full w-full" />,
    href: "https://twitter.com",
  },
  {
    title: "LinkedIn",
    icon: <Icons.google className="h-full w-full" />,
    href: "https://linkedin.com",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <>
      <StickyBanner className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Info className="h-4 w-4 text-primary" aria-label="Info" />
          <span>Finwage - it's your wage. Access earned wages instantly!</span>
          <Link href="/employees" className="underline hover:no-underline">
            Learn more →
          </Link>
        </div>
      </StickyBanner>

      <Navbar onVisibleChange={setNavbarVisible}>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarThemeToggle />
            {!navbarVisible && (
              <NavbarButton as={Link} href="/employees" variant="secondary" aria-label="Access employee portal and benefits">
                For Employees
              </NavbarButton>
            )}
            <NavbarButton as={Link} href="/contact#demo" variant="primary" aria-label="Schedule a product demonstration">
              Book Demo
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <nav role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <NavbarButton as={Link} href="/employees" variant="secondary" className="justify-start" onClick={() => setMobileMenuOpen(false)} aria-label="Access employee portal and benefits">
                  For Employees
                </NavbarButton>
                <NavbarButton as={Link} href="/contact#demo" variant="primary" className="justify-start" onClick={() => setMobileMenuOpen(false)} aria-label="Schedule a product demonstration">
                  Book Demo
                </NavbarButton>
              </div>
            </nav>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <FloatingDock items={floatingDockItems} desktopClassName="fixed bottom-4 right-4 z-10" />
    </>
  );
}
