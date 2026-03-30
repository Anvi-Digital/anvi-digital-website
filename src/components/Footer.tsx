export default function Footer() {
  return (
    <footer className="bg-[#1a1c1b] py-24 px-8 w-full">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Logo */}
        <h2 className="text-6xl font-black text-white mb-12">ANVI DIGITAL</h2>

        {/* Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full mb-24">
          <div className="flex flex-col space-y-4">
            <span className="text-white/20 uppercase tracking-widest text-xs font-bold">
              Solutions
            </span>
            <a
              className="text-[#faf9f7]/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#lead-gen"
            >
              Lead Generation
            </a>
            <a
              className="text-[#faf9f7]/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
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
              className="text-[#faf9f7]/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-2xl"
              href="#"
            >
              About
            </a>
            <a
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
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[clamp(2rem,8vw,5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-white/5">
              ARCHITECTING GROWTH THROUGH INTELLIGENCE.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#faf9f7]/40 uppercase tracking-widest text-xs font-bold">
            &copy; 2026 ANVI DIGITAL. ARCHITECTING GROWTH THROUGH INTELLIGENCE.
          </p>
          <div className="flex gap-8">
            <a
              className="text-[#faf9f7]/40 hover:text-white transition-colors"
              href="https://www.linkedin.com/company/anvidigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ANVI DIGITAL on LinkedIn"
            >
              LINKEDIN
            </a>
            <a
              className="text-[#faf9f7]/40 hover:text-white transition-colors"
              href="https://twitter.com/anvidigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ANVI DIGITAL on X (Twitter)"
            >
              X (TWITTER)
            </a>
            <a
              className="text-[#faf9f7]/40 hover:text-white transition-colors"
              href="https://github.com/anvidigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ANVI DIGITAL on GitHub"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
