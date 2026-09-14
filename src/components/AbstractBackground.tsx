"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AbstractBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#fafafa]"
      aria-hidden="true"
    >
      {/* 1. High-Res 3D Abstract Wave Image */}
      <div className="absolute inset-0 opacity-[0.38] mix-blend-multiply">
        <Image
          src="/abstract-bg.jpg"
          alt="Abstract white wave background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Soft Animated Fluid Gradient Mesh Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-100/30 via-orange-50/20 to-transparent blur-3xl opacity-70"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-blue-100/25 via-indigo-50/20 to-transparent blur-3xl opacity-60"
      />

      {/* 3. Delicate Architectural Isometric Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.25]"
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

      {/* 4. Fine Tactile Grain */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply pointer-events-none"
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
