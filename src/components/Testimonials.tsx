"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import PageContainer from "./PageContainer";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setCurrent((next + total) % total);
    },
    [total],
  );

  const prev = () => go(current - 1, -1);
  const next = () => go(current + 1, 1);

  // Auto-advance every 6s
  useEffect(() => {
    const t = setTimeout(() => go(current + 1, 1), 6000);
    return () => clearTimeout(t);
  }, [current, go]);

  const t = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <PageContainer className="bg-on-background text-surface overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          What They
          <br />
          <span className="text-secondary italic">Say.</span>
        </h2>

        {/* Nav arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-14 h-14 border border-surface/20 flex items-center justify-center text-surface/50 hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="text-surface/20 text-sm font-bold tabular-nums">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-14 h-14 border border-surface/20 flex items-center justify-center text-surface/50 hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Slide */}
      <div className="relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
            className="flex flex-col gap-10"
          >
            {/* Quote */}
            <div className="max-w-4xl">
              <span className="text-6xl font-black text-secondary/30 leading-none block -mb-2">
                &ldquo;
              </span>
              <p className="text-xl md:text-xl font-light leading-relaxed text-surface/80 whitespace-pre-line">
                {t.content}
              </p>
            </div>

            {/* Author — always bottom right */}
            <div className="flex justify-end">
              <div className="flex flex-row-reverse items-center gap-4">
                {t.avtar ? (
                  <img
                    src={t.avtar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-black text-xl">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-right">
                  <p className="font-bold text-surface text-sm uppercase tracking-widest">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface/40 mt-1">{t.position}</p>
                  <p className="text-xs text-secondary/70 font-bold uppercase tracking-widest mt-0.5">
                    {t.compony}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-0.5 transition-all duration-500 ${i === current ? "w-12 bg-secondary" : "w-4 bg-surface/20 hover:bg-surface/40"}`}
          />
        ))}
      </div>
    </PageContainer>
  );
}
