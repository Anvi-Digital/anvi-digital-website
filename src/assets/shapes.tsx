"use client";

import React from "react";
import { motion } from "framer-motion";

export const CurvedShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256" className={className}><path d="M 128 192 C 92.654 192 64 220.654 64 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 256 128 C 256 198.692 198.692 256 128 256 L 128 192 C 163.346 192 192 163.346 192 128 Z M 128 64 C 92.654 64 64 92.654 64 128 L 0 128 C 0 57.308 57.308 0 128 0 Z M 256 0 C 256 70.692 198.692 128 128 128 L 128 64 C 163.346 64 192 35.346 192 0 Z" fill="currentColor"></path></svg>
);

export const HalfRoundShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256" className={className}><path d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z" fill="currentColor"></path></svg>
);

export const RoundShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256" className={className}><path d="M 168 176 C 168 220.183 132.183 256 88 256 L 80 256 C 35.817 256 0 220.183 0 176 Z M 256 176 C 256 220.183 220.183 256 176 256 L 176 176 Z M 84 0 C 130.392 0 168 37.608 168 84 C 168 130.392 130.392 168 84 168 C 37.608 168 0 130.392 0 84 C 0 37.608 37.608 0 84 0 Z M 176 0 C 220.183 0 256 35.817 256 80 L 256 88 C 256 132.183 220.183 168 176 168 Z" fill="currentColor"></path></svg>
);

export const SquareBoxShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256" className={className}><path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" fill="currentColor"></path></svg>
);

export const StarCurvedShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256" className={className}><path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" fill="currentColor"></path></svg>
);

export const FloatingShape = ({ 
  children, 
  className,
  delay = 0,
  duration = 5 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);
