import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import JsonLd from "@/components/JsonLd";
import {
  CASE_STUDIES_METADATA,
  BASE_VIEWPORT,
} from "@/constants/seo.constants";
import { CASE_STUDIES_STRUCTURED_DATA } from "@/constants/schema.constants";

export const metadata = CASE_STUDIES_METADATA;
export const viewport = BASE_VIEWPORT;

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={CASE_STUDIES_STRUCTURED_DATA} />
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
          <div
            key={study.id}
            className="group block border-b border-on-surface/10 transition-colors duration-300 hover:bg-surface-container-low"
          >
            <div className="max-w-screen-2xl mx-auto px-8 py-16 md:py-20">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                {/* Number (ID) */}
                <span className="text-7xl md:text-9xl font-black tracking-tighter text-on-surface/5 transition-colors duration-300 shrink-0 leading-none">
                  {study.id}
                </span>

                {/* Content */}
                <div className="grow min-w-0">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-secondary font-bold mb-3 block">
                    {study.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-3">
                    {study.number}
                  </h2>
                  <p className="text-base md:text-lg text-on-surface-variant/70 font-light max-w-2xl">
                    {study.context}
                  </p>

                  {study.clients && (
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/40 mt-4">
                      Client:{" "}
                      <span className="text-on-surface-variant/80">
                        {study.clients}
                      </span>
                    </p>
                  )}

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
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
