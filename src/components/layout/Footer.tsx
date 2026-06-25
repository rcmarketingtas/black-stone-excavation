import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-padding mx-auto !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-bold tracking-[0.15em] text-white">
              BLACK STONE
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-primary">
              Excavation
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium excavation and earthmoving services across Melbourne and
              regional Victoria. Licensed, insured, and built on reliability.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.address}
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ABN 12 345 678 901 · Fully Insured · Licensed Operators
          </p>
        </div>
      </div>
    </footer>
  );
}
