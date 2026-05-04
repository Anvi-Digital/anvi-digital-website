import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { BASE_VIEWPORT } from "@/constants/seo.constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "optional",
});

// Layout-level metadata — provides the title template and fallback defaults.
// Individual pages override title/description/canonical via their own metadata exports.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.anvidigital.com.au"),
  title: {
    default: "ANVI DIGITAL | Architecting Growth Through Intelligence",
    template: "%s | ANVI DIGITAL",
  },
  description:
    "Drive velocity with a full-stack AI-powered growth team. Expert AI SEO, AI Agents, and Google Ads that deliver measurable ROI.",
  keywords: [
    "AI Agents",
    "AI SEO",
    "Answer Engine Optimization",
    "AEO",
    "Google Ads",
    "Paid Social",
    "Growth Strategy",
    "Digital Marketing Agency",
    "AI Growth Team",
  ],
  authors: [{ name: "ANVI DIGITAL", url: "https://www.anvidigital.com.au" }],
  creator: "ANVI DIGITAL",
  publisher: "ANVI DIGITAL",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anvidigital.com.au",
    siteName: "ANVI DIGITAL",
    title: "ANVI DIGITAL | Architecting Growth Through Intelligence",
    description:
      "Drive velocity with a full-stack AI-powered growth team. Expert AI SEO, AI Agents, and Google Ads that deliver measurable ROI.",
    images: [
      {
        url: "/images/anvi-poster.png",
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
      "Drive velocity with a full-stack AI-powered growth team. Expert AI SEO, AI Agents, and Google Ads.",
    images: ["/images/anvi-poster.png"],
    creator: "@anvidigital",
    site: "@anvidigital",
  },
  alternates: { canonical: "https://www.anvidigital.com.au" },
  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/svg+xml" },
      { url: "/favicon.jpg", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon.jpg", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport = BASE_VIEWPORT;

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
      </head>
      <body
        suppressHydrationWarning
        className="bg-surface text-on-surface antialiased overflow-x-hidden"
      >
        <MainLayout>{children}</MainLayout>
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
