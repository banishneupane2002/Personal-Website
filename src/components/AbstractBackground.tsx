"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AbstractBackground() {
  const { scrollYProgress } = useScroll();

  // Smooth physics spring for silky, lag-free parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    restDelta: 0.001,
  });

  // Background moves at ~18% of scroll speed (slow & elegant)
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.12, 1.22]);

  // Multi-plane depth: grid and orbs move at varying subtle speeds
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-12%"]);
  const orb1Y = useTransform(smoothProgress, [0, 1], ["0%", "-35%"]);
  const orb2Y = useTransform(smoothProgress, [0, 1], ["0%", "28%"]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#fafafa]"
      aria-hidden="true"
    >
      {/* 1. High-Res 3D Abstract Wave Image with Slow Scroll Parallax */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute -top-[15%] left-0 right-0 h-[135%] w-full opacity-[0.38] mix-blend-multiply will-change-transform"
      >
        <Image
          src="/abstract-bg.jpg"
          alt="Abstract white wave background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. Soft Animated Fluid Gradient Mesh Orbs with Multi-plane Parallax */}
      <motion.div
        style={{ y: orb1Y }}
        animate={{
          x: [0, 50, -30, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-amber-100/35 via-orange-50/20 to-transparent blur-3xl opacity-75 will-change-transform"
      />

      <motion.div
        style={{ y: orb2Y }}
        animate={{
          x: [0, -60, 40, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[12%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-blue-100/30 via-indigo-50/20 to-transparent blur-3xl opacity-65 will-change-transform"
      />

      {/* 3. Delicate Architectural Isometric Grid with Gentle Scroll Parallax */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -top-[10%] left-0 right-0 h-[120%] opacity-[0.24] will-change-transform"
      >
        <div
          className="w-full h-full"
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
      </motion.div>

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
