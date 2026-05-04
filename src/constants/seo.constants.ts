import { Metadata, Viewport } from "next";

const SITE_CONFIG = {
  name: "ANVI DIGITAL",
  url: "https://www.anvidigital.com.au",
  title: "ANVI DIGITAL | Architecting Growth Through Intelligence",
  description:
    "Drive velocity with a full-stack AI-powered growth team. Expert AI SEO, AI Agents, and Google Ads that deliver measurable ROI.",
  socialDescription:
    "AI SEO, AI Agents and Paid Media engineered as one system. Built for businesses that need search to keep working in the AI era.",
  handle: "@anvidigital",
  poster: "https://www.anvidigital.com.au/images/anvi-poster.png",
  theme: {
    color: "#1a1c1b",
    scheme: "light" as const,
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

const KEYWORDS = [
  "AI SEO",
  "AI Agents",
  "Answer Engine Optimization",
  "AEO",
  "GEO",
  "Google Ads",
  "Paid Media",
  "Growth Strategy",
  "Digital Marketing Agency",
  "AI Growth Team",
];

// ⚠️ Set to noindex/nofollow until site is ready for production indexing.
// Change to index: true, follow: true when ready to go live.
const ROBOTS_CONFIG: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

// Base viewport configuration for all pages
export const BASE_VIEWPORT: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: SITE_CONFIG.theme.color,
  colorScheme: SITE_CONFIG.theme.scheme,
};

export const HOME_PAGE_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  keywords: KEYWORDS,
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.socialDescription,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "ANVI DIGITAL – Architecting Growth Through Intelligence",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.socialDescription,
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};

export const ABOUT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "About | Built for Compounding Growth",
  description:
    "Anvi Digital is a growth practice for businesses that need search to keep working in the AI era. SEO, paid media and AI search engineered as one system.",
  keywords: [
    "About Anvi Digital",
    "Growth Agency",
    "AI SEO Agency",
    "Rama",
    "Digital Marketing Operator",
    "Compounding Growth",
    "AI Search Strategy",
  ],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: { canonical: "/about" },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title: "About Anvi Digital | Built for Compounding Growth",
    description:
      "SEO, paid media and AI search engineered as one system. Built by an operator with 16 years of hands-on experience scaling organic from 2.1M to 6.1M sessions.",
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "About Anvi Digital",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anvi Digital | Built for Compounding Growth",
    description:
      "SEO, paid media and AI search engineered as one system. 16 years of operator experience.",
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};

export const SEO_SERVICES_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "SEO Services | Own Your Search Presence",
  description:
    "Build a predictable pipeline of high-intent traffic through search. Enterprise SEO, AI Search & GEO, Local SEO and Ecommerce SEO — powered by strategy, content, and technical execution.",
  keywords: [
    "SEO Services",
    "Enterprise SEO",
    "AI Search Optimization",
    "GEO",
    "AEO",
    "Local SEO",
    "Ecommerce SEO",
    "Technical SEO",
    "Entity SEO",
    "Structured Data",
  ],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: { canonical: "/services/seo" },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title: "SEO Services | Own Your Search Presence – Anvi Digital",
    description:
      "Search is no longer one channel. We build the systems that make your business the answer across Google, ChatGPT, Perplexity and AI Overviews.",
    url: `${SITE_CONFIG.url}/services/seo`,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "SEO Services – Anvi Digital",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Own Your Search Presence",
    description:
      "Enterprise SEO, AI Search & GEO, Local and Ecommerce SEO. Built for where search is going.",
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};

export const PAID_MEDIA_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Paid Media | Full-Funnel Media Buying",
  description:
    "Strategic paid media that builds demand and converts it. From awareness to acquisition across Paid Search, Paid Social and Programmatic — aligned to your organic program.",
  keywords: [
    "Paid Media",
    "Google Ads",
    "Paid Search",
    "Paid Social",
    "Meta Ads",
    "LinkedIn Ads",
    "Programmatic Display",
    "Full-Funnel Media",
    "ROAS",
    "Media Buying",
  ],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: { canonical: "/services/paid-media" },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title: "Paid Media | Full-Funnel Media Buying – Anvi Digital",
    description:
      "Paid media that funds organic authority and reduces what you need to spend next quarter. 2.8x average ROAS across client accounts.",
    url: `${SITE_CONFIG.url}/services/paid-media`,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "Paid Media – Anvi Digital",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Media | Full-Funnel Media Buying",
    description:
      "Strategic paid media across Paid Search, Paid Social and Programmatic. Aligned to your organic program.",
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};

export const AI_AGENTS_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "AI Agents | Practical AI Built for Real Business Work",
  description:
    "We design and implement AI agents that fit into your workflows, helping you move faster, uncover insights, and execute with more clarity. Research, analysis, document processing and more.",
  keywords: [
    "AI Agents",
    "Business AI",
    "Workflow Automation",
    "AI Implementation",
    "LLM Agents",
    "Research AI",
    "Document Processing AI",
    "Conversation Analysis",
    "Applied AI",
  ],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: { canonical: "/ai-agents" },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title:
      "AI Agents | Practical AI Built for Real Business Work – Anvi Digital",
    description:
      "Practical AI systems that help your business analyse, operate, and grow more effectively. No unnecessary complexity. No generic solutions.",
    url: `${SITE_CONFIG.url}/ai-agents`,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "AI Agents – Anvi Digital",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents | Practical AI for Real Business Work",
    description:
      "AI agents designed for real workflows. Research, analysis, document processing and conversation insights.",
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};

export const CASE_STUDIES_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Case Studies | Real Results from Real Partnerships",
  description:
    "Real results from real partnerships. Explore how we've driven measurable growth through AI SEO, paid media, and intelligent automation — from 2.1M to 6.1M sessions, +67% audience growth and more.",
  keywords: [
    "Case Studies",
    "SEO Results",
    "Paid Media Results",
    "AI SEO Case Study",
    "Domain SEO",
    "News Corp SEO",
    "Organic Growth",
    "Digital Marketing Results",
    "Growth Agency Results",
  ],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: ROBOTS_CONFIG,
  alternates: { canonical: "/case-studies" },
  icons: SITE_CONFIG.icons,
  openGraph: {
    title: "Case Studies | Real Results – Anvi Digital",
    description:
      "No fluff. No vanity metrics. Just measurable outcomes from real partnerships across property, media, finance and ecommerce.",
    url: `${SITE_CONFIG.url}/case-studies`,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.poster,
        width: 1200,
        height: 630,
        alt: "Case Studies – Anvi Digital",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Real Results from Real Partnerships",
    description:
      "Measurable outcomes across property, media, finance and ecommerce. The work speaks.",
    creator: SITE_CONFIG.handle,
    site: SITE_CONFIG.handle,
    images: [SITE_CONFIG.poster],
  },
  category: "technology",
};
