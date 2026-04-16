import PageContainer from "./PageContainer";

export default function AIAgents() {
  return (
    <PageContainer id="ai-agents" className="bg-surface">
      {/* Section Header */}
      <div className="flex flex-col mb-32">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          Built for <br />
          <span className="italic text-secondary">Measurable</span> Growth.
        </h2>
        <div className="w-24 h-2 bg-on-surface" />
      </div>

      {/* 4-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-on-surface">
        {/* Step 01 — Discovery */}
        <div className="p-12 md:p-20 border-b-2 md:border-r-2 border-on-surface flex flex-col justify-between">
          <div className="mb-12">
            <span className="text-8xl md:text-[10rem] font-black leading-none text-outline">
              01
            </span>
          </div>
          <div>
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
              Discover
            </h3>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
              We assess your market, competition, and current performance to
              identify real opportunities.
            </p>
          </div>
        </div>

        {/* Step 02 — Architecture */}
        <div className="p-12 md:p-20 border-b-2 border-on-surface flex flex-col justify-between bg-surface-container-low">
          <div className="mb-12 flex justify-end">
            <span className="text-8xl md:text-[10rem] font-black leading-none text-on-surface">
              02
            </span>
          </div>
          <div className="md:pl-12">
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
              Build
            </h3>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
              We put the right foundations in place across SEO and paid to
              capture demand effectively.
            </p>
          </div>
        </div>

        {/* Step 03 — Evolve */}
        <div className="p-12 md:p-20 border-b-2 md:border-r-2 border-on-surface flex flex-col justify-between bg-secondary/5">
          <div className="mb-12">
            <span className="text-8xl md:text-[10rem] font-black leading-none text-on-surface">
              03
            </span>
          </div>
          <div>
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
              Improve
            </h3>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
              We refine performance continuously using real data, testing, and
              insights.
            </p>
          </div>
        </div>

        {/* Step 04 — Govern */}
        <div className="p-12 md:p-20 border-b-2 border-on-surface flex flex-col justify-between">
          <div className="mb-12 flex justify-end">
            <span className="text-8xl md:text-[10rem] font-black leading-none text-outline">
              04
            </span>
          </div>
          <div className="md:pl-12">
            <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
              Scale
            </h3>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
              We focus on what works and scale it without unnecessarily
              increasing costs.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-2xl font-bold uppercase tracking-widest text-on-surface-variant">
          Built to deliver steady growth, not short-term spikes.
        </p>
        <a
          href="/#contact"
          className="bg-on-background text-surface px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary transition-colors inline-block"
        >
          Start Growing
        </a>
      </div>
    </PageContainer>
  );
}
