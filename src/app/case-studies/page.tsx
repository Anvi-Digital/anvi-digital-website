import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import ContactLink from "@/components/ContactLink";
export const metadata: Metadata = {
  title: "Case Studies | Anvi Digital",
  description:
    "Real results from real partnerships. Explore how we've driven measurable growth through AI SEO, paid media, and intelligent automation.",
  alternates: { canonical: "https://anvi.digital/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-on-background text-surface  flex items-end relative px-8 py-10">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            opacity: 0.1,
            backgroundImage:
              "linear-gradient(var(--color-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
          <span className="uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-6 block">
            Case Studies
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            The Work
            <br />
            <span className="text-secondary italic">Speaks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-surface/50 font-light max-w-lg">
            No fluff. No vanity metrics. Just measurable outcomes from real
            partnerships.
          </p>
        </div>
      </section>

      {/* ─── CASE STUDY LIST ─── */}
      <section className="bg-surface">
        {caseStudies.map((study, i) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className={`group block border-b border-on-surface/10 transition-colors duration-300 hover:bg-surface-container-low`}
          >
            <div className="max-w-screen-2xl mx-auto px-8 py-16 md:py-20">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                {/* Number */}
                <span className="text-7xl md:text-9xl font-black tracking-tighter text-on-surface/5 group-hover:text-secondary transition-colors duration-300 shrink-0 leading-none">
                  {study.id}
                </span>

                {/* Content */}
                <div className="grow min-w-0">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-secondary font-bold mb-3 block">
                    {study.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-3">
                    {study.headline}{" "}
                    <span className="text-on-surface-variant font-light text-2xl md:text-3xl">
                      {study.unit}
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-on-surface-variant/70 font-light max-w-2xl">
                    {study.summary}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.15em] font-bold px-3 py-1 border border-on-surface/10 text-on-surface-variant/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="material-symbols-outlined text-4xl text-on-surface/10 group-hover:text-secondary group-hover:translate-x-2 transition-all duration-300 shrink-0 hidden md:block">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── CTA ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-secondary flex items-center justify-center p-16 md:p-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-on-secondary">
            Your
            <br />
            Turn.
          </h2>
        </div>
        <div className="bg-on-background flex items-center justify-center p-16 md:p-24">
          <div className="max-w-sm text-center">
            <p className="text-xl text-surface/60 font-light mb-10 leading-relaxed">
              Every result above started with a single conversation.
            </p>
            <ContactLink className="bg-surface text-on-surface px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary hover:text-on-secondary transition-colors inline-block">
              Let&apos;s Talk Growth
            </ContactLink>
          </div>
        </div>
      </section>
    </>
  );
}
