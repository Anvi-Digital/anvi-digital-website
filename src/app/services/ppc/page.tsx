import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "PPC Management | Google Ads & Paid Search",
  description:
    "Turn ad spend into an accountable, high-converting growth engine. PPC that reduces Customer Acquisition Cost (CAC) and scales revenue predictably.",
};

const stats = [
  { value: "40%", label: "Average reduction in Cost Per Acquisition (CPA)" },
  { value: "600%", label: "Consistent ROAS achieved at scale" },
  { value: "85%", label: "Increase in high-intent pipeline value" },
];

const services = [
  {
    num: "01",
    icon: "ads_click",
    title: "Google Search & Intent",
    desc: "Capture high-intent users exactly when they are searching for a solution. We deploy intent-based keyword mapping, Dynamic Search Ads, and continuous negative pruning to eliminate waste.",
  },
  {
    num: "02",
    icon: "shopping_bag",
    title: "Google Shopping & E-Com",
    desc: "Optimised for Return on Ad Spend (ROAS) to put your products in front of buyers, not window shoppers. Includes feed optimisation, margin-based bidding strategies, and PMax fine-tuning.",
  },
  {
    num: "03",
    icon: "display_settings",
    title: "Retargeting & Display",
    desc: "Re-engage users who showed intent but didn't convert, keeping your brand top-of-mind. We use behavioral segmentation and strict frequency capping to prevent ad fatigue.",
  },
  {
    num: "04",
    icon: "analytics",
    title: "Conversion Rate Optimisation",
    desc: "Traffic is useless if the product experience fails. We optimise the post-click experience—auditing landing pages, aligning message match, and removing friction in the funnel.",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose (Audit)",
    desc: "We assess your current spend, Quality Scores, and conversion paths to identify immediate areas of wasted spend and quick-win opportunities.",
  },
  {
    step: "02",
    title: "Architect (Build)",
    desc: "We restructure campaigns to closely align with your product value propositions and user search intent, creating a highly relevant targeting architecture.",
  },
  {
    step: "03",
    title: "Validate (Test)",
    desc: "We continuously A/B test ad copy, bidding strategies, and landing pages to achieve statistical significance on what drives the highest quality conversions.",
  },
  {
    step: "04",
    title: "Scale (Growth)",
    desc: "Once a strictly profitable CPA/ROAS is established, we seamlessly scale the budget to increase volume while maintaining your target margin boundaries.",
  },
];

export default function PPCPage() {
  return (
    <>
      {/* Hero */}
      <PageContainer padding="md">
        <h1 className="text-giant font-black uppercase mb-12">
          <span className="block text-on-surface">STOP BUYING</span>
          <span className="block text-on-surface md:mb-4 lg:mb-6">CLICKS.</span>
          <span className="block text-secondary">START BUYING</span>
          <span className="block text-secondary">CUSTOMERS.</span>
        </h1>
        <div className="max-w-4xl border-l-[6px] border-on-surface pl-8 md:pl-10 lg:pl-12 py-2 ml-2 md:ml-[calc(clamp(4.25rem,15vw,10rem)*0.6)]">
          <p className="text-lg md:text-2xl font-normal leading-relaxed mb-8 text-on-surface/90">
            PPC that reduces Customer Acquisition Cost (CAC) and scales revenue
            predictably. We treat your budget like our own product—optimising
            for LTV, eliminating waste, and targeting exact moments of user
            intent.
          </p>
          <Link
            href="#contact"
            className="bg-on-background text-surface px-10 py-5 font-bold uppercase tracking-[0.1em] text-sm hover:bg-secondary hover:text-on-secondary transition-colors inline-block"
          >
            GET A FREE AUDIT
          </Link>
        </div>
      </PageContainer>

      {/* Stats */}
      <PageContainer padding="md" className="border-y border-surface-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-variant">
          {stats.map((s) => (
            <div
              key={s.label}
              className="py-8 md:py-0 md:px-16 first:pl-0 last:pr-0"
            >
              <p className="text-6xl md:text-7xl font-black text-secondary mb-2">
                {s.value}
              </p>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* Services */}
      <PageContainer className="bg-surface-container-low">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Every Funnel Stage,
            <br />
            Optimised.
          </h2>
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            We bridge the gap between user intent, messaging, and the landing
            page experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-surface p-12 lg:p-16 border-l-8 border-secondary flex flex-col justify-between min-h-[360px] hover:bg-on-background hover:text-surface transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
                {s.num}
              </div>
              <div>
                <span className="material-symbols-outlined text-6xl mb-8 text-secondary group-hover:text-secondary">
                  {s.icon}
                </span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                  {s.title}
                </h3>
                <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* Process */}
      <PageContainer className="bg-surface">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Built For Revenue.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-on-surface">
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`p-12 md:p-20 border-b-2 border-on-surface flex flex-col justify-between ${i % 2 === 0 ? "md:border-r-2" : ""} ${i % 2 === 1 ? "bg-surface-container-low" : ""}`}
            >
              <span className="text-8xl md:text-[10rem] font-black leading-none text-outline mb-12 block">
                {p.step}
              </span>
              <div>
                <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* CTA Strip */}
      <PageContainer padding="md" className="bg-secondary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Ready to stop
            <br />
            burning budget?
          </h2>
          <Link
            href="#contact"
            className="shrink-0 bg-on-background text-surface px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface hover:text-on-background transition-colors inline-block"
          >
            Get a Free Audit
          </Link>
        </div>
      </PageContainer>

      <Contact />
    </>
  );
}
