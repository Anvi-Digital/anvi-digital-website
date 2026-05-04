import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ContactLink from "@/components/ContactLink";
import JsonLd from "@/components/JsonLd";
import { PAID_MEDIA_METADATA, BASE_VIEWPORT } from "@/constants/seo.constants";
import { PAID_MEDIA_STRUCTURED_DATA } from "@/constants/schema.constants";

export const metadata = PAID_MEDIA_METADATA;
export const viewport = BASE_VIEWPORT;

const stats = [
  { value: "2.8x", label: "Average ROAS across client accounts" },
  { value: "55%", label: "Reduction in cost per acquisition" },
  { value: "60d", label: "To full campaign optimisation" },
];

const channels = [
  {
    num: "01",
    icon: "ads_click",
    title: "Paid Search",
    desc: "Google and Bing campaigns built around high-intent demand signals. Keyword architecture aligned to your SEO program so organic and paid never compete for the same budget.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
    tags: ["Google Ads", "Search Intent", "Keyword Architecture"],
  },
  {
    num: "02",
    icon: "group",
    title: "Paid Social",
    desc: "Meta, LinkedIn and TikTok campaigns built around audience behaviour, not platform defaults. Creative testing frameworks that find what converts, not what gets clicks.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-surface",
    tags: ["Meta", "LinkedIn", "Creative Testing"],
  },
  {
    num: "03",
    icon: "campaign",
    title: "Programmatic & Display",
    desc: "Data-driven display across premium inventory. Retargeting sequences built around where the buyer actually is in their decision, not where the platform assumes they are.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-surface",
    tags: ["Programmatic", "Retargeting", "Intent Signals"],
  },
  {
    num: "04",
    icon: "hub",
    title: "Paid + Organic Alignment",
    desc: "The insight most agencies miss: paid and organic share the same customer. We align keyword strategy, landing pages and conversion architecture across both so each program makes the other more efficient over time.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
    tags: ["Search Alignment", "Landing Page CRO", "Unified Attribution"],
  },
];

const process = [
  {
    step: "01",
    title: "Audience",
    desc: "Map intent signals across search, social and behavioural data. Identify the highest-value customer segments and the specific moments they are ready to act. Align to what your organic data is already telling you.",
  },
  {
    step: "02",
    title: "Creative",
    desc: "Ad creative built around the intent signals discovered in step one. Systematic A/B testing across formats, copy angles and visual treatments. We kill what does not convert within two weeks, not two quarters.",
  },
  {
    step: "03",
    title: "Distribute",
    desc: "Deploy budget against the channels where intent is highest, not where the platform algorithm wants your spend. Distribution decisions driven by attribution data, not media sales pitches.",
  },
  {
    step: "04",
    title: "Optimise",
    desc: "Weekly performance reviews against business outcomes, not platform metrics. ROAS and CPA are inputs, not the goal. The goal is cost per revenue at the bottom line.",
  },
];

export default function PaidMediaPage() {
  return (
    <>
      <JsonLd data={PAID_MEDIA_STRUCTURED_DATA} />
      {/* Hero */}
      <PageContainer className="py-10! flex flex-col justify-end">
        {/* <div className="mb-8">
          <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
            PAID MEDIA
          </span>
        </div> */}
        <h1 className="text-giant font-black uppercase mb-12">
          PAID THAT PAYS FOR
          <br />
          <span className="text-secondary">ITSELF OVER TIME.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
            <p className="text-base md:text-2xl font-light leading-snug mb-8">
              Most paid media stops working the moment the budget stops. We
              design campaigns that fund organic authority and reduce what you
              need to spend next quarter.
            </p>
            <ContactLink className="bg-on-background text-surface px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors inline-block">
              LET'S TALK GROWTH
            </ContactLink>
          </div>
        </div>
      </PageContainer>

      {/* Stats */}
      <PageContainer className="border-y border-surface-variant py-0!">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-variant">
          {stats.map((s) => (
            <div key={s.label} className="py-8 md:px-16 first:pl-0 last:pr-0">
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

      {/* Channels */}
      <PageContainer className="bg-surface-container-low">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Every Channel.
            <br />
            One Strategy.
          </h2>
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            Paid media that does not live in a silo. Every channel informed by
            the same audience data, feeding the same conversion surface,
            measured against the same business outcome.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {channels.map((c) => (
            <div
              key={c.num}
              className={`group relative bg-surface p-12 lg:p-16 border-l-8 ${c.border} flex flex-col justify-between min-h-[360px] ${c.hover} transition-all duration-500`}
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
                {c.num}
              </div>
              <div>
                <span className="material-symbols-outlined text-6xl mb-8 text-secondary group-hover:text-secondary">
                  {c.icon}
                </span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                  {c.title}
                </h3>
                <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                  {c.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-widest font-bold border border-current px-3 py-1 opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* Why Paid Media */}
      <PageContainer className="bg-on-background text-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              OUR APPROACH
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              PAID MEDIA
              <br />
              THAT LEARNS.
            </h2>
            <p className="text-xl text-surface/60 mb-6 leading-relaxed">
              Most paid programs are rebuilt from scratch every quarter. New
              brief, new creative, new targeting. No institutional memory. No
              compounding.
            </p>
            <div className="w-12 h-1 bg-secondary mb-6" />
            <p className="text-xl text-surface/80 font-bold leading-relaxed">
              We build paid media that learns from every campaign cycle.
              Audience signals from this month inform next month's targeting.
              Creative that converts gets systematised. Spend shifts toward what
              works automatically, not manually.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-surface/10">
            {[
              "DEMAND CREATION",
              "PIPELINE CONVERSION",
              "BRAND AUTHORITY",
              "RETENTION & REACTIVATION",
            ].map((item) => (
              <div
                key={item}
                className="bg-on-background p-10 border border-surface/10"
              >
                <div className="w-3 h-3 bg-secondary mb-6" />
                <p className="font-black uppercase text-xl tracking-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* Process */}
      <PageContainer className="bg-surface">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            How We Work.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-on-surface">
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`p-12 border-b-2 border-on-surface flex flex-col justify-between ${i % 2 === 0 ? "md:border-r-2" : ""} ${i % 2 === 1 ? "bg-surface-container-low" : ""}`}
            >
              <span className="text-8xl md:text-[10rem] font-black leading-none text-outline mb-12 block">
                {p.step}
              </span>
              <div>
                <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* CTA Strip */}
      <PageContainer className="bg-secondary">
        <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          Ready to own your market?
        </h2>
      </PageContainer>
    </>
  );
}
