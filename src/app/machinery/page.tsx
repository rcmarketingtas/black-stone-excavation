import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { MachineryFleet } from "@/components/sections/MachineryFleet";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Our Machinery | ${SITE.name}`,
  description:
    "Modern excavation fleet including Kobelco SK55 excavators, Terex Posi-track PT50, and 6-yard tipper truck. Fully equipped for Launceston and Tasmania projects.",
  openGraph: {
    title: `Our Machinery | ${SITE.name}`,
    description:
      "Kobelco excavators, Terex posi-track, and tipper truck — fully equipped for any job.",
    url: `${SITE.url}/machinery`,
  },
};

export default function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Our Machinery"
        description="Modern, well-maintained equipment ready for residential, rural, and commercial projects across Launceston and surrounds."
      />

      <section className="section-padding relative bg-noise">
        <div className="container-wide mx-auto">
          <MachineryFleet />
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-wide mx-auto text-center">
          <p className="font-display text-2xl font-semibold text-white md:text-3xl">
            Need the right gear for your project?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Contact us for a free no-obligation quote. We will match the right machinery to your
            site and scope.
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
