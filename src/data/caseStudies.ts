export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  context: string;
  tags: string[];
  clients?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    number: "2.1M → 6.1M SESSIONS",
    category: "MARKETPLACE GROWTH",
    context: "Tripled organic traffic for Australia's #2 property marketplace, closing the competitive gap with the category leader from 6x to 3x",
    tags: ["Enterprise SEO", "Programmatic", "Technical SEO"],
    clients: "Domain"
  },
  {
    id: "02",
    number: "200K → 500K MONTHLY USERS",
    category: "PRODUCT LED GROWTH",
    context: "Lifted a property marketplace by 151% under direct competition from established incumbents",
    tags: ["Product SEO", "Programmatic Content", "AI Search"],
    clients: "View"
  },
  {
    id: "03",
    number: "+67% TO 3.1M UNIQUES",
    category: "SUBSCRIPTION MEDIA",
    context: "Grew a national news brand to Australia's #1 paywalled news destination",
    tags: ["Content Strategy", "AEO", "Editorial Enablement"],
    clients: "The Australian"
  },
  {
    id: "04",
    number: "+210% ORGANIC LIFT",
    category: "VERTICAL MARKETPLACE",
    context: "Scaled a regional vertical marketplace through programmatic content and entity SEO",
    tags: ["Programmatic", "Entity SEO", "Schema"]
  },
  {
    id: "05",
    number: "#1 ORGANIC POSITION",
    category: "FINANCE",
    context: "Held the leading organic position in Australia's most competitive finance segment for two years",
    tags: ["Topical Authority", "Digital PR", "Content"],
    clients: "Livewire Markets"
  },
  {
    id: "06",
    number: "+25% PLATFORM USERS",
    category: "B2B FINANCE",
    context: "Year on year audience growth across Google News, MSN, YouTube and audio distribution",
    tags: ["Distribution", "Multi-Platform"]
  },
  {
    id: "07",
    number: "+21% SQL UPLIFT",
    category: "B2B GROWTH",
    context: "Account-based campaigns into asset managers and listed companies",
    tags: ["Paid Media", "ABM", "B2B"]
  },
  {
    id: "08",
    number: "+28% TO 25M VISITS",
    category: "NATIONAL MEDIA",
    context: "Organic audience growth for a metropolitan masthead",
    tags: ["Content Strategy", "Editorial SEO"],
    clients: "Sydney Morning Herald"
  },
  {
    id: "09",
    number: "2x AUDIENCE",
    category: "LIFESTYLE PUBLISHING",
    context: "Doubled organic audiences across two leading lifestyle titles in parallel",
    tags: ["Content", "Topical Authority"],
    clients: "GQ, VOGUE, Mens Health"
  },
  {
    id: "10",
    number: "80,000 CONSUMERS IN 90 DAYS",
    category: "MARKETPLACE LAUNCH",
    context: "Acquired both sides of a two sided hospitality marketplace within a single quarter",
    tags: ["Two-Sided Marketplace", "Paid + Organic"],
    clients: "Liven"
  },
  {
    id: "11",
    number: "70+ PARTNERS / MONTH",
    category: "B2B ACQUISITION",
    context: "Sustained merchant acquisition rate for a hospitality marketplace",
    tags: ["B2B Demand Gen", "Paid Social", "SEM"],
    clients: "Liven"
  }
];
