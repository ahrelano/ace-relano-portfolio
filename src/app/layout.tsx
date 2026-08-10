import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, portfolio } from "@/data/portfolio";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.site.url),
  title: {
    default: portfolio.site.name,
    template: `%s — ${portfolio.site.shortName}`,
  },
  description: portfolio.site.description,
  keywords: [...portfolio.seo.keywords],
  authors: [{ name: portfolio.profile.displayName }],
  creator: portfolio.profile.displayName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: portfolio.site.locale,
    url: "/",
    siteName: portfolio.site.shortName,
    title: portfolio.site.name,
    description: portfolio.site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ace Relano — E-commerce and ERP Developer / Technical Project Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.site.name,
    description: portfolio.site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e9",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.profile.name,
  url: portfolio.site.url,
  jobTitle: portfolio.profile.role,
  email: `mailto:${portfolio.profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pampanga",
    addressCountry: "PH",
  },
  sameAs: portfolio.socials.map((social) => social.href),
  knowsAbout: [
    "E-commerce development",
    "ERP implementation",
    "BigCommerce",
    "Odoo",
    "Acumatica",
    "Systems integration",
    "Cloud infrastructure",
  ],
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: portfolio.site.name,
  url: portfolio.site.url,
  description: portfolio.site.description,
  author: {
    "@type": "Person",
    name: portfolio.profile.name,
  },
  hasPart: portfolio.projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: absoluteUrl(`/work/${project.slug}`),
    description: project.summary,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = JSON.stringify([personJsonLd, portfolioJsonLd]).replace(
    /</g,
    "\\u003c",
  );

  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform focus:translate-y-0 motion-reduce:transition-none"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </body>
    </html>
  );
}
