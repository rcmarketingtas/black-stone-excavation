import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Gallery } from "@/components/sections/Gallery";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Project Gallery | ${SITE.name}`,
  description:
    "Browse recent excavation, earthmoving, rock landscaping, and backyard makeover projects from Blackstone Excavations across Launceston and Tasmania.",
  openGraph: {
    title: `Project Gallery | ${SITE.name}`,
    description:
      "Recent excavation and landscaping projects across Launceston and Tasmania.",
    url: `${SITE.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Project Gallery"
        description="A look at recent excavation, earthmoving, and landscaping projects across Launceston and surrounds."
      />

      <section className="section-padding relative bg-card">
        <Gallery showHeading={false} />
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-wide mx-auto text-center">
          <p className="font-display text-2xl font-semibold text-white md:text-3xl">
            Like what you see?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Contact us for a free no-obligation quote on your next project.
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
