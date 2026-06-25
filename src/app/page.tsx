import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { EstimateCalculator } from "@/components/sections/EstimateCalculator";
import { FAQ } from "@/components/sections/FAQ";
import { Fleet } from "@/components/sections/Fleet";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ExcavatorDivider } from "@/components/shared/ExcavatorDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <ExcavatorDivider />
      <Services />
      <About />
      <WhyChooseUs />
      <Fleet />
      <Gallery />
      <BeforeAfter />
      <Process />
      <ServiceAreas />
      <Reviews />
      <EstimateCalculator />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
