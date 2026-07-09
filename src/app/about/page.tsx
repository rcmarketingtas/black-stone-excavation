import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT, ABOUT_IMAGE, ABOUT_IMAGE_ALT, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${SITE.name}`,
  description:
    "Family-owned excavation business in Launceston with 25+ years experience. Licensed, insured, and equipped for general excavation, rock landscaping, and backyard makeovers.",
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description:
      "Family-owned excavation business in Launceston with 25+ years experience.",
    url: `${SITE.url}/about`,
    images: [{ url: ABOUT_IMAGE, alt: ABOUT_IMAGE_ALT }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={ABOUT_CONTENT.title}
        description="A small family-owned business built on pride, experience, and a love for the challenge."
      />

      <section className="section-padding relative bg-noise">
        <div className="container-wide mx-auto">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src={ABOUT_IMAGE}
                alt={ABOUT_IMAGE_ALT}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                {ABOUT_CONTENT.headline}
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {ABOUT_CONTENT.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {ABOUT_CONTENT.highlights.map((item) => (
                  <li
                    key={item}
                    className="glass-card flex items-start gap-3 rounded-xl p-4 text-sm text-white/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-wide mx-auto text-center">
          <p className="font-display text-2xl font-semibold text-white md:text-3xl">
            {ABOUT_CONTENT.cta}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href={SITE.phoneHref} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call {SITE.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
