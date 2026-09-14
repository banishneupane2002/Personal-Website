"use client";

import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-24 sm:py-32 px-6 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              03 // TOOLKIT & SUPER STACK
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase">
              Skills & Technologies
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-500">
            A comprehensive toolbox developed through computer engineering fundamentals and hands-on system development.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.toolkit.map((category: SkillCategory, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-50/70 border border-zinc-200 flex flex-col justify-between hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                    {category.title}
                  </h3>
                  <Layers className="w-4 h-4 text-zinc-400" />
                </div>
                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200/60">
                {category.skills.map((skill: string) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-zinc-200 text-zinc-800 shadow-2xs hover:border-zinc-500 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
