"use client";

import { motion } from "framer-motion";

export default function AbstractBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#faf9f6]"
      aria-hidden="true"
    >
      {/* 1. Animated Fluid Gradient Mesh Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-amber-200/25 via-orange-100/20 to-transparent blur-3xl opacity-80"
      />

      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[15%] w-[850px] h-[850px] rounded-full bg-gradient-to-bl from-blue-200/20 via-indigo-100/20 to-transparent blur-3xl opacity-75"
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[15%] left-[20%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-emerald-100/20 via-teal-100/15 to-transparent blur-3xl opacity-70"
      />

      {/* 2. Abstract Architectural Isometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(24, 24, 27, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24, 24, 27, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 95%)",
        }}
      />

      {/* 3. Subtle Dot Matrix Accent */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(24, 24, 27, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 4. Fine Paper Noise Grain */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
