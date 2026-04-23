"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const clients = [
  { name: "A2 Milk", src: "/clients/a2_Milk_Logo.svg" },
  { name: "ACM", src: "/clients/acm-logo.svg" },
  { name: "Employsure", src: "/clients/employsure_logo.avif" },
  { name: "Hello Molly", src: "/clients/hellmollyLogo.svg" },
  { name: "Domain", src: "/clients/domain-logo.svg" },
  {
    name: "Life Insurance Direct",
    src: "/clients/Life_Insurance_Direct_Logo.svg",
  },
  { name: "Dmerge", src: "/clients/dmerge-logo.svg" },
  { name: "LiveWire", src: "/clients/liveWire-logo.svg" },
  { name: "Rubberdesk", src: "/clients/rubberdesk-logo.svg" },
  // { name: "UVTing", src: "/clients/uvtinglogo.webp" },
  { name: "View", src: "/clients/viewLogo.svg" },
  { name: "Willson", src: "/clients/willson.svg" },
  { name: "Zip", src: "/clients/zip-logo.svg" },
  { name: "Intrax", src: "/clients/intrax-logo.svg" },
];

// Single row for a cleaner look
const row1 = [...clients, ...clients];

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
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-surface to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-surface to-transparent pointer-events-none" />
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex items-center gap-14 w-max h-full"
      >
        {items.map((client, i) => (
          <motion.div
            key={`${client.name}-${i}`}
            className="shrink-0 h-full"
            initial={{ opacity: 0.6, filter: "grayscale(70%)" }}
            whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={client.src}
              alt={client.name}
              width={200}
              height={TRACK_H}
              className="h-full w-auto object-contain text-black"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Heading — Centered at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
            Trusted by Enterprises
          </h2>
        </motion.div>

        {/* Logos — Single Line with Borders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-10 border-y border-white/5"
        >
          <div className="absolute inset-0 pointer-events-none z-10" />
          <MarqueeRow items={row1} reverse={false} />
        </motion.div>
      </div>
    </section>
  );
}
