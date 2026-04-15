import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Paid Social | Social Media Advertising",
  description:
    "Paid social that builds demand and converts it. Campaigns engineered around audience psychology, creative performance, and measurable business outcomes.",
  alternates: { canonical: "https://anvi.digital/services/social-media" },
};

const stats = [
  { value: "3.4x", label: "Average ROAS across paid social accounts" },
  { value: "48%", label: "Reduction in cost per lead" },
  { value: "90d", label: "To a fully optimised social system" },
];

const platforms = [
  {
    num: "01",
    icon: "group",
    title: "Meta (Facebook & Instagram)",
    desc: "The largest intent and interest graph on the planet. We build full-funnel Meta campaigns — from cold audience prospecting to high-converting retargeting sequences.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
  },
  {
    num: "02",
    icon: "work",
    title: "LinkedIn",
    desc: "The only platform where job title, seniority, and company size are first-party targeting signals. Built for B2B pipeline generation and enterprise deal flow.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-on-secondary",
  },
  {
    num: "03",
    icon: "play_circle",
    title: "TikTok & Short-Form Video",
    desc: "Attention is the new inventory. We create native-first video campaigns that stop the scroll and drive measurable action — not just views.",
    border: "border-on-surface",
    hover: "hover:bg-secondary hover:text-on-secondary",
  },
  {
    num: "04",
    icon: "pin",
    title: "Pinterest & Discovery",
    desc: "High-intent discovery for e-commerce and lifestyle brands. Users arrive with purchase intent — we make sure your product is what they find.",
    border: "border-secondary",
    hover: "hover:bg-on-background hover:text-surface",
  },
];

const process = [
  {
    step: "01",
    title: "Audience",
    desc: "We build precise audience architecture — layering demographics, interests, behaviours, and lookalikes to reach people most likely to convert.",
  },
  {
    step: "02",
    title: "Creative",
    desc: "Creative is the targeting. We develop ad concepts built around your audience's specific pain points, objections, and motivations.",
  },
  {
    step: "03",
    title: "Test",
    desc: "Systematic creative and audience testing to find the lowest CPL and highest-quality lead combinations before scaling spend.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Once a profitable unit economics model is proven, we scale aggressively — expanding audiences and increasing budget without breaking performance.",
  },
];

const funnelStages = [
  {
    stage: "Top of Funnel",
    goal: "Build Awareness",
    desc: "Reach cold audiences who match your ideal customer profile. Video, carousel, and story formats that introduce your brand at scale.",
  },
  {
    stage: "Middle of Funnel",
    goal: "Build Consideration",
    desc: "Re-engage warm audiences who interacted with your content or visited your site. Educate, build trust, and move them toward a decision.",
  },
  {
    stage: "Bottom of Funnel",
    goal: "Drive Conversion",
    desc: "High-intent retargeting sequences targeting cart abandoners, pricing page visitors, and engaged prospects with direct conversion offers.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer className="min-h-[80vh] md:min-h-screen flex flex-col">
        <div className="mt-auto w-full">
          {/* <div className="mb-8">
            <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
              PAID SOCIAL. DEMAND GENERATION. CONVERSION.
            </span>
          </div> */}
          <h1 className="text-9xl font-black uppercase mb-12">
            Stop Boosting
            <br />
            <span className="text-primary-container">Posts.</span> Start
            <br />
            Building <span className="text-secondary">Pipeline.</span>
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                Paid social engineered around audience psychology, creative
                performance, and real business outcomes.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-on-surface-variant/70">
                Social media is not a content calendar. It&apos;s a demand
                generation engine — when it&apos;s built correctly.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
                <a
                  href="#contact"
                  className="bg-on-background text-surface px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-secondary text-center inline-block"
                >
                  Start a Campaign
                </a>
                <a
                  href="#platforms"
                  className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── STATS ─── */}
      <PageContainer className="border-y border-surface-variant py-0!">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-variant">
          {stats.map((s) => (
            <div key={s.label} className="py-8 md:px-16 first:pl-0 last:pr-0">
              <p className="text-6xl md:text-7xl font-black text-secondary mb-2">
                {s.value}
              </p>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                {s.label}
              </p>
            </div>
          ))}
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
              The Problem
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Social,
              <br />
              Done With
              <br />
              Product Sense.
            </h2>
          </div>
          <div className="md:max-w-lg md:pt-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-8">
              Most businesses treat paid social as a content distribution tool.
              We treat it as a product feature with one job: acquiring
              high-value customers at a profitable margin.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              If your social ads aren&apos;t converting, it&apos;s not the
              algorithm.{" "}
              <strong className="font-bold text-on-surface">
                It&apos;s a disconnect between audience, creative, and the
                post-click experience.
              </strong>
            </p>
            <div className="w-12 h-2 bg-secondary mb-8" />
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Demand generation",
                "Audience-first creative",
                "Full-funnel sequencing",
                "Measurable CAC",
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

      {/* ─── PLATFORMS ─── */}
      <PageContainer id="platforms" className="bg-surface-container-low">
        <div className="mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Platforms
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Right Channel.
            <br />
            Right Audience.
          </h2>
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            Every platform has a different role in the funnel. We know which one
            to use, when, and why.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {platforms.map((p) => (
            <div
              key={p.num}
              className={`group relative bg-surface p-12 lg:p-16 border-l-8 ${p.border} flex flex-col justify-between min-h-[360px] ${p.hover} transition-all duration-500`}
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
                {p.num}
              </div>
              <div>
                <span className="material-symbols-outlined text-6xl mb-8 text-secondary group-hover:text-secondary">
                  {p.icon}
                </span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6">
                  {p.title}
                </h3>
                <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── FUNNEL ─── */}
      <PageContainer className="bg-on-background text-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              The System
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Full Funnel.
              <br />
              One System.
            </h2>
            <p className="text-xl text-surface/60 mb-6 leading-relaxed">
              Most paid social fails because it only targets one stage. Brands
              either blast cold audiences with conversion offers, or endlessly
              retarget the same warm pool.
            </p>
            <div className="w-12 h-1 bg-secondary mb-6" />
            <p className="text-xl text-surface/80 font-bold leading-relaxed">
              We build a sequenced system that moves people from awareness to
              purchase — and keeps them coming back.
            </p>
          </div>
          <div className="space-y-0">
            {funnelStages.map((f, i) => (
              <div
                key={f.stage}
                className="border-b border-surface/10 py-10 group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-black text-surface/10 group-hover:text-secondary transition-colors leading-none mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="uppercase tracking-widest text-xs font-bold text-secondary mb-1 block">
                      {f.stage}
                    </span>
                    <h3 className="text-2xl font-black uppercase mb-3">
                      {f.goal}
                    </h3>
                    <p className="text-surface/60 font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── PROCESS ─── */}
      <PageContainer className="bg-surface">
        <div className="mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Methodology
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Built for
            <br />
            Measurable Revenue.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-on-surface">
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`p-12 md:p-20 border-b-2 border-on-surface flex flex-col justify-between ${i % 2 === 0 ? "md:border-r-2" : ""} ${i % 2 === 1 ? "bg-surface-container-low" : ""}`}
            >
              <span className="text-8xl md:text-[10rem] font-black leading-none text-outline mb-12 block">
                {p.step}
              </span>
              <div>
                <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── CREATIVE PRINCIPLE ─── */}
      <PageContainer className="bg-secondary/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-on-surface) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            The Principle
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 max-w-4xl">
            Creative Is
            <br />
            <span className="italic text-secondary">The Targeting.</span>
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed mb-16">
            In a world of broad match and AI bidding, the algorithm finds your
            audience. Your creative decides who self-selects. We build ads that
            attract the right people and repel the wrong ones — reducing wasted
            spend at the source.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-5xl">
            {[
              {
                title: "Hook",
                desc: "Stop the scroll in the first 2 seconds. Every format, every platform, every time.",
              },
              {
                title: "Qualify",
                desc: "The body copy does the selling. We write to the specific pain points of your ideal customer — not everyone.",
              },
              {
                title: "Convert",
                desc: "A clear, frictionless CTA aligned to where the audience sits in the funnel. No guesswork.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface p-8 border-t-4 border-on-surface"
              >
                <h3 className="text-2xl font-black uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── CTA STRIP ─── */}
      <PageContainer className="bg-secondary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Ready to turn
            <br />
            social into pipeline?
          </h2>
          <a
            href="#contact"
            className="shrink-0 bg-on-background text-surface px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface hover:text-on-background transition-colors inline-block"
          >
            Start a Campaign
          </a>
        </div>
      </PageContainer>

      <Contact />
    </>
  );
}
