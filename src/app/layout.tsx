import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://anvi.digital";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ANVI DIGITAL | Architecting Growth Through Intelligence",
    template: "%s | ANVI DIGITAL",
  },
  description:
    "Drive velocity with a full-stack AI-powered growth team. Expert Lead Generation, AI Agents, AI SEO, and Google Ads that deliver measurable ROI.",
  keywords: [
    "AI Agents",
    "Lead Generation",
    "AI SEO",
    "Answer Engine Optimization",
    "AEO",
    "Google Ads",
    "Paid Social",
    "Growth Strategy",
    "Digital Marketing Agency",
    "AI Growth Team",
  ],
  authors: [{ name: "ANVI DIGITAL", url: siteUrl }],
  creator: "ANVI DIGITAL",
  publisher: "ANVI DIGITAL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ANVI DIGITAL",
    title: "ANVI DIGITAL | Architecting Growth Through Intelligence",
    description:
      "Drive velocity with a full-stack AI-powered growth team. Expert Lead Generation, AI Agents, AI SEO, and Google Ads that deliver measurable ROI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANVI DIGITAL – Architecting Growth Through Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANVI DIGITAL | Architecting Growth Through Intelligence",
    description:
      "Drive velocity with a full-stack AI-powered growth team. Expert Lead Generation, AI Agents, AI SEO, and Google Ads.",
    images: ["/og-image.png"],
    creator: "@anvidigital",
    site: "@anvidigital",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANVI DIGITAL",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    "Full-stack AI-powered growth team specialising in Lead Generation, AI Agents, AI SEO, and Google Ads.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "growth@anvi.digital",
    contactType: "sales",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.linkedin.com/company/anvidigital",
    "https://twitter.com/anvidigital",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Generation",
          description:
            "AI-powered lead generation including AI SEO, AEO, Google Ads, and Paid Social.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agents",
          description:
            "Custom LLM agent development and deployment with enterprise-grade governance.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload Material Symbols to start download early without blocking render */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-surface text-on-surface antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        {/* Inject Material Symbols stylesheet after page is interactive — avoids render blocking */}
        <Script
          id="material-symbols-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';document.head.appendChild(l);})();`,
          }}
        />
      </body>
    </html>
  );
}
