import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "AI Agents — Practical AI Built for Real Business Work",
  description:
    "We design and implement AI agents that fit into your workflows, helping you move faster, uncover insights, and execute with more clarity.",
  openGraph: {
    title:
      "AI Agents — Practical AI Built for Real Business Work | ANVI DIGITAL",
    description:
      "We design and implement AI agents that fit into your workflows, helping you move faster, uncover insights, and execute with more clarity.",
  },
  alternates: { canonical: "https://anvi.digital/ai-agents" },
};

const useCases = [
  {
    icon: "query_stats",
    title: "Research & Analysis",
    description:
      "Process large volumes of structured and unstructured data to surface key insights.",
    outcome: "Faster access to meaningful information",
    borderColor: "border-secondary",
    hoverBg: "hover:bg-on-background hover:text-surface",
  },
  {
    icon: "phone_in_talk",
    title: "Conversation Insights",
    description:
      "Analyse calls and interactions to identify patterns, gaps, and opportunities.",
    outcome: "Clearer visibility into performance and customer behaviour",
    borderColor: "border-on-surface",
    hoverBg: "hover:bg-secondary hover:text-on-secondary",
  },
  {
    icon: "travel_explore",
    title: "Search & Content Insights",
    description:
      "Understand how your business appears across search and AI-driven discovery platforms.",
    outcome: "Stronger visibility and better-informed content strategy",
    borderColor: "border-on-surface",
    hoverBg: "hover:bg-secondary hover:text-on-secondary",
  },
  {
    icon: "description",
    title: "Document Processing",
    description:
      "Extract and organise information from reports, contracts, and internal documents.",
    outcome: "Reduced manual effort and quicker access to answers",
    borderColor: "border-secondary",
    hoverBg: "hover:bg-on-background hover:text-surface",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify",
    description:
      "We assess your business to find where AI can create meaningful impact.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define clear, practical use cases aligned to your workflows.",
  },
  {
    number: "03",
    title: "Implement",
    description: "We integrate AI agents into your systems and processes.",
  },
  {
    number: "04",
    title: "Improve",
    description: "We refine performance using real data and feedback.",
  },
];

const bestSuitedFor = [
  "Businesses with data-heavy workflows",
  "Teams handling large volumes of content or information",
  "Organisations looking to improve efficiency and decision-making",
  "Companies exploring AI with a clear business focus",
];

export default function AIAgentsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer
        padding="lg"
        className="min-h-[80vh] md:min-h-screen flex flex-col"
      >
        <div className="mt-auto w-full">
          <div className="mb-8">
            <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
              AI AGENTS. AUTOMATION. INTELLIGENCE.
            </span>
          </div>
          <h1 className="text-giant font-black uppercase mb-12">
            AI Agents
            <br />
            Designed for
            <br />
            <span className="text-secondary">Real</span>{" "}
            <span className="text-primary-container">Business</span>
            <br />
            Work.
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                Practical systems that help your business analyse, operate, and
                grow more effectively.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-on-surface-variant/70">
                We design and implement AI agents that fit into your workflows,
                helping you move faster, uncover insights, and execute with more
                clarity.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
                <a
                  href="#use-cases"
                  className="bg-on-background text-surface px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-secondary text-center inline-block"
                >
                  Explore AI Use Cases
                </a>
                <a
                  href="#contact-cta"
                  className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block"
                >
                  Book a Strategy Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── THE OPPORTUNITY ─── */}
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
              The Opportunity
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Where AI
              <br />
              Starts to
              <br />
              Make Sense.
            </h2>
          </div>
          <div className="md:max-w-lg md:pt-16">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-8">
              AI is everywhere, but most businesses struggle to apply it in a
              meaningful way.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              The challenge isn&apos;t access to tools.
              <br />
              It&apos;s knowing:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Where AI actually fits",
                "What problems it should solve",
                "How it connects to real outcomes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-3 h-3 bg-secondary mt-2 shrink-0" />
                  <span className="text-lg md:text-xl text-on-surface-variant font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-medium text-on-surface">
              That&apos;s where a structured approach makes the difference.
            </p>
          </div>
        </div>
      </PageContainer>

      {/* ─── WHAT WE DO ─── */}
      <PageContainer className="bg-secondary/10">
        <div className="flex flex-col mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            What We Do
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Applied AI,
            <br />
            Built Around
            <br />
            <span className="italic text-secondary">Your Business.</span>
          </h2>
          <div className="w-24 h-2 bg-on-surface" />
        </div>
        <div className="stagger-grid">
          <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
            <p className="text-xl md:text-2xl font-light text-on-surface-variant mb-12 leading-relaxed">
              At Anvi Digital, we focus on practical implementation.
            </p>
            <div className="space-y-8">
              {[
                "Identify high-impact opportunities across your workflows",
                "Design AI agents aligned to your business processes",
                "Implement them into your existing systems",
                "Refine based on real usage and measurable outcomes",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-6 group">
                  <span className="text-4xl md:text-5xl font-black text-on-surface/10 group-hover:text-secondary transition-colors leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg md:text-xl text-on-surface leading-relaxed pt-2">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col md:flex-row gap-8">
              <p className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                No unnecessary complexity.
              </p>
              <p className="text-lg font-bold uppercase tracking-widest text-on-surface-variant">
                No generic solutions.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ─── USE CASES ─── */}
      <PageContainer
        id="use-cases"
        className="bg-surface-container-low relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-on-surface) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
                Use Cases
              </span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                AI Agents
                <br />
                in Action.
              </h2>
              <p className="text-2xl max-w-xl text-on-surface-variant font-light">
                Practical applications that deliver measurable outcomes across
                your operations.
              </p>
            </div>
            <div className="hidden lg:block text-9xl font-black text-on-surface/5 select-none -mb-4">
              WORK
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`group relative bg-surface p-12 lg:p-16 border-l-8 ${uc.borderColor} flex flex-col justify-between min-h-[400px] ${uc.hoverBg} transition-all duration-500`}
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-on-surface/5 group-hover:text-surface/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="material-symbols-outlined text-6xl mb-8 text-secondary">
                    {uc.icon}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-black uppercase mb-6">
                    {uc.title}
                  </h3>
                  <p className="text-xl text-on-surface-variant group-hover:text-surface/70 leading-relaxed max-w-md mb-8">
                    {uc.description}
                  </p>
                </div>
                <div className="border-t-2 border-on-surface/10 pt-6">
                  <span className="uppercase tracking-widest text-xs font-bold text-on-surface-variant/60 group-hover:text-surface/40">
                    Outcome
                  </span>
                  <p className="text-lg font-medium mt-2 group-hover:text-surface/90">
                    {uc.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* ─── WHY ANVI DIGITAL ─── */}
      <PageContainer className="bg-surface">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Why Anvi Digital
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Focused on
              <br />
              What Actually
              <br />
              <span className="text-secondary">Works.</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-12">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-12">
              AI delivers value when it&apos;s connected to real business needs.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Clear use cases",
                "Measurable outcomes",
                "Systems that fit your existing workflows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-3 h-3 bg-secondary mt-2 shrink-0" />
                  <span className="text-lg md:text-xl text-on-surface font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-on-surface">
              We prioritise practical implementation over experimentation.
            </p>
          </div>
        </div>
      </PageContainer>

      {/* ─── HOW IT WORKS ─── */}
      <PageContainer className="bg-surface-container-low">
        <div className="flex flex-col mb-32">
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            Process
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            A Structured
            <br />
            <span className="italic text-secondary">Approach.</span>
          </h2>
          <div className="w-24 h-2 bg-on-surface" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-on-surface">
          {steps.map((step, i) => {
            const isOdd = i % 2 !== 0;
            return (
              <div
                key={step.number}
                className={`p-12 md:p-20 border-b-2 ${i % 2 === 0 ? "md:border-r-2" : ""} border-on-surface flex flex-col justify-between ${i === 1 ? "bg-surface" : i === 2 ? "bg-secondary/5" : ""}`}
              >
                <div className={`mb-12 ${isOdd ? "flex justify-end" : ""}`}>
                  <span
                    className={`text-8xl md:text-[10rem] font-black leading-none ${i === 0 || i === 3 ? "text-outline" : "text-on-surface"}`}
                  >
                    {step.number}
                  </span>
                </div>
                <div className={isOdd ? "md:pl-12" : ""}>
                  <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xl text-on-surface-variant leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20">
          <p className="text-2xl font-bold uppercase tracking-widest text-on-surface-variant">
            Built for clarity, consistency, and long-term value.
          </p>
        </div>
      </PageContainer>

      {/* ─── WHO THIS IS FOR ─── */}
      <PageContainer className="bg-surface">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Ideal Fit
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Best
              <br />
              Suited
              <br />
              <span className="text-secondary">For.</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-8">
            <ul className="space-y-0">
              {bestSuitedFor.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-start gap-6 py-8 border-b-2 border-on-surface/10 last:border-b-0"
                >
                  <span className="text-3xl font-black text-on-surface/10 group-hover:text-secondary transition-colors leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-2xl text-on-surface font-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>

      {/* ─── POSITIONING LINE ─── */}
      <PageContainer padding="md" className="bg-secondary">
        <p className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-center text-on-secondary">
          AI works best when it&apos;s applied with{" "}
          <span
            className="text-outline"
            style={{ WebkitTextStroke: "2px #1a1c1b" }}
          >
            clarity
          </span>{" "}
          and <span className="italic">purpose.</span>
        </p>
      </PageContainer>

      {/* ─── FINAL CTA ─── */}
      <PageContainer id="contact-cta" className="bg-on-background text-surface">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-8">
            See Where AI Can
            <br />
            Create <span className="text-secondary">Impact.</span>
          </h2>
          <p className="text-xl md:text-2xl text-surface/60 mb-16 max-w-2xl">
            We&apos;ll help you identify practical opportunities and design
            solutions that fit your business.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <a
              href="/#contact"
              className="bg-secondary text-on-secondary px-10 py-5 md:px-12 md:py-6 font-bold uppercase tracking-[0.2em] text-sm hover:-translate-y-1 transition-transform inline-block"
            >
              Book a Strategy Session
            </a>
            <a
              href="#use-cases"
              className="border-2 border-surface text-surface px-10 py-5 md:px-12 md:py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface/10 transition-colors inline-block"
            >
              Explore Use Cases
            </a>
          </div>
        </div>
      </PageContainer>

      {/* ─── FOOTER LINE ─── */}
      <PageContainer
        padding="sm"
        className="bg-on-background border-t border-surface/10"
      >
        <p className="text-surface/30 uppercase tracking-[0.3em] text-sm font-bold text-center">
          Practical AI, built for real outcomes.
        </p>
      </PageContainer>
    </>
  );
}
