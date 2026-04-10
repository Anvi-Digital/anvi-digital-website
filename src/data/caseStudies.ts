export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  id: string;
  category: string;
  headline: string;
  unit: string;
  summary: string;
  industry: string;
  duration: string;
  services: string[];
  challenge: string;
  context: string;
  approach: string[];
  outcomes: string[];
  insight: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  accent: "secondary" | "on-surface";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "marketplace-growth",
    id: "01",
    category: "Marketplace Growth",
    headline: "2.1M → 6.1M",
    unit: "Sessions",
    summary:
      "Scaled organic traffic for a leading marketplace platform through technical SEO and programmatic content architecture.",
    industry: "E-Commerce / Marketplace",
    duration: "24 months",
    services: [
      "Enterprise SEO",
      "Technical SEO",
      "Programmatic Content",
      "Structured Data",
    ],
    challenge:
      "A high-growth marketplace was hitting a ceiling on organic traffic. Over 50,000 product pages were poorly indexed, cannibalising each other, and compounding technical debt was making every fix harder than the last.",
    context:
      "The platform had grown rapidly through paid acquisition but needed organic to become a sustainable, lower-cost channel. Their engineering team had prioritised product velocity over SEO hygiene, leaving years of technical debt. Crawl budgets were being wasted on duplicate and thin pages, and the site architecture made it nearly impossible for Google to understand the content hierarchy.",
    approach: [
      "Full technical audit across 50k+ URLs to identify indexation gaps, crawl waste, and duplicate content clusters",
      "Programmatic content architecture redesign to eliminate cannibalisation across category and product pages",
      "Internal linking automation at scale using topic clustering and semantic relevance scoring",
      "Structured data deployment across all product, category, and review templates",
    ],
    outcomes: [
      "Organic became the #1 acquisition channel within 18 months, overtaking paid for the first time",
      "Cost per acquisition from organic dropped 60% compared to paid channels",
      "The programmatic content system now generates new landing pages automatically as inventory grows",
      "Site health score improved from 34 to 91 on core technical metrics",
    ],
    insight:
      "The biggest unlock wasn't a single tactic — it was fixing the foundation. Once crawl budget was reclaimed and cannibalisation eliminated, rankings improved across thousands of pages simultaneously without any additional content investment.",
    metrics: [
      { value: "6.1M", label: "Annual organic sessions" },
      { value: "190%", label: "Traffic growth in 24 months" },
      { value: "3x", label: "Indexed pages" },
      { value: "42%", label: "Reduction in crawl errors" },
    ],
    tags: ["Enterprise SEO", "Technical SEO", "Programmatic"],
    accent: "secondary",
  },
  {
    slug: "media-publishing",
    id: "02",
    category: "Media & Publishing",
    headline: "+67%",
    unit: "Distinct Audience",
    summary:
      "Dominated search for a national media brand through content strategy, AEO, and digital PR.",
    industry: "Media & Publishing",
    duration: "18 months",
    services: ["Content Strategy", "AEO", "Digital PR", "Topic Architecture"],
    challenge:
      "A major publisher was losing ground to aggregators and AI-generated content farms. Core topics were slipping from page one despite strong domain authority, and the editorial team had no structured SEO process.",
    context:
      "The publisher had decades of brand equity but was being outranked by newer, leaner content operations that understood search intent better. Their content was written for readers, not for search — and with AI Overviews now appearing for their highest-traffic queries, they needed a strategy that worked across both traditional and generative search.",
    approach: [
      "Content gap analysis against 12 direct competitors to identify uncontested ranking opportunities",
      "Topic cluster strategy with pillar-spoke architecture across 200+ articles",
      "AEO optimisation for AI Overviews and featured snippets across all primary topic areas",
      "Digital PR campaign securing 80+ high-authority referring domains through data-led stories",
    ],
    outcomes: [
      "Reached #1 position for the primary keyword cluster within 9 months",
      "AI Overview appearances increased from 0 to 40+ across target queries",
      "Newsletter signups from organic grew 45% as audience quality improved",
      "Editorial team now operates with a structured SEO brief process for every new article",
    ],
    insight:
      "Authority alone doesn't win in modern search. The publisher had the brand but lacked the structure. Once we mapped content to intent and built the topic architecture, their existing authority amplified the results dramatically.",
    metrics: [
      { value: "+67%", label: "Distinct audience growth" },
      { value: "#1", label: "Position for primary keyword cluster" },
      { value: "80+", label: "New referring domains" },
      { value: "3x", label: "Featured snippet wins" },
    ],
    tags: ["Content Strategy", "AEO", "Digital PR"],
    accent: "on-surface",
  },
  {
    slug: "product-led-growth",
    id: "03",
    category: "Product-Led Growth",
    headline: "25%",
    unit: "Conversion Lift",
    summary:
      "Technical refactoring and CRO that moved the bottom line for a SaaS platform.",
    industry: "SaaS / B2B Software",
    duration: "12 months",
    services: ["Technical SEO", "CRO", "Core Web Vitals", "Schema Markup"],
    challenge:
      "A SaaS platform had strong traffic but poor conversion from organic. Page speed was critical, and the funnel from landing to signup was leaking at every stage. The team had optimised for rankings but never for revenue.",
    context:
      "The platform was spending heavily on content and link building but seeing diminishing returns because the post-click experience was broken. LCP scores above 4 seconds on mobile, misaligned messaging between search intent and landing page copy, and no structured data meant they were winning clicks but losing customers.",
    approach: [
      "Core Web Vitals overhaul across all landing pages, reducing LCP from 4.2s to 1.2s",
      "CRO-driven content restructuring aligned to user intent stages across the funnel",
      "Schema markup for product and review rich results to improve SERP click-through rates",
      "A/B tested meta titles and descriptions at scale across 500+ pages",
    ],
    outcomes: [
      "Trial signups from organic increased 38% within 6 months of launch",
      "Mobile conversion rate improved from 1.2% to 2.8%",
      "Average session duration increased 22% as content-intent alignment improved",
      "Paid acquisition budget reduced by 20% as organic conversion efficiency improved",
    ],
    insight:
      "Most SEO programmes stop at rankings. This engagement proved that the real leverage is in what happens after the click. A 25% conversion lift on existing traffic is worth more than doubling traffic at the same conversion rate.",
    metrics: [
      { value: "25%", label: "Conversion rate lift" },
      { value: "1.2s", label: "Average LCP achieved" },
      { value: "+38%", label: "Organic signups" },
      { value: "15%", label: "Bounce rate reduction" },
    ],
    tags: ["Technical SEO", "CRO", "Core Web Vitals"],
    accent: "secondary",
  },
  {
    slug: "ai-search",
    id: "04",
    category: "AI Search",
    headline: "New",
    unit: "Channel Unlocked",
    summary:
      "First-mover advantage in generative search for an enterprise client.",
    industry: "Enterprise / Professional Services",
    duration: "9 months",
    services: [
      "AEO / GEO",
      "Structured Data",
      "Entity Mapping",
      "AI Monitoring",
    ],
    challenge:
      "An enterprise client needed to understand and capture traffic from AI-powered search experiences — AI Overviews, Copilot, and Perplexity — before competitors even recognised the opportunity existed.",
    context:
      "Generative search was reshaping how their target audience discovered solutions. Traditional blue-link rankings were being displaced by AI-synthesised answers, and the client had no visibility into whether they were being cited, recommended, or ignored by these systems. The window for first-mover advantage was narrow.",
    approach: [
      "Generative Engine Optimisation audit across all key landing pages to assess AI citation readiness",
      "Structured data and entity mapping for knowledge graph presence across all major AI systems",
      "Content reformatting optimised for AI citation patterns — direct answers, clear attribution, structured facts",
      "Custom monitoring framework tracking AI Overview appearances and citation frequency weekly",
    ],
    outcomes: [
      "Appeared in 40+ AI Overview citations within 6 months across target query clusters",
      "Established a new inbound channel generating qualified leads directly from AI search",
      "Became the most-cited brand in their vertical across Perplexity and AI Overviews",
      "Competitor analysis showed zero rivals had implemented a comparable GEO strategy",
    ],
    insight:
      "AI search rewards clarity and authority, not keyword density. The brands that win in generative search are the ones that structure their content to be cited, not just ranked. This is a fundamentally different optimisation problem — and most brands haven't started yet.",
    metrics: [
      { value: "40+", label: "AI Overview citations" },
      { value: "New", label: "Revenue channel established" },
      { value: "12%", label: "Traffic from AI search" },
      { value: "1st", label: "Mover in vertical" },
    ],
    tags: ["AEO / GEO", "Structured Data", "AI Strategy"],
    accent: "on-surface",
  },
];
