import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import ContactLink from "@/components/ContactLink";
import {
  SquareBoxShape,
  StarCurvedShape,
  RoundShape,
  HalfRoundShape,
} from "@/assets/shapes";

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
          <h1 className="text-giant font-black uppercase mb-12">
            OWN YOUR
            <br />
            <span className="text-secondary">SEARCH</span>
            <br />
            <span className="text-primary-container">PRESENCE.</span>
          </h1>
          <div className="stagger-grid">
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
              <p className="text-base md:text-2xl font-light leading-snug mb-4 text-on-surface-variant">
                Search is no longer one channel. It is Google, ChatGPT,
                Perplexity, AI Overviews, Copilot and whatever comes next. We
                build the systems that make your business the answer across all
                of them.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-on-surface-variant/70">
                Most SEO work optimises for where search was. We build for where
                it is going.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
                <ContactLink className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block">
                  Let's Talk Growth
                </ContactLink>
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
              SEO
              <br />
              Has
              <br />
              Changed
            </h2>
          </div>
          <div className="md:max-w-[868px] md:pt-12">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant mb-8">
              Google's algorithm now incorporates AI generated answers. ChatGPT
              and Perplexity are routing millions of searches away from
              traditional results. Zero click rates are rising. The businesses
              winning search in 2026 are not the ones with the most backlinks.
              They are the ones built as the most trusted, most cited source in
              their category.
            </p>
            <p className="text-xl font-light leading-relaxed text-on-surface-variant mb-8">
              Most businesses do not fail at SEO because of a lack of effort.
              They fail because there is{" "}
              <strong className="font-bold text-on-surface">
                no system built for how search actually works today
              </strong>{" "}
            </p>
            <div className="w-12 h-2 bg-secondary mb-8" />
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Visibility across Google and AI surfaces",
                "Entity authority that LLMs recognise and cite",
                "Compounding traffic, not monthly campaigns",
                "Reduced paid dependency over time",
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
            BUILT FOR
            <br />
            <span className="italic text-secondary">HOW SEARCH WORKS NOW.</span>
          </h2>
          <div className="w-24 h-2 bg-on-surface mb-8" />
          <p className="text-2xl max-w-xl text-on-surface-variant font-light">
            Four practice areas. One system. Engineered for the search landscape
            your customers already live in.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Enterprise SEO",
              desc: "Large platforms break in ways small sites never do. Crawl budget, duplicate signals, JavaScript rendering, international hreflang, site migrations at scale. Built from real experience growing platforms from 200K to 6.1M monthly sessions, not agency theory.",
              border: "border-secondary",
              hover: "hover:bg-on-background hover:text-surface",
              icon: SquareBoxShape,
              href: "/services/seo/enterprise",
              tags: [
                "TECHNICAL SEO AT SCALE",
                "SITE ARCHITECTURE",
                "JS RENDERING",
              ],
            },
            {
              title: "AI Search & GEO",
              desc: "ChatGPT, Perplexity, Google AI Overviews and Copilot are answering your buyers' questions before they reach your website. We build the entity signals, structured data and topical authority that make your brand the cited source, not the missed result.",
              border: "border-primary-container",
              hover: "hover:bg-secondary hover:text-on-secondary",
              icon: StarCurvedShape,
              href: "/services/seo/aeo-geo",
              tags: [
                "ENTITY ENGINEERING",
                "STRUCTURED DATA",
                "GENERATIVE CONTENT",
              ],
            },
            {
              title: "Local SEO",
              desc: "High-intent local searches convert at a rate most paid campaigns never reach. We build Google Business Profile authority, local entity signals and suburb-level landing pages that capture demand at the moment it forms.",
              border: "border-on-surface",
              hover:
                "hover:bg-primary-container hover:text-on-primary-container",
              icon: RoundShape,
              href: "/services/seo/local",
              tags: [
                "BUSINESS PROFILE",
                "LOCAL ENTITY SIGNALS",
                "LOCAL LANDINGS",
              ],
            },
            {
              title: "Ecommerce SEO",
              desc: "Product pages, collection architecture, variant handling, international hreflang and merchant feed alignment. Built from hands-on work across fashion, FMCG and marketplace ecommerce, not generic audits.",
              border: "border-secondary",
              hover: "hover:bg-on-background hover:text-surface",
              icon: HalfRoundShape,
              href: "/services/seo/ecommerce",
              tags: [
                "PRODUCT OPTIMISATION",
                "COLLECTION SCALING",
                "MERCHANT FEED",
              ],
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative bg-surface p-10 lg:p-14 border-l-8 ${card.border} flex flex-col ${card.hover} transition-all duration-500 min-h-[340px] overflow-hidden`}
            >
              {/* background watermark shape - subtle and set to the end */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 text-on-surface opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-1000 pointer-events-none">
                <card.icon className="w-full h-full text-primary" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
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
            </Link>
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
              Refined across 16 years and dozens of enterprise deployments. Not
              a template. A practice.
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
              desc: "Audit current search visibility across Google and AI surfaces. Map entity coverage gaps, technical debt and the highest-leverage growth fronts your competitors have missed.",
            },
            {
              num: "02",
              title: "Build",
              desc: "Deploy technical foundations, content architecture and entity signals. Structure the site so search engines and AI models both recognise what you are and who you serve.",
            },
            {
              num: "03",
              title: "Improve",
              desc: "Track performance across rankings, AI citations, zero-click impressions and conversion. Optimise weekly on real signal, not monthly on vanity metrics.",
            },
            {
              num: "04",
              title: "Scale",
              desc: "Expand what works across new markets, page types and AI surfaces. Introduce automation and AI agents where they compound the system rather than replace thinking.",
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
                desc: "Tripled organic sessions for Australia's #2 property marketplace in two years, closing the competitive gap with the category leader from 6x to 3x.",
              },
              {
                category: "Subscription Media",
                stat: "+67% TO 3.1M",
                desc: "Grew a national news brand to Australia's #1 paywalled destination, making search a structural driver of subscription revenue.",
              },
              {
                category: "Product Led Growth",
                stat: "+151%",
                desc: "Scaled a property platform from 200K to 500K monthly users under direct competition through programmatic content and AI search strategy.",
              },
              {
                category: "AI Search",
                stat: "CITED. NOT JUST RANKED.",
                desc: "Built entity and structured data programs that surface brands in ChatGPT, Perplexity and Google AI Overviews. The next decade of search, already in production.",
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
                <span className="text-sm md:text-base text-on-surface-variant">
                  {study.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
