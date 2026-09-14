"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            {portfolioData.about.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-tight max-w-3xl">
            {portfolioData.about.headline}
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Photo Frame Container */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-lg group cursor-pointer"
              >
                <Image
                  src={portfolioData.personal.photoUrl}
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs text-white/80 font-mono">
                    {portfolioData.personal.title}
                  </p>
                </div>
              </motion.div>

              {/* Decorative background border accent */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-dashed border-zinc-300 -z-10 hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              {portfolioData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Engineering Pillars */}
            <div className="mt-4 pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 transition-shadow hover:shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-sm mb-1.5">
                  <Terminal className="w-4 h-4 text-zinc-700" />
                  <span>Systems & Backends</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  Designing robust database schemas, performant APIs, and asynchronous message queues that scale reliably under load.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 transition-shadow hover:shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-sm mb-1.5">
                  <Cpu className="w-4 h-4 text-zinc-700" />
                  <span>AI & Text-to-SQL</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  Building intelligent workflows, schema extraction pipelines, and PII-safe LLM query generators for relational databases.
                </p>
              </motion.div>
            </div>

            {/* Quick Stat Badges */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {portfolioData.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="p-3 rounded-lg border border-zinc-200 bg-white shadow-2xs"
                >
                  <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-1 block">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
