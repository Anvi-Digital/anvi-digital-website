import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import { RoundShape } from "@/assets/shapes";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "Local SEO Services | Anvi Digital",
  description:
    "Capture high-intent local audience. Dominating map results, Google Business Profiles, and local service intent.",
};

export default function LocalSEOPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer className="pt-24 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            Local
            <br />
            <span className="text-secondary italic">SEO.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            Own the search results in your backyard and turn area-intent into
            business growth.
          </p>
        </div>
      </PageContainer>

      {/* ─── LOCAL ADVANTAGE ─── */}
      <PageContainer className="bg-surface-container-low py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              The Advantage
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
              Be The
              <br />
              Top Choice,
              <br />
              Every Time.
            </h2>
            <div className="w-24 h-2 bg-on-surface mb-12" />
            <p className="text-xl font-light text-on-surface-variant leading-relaxed max-w-md">
              Local search is often the final step before a customer converts.
              We ensure you&apos;re not just visible, but the obvious authority
              in your region.
            </p>
          </div>
          <div className="space-y-16">
            {[
              {
                title: "Map Pack Dominance",
                desc: "We optimize your Google Business Profile and local signals to secure a spot in the coveted '3-pack' for relevant local keywords.",
              },
              {
                title: "Location Landings",
                desc: "Geographically targeted landing pages that speak directly to local needs while satisfying core search algorithm requirements.",
              },
              {
                title: "Local Citation Sync",
                desc: "Ensuring consistency across every directory, review site, and local portal to build unshakeable trust with search engines.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-8 group">
                <div className="w-2 bg-on-surface-variant/20 group-hover:bg-secondary transition-colors shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── CALL TO ACTION ─── */}
      <div className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <RoundShape className="w-[800px] h-[800px]" />
        </div>
        <PageContainer className="py-40 flex flex-col items-center text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            Ready to
            <br />
            Go <span className="text-secondary italic">Local?</span>
          </h2>
          <ContactLink className="bg-on-background text-surface px-12 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:bg-secondary inline-block">
            Start Your Local Audit
          </ContactLink>
        </PageContainer>
      </div>
    </>
  );
}
