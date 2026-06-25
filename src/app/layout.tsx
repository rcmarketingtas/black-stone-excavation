import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/layout/BackToTop";
import { EmergencyBanner, FloatingCallButton } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { PageLoader } from "@/components/layout/PageLoader";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Excavation & Earthmoving Launceston`,
  description: SITE.description,
  keywords: [
    "excavation Launceston",
    "earthmoving Tasmania",
    "site cuts",
    "trenching",
    "rock removal",
    "Blackstone Excavations",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} | Precision Excavation. Built on Strength.`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/hero-excavation.webp",
        width: 1536,
        height: 1024,
        alt: "Excavator at sunrise on construction site — Blackstone Excavations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Excavation Launceston Tasmania`,
    description: SITE.description,
    images: ["/hero-excavation.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Launceston",
    addressRegion: "TAS",
    addressCountry: "AU",
  },
  areaServed: [
    "Launceston",
    "Northern Tasmania",
    "Tamar Valley",
    "North West Coast",
    "Tasmania",
  ],
  priceRange: "$$",
  openingHours: ["Mo-Fr 06:00-18:00", "Sa 07:00-14:00"],
  image: `${SITE.url}/logo.webp`,
  logo: `${SITE.url}/logo.webp`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${playfair.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <PageLoader />
        <EmergencyBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <BackToTop />
      </body>
    </html>
  );
}
