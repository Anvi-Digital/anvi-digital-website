import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import JsonLd from "@/components/JsonLd";
import { ABOUT_METADATA, BASE_VIEWPORT } from "@/constants/seo.constants";
import { ABOUT_STRUCTURED_DATA } from "@/constants/schema.constants";

export const metadata = ABOUT_METADATA;
export const viewport = BASE_VIEWPORT;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ABOUT_STRUCTURED_DATA} />
      {/* ─── HERO ─── */}
      <PageContainer className="min-h-[80vh] md:min-h-screen flex flex-col">
        <div className="mt-auto w-full">
          <div className="mb-8">
            <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
              ABOUT ANVI DIGITAL
            </span>
          </div>
          <h1 className="text-giant font-black uppercase mb-12">
            Built for
            <br />
            <span className="text-secondary">Compounding</span>
            <br />
            <span className="text-primary-container">Growth.</span>
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                Anvi Digital is a growth practice for businesses that need
                search to keep working in the AI era.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed text-on-surface-variant/70">
                SEO, paid media and AI search engineered as one system. Built by
                an operator who has scaled organic from 2.1M to 6.1M sessions,
                lifted national audiences by 67%, and shipped four production AI
                agents. No guesswork. No vanity.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── THE APPROACH ─── */}
      <PageContainer className="bg-surface-container-low relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-on-surface) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="md:max-w-xl">
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Our Approach
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Moving
              <br />
              Past
              <br />
              Silos.
            </h2>
          </div>
          <div className="md:max-w-lg md:pt-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-8">
              Most agencies treat SEO, paid media and AI search as separate
              budgets with separate dashboards.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              We design them as one system. Demand captured in Google flows into
              the same CRO surface as demand captured in ChatGPT, Perplexity and
              Google AI Overviews. Paid amplifies what's organically working. AI
              search compounds the topical authority that paid funds.
            </p>
            <div className="w-12 h-2 bg-secondary mb-8" />
            <p className="text-xl font-medium text-on-surface">
              The result is lower cost per lead over time, not just lower cost
              per click today.
            </p>
          </div>
        </div>
      </PageContainer>

      {/* ─── EXPERIENCE ─── */}
      <PageContainer className="bg-secondary/10 relative">
        <div className="flex flex-col mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Experience
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Tied to
            <br />
            Real
            <br />
            <span className="italic text-secondary">Execution.</span>
          </h2>
          <div className="w-24 h-2 bg-on-surface" />
        </div>
        <div className="stagger-grid">
          <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
            <p className="text-xl md:text-2xl font-light text-on-surface-variant mb-12 leading-relaxed">
              Anvi Digital is built on operator experience inside Australia's
              largest media and technology businesses, including Domain, News
              Corp, View Media Group and Livewire Markets. Alongside that, 70+
              direct consulting engagements across real estate, finance,
              ecommerce, SaaS, fashion and clean energy.
            </p>
            <div className="border-l-4 border-on-surface pl-8 py-4 mb-16">
              <p className="text-lg md:text-xl font-light text-on-surface leading-relaxed">
                At the centre is <strong className="font-bold">Rama</strong>,
                with 16 years of hands-on experience across SEO, growth and
                product. Every strategy is built by someone who has shipped it
                before, owned the P&L impact, and trained the teams that
                delivered it. Practical, measurable, and tied to real execution.
              </p>
            </div>
            <div className="mt-16 flex flex-col md:flex-row gap-8">
              <p className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                Structured Systems.
              </p>
              <p className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                Predictable Marketing.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── DRIVERS OF GROWTH ─── */}
      <PageContainer className="bg-surface-container-low relative overflow-hidden">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              The Philosophy
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Three Drivers
              <br />
              of Growth.
            </h2>
            <p className="text-2xl max-w-xl text-on-surface-variant font-light">
              Search, attention and revenue all behave differently in the AI
              era. Get these three right and growth compounds.
            </p>
          </div>
          <div className="hidden lg:block text-9xl font-black text-on-surface/5 select-none -mb-4">
            SCALE
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Discovery",
              description:
                "Demand is fragmenting across Google, ChatGPT, Perplexity, AI Overviews, YouTube and social. We make sure your business shows up at the moment intent forms, on the surface where it forms.",
              borderColor: "border-secondary",
              hoverBg: "hover:bg-on-background hover:text-surface",
            },
            {
              title: "Trust",
              description:
                "Visibility without credibility converts poorly. We build entity authority, structured data and editorial signals so AI engines and buyers both recognise you as the answer, not just an option.",
              borderColor: "border-on-surface",
              hoverBg: "hover:bg-secondary hover:text-on-secondary",
            },
            {
              title: "Compounding",
              description:
                "Growth that doesn't compound is just spend. We build systems that learn, measure and improve, so each quarter inherits the gains of the last rather than starting from zero.",
              borderColor: "border-secondary",
              hoverBg: "hover:bg-on-background hover:text-surface",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-surface p-12 lg:p-16 border-l-8 ${item.borderColor} flex flex-col min-h-[320px] ${item.hoverBg} transition-all duration-500`}
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-6">
                  {item.title}
                </h3>
                <p className="text-lg font-light leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── HOW WE WORK & PRINCIPLES ─── */}
      <PageContainer className="bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Process
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">
              How We Work
            </h2>
            <div className="space-y-12">
              {[
                {
                  title: "Understand",
                  desc: "Audit current performance against AI search visibility, organic share and paid efficiency. Identify the highest-leverage growth fronts.",
                },
                {
                  title: "Build",
                  desc: "Implement technical foundations, content systems and tracking. Set the entity, schema and authority signals that compound.",
                },
                {
                  title: "Improve",
                  desc: "Optimise weekly using real performance data, AI citation tracking and conversion analysis.",
                },
                {
                  title: "Scale",
                  desc: "Expand what works across markets, page types and surfaces. Bring in AI agents to operate the system at scale.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <span className="text-2xl font-black text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg font-light text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Values
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">
              Our Principles
            </h2>
            <ul className="space-y-6">
              {[
                "Build systems, not campaigns",
                "Measure what matters, ignore vanity metrics",
                "Make strategy practical enough to ship",
                "Compound over time, don't chase spikes",
                "Optimise on real data, not opinions",
                "Prepare for the search engine your customers will use in 2027, not 2017",
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    check_circle
                  </span>
                  <span className="text-xl font-light text-on-surface-variant leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>

      {/* ─── FINAL THOUGHT ─── */}
      <PageContainer className="bg-secondary flex flex-col items-center text-center relative overflow-hidden">
        <span className="font-label uppercase tracking-[0.3em] text-xs text-on-secondary font-bold mb-8 block">
          The Vision
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-6xl mx-auto leading-tight mb-8 text-on-secondary">
          THE BUSINESSES THAT WIN THE NEXT DECADE WILL BE THE ONES BUILT TO BE
          FOUND, TRUSTED AND CITED BY HUMANS AND BY AI.
        </h2>
        <p className="text-xl md:text-2xl font-medium text-on-secondary/80">
          That&apos;s what we build at Anvi Digital.
        </p>
      </PageContainer>
    </>
  );
}
