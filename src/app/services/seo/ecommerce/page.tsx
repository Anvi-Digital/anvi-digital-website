import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import { HalfRoundShape } from "@/assets/shapes";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "Ecommerce SEO Services | Anvi Digital",
  description:
    "Scale your online store through conversion-driven SEO. We focus on product pages, category dominance, and revenue-generating search terms.",
};

const ecommerceStats = [
  {
    label: "ROAS Impact",
    value: "3.5x",
    desc: "Average improvement in organic return.",
  },
  {
    label: "New Keywords",
    value: "10k+",
    desc: "Ranked for high-intent product terms.",
  },
  {
    label: "Revenue Growth",
    value: "+140%",
    desc: "Average annual organic revenue lift.",
  },
];

export default function EcommerceSEOPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageContainer className="pt-24 pb-12">
        <Link
          href="/services/seo"
          className="font-label uppercase tracking-widest text-xs text-secondary font-bold mb-8 inline-flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to SEO
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
            Ecommerce
            <br />
            <span className="text-secondary italic">SEO.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            Engineered to turn high-intent search traffic into direct revenue
            for your online store.
          </p>
        </div>
      </PageContainer>

      {/* ─── METRICS AREA ─── */}
      <PageContainer className="bg-secondary/10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {ecommerceStats.map((stat) => (
            <div
              key={stat.label}
              className="border-t-4 border-on-surface pt-10"
            >
              <span className="text-5xl lg:text-7xl font-black block mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary block mb-6">
                {stat.label}
              </span>
              <p className="text-lg font-light text-on-surface-variant leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* ─── CORE STRATEGY ─── */}
      <PageContainer className="bg-surface relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
          <HalfRoundShape className="w-[800px] h-[800px]" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-24 py-12">
          <div className="max-w-xl">
            <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
              Our Engine
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
              Total Store
              <br />
              Optimization.
            </h2>
            <div className="w-12 h-2 bg-secondary" />
          </div>

          <div className="space-y-12 max-w-lg">
            {[
              {
                title: "Category Dominance",
                desc: "We focus on high-impact category pages to capture users at the 'browsing' intent phase, driving massive top-of-funnel traffic.",
              },
              {
                title: "Product Page Precision",
                desc: "Optimizing individual product items for specific, high-intent SKU and long-tail searches that lead directly to checkout.",
              },
              {
                title: "Scalable Programmatic SEO",
                desc: "Creating systems to generate high-quality, unique content across thousands of dynamic store pages automatically.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">
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

      {/* ─── CTA ─── */}
      <PageContainer className="bg-on-background text-surface py-32 text-center rounded-sm">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-10 leading-none">
          Ready to
          <br />
          Scale Sales?
        </h2>
        <ContactLink className="bg-secondary text-on-secondary px-12 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:bg-surface hover:text-on-surface inline-block">
          Scale Your Store
        </ContactLink>
      </PageContainer>
    </>
  );
}
