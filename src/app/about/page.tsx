import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "About | Anvi Digital",
  description:
    "Anvi Digital is a growth agency focused on building reliable, scalable demand systems.",
};

export default function AboutPage() {
  return (
    <>
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
            <span className="text-secondary">Consistent</span>
            <br />
            <span className="text-primary-container">Growth.</span>
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                Anvi Digital is a growth agency focused on building reliable,
                scalable demand systems.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed text-on-surface-variant/70">
                We combine SEO, paid media, and intelligent automation to help
                businesses generate consistent, high-quality enquiries without
                guesswork.
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
              Most marketing efforts operate in silos.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              We bring them together by designing SEO and paid media as a single
              system. This allows performance to improve over time while
              reducing cost per lead.
            </p>
            <div className="w-12 h-2 bg-secondary mb-8" />
            <p className="text-xl font-medium text-on-surface">
              Our focus is on building long-term, compounding growth rather than
              short-term spikes.
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
              Anvi Digital is built on experience across Australia's leading
              media and technology companies, along with consulting engagements
              across 70+ businesses in real estate, finance, media, SaaS, and
              more.
            </p>
            <div className="border-l-4 border-on-surface pl-8 py-4 mb-16">
              <p className="text-lg md:text-xl font-light text-on-surface leading-relaxed">
                At the centre of it is{" "}
                <strong className="font-bold">Rama</strong>, bringing over 16
                years of hands-on experience across SEO, growth, and product.
                This ensures every strategy is practical, measurable, and tied
                to real execution.
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
              When the right foundations are in place, results are easier to
              scale.
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
                "Growth starts when your business is visible at the moment people are actively searching. We focus on capturing high-intent demand across search and digital channels.",
              borderColor: "border-secondary",
              hoverBg: "hover:bg-on-background hover:text-surface",
            },
            {
              title: "Trust",
              description:
                "Visibility alone is not enough. We help turn attention into action by improving relevance, clarity, and user experience across every touchpoint.",
              borderColor: "border-on-surface",
              hoverBg: "hover:bg-secondary hover:text-on-secondary",
            },
            {
              title: "Compounding",
              description:
                "Sustainable growth comes from continuous improvement. We build systems that evolve, learn from data, and deliver better results over time.",
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

      {/* ─── WHAT WE DO ─── */}
      <PageContainer className="bg-on-background text-surface relative overflow-hidden">
        <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
          Capabilities
        </span>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16 text-surface">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "SEO & AI Search",
              desc: "Technical SEO, programmatic content, and optimisation for modern search experiences.",
            },
            {
              title: "Paid Media",
              desc: "Performance-driven campaigns across Google and social platforms.",
            },
            {
              title: "Growth Strategy",
              desc: "Positioning, go-to-market planning, and conversion optimisation.",
            },
            {
              title: "Automation",
              desc: "AI-driven workflows that improve efficiency and decision-making.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-2 border-surface/20 pt-8">
              <h3 className="text-3xl font-black uppercase mb-4 text-secondary">
                {item.title}
              </h3>
              <p className="text-lg font-light text-surface/80">{item.desc}</p>
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
                  desc: "We assess your current performance, market, and opportunities.",
                },
                {
                  title: "Build",
                  desc: "We implement strong foundations across SEO, paid media, and data.",
                },
                {
                  title: "Improve",
                  desc: "We refine performance continuously using real insights.",
                },
                {
                  title: "Scale",
                  desc: "We expand what works to drive sustainable growth.",
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
                "Focus on measurable outcomes, not vanity metrics",
                "Keep strategies clear, practical, and effective",
                "Prioritise consistency over short-term spikes",
                "Continuously improve based on real data",
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
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl mx-auto leading-tight mb-8 text-on-secondary">
          Growth becomes far more predictable when it is built on the right
          system.
        </h2>
        <p className="text-xl md:text-2xl font-medium text-on-secondary/80">
          That&apos;s what we focus on at Anvi Digital.
        </p>
      </PageContainer>
    </>
  );
}
