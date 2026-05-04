const SITE_CONFIG = {
  name: "ANVI DIGITAL",
  url: "https://www.anvidigital.com.au",
  poster: "https://www.anvidigital.com.au/images/anvi-poster.png",
};

// ─── Reusable base entity ───────────────────────────────────────────────────

const ORGANIZATION_JSON_LD = {
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/favicon.jpg`,
    width: 512,
    height: 512,
  },
  description:
    "Full-stack AI-powered growth team specialising in AI SEO, AI Agents, and Paid Media. Built for businesses that need search to keep working in the AI era.",
  foundingDate: "2024",
  knowsAbout: [
    "AI SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Enterprise SEO",
    "Paid Media",
    "AI Agents",
    "Entity SEO",
    "Structured Data",
  ],
  sameAs: [
    "https://www.linkedin.com/company/anvidigital",
    "https://twitter.com/anvidigital",
  ],
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
};

const WEBSITE_JSON_LD = {
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description:
    "AI SEO, AI Agents and Paid Media engineered as one system. Built for businesses that need search to keep working in the AI era.",
  datePublished: "2024-01-01T00:00:00+00:00",
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/favicon.jpg`,
    },
  },
};

// ─── Page schemas ───────────────────────────────────────────────────────────

export const HOMEPAGE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION_JSON_LD, WEBSITE_JSON_LD],
};

export const ABOUT_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_JSON_LD,
    {
      "@type": "AboutPage",
      "@id": `${SITE_CONFIG.url}/about/#webpage`,
      url: `${SITE_CONFIG.url}/about`,
      name: "About Anvi Digital | Built for Compounding Growth",
      description:
        "Anvi Digital is a growth practice for businesses that need search to keep working in the AI era. SEO, paid media and AI search engineered as one system.",
      mainEntity: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      about: [
        { "@type": "Thing", name: "Digital Marketing" },
        { "@type": "Thing", name: "AI SEO" },
        { "@type": "Thing", name: "Compounding Growth" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#founder`,
      name: "Rama",
      jobTitle: "Founder",
      worksFor: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "16 years of hands-on experience across SEO, growth and product. Scaled organic from 2.1M to 6.1M sessions, lifted national audiences by 67%, and shipped four production AI agents.",
      knowsAbout: [
        "SEO",
        "Growth Strategy",
        "AI Agents",
        "Paid Media",
        "Product Management",
      ],
    },
  ],
};

export const SEO_SERVICES_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_JSON_LD,
    {
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/services/seo/#service`,
      name: "SEO Services",
      description:
        "Build a predictable pipeline of high-intent traffic through search. Enterprise SEO, AI Search & GEO, Local SEO and Ecommerce SEO — powered by strategy, content, and technical execution.",
      url: `${SITE_CONFIG.url}/services/seo`,
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      serviceType: "Search Engine Optimization",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Service Offerings",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise SEO",
              description:
                "Large-scale technical SEO for platforms with complex crawl, rendering and architecture challenges.",
              url: `${SITE_CONFIG.url}/services/seo/enterprise`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search & GEO",
              description:
                "Entity signals, structured data and topical authority that make your brand the cited source in ChatGPT, Perplexity and Google AI Overviews.",
              url: `${SITE_CONFIG.url}/services/seo/aeo-geo`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO",
              description:
                "Google Business Profile authority, local entity signals and suburb-level landing pages.",
              url: `${SITE_CONFIG.url}/services/seo/local`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce SEO",
              description:
                "Product pages, collection architecture, variant handling and merchant feed alignment.",
              url: `${SITE_CONFIG.url}/services/seo/ecommerce`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/services/seo/#webpage`,
      url: `${SITE_CONFIG.url}/services/seo`,
      name: "SEO Services | Own Your Search Presence",
      description:
        "Search is no longer one channel. We build the systems that make your business the answer across Google, ChatGPT, Perplexity and AI Overviews.",
      mainEntity: {
        "@id": `${SITE_CONFIG.url}/services/seo/#service`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/services/seo/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI Search Optimization (AEO/GEO)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are strategies to make your brand the cited source in AI-powered search tools like ChatGPT, Perplexity and Google AI Overviews. We build entity signals, structured data and topical authority that AI models recognise and cite.",
          },
        },
        {
          "@type": "Question",
          name: "How is your SEO approach different from a traditional agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We design SEO, paid media and AI search as one system rather than separate budgets. Demand captured in Google flows into the same conversion surface as demand captured in ChatGPT and Perplexity. The result is lower cost per lead over time, not just lower cost per click today.",
          },
        },
      ],
    },
  ],
};

export const PAID_MEDIA_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_JSON_LD,
    {
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/services/paid-media/#service`,
      name: "Paid Media Services",
      description:
        "Strategic paid media that builds demand and converts it. From awareness to acquisition across Paid Search, Paid Social and Programmatic — aligned to your organic program.",
      url: `${SITE_CONFIG.url}/services/paid-media`,
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      serviceType: "Paid Media & Advertising",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paid Media Channels",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Search",
              description:
                "Google and Bing campaigns built around high-intent demand signals, aligned to your SEO program.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Social",
              description:
                "Meta, LinkedIn and TikTok campaigns built around audience behaviour with systematic creative testing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Programmatic & Display",
              description:
                "Data-driven display across premium inventory with retargeting sequences built around buyer intent.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/services/paid-media/#webpage`,
      url: `${SITE_CONFIG.url}/services/paid-media`,
      name: "Paid Media | Full-Funnel Media Buying",
      description:
        "Paid media that funds organic authority and reduces what you need to spend next quarter.",
      mainEntity: {
        "@id": `${SITE_CONFIG.url}/services/paid-media/#service`,
      },
    },
  ],
};

export const AI_AGENTS_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_JSON_LD,
    {
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/ai-agents/#service`,
      name: "AI Agent Development & Implementation",
      description:
        "We design and implement AI agents that fit into your workflows, helping you move faster, uncover insights, and execute with more clarity.",
      url: `${SITE_CONFIG.url}/ai-agents`,
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      serviceType: "AI Consulting & Development",
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType:
          "Businesses with data-heavy workflows, Teams handling large volumes of content, Organisations exploring AI",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Agent Use Cases",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Research & Analysis Agents",
              description:
                "Process large volumes of structured and unstructured data to surface key insights faster.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conversation Insights Agents",
              description:
                "Analyse calls and interactions to identify patterns, gaps, and opportunities.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Processing Agents",
              description:
                "Extract and organise information from reports, contracts, and internal documents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search & Content Insights Agents",
              description:
                "Understand how your business appears across search and AI-driven discovery platforms.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/ai-agents/#webpage`,
      url: `${SITE_CONFIG.url}/ai-agents`,
      name: "AI Agents | Practical AI Built for Real Business Work",
      description:
        "Practical AI systems that help your business analyse, operate, and grow more effectively.",
      mainEntity: {
        "@id": `${SITE_CONFIG.url}/ai-agents/#service`,
      },
      about: [
        { "@type": "Thing", name: "Artificial Intelligence" },
        { "@type": "Thing", name: "Workflow Automation" },
        { "@type": "Thing", name: "Business Intelligence" },
      ],
    },
  ],
};

export const CASE_STUDIES_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_JSON_LD,
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.url}/case-studies/#webpage`,
      url: `${SITE_CONFIG.url}/case-studies`,
      name: "Case Studies | Real Results from Real Partnerships",
      description:
        "Real results from real partnerships. Measurable growth through AI SEO, paid media, and intelligent automation.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Article",
              name: "2.1M → 6.1M Sessions | Marketplace Growth",
              description:
                "Tripled organic traffic for Australia's #2 property marketplace, closing the competitive gap with the category leader from 6x to 3x.",
              author: {
                "@type": "Organization",
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Article",
              name: "+67% to 3.1M Uniques | Subscription Media",
              description:
                "Grew a national news brand to Australia's #1 paywalled news destination.",
              author: {
                "@type": "Organization",
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Article",
              name: "200K → 500K Monthly Users | Product Led Growth",
              description:
                "Lifted a property marketplace by 151% under direct competition from established incumbents.",
              author: {
                "@type": "Organization",
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
              },
            },
          },
        ],
      },
    },
  ],
};
