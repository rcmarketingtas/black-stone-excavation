import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
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

export const metadata: Metadata = {
  title: `${SITE.name} | Premium Excavation & Earthmoving Melbourne`,
  description: SITE.description,
  keywords: [
    "excavation Melbourne",
    "earthmoving Victoria",
    "site cuts",
    "trenching",
    "rock removal",
    "civil works",
    "Black Stone Excavation",
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
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Black Stone Excavation — professional excavation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Excavation Melbourne`,
    description: SITE.description,
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    ],
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
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    "Melbourne",
    "Mornington Peninsula",
    "Geelong",
    "Yarra Valley",
    "Macedon Ranges",
    "Ballarat",
  ],
  priceRange: "$$",
  openingHours: ["Mo-Fr 06:00-18:00", "Sa 07:00-14:00"],
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
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
        className={`${inter.variable} ${oswald.variable} min-h-screen bg-background font-sans antialiased`}
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
