"use client";

import Link from "next/link";
import Image from "next/image";
import PageContainer from "./PageContainer";
import { scrollToContact } from "@/lib/scrollToContact";
import textLogo from "../../public/images/WY-text-logo.svg";
import aiTextLogo from "../../public/images/WAL-text-logo.svg";
import { useTheme } from "@/context/ThemeContext";

const footerLinks = {
  "What We Do": [
    { label: "SEO", href: "/services/seo" },
    { label: "Paid Media", href: "/services/paid-media" },
  ],
  Company: [
    { label: "AI Agents", href: "/ai-agents" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
  ],
};

export default function Footer() {
  const { theme } = useTheme();
  const logo = theme === "ai-agents" ? aiTextLogo : textLogo;

  return (
    <footer className="bg-on-surface w-full">
      <PageContainer as="div" className="pb-8 w-full">
        {/* Logo */}
        <div className="mb-16">
          <Image src={logo} alt="ANVI DIGITAL" width={380} height={50} />
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full mb-24">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col space-y-5">
              <span className="text-white/20 uppercase tracking-widest text-xs font-bold">
                {group}
              </span>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-surface/40 hover:text-secondary hover:italic transition-all duration-500 font-bold uppercase text-xl"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

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
          <p className="text-surface/40 uppercase tracking-widest text-xs font-bold mx-auto">
            &copy; 2026 ANVI DIGITAL
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
