import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "SEO Services | Anvi Digital",
  description:
    "Build a predictable pipeline of high-intent traffic through search, powered by strategy, content, and technical execution.",
};

export default function SEOServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer className="flex flex-col pt-8">
        <div className="mt-auto w-full">
          {/* <div className="mb-8">
            <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
              SEARCH ENGINE OPTIMISATION
            </span>
          </div> */}
          <h1 className="text-giant font-black uppercase mb-12">
            Own Your
            <br />
            <span className="text-secondary">Organic</span>
            <br />
            <span className="text-primary-container">Growth.</span>
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                SEO that compounds over time, not campaigns that fade.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-on-surface-variant/70">
                Build a predictable pipeline of high-intent traffic through
                search, powered by strategy, content, and meticulous technical
                execution.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
                <a
                  href="#how-it-works"
                  className="bg-on-background text-surface px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-secondary text-center inline-block"
                >
                  Start Growing
                </a>
                <a
                  href="#contact-cta"
                  className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block"
                >
                  Get a Free Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── CONTEXT ─── */}
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
              The Reality
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              SEO,
              <br />
              Done
              <br />
              Properly.
            </h2>
          </div>
          <div className="md:max-w-lg md:pt-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-8">
              Search Engine Optimisation is not just about rankings. It&apos;s
              about showing up when your customers are actively looking, and
              turning that intent into enquiries.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              Most businesses don&apos;t fail at SEO because of a lack of
              effort. They fail because there&apos;s{" "}
              <strong className="font-bold text-on-surface">
                no system behind it.
              </strong>{" "}
              That&apos;s exactly what we build.
            </p>
            <div className="w-12 h-2 bg-secondary mb-8" />
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Consistent acquisition",
                "Compounding traffic",
                "Reduced paid reliance",
                "Long-term asset",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-on-surface-variant font-medium"
                >
                  <div className="w-2 h-2 bg-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>

      {/* ─── CAPABILITIES ─── */}
      <PageContainer className="bg-secondary/10 relative">
        <div className="flex flex-col mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Solutions
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Designed
            <br />
            For
            <br />
            <span className="italic text-secondary">Dominance.</span>
          </h2>
          <div className="w-24 h-2 bg-on-surface mb-8" />
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            We provide end-to-end search solutions tailored to your market,
            scale, and specific business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Enterprise SEO",
              desc: "Built for scale, complexity, and large platforms. We engineer technical SEO architectures that support thousands of pages seamlessly without breaking.",
              border: "border-secondary",
              hover: "hover:bg-on-background hover:text-surface",
              tags: [
                "Technical SEO at scale",
                "Site architecture",
                "Automation",
              ],
            },
            {
              title: "AEO / GEO",
              desc: "Optimise for Answer & Generative Engines (AI Overview, Copilot). A crucial emerging channel for maintaining visibility.",
              border: "border-primary-container",
              hover: "hover:bg-secondary hover:text-on-secondary",
              tags: ["Answer Engines", "Generative Content", "Structured Data"],
            },
            {
              title: "Local SEO",
              desc: "Capture high-intent searches in your area & drive local enquiries through map visibility, and highly-targeted landing pages.",
              border: "border-on-surface",
              hover:
                "hover:bg-primary-container hover:text-on-primary-container",
              tags: ["Business Profile", "Map Visibility", "Local Landings"],
            },
            {
              title: "Digital PR",
              desc: "Build uncompromising authority through high-quality media outreach, placements, and content-led strategic campaigns.",
              border: "border-secondary",
              hover: "hover:bg-on-background hover:text-surface",
              tags: ["Media Outreach", "Link Acquisition", "Brand Authority"],
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`group relative bg-surface p-10 lg:p-14 border-l-8 ${card.border} flex flex-col ${card.hover} transition-all duration-500 min-h-[340px]`}
            >
              <h3 className="text-3xl font-black uppercase leading-none mb-6">
                {card.title}
              </h3>
              <p className="text-lg font-light leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-widest font-bold border border-current px-3 py-1 opacity-70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── PROCESS ─── */}
      <PageContainer
        id="how-it-works"
        className="bg-surface-container-low relative overflow-hidden"
      >
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              The Methodology
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Systems,
              <br />
              Not
              <br />
              Guesswork.
            </h2>
            <p className="text-2xl max-w-xl text-on-surface-variant font-light">
              Built for steady, exponential growth. A methodology refined across
              countless audits and deployments.
            </p>
          </div>
          <div className="hidden lg:block text-9xl font-black text-on-surface/5 select-none -mb-4">
            PROCESS
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-on-surface mt-16 pt-12 gap-12 md:gap-4">
          {[
            {
              num: "01",
              title: "Discover",
              desc: "Deep-dive into your market, spy on competition, and measure performance to extract pure opportunity.",
            },
            {
              num: "02",
              title: "Build",
              desc: "Deploy the foundations. From deep technical triage to scalable programmatic content structures.",
            },
            {
              num: "03",
              title: "Improve",
              desc: "Refine continuous performance models based on structured data and real user interactions.",
            },
            {
              num: "04",
              title: "Scale",
              desc: "Identify traction points and apply severe scaling to grow conversions seamlessly.",
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col group py-4 pr-4">
              <span className="text-4xl font-black text-secondary mb-6 group-hover:text-on-surface transition-colors">
                {step.num}
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-base text-on-surface-variant font-light leading-relaxed pr-6">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── CASE STUDIES ─── */}
      <PageContainer className="bg-surface relative">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center border-t-2 border-b-2 border-on-surface py-24">
          <div className="lg:max-w-md">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Real Growth,
              <br />
              Not Just Ranks.
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-8">
              We focus uncompromisingly on outcomes that radically reshape the
              bottom line.
            </p>
            <div className="w-12 h-2 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12 flex-grow">
            {[
              {
                category: "Marketplace Growth",
                stat: "2.1M → 6.1M",
                desc: "Scaled organic traffic sessions within two years.",
              },
              {
                category: "Media & Publishing",
                stat: "+67%",
                desc: "Exploded distinct audience reaching the #1 position.",
              },
              {
                category: "Product-Led Growth",
                stat: "25% Lift",
                desc: "Compound growth via deep technical refactoring.",
              },
              {
                category: "AI Search",
                stat: "New Channel",
                desc: "Unlocked organic pipeline via generative search.",
              },
            ].map((study) => (
              <div
                key={study.category}
                className="flex flex-col border-l-4 border-secondary pl-6"
              >
                <span className="font-label uppercase tracking-[0.2em] text-xs text-on-surface-variant font-bold mb-4">
                  {study.category}
                </span>
                <span className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-2">
                  {study.stat}
                </span>
                <span className="text-sm md:text-base text-on-surface-variant md:max-w-[200px]">
                  {study.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── FLYWHEEL ─── */}
      <PageContainer className="bg-surface-container-low relative overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Engine
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            The Flywheel
            <br />
            <span className="text-secondary italic">Effect.</span>
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed mb-16">
            Most providers focus on isolated tricks. We engineer a compounding
            engine that operates continuously, aggregating unshakeable power
            over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-4xl mt-8">
            {[
              "Continuously captures emerging high-intent demand.",
              "Adapts resiliently to catastrophic algorithm changes.",
              "Dramatically improves acquisition efficiency over time.",
              "Compounds aggregate results infinitely.",
            ].map((item) => (
              <div
                key={item}
                className="bg-surface p-8 border-t-4 border-on-surface shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-lg font-medium leading-snug text-on-surface">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── CTA ─── */}
      <PageContainer
        id="contact-cta"
        className="bg-on-background text-surface text-center relative overflow-hidden"
      >
        <div className="flex flex-col items-center">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-primary-container font-bold mb-6 block">
            Dominate Your Vertical
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 max-w-4xl">
            Ready to
            <br />
            Grow?
          </h2>
          <p className="text-xl md:text-2xl text-surface-variant max-w-2xl font-light leading-relaxed mb-12">
            Stop relying on increasingly expensive paid ads. Let&apos;s engineer
            an organic growth system tailored to scale you.
          </p>
          <a
            href="/#contact"
            className="bg-secondary text-on-secondary px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-bold uppercase tracking-widest transition-all hover:bg-surface hover:text-on-surface inline-block"
          >
            Get a Free SEO Audit
          </a>
        </div>
      </PageContainer>
    </>
  );
}
