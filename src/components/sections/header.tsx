"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Icons } from "@/components/icons";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarLogo, NavbarThemeToggle, NavbarButton } from "@/components/ui/resizable-navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { BorderBeam } from "@/components/magicui/border-beam";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Activity, CalendarDays, Info, X } from "lucide-react";

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
    title: "Status",
    icon: <Icons.spinner className="h-full w-full" />,
    href: "/status",
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
  {
    title: "Book Demo",
    icon: <CalendarDays className="h-full w-full" />,
    href: "/contact#demo",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      {bannerVisible && (
        <StickyBanner className="relative border-b border-primary/20 bg-gradient-to-r from-primary/10 via-background/70 to-secondary/10 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm overflow-hidden">
          <BorderBeam size={280} duration={18} borderWidth={1} className="opacity-60" />
          <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-2 px-3 py-2 text-xs md:flex-row md:items-center md:justify-between md:gap-3 md:px-4 md:text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                <Info className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <div className="space-y-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary md:text-xs">
                  Live system status
                </span>
                <p className="text-xs text-foreground md:text-sm">
                  99.99% uptime · Earned wage transfers processing in under 3 minutes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/status"
                className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:text-xs"
              >
                <Activity className="h-3.5 w-3.5" aria-hidden="true" />
                View live dashboard
              </Link>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label="Dismiss status update"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </StickyBanner>
      )}

      <Navbar
        className="relative mx-auto mt-4 max-w-6xl rounded-2xl border border-border/60 bg-background/75 px-3 shadow-lg shadow-primary/5 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        onVisibleChange={setNavbarVisible}
      >
        <BorderBeam size={220} duration={22} borderWidth={1.25} delay={4} className="opacity-50" />
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarThemeToggle />
            <NavbarButton as={Link} href="/employees" variant="secondary" aria-label="Access employee portal and benefits">
              Employee Hub
            </NavbarButton>
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
                  Employee Hub
                </NavbarButton>
                <NavbarButton as={Link} href="/contact#demo" variant="primary" className="justify-start" onClick={() => setMobileMenuOpen(false)} aria-label="Schedule a product demonstration">
                  Book Demo
                </NavbarButton>
                <NavbarButton as={Link} href="/status" variant="secondary" className="justify-start" onClick={() => setMobileMenuOpen(false)} aria-label="View system status">
                  Live Status
                </NavbarButton>
              </div>
            </nav>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <FloatingDock
        items={floatingDockItems}
        desktopClassName="fixed bottom-4 right-4 z-40"
        mobileClassName="fixed bottom-3 left-1/2 z-40 -translate-x-1/2"
      />
    </>
  );
}
