"use client";

import { scrollToContact } from "@/lib/scrollToContact";

interface ContactLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function ContactLink({ className, children }: ContactLinkProps) {
  return (
    <button onClick={scrollToContact} className={className}>
      {children}
    </button>
  );
}
