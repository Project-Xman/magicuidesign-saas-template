"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Icons } from "@/components/icons";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarLogo, NavbarThemeToggle, NavbarButton } from "@/components/ui/resizable-navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Info, X } from "lucide-react";

const navItems = [
  { name: "How It Works", link: "/how-it-works" },
  { name: "Employers", link: "/employers" },
  { name: "Employees", link: "/employees" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const floatingDockItems = [
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
  const [bannerVisible, setBannerVisible] = useState(true);
  const pathname = usePathname();
  
  // Hide banner on contact page
  const shouldShowBanner = bannerVisible && pathname !== '/contact';

  return (
    <>
      {shouldShowBanner && (
        <StickyBanner className="border-b border-destructive/30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-3 py-1.5 text-xs md:px-4 md:text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10">
            <Info className="h-4 w-4 text-destructive" aria-hidden="true" />
          </span>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-destructive md:text-xs">
          Service Alert
            </span>
            <p className="text-xs text-foreground md:text-sm">
          Servers are currently unavailable. Please try again shortly.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/status"
            className="inline-flex items-center rounded-full bg-destructive px-2.5 py-1 text-[10px] font-semibold text-destructive-foreground shadow-sm transition hover:bg-destructive/90 md:text-xs"
          >
            View status
          </Link>
          <button
            type="button"
            onClick={() => setBannerVisible(false)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Dismiss service alert"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
          </div>
        </StickyBanner>
      )}

      <Navbar onVisibleChange={setNavbarVisible}>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarThemeToggle />
            {/* {!navbarVisible && (
              <NavbarButton as={Link} href="/employees" variant="secondary" aria-label="Access employee portal and benefits">
                For Employees
              </NavbarButton>
            )} */}
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
