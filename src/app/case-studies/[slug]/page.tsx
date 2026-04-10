import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import Contact from "@/components/Contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.category} — ${study.headline} ${study.unit} | Anvi Digital`,
    description: study.summary,
    alternates: {
      canonical: `https://anvi.digital/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];
  const accentBg =
    study.accent === "secondary" ? "bg-secondary" : "bg-on-surface";
  const accentText =
    study.accent === "secondary" ? "text-secondary" : "text-on-surface";

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-on-background text-surface flex flex-col justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(var(--color-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-8 py-20">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-surface/40 hover:text-secondary transition-colors mb-16 text-xs uppercase tracking-[0.25em] font-bold"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            All Case Studies
          </Link>
          <span className="uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-6 block">
            {study.category}
          </span>
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] mb-4">
            {study.headline}
          </h1>
          <p className="text-3xl md:text-4xl font-light text-surface/40 mb-16">
            {study.unit}
          </p>
          {/* Meta strip */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-surface/10 pt-10">
            <div>
              <span className="uppercase tracking-[0.25em] text-[10px] text-surface/30 font-bold block mb-1">
                Industry
              </span>
              <span className="text-sm font-medium text-surface/70">
                {study.industry}
              </span>
            </div>
            <div>
              <span className="uppercase tracking-[0.25em] text-[10px] text-surface/30 font-bold block mb-1">
                Duration
              </span>
              <span className="text-sm font-medium text-surface/70">
                {study.duration}
              </span>
            </div>
            <div>
              <span className="uppercase tracking-[0.25em] text-[10px] text-surface/30 font-bold block mb-1">
                Services
              </span>
              <span className="text-sm font-medium text-surface/70">
                {study.services.join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHALLENGE ─── */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className={`w-16 h-1 ${accentBg} mb-6`} />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                The
                <br />
                Challenge
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant">
                {study.challenge}
              </p>
              <p className="text-lg font-light leading-relaxed text-on-surface-variant/70">
                {study.context}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="bg-surface-container-low py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-on-surface) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className="w-16 h-1 bg-on-surface mb-6" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                Our
                <br />
                Approach
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="space-y-10">
                {study.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <span
                      className={`text-3xl font-black ${accentText} opacity-30 group-hover:opacity-100 transition-opacity leading-none mt-1 shrink-0`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="bg-on-background text-surface py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-6 block">
            Results
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-20">
            The Numbers.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-surface/5">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-on-background p-10 md:p-14">
                <span className="text-5xl md:text-6xl font-black tracking-tighter block mb-3 text-secondary">
                  {m.value}
                </span>
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-surface/40">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ─── */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className={`w-16 h-1 ${accentBg} mb-6`} />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                Key
                <br />
                Outcomes
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="space-y-0">
                {study.outcomes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-6 py-8 border-b border-on-surface/10 last:border-b-0 group"
                  >
                    <div className={`w-2 h-2 ${accentBg} shrink-0 mt-3`} />
                    <p className="text-lg md:text-xl text-on-surface font-light leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSIGHT QUOTE ─── */}
      <section className="bg-on-background text-surface py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl">
            <span className="uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-8 block">
              Key Insight
            </span>
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-surface/80">
              &ldquo;{study.insight}&rdquo;
            </p>
            <div className={`w-24 h-1 ${accentBg} mt-12`} />
          </div>
        </div>
      </section>

      {/* ─── TAGS ─── */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-wrap gap-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 border border-on-surface/15 text-on-surface-variant/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ─── NEXT CASE STUDY ─── */}
      <section className="bg-surface border-t-2 border-on-surface/10">
        <Link href={`/case-studies/${next.slug}`} className="group block">
          <div className="max-w-screen-2xl mx-auto px-8 py-20 md:py-28 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-on-surface-variant/40 font-bold mb-4 block">
                Next Case Study
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight group-hover:text-secondary transition-colors">
                {next.headline}{" "}
                <span className="text-on-surface-variant font-light text-2xl md:text-3xl">
                  {next.unit}
                </span>
              </h3>
              <span className="uppercase tracking-[0.3em] text-xs text-secondary font-bold mt-3 block">
                {next.category}
              </span>
            </div>
            <span className="material-symbols-outlined text-5xl text-on-surface/10 group-hover:text-secondary group-hover:translate-x-3 transition-all duration-300 shrink-0">
              arrow_forward
            </span>
          </div>
        </Link>
      </section>

      <Contact />
    </>
  );
}
