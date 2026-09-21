"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-36 sm:pt-44 pb-20 md:pb-28 px-6 overflow-hidden border-b border-zinc-200/80">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Eyebrow badge */}
        {/* <motion.div variants={itemVariants} className="inline-block mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-300/80 bg-white/90 text-zinc-700 text-xs font-mono font-medium tracking-wider uppercase shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse" />
            <span>{portfolioData.personal.title}</span>
            <span className="text-zinc-300">•</span>
            <span>{portfolioData.personal.location}</span>
          </div>
        </motion.div> */}

        {/* Editorial Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-950 uppercase leading-[0.95] mb-8"
        >
          Architecting <br />
          <span className="text-zinc-400 font-serif italic lowercase font-light tracking-normal pr-3">
            reliable
          </span>
          systems & <br />
          modern web.
        </motion.h1>

        {/* Subtitle / Bio summary */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed font-normal mb-10"
        >
          Hi, I&apos;m <span className="font-semibold text-zinc-900">{portfolioData.personal.name}</span>. {portfolioData.personal.tagline}
        </motion.p>

        {/* Call to Actions */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
          >
            <span>View Selected Works</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 bg-white/90 text-zinc-800 text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-zinc-950 hover:text-zinc-950 transition-colors shadow-2xs backdrop-blur-sm cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          {/* <CopyEmailButton className="text-black" email={portfolioData.personal.email} /> */}
        </motion.div>

        {/* Highlight ticker strip */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-24 pt-8 border-t border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-zinc-700"
        >
          <div className="group">
            <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Degree
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 mt-1 block group-hover:text-zinc-700 transition">
              B.E. Computer Engineering
            </span>
          </div>

          <div className="group">
            <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Core Specialty
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 mt-1 block group-hover:text-zinc-700 transition">
              Full-Stack & Systems
            </span>
          </div>

          <div className="group">
            <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              AI Pipelines
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 mt-1 block group-hover:text-zinc-700 transition">
              Text-to-SQL & LLMs
            </span>
          </div>

          <div className="group">
            <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Status
            </span>
            <span className="text-sm sm:text-base font-bold text-emerald-600 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Open for hire
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
