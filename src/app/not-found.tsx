import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Anvi Digital",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <style>{`footer { display: none !important; }`}</style>
      <section
        className="bg-on-background text-surface flex flex-col justify-between relative overflow-hidden"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(var(--color-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center grow max-w-screen-2xl mx-auto w-full px-8 py-32">
          <span className="uppercase tracking-[0.4em] text-xs text-secondary font-bold mb-8 block">
            Error 404
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Page Not
            <br />
            <span className="text-secondary italic">Found.</span>
          </h1>
          <p className="text-xl md:text-2xl text-surface/50 font-light max-w-lg mb-16 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex sm:flex-row gap-4">
            <Link
              href="/"
              className="bg-secondary text-on-secondary px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface hover:text-on-surface transition-colors inline-block text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/case-studies"
              className="border border-surface/20 text-surface/60 px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:border-secondary hover:text-secondary transition-colors inline-block text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative z-10 border-t border-surface/10 px-8 py-6 max-w-screen-2xl mx-auto w-full flex justify-between items-center">
          <span className="text-surface/20 uppercase tracking-[0.3em] text-xs font-bold">
            Anvi Digital
          </span>
          <span className="text-surface/20 uppercase tracking-[0.3em] text-xs font-bold">
            anvi.digital
          </span>
        </div>
      </section>
    </>
  );
}
