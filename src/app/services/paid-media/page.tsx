import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Paid Media | Full-Funnel Media Buying",
  description:
    "Strategic paid media that builds demand and converts it. From awareness to acquisition across every channel that matters.",
};

const stats = [
  { value: "2.8x", label: "Average ROAS across client accounts" },
  { value: "55%", label: "Reduction in cost per acquisition" },
  { value: "60d", label: "To full campaign optimisation" },
];

const channels = [
  {
    num: "01",
    icon: "campaign",
    title: "Programmatic Display",
    desc: "Reach your audience at scale with data-driven display buying across premium inventory. Precision targeting, zero wasted impressions.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
  },
  {
    num: "02",
    icon: "play_circle",
    title: "Video & YouTube",
    desc: "Tell your story where attention is highest. Pre-roll, in-stream, and connected TV campaigns built around real business outcomes.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-surface",
  },
  {
    num: "03",
    icon: "trending_up",
    title: "Native Advertising",
    desc: "Content-led ads that blend into the feed and drive qualified traffic without disrupting the user experience.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-surface",
  },
  {
    num: "04",
    icon: "hub",
    title: "Cross-Channel Strategy",
    desc: "We unify your paid media into a single system — one budget, one strategy, one source of truth for performance.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
  },
];

const process = [
  {
    step: "01",
    title: "Audience",
    desc: "We map your ideal customer across channels — demographics, intent signals, and behavioural patterns that predict conversion.",
  },
  {
    step: "02",
    title: "Creative",
    desc: "Ad creative built around your audience's pain points. We test formats, copy, and visuals to find what actually converts.",
  },
  {
    step: "03",
    title: "Distribute",
    desc: "Deploy across the right channels at the right time. Budget allocation driven by data, not assumptions.",
  },
  {
    step: "04",
    title: "Optimise",
    desc: "Continuous performance analysis. We shift spend toward what works and cut what doesn't — every single week.",
  },
];

export default function PaidMediaPage() {
  return (
    <>
      {/* Hero */}
      <PageContainer
        padding="lg"
        className="min-h-[80vh] flex flex-col justify-end"
      >
        <div className="mb-8">
          <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
            PAID MEDIA
          </span>
        </div>
        <h1 className="text-giant font-black uppercase mb-12">
          Build Demand.
          <br />
          <span className="text-secondary">Own Attention.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
            <p className="text-base md:text-2xl font-light leading-snug mb-8">
              Full-funnel paid media that creates demand at the top and captures
              it at the bottom — working as one system.
            </p>
            <a
              href="#contact"
              className="bg-on-background text-surface px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors inline-block"
            >
              Start a Campaign
            </a>
          </div>
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

      {/* Channels */}
      <PageContainer className="bg-surface-container-low">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Every Channel.
            <br />
            One Strategy.
          </h2>
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            We don&apos;t silo your media. We build a unified system that
            compounds over time.
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
              Moving Past
              <br />
              Silos.
            </h2>
            <p className="text-xl text-surface/60 mb-6 leading-relaxed">
              Most paid media fails because channels operate independently.
              Display doesn&apos;t talk to search. Video doesn&apos;t feed
              retargeting.
            </p>
            <div className="w-12 h-1 bg-secondary mb-6" />
            <p className="text-xl text-surface/80 font-bold leading-relaxed">
              We design paid media as a single compounding system — so
              performance improves over time while cost per acquisition falls.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-surface/10">
            {[
              "Brand Awareness",
              "Demand Generation",
              "Lead Acquisition",
              "Retargeting",
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
            Ready to own
            <br />
            your market?
          </h2>
          <a
            href="#contact"
            className="shrink-0 bg-on-background text-surface px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface hover:text-on-background transition-colors inline-block"
          >
            Start a Campaign
          </a>
        </div>
      </PageContainer>

      <Contact />
    </>
  );
}
