"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#faf9f7]/80 backdrop-blur-md transition-colors duration-500">
      <div className="relative flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <a
          className="relative z-20 text-2xl font-black tracking-tighter text-[#1a1c1b]"
          href="/"
        >
          ANVI DIGITAL
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none z-10">
          <div className="pointer-events-auto flex items-center space-x-8 lg:space-x-12 xl:space-x-16 md:mx-4">
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#services"
            >
              Services
            </a>
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#ai-seo"
            >
              AI SEO
            </a>
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#ai-agents"
            >
              AI Agents
            </a>
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#ai-engineering"
            >
              AI Engineering
            </a>
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#case-studies"
            >
              Case studies
            </a>
            <a
              className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300 whitespace-nowrap"
              href="#about"
            >
              About
            </a>
          </div>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="relative z-20 flex items-center">
          <a
            href="#contact"
            className="md:inline-block bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform whitespace-nowrap"
          >
            Let&apos;s Talk Growth
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined flex items-center justify-center">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 pb-8 space-y-6 bg-[#faf9f7]/95 backdrop-blur-md">
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#ai-seo"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI SEO
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#ai-agents"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Agents
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#ai-engineering"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Engineering
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case studies
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform inline-block text-center w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk Growth
          </a>
        </div>
      )}
    </nav>
  );
}
