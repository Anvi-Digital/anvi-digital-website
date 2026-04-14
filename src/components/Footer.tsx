import Image from "next/image";
import PageContainer from "./PageContainer";

export default function Footer() {
  return (
    <footer className="bg-on-surface w-full">
      <PageContainer as="div" padding="md" className="w-full">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/WY-text-logo.svg"
            alt="ANVI DIGITAL"
            width={380}
            height={50}
            className="aspect-auto w-auto brightness-0 invert"
          />
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full mb-24">
          <div className="flex flex-col space-y-4">
            <span className="text-white/20 uppercase tracking-widest text-xs font-bold">
              Services
            </span>
            <a
              className="text-surface/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#ai-seo"
            >
              AI SEO
            </a>
            <a
              className="text-surface/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#ai-agents"
            >
              AI Agents
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-white/20 uppercase tracking-widest text-xs font-bold">
              Company
            </span>
            <a
              className="text-surface/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#"
            >
              About
            </a>
            {/* <a
              className="text-[#faf9f7]/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#"
            >
              Insights
            </a>
            <a
              className="text-[#faf9f7]/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#"
            >
              Contact
            </a> */}
          </div>

          <div className="lg:col-span-2">
            <p className="text-[clamp(2rem,8vw,5rem)] font-bold uppercase leading-none tracking-tighter text-white/5">
              GROWTH,
              <br />
              BUILT TO LAST.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-surface/40 uppercase tracking-widest text-xs font-bold">
            &copy; 2026 ANVI DIGITAL. GROWTH, BUILT TO LAST.
          </p>
          <div className="flex gap-8">
            <a
              className="text-surface/40 hover:text-white transition-colors"
              href="https://www.linkedin.com/company/anvidigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ANVI DIGITAL on LinkedIn"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
