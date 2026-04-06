"use client";

import { useState, useRef, useEffect } from "react";

const serviceItems = [
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "Paid Media", href: "/services/paid-media" },
  { label: "Social Media", href: "/services/social-media" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [servicesOpen]);

  const openDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md transition-colors duration-500">
      <div className="flex items-center justify-between w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <a
          className="text-2xl font-black tracking-tighter text-on-surface flex-shrink-0"
          href="/"
        >
          ANVI DIGITAL
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-12">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300 flex items-center gap-1"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-44 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"}`}
            >
              <div className="bg-surface border border-primary/10 shadow-lg">
                {serviceItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-primary hover:text-secondary hover:bg-primary/5 transition-all duration-200"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/ai-agents"
          >
            AI Agents
          </a>
          <a
            className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/case-studies"
          >
            Case Studies
          </a>
          <a
            className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/about"
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
        <div className="md:hidden px-8 pb-8 space-y-6 bg-surface/95 backdrop-blur-md">
          <div>
            <button
              className="flex items-center gap-1 font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300 w-full text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            {servicesOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {serviceItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block font-semibold uppercase tracking-[0.15em] text-sm text-primary/70 hover:text-secondary transition-all duration-300"
                    onClick={() => { setMobileMenuOpen(false); setServicesOpen(false); }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/ai-agents"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Agents
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Studies
          </a>
          <a
            className="block font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            href="/about"
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
