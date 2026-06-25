"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide mx-auto flex items-center justify-between px-4 md:px-8">
        <button
          onClick={() => handleNavClick("home")}
          className="group text-left"
          aria-label="Black Stone Excavation home"
        >
          <div className="font-display text-lg font-bold tracking-[0.15em] text-white transition-colors group-hover:text-primary md:text-xl">
            BLACK STONE
          </div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-primary md:text-xs">
            Excavation
          </div>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            {SITE.phone}
          </a>
          <Button onClick={() => handleNavClick("contact")} size="sm">
            Free Quote
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
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full rounded-md px-4 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/5 hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-4">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </li>
              <li className="px-4 pt-2">
                <Button
                  className="w-full"
                  onClick={() => handleNavClick("contact")}
                >
                  Request Free Quote
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
