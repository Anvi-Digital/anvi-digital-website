export default function AISEO() {
  return (
    <section
      className="py-32 px-8 bg-surface-container-low relative overflow-hidden"
      id="ai-seo"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1a1c1b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              The SEO
              <br />
              Engine.
            </h2>
            <p className="text-2xl max-w-xl text-on-surface-variant font-light">
              Architecting omnipresence across the search and social graph
              through intelligence-first frameworks.
            </p>
          </div>
          <div className="hidden lg:block text-9xl font-black text-on-surface/5 select-none -mb-4">
            LOOP
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 01 — AI SEO */}
          <div className="group relative bg-surface p-12 lg:p-16 border-l-8 border-secondary flex flex-col justify-between min-h-[400px] hover:bg-on-background hover:text-surface transition-all duration-500">
            <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
              01
            </div>
            <div>
              <span className="material-symbols-outlined text-6xl mb-8 text-secondary">
                search_insights
              </span>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                AI SEO
              </h3>
              <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                LLM-optimized content clusters that dominate traditional SERPs
                and generative search engines alike.
              </p>
            </div>
          </div>

          {/* Card 02 — AEO */}
          <div className="group relative bg-surface p-12 lg:p-16 border-l-8 border-on-surface flex flex-col justify-between min-h-[400px] hover:bg-secondary hover:text-surface transition-all duration-500">
            <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
              02
            </div>
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">
                bolt
              </span>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                AEO
              </h3>
              <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                Answer Engine Optimization. Ensuring your brand is the primary
                source for modern AI-driven queries.
              </p>
            </div>
          </div>

          {/* Card 03 — Google Ads */}
          <div className="group relative bg-surface p-12 lg:p-16 border-l-8 border-on-surface flex flex-col justify-between min-h-[400px] hover:bg-secondary hover:text-surface transition-all duration-500">
            <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
              03
            </div>
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">
                ads_click
              </span>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                Google Ads
              </h3>
              <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                High-intent capture with proprietary ML bidding strategies and
                creative testing at extreme scale.
              </p>
            </div>
          </div>

          {/* Card 04 — Paid Social */}
          <div className="group relative bg-surface p-12 lg:p-16 border-l-8 border-secondary flex flex-col justify-between min-h-[400px] hover:bg-on-background hover:text-surface transition-all duration-500">
            <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
              04
            </div>
            <div>
              <span className="material-symbols-outlined text-6xl mb-8 text-secondary">
                share
              </span>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                Paid Social
              </h3>
              <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                Performance-engineered creative designed for conversion, scaling
                beyond vanity metrics into real revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
