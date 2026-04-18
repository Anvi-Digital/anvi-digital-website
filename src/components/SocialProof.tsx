"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import PageContainer from "./PageContainer";

const clients = [
  { name: "A2 Milk", src: "/clients/a2_Milk_Logo.svg" },
  { name: "ACM", src: "/clients/acm-logo.svg" },
  { name: "Domain", src: "/clients/domain-logo.svg" },
  { name: "Hello Molly", src: "/clients/hellmollyLogo.svg" },
  {
    name: "Life Insurance Direct",
    src: "/clients/Life_Insurance_Direct_Logo.svg",
  },
  { name: "Rubberdesk", src: "/clients/rubberdesk-logo.svg" },
  { name: "View", src: "/clients/viewLogo.svg" },
  { name: "Willson", src: "/clients/willson.svg" },
];

// Three rows with different starting offsets so they don't look identical
const row1 = [...clients, ...clients];
const row2 = [
  ...clients.slice(3),
  ...clients.slice(0, 3),
  ...clients.slice(3),
  ...clients.slice(0, 3),
];
const row3 = [
  ...clients.slice(5),
  ...clients.slice(0, 5),
  ...clients.slice(5),
  ...clients.slice(0, 5),
];

const TRACK_H = 32;
const SPEED = 0.04;

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof clients;
  reverse?: boolean;
}) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const cur = x.get();
    const half = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
    if (half === 0) return;
    const next = reverse ? cur + delta * SPEED : cur - delta * SPEED;
    if (!reverse && next <= -half) x.set(0);
    else if (reverse && next >= 0) x.set(-half);
    else x.set(next);
  });

  // Start reversed rows from the midpoint so loop is seamless
  if (reverse && x.get() === 0) {
    // initialise once
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: TRACK_H }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-surface-container-low to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-surface-container-low to-transparent pointer-events-none" />
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex items-center gap-14 w-max h-full"
      >
        {items.map((client, i) => (
          <motion.div
            key={`${client.name}-${i}`}
            className="shrink-0 h-full"
            initial={{ opacity: 0.3, filter: "grayscale(100%)" }}
            whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={client.src}
              alt={client.name}
              width={200}
              height={TRACK_H}
              className="h-full w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <PageContainer className="bg-surface-container-low overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-2/5 shrink-0"
        >
          <span className="font-label uppercase tracking-[0.3em] text-xs text-secondary font-bold mb-6 block">
            Our Clients
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Trusted by
            <br />
            <span className="text-secondary">70+</span>
            <br />
            Businesses.
          </h2>
          <p className="text-on-surface-variant font-light leading-relaxed">
            From growing teams to established brands, we focus on what actually
            drives results.
          </p>
        </motion.div>

        {/* Right — 3 marquee rows */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 flex flex-col gap-12 min-w-0"
        >
          {/* Row 1 — left */}
          <MarqueeRow items={row1} reverse={false} />
          {/* Row 2 — right (opposite) */}
          <MarqueeRow items={row2} reverse={true} />
          {/* Row 3 — left (same as row 1) */}
          <MarqueeRow items={row3} reverse={false} />
        </motion.div>
      </div>
    </PageContainer>
  );
}
