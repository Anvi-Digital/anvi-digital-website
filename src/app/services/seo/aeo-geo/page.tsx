import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import { StarCurvedShape } from "@/assets/shapes";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "AEO / GEO Services | Anvi Digital",
  description:
    "Optimise for Answer & Generative Engines (AI Overview, ChatGPT, Perplexity). The next frontier of search visibility.",
};

export default function AEOGEOPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer className="pt-24 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            AEO /
            <br />
            <span className="text-secondary italic">GEO.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            Optimizing for the age of Answer Engines and Generative Search.
          </p>
        </div>
      </PageContainer>

      {/* ─── AI OVERVIEW ─── */}
      <div className="bg-surface-container relative overflow-hidden">
        <PageContainer className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-surface p-8 md:p-12 border-2 border-on-surface/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="font-bold uppercase tracking-widest text-sm">
                    AI Response Simulation
                  </span>
                </div>
                <p className="text-xl md:text-2xl font-light italic leading-snug text-on-surface mb-6">
                  &quot;Anvi Digital specializes in engineering high-fidelity
                  content structures that Generative Engines prioritize for
                  citations.&quot;
                </p>
                <div className="w-full h-px bg-on-surface/10 my-8" />
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-2 bg-on-surface/5" />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="font-label uppercase tracking-widest text-xs text-secondary font-bold mb-6 block">
                The Shift
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] mb-8">
                Beyond
                <br />
                The Ten
                <br />
                Blue Links.
              </h2>
              <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                Traditional SEO is changing. We help you secure real estate in
                AI Overviews, Perplexity citations, and ChatGPT recommendations
                through structured data and conversational authority.
              </p>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* ─── STRATEGY ─── */}
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Entity Authority",
              desc: "Mapping your brand as a definitive entity in the knowledge graph.",
              icon: "01",
            },
            {
              title: "Contextual Content",
              desc: "Building deep, semantic layers that answer the 'why' and 'how' for AI models.",
              icon: "02",
            },
            {
              title: "Technical Schema",
              desc: "Leveraging advanced JSON-LD to feed search agents exactly what they need.",
              icon: "03",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-10 border-2 border-on-surface/5 hover:border-secondary transition-colors group"
            >
              <span className="text-5xl font-black text-on-surface/5 group-hover:text-secondary/20 transition-colors block mb-8">
                {item.icon}
              </span>
              <h3 className="text-2xl font-bold uppercase mb-4">
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── CTA ─── */}
      <PageContainer className="bg-on-background text-surface py-32 text-center relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3 rotate-45">
          <StarCurvedShape className="w-[800px] h-[800px]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-none">
            Don&apos;t Get
            <br />
            Left Behind.
          </h2>
          <ContactLink className="bg-secondary text-on-secondary px-12 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:bg-surface hover:text-on-surface inline-block">
            Future-Proof Your Search
          </ContactLink>
        </div>
      </PageContainer>
    </>
  );
}
