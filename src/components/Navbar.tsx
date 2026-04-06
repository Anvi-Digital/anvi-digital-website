"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#faf9f7]/80 backdrop-blur-md transition-colors duration-500">
      <div className="flex items-center justify-between w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <a
          className="text-2xl font-black tracking-tighter text-[#1a1c1b] flex-shrink-0"
          href="/"
        >
          ANVI DIGITAL
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-12">
          <a
            className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#services"
          >
            Services
          </a>
          <a
            className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#ai-agents"
          >
            AI Agents
          </a>
          <a
            className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#case-studies"
          >
            Case Studies
          </a>
          <a
            className="font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#about"
          >
            About
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block flex-shrink-0 bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform"
        >
          Let&apos;s Talk Growth
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
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
            href="#ai-agents"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Agents
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-xs text-[#5e5e5e] hover:text-secondary transition-all duration-300"
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Studies
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
            className="bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform inline-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk Growth
          </a>
        </div>
      )}
    </nav>
  );
}
