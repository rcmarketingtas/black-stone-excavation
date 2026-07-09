"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn, getHashFromHref, isHomeHashLink, scrollToSection } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && pathname === "/") {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [pathname]);

  const handleHashClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!isHomeHashLink(href)) return;

    const hash = getHashFromHref(href);
    if (!hash) return;

    if (pathname === "/") {
      event.preventDefault();
      scrollToSection(hash);
      window.history.replaceState(null, "", `#${hash}`);
    }

    setMobileOpen(false);
  };

  const navLinkClass =
    "text-sm font-medium text-white/80 transition-colors hover:text-primary";

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "border-b border-border/50 bg-background/95 py-2 shadow-lg backdrop-blur-md md:py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <nav className="container-wide mx-auto flex items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="group shrink-0 text-left"
          aria-label={`${SITE.name} home`}
        >
          <Logo
            size={scrolled || pathname !== "/" ? "sm" : "md"}
            className="transition-opacity group-hover:opacity-90"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(event) => handleHashClick(event, link.href)}
                className={navLinkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <a href={SITE.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/98 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event) => handleHashClick(event, link.href)}
                    className="block w-full rounded-md px-4 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/5 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-border px-4 pt-4">
                <Button className="w-full" asChild>
                  <a href={SITE.phoneHref} className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now — {SITE.phone}
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
