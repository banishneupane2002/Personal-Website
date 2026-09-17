"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AbstractBackground() {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for lag-free, elegant parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    restDelta: 0.001,
  });

  // Multi-plane parallax speeds
  const wavesY1 = useTransform(smoothProgress, [0, 1], ["0%", "-18%"]);
  const wavesY2 = useTransform(smoothProgress, [0, 1], ["0%", "-28%"]);
  const orbsY = useTransform(smoothProgress, [0, 1], ["0%", "-12%"]);
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-8%"]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#faf9f6]"
      aria-hidden="true"
    >
      {/* 1. Animated Ambient Gradient Mesh Orbs (Soft, elegant lighting) */}
      <motion.div
        style={{ y: orbsY }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.div
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[12%] -left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-amber-200/30 via-orange-100/20 to-transparent blur-3xl opacity-75"
        />

        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] -right-[12%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-blue-200/25 via-indigo-100/20 to-transparent blur-3xl opacity-70"
        />

        <motion.div
          animate={{
            x: [0, 40, -50, 0],
            y: [0, 30, -40, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[15%] left-[25%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-emerald-100/25 via-teal-50/15 to-transparent blur-3xl opacity-60"
        />
      </motion.div>

      {/* 2. Layer 1: Smooth Vector Topographic Wave Contours (Ultra-crisp at any resolution) */}
      <motion.div
        style={{ y: wavesY1 }}
        className="absolute -top-[10%] left-0 right-0 h-[130%] w-full opacity-60 will-change-transform"
      >
        <svg
          className="w-full h-full text-zinc-950/10"
          viewBox="0 0 1440 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Flowing abstract ribbon curves */}
          <path
            d="M-100 200 C 300 400, 600 50, 1000 300 C 1250 450, 1400 350, 1600 400"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="opacity-40"
          />
          <path
            d="M-100 280 C 250 480, 650 120, 1050 380 C 1300 520, 1420 400, 1600 460"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-60"
          />
          <path
            d="M-100 360 C 200 560, 700 200, 1100 460 C 1340 600, 1440 470, 1600 530"
            stroke="currentColor"
            strokeWidth="1.5"
            className="opacity-70"
          />
          <path
            d="M-100 440 C 150 640, 750 280, 1150 540 C 1380 670, 1470 540, 1600 600"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-50"
          />

          {/* Secondary counter-curves for topographical depth */}
          <path
            d="M-100 680 C 400 500, 800 850, 1200 600 C 1400 480, 1500 520, 1600 550"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-45"
          />
          <path
            d="M-100 760 C 350 580, 850 920, 1250 680 C 1430 550, 1520 600, 1600 630"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="opacity-35"
          />
          <path
            d="M-100 840 C 300 660, 900 990, 1300 760 C 1460 620, 1540 670, 1600 710"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-55"
          />
        </svg>
      </motion.div>

      {/* 3. Layer 2: Subtle Geometric Isometric Grid with Vignette */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -top-[10%] left-0 right-0 h-[120%] opacity-[0.35] will-change-transform"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(24, 24, 27, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(24, 24, 27, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 85% 75% at 50% 35%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 35%, black 40%, transparent 95%)",
          }}
        />
      </motion.div>

      {/* 4. Architectural Crosshair Marks (+) at Grid Intersections */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(24, 24, 27, 0.25) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* 5. Fine Tactile Paper Grain Filter */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="abstractNoise">
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
        <rect width="100%" height="100%" filter="url(#abstractNoise)" />
      </svg>
    </div>
  );
}
