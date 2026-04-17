import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import { SquareBoxShape } from "@/assets/shapes";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "Enterprise SEO Services | Anvi Digital",
  description:
    "Built for scale, complexity, and large platforms. We engineer technical SEO architectures that support thousands of pages seamlessly.",
};

const stats = [
  {
    label: "Indexing Rate",
    value: "99.9%",
    desc: "Ensuring every page is found.",
  },
  {
    label: "Traffic Lift",
    value: "4.2x",
    desc: "Average growth for enterprise clients.",
  },
  { label: "Load Speed", value: "<1.2s", desc: "LCP optimization at scale." },
];

export default function EnterpriseSEOPage() {
  return (
    <>
      {/* ─── MINI HERO ─── */}
      <PageContainer className="pt-24 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            Enterprise
            <br />
            <span className="text-secondary italic">SEO.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            Strategic search dominance for complex architectures and high-volume
            platforms.
          </p>
        </div>
      </PageContainer>

      {/* ─── STATS BREATHER ─── */}
      <PageContainer className="bg-on-background text-surface py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <SquareBoxShape className="w-[600px] h-[600px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-secondary pl-8">
              <span className="text-6xl font-black block mb-2">
                {stat.value}
              </span>
              <span className="text-lg font-bold uppercase tracking-widest text-secondary block mb-2">
                {stat.label}
              </span>
              <p className="text-surface-variant font-light">{stat.desc}</p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── CORE FOCUS ─── */}
      <PageContainer className="bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              The Focus
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
              Technical
              <br />
              Integrity
              <br />
              At Scale.
            </h2>
            <div className="w-24 h-2 bg-on-surface mb-12" />
          </div>
          <div className="space-y-12">
            {[
              {
                title: "Scalable Architecture",
                desc: "We ensure your site foundation can handle hundreds of thousands of URLs without crawl budget depletion or indexing latency.",
              },
              {
                title: "Data-Led Insights",
                desc: "Enterprise-grade analytics integration to track ROI, attribution, and multi-channel impact across complex user journeys.",
              },
              {
                title: "Governance & Workflows",
                desc: "Systems to maintain SEO standards across large teams, diverse content hubs, and continuous deployment environments.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── CTA ─── */}
      <PageContainer className="bg-secondary/10 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
          Ready for Global Dominance?
        </h2>
        <ContactLink className="bg-on-background text-surface px-12 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:bg-secondary inline-block">
          Discuss Your Enterprise Strategy
        </ContactLink>
      </PageContainer>
    </>
  );
}
