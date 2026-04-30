"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { scrollToContact } from "@/lib/scrollToContact";
import textLogo from "../../public/images/BY-text-logo.svg";
const serviceItems = [
  { label: "SEO", href: "/services/seo" },
  { label: "Paid Media", href: "/services/paid-media" },
];

const mainNavItems = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  // State variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [servicesOpen]);

  // Event Handlers
  const handleOpenDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };

  const handleCloseDropdown = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const handleServicesToggle = () => {
    setServicesOpen((prev) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleCloseAll = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const handleCloseServices = () => {
    setServicesOpen(false);
  };

  // Render Methods
  const renderLogo = () => {
    const logo = textLogo;
    return (
      <Link
        className="text-2xl font-black tracking-tighter text-on-surface shrink-0"
        href="/"
      >
        <Image src={logo} alt="ANVI DIGITAL" width={250} height={35} />
      </Link>
    );
  };

  const renderServiceDropdownContent = () => {
    return (
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-44 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"}`}
      >
        <div className="bg-surface border border-primary/10 shadow-lg">
          {serviceItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-primary hover:text-secondary hover:bg-primary/5 transition-all duration-200"
              onClick={handleCloseServices}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const renderDesktopNav = () => {
    return (
      <div className="hidden md:flex flex-1 items-center justify-center space-x-12">
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={handleOpenDropdown}
          onMouseLeave={handleCloseDropdown}
        >
          <button
            className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300 flex items-center gap-1"
            onClick={handleServicesToggle}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
          >
            What We Do
            <span
              className={`material-symbols-outlined text-base transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>

          {renderServiceDropdownContent()}
        </div>

        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const renderMobileMenuButton = () => {
    return (
      <button
        className="md:hidden text-on-surface"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    );
  };

  const renderMobileMenu = () => {
    return (
      <div
        className={`md:hidden px-8 pb-8 space-y-6 bg-surface/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}`}
      >
        <div>
          <button
            className="flex items-center gap-1 font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300 w-full text-left"
            onClick={handleServicesToggle}
          >
            What We Do
            <span
              className={`material-symbols-outlined text-base transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>
          <div
            className={`ml-4 space-y-3 overflow-hidden transition-all duration-200 ${servicesOpen ? "max-h-40 mt-3" : "max-h-0"}`}
          >
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-semibold uppercase tracking-[0.15em] text-sm text-primary/70 hover:text-secondary transition-all duration-300"
                onClick={handleCloseAll}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block font-bold uppercase tracking-[0.2em] text-sm text-primary hover:text-secondary transition-all duration-300"
            onClick={handleCloseAll}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#"
          onClick={(e) => {
            handleCloseAll();
            scrollToContact(e);
          }}
          className="bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform inline-block"
        >
          Let&apos;s Talk Growth
        </Link>
      </div>
    );
  };

  // Main return block
  return (
    <nav
      suppressHydrationWarning
      className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md transition-colors duration-500"
    >
      <div className="flex items-center justify-between w-full px-8 py-6 max-w-screen-2xl mx-auto">
        {renderLogo()}
        {renderDesktopNav()}

        <Link
          href="#"
          onClick={scrollToContact}
          className="hidden md:inline-block shrink-0 bg-secondary text-on-secondary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:scale-95 active:scale-90 transition-transform"
        >
          Let&apos;s Talk Growth
        </Link>

        {renderMobileMenuButton()}
      </div>

      {renderMobileMenu()}
    </nav>
  );
};

export default Navbar;
