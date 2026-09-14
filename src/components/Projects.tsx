"use client";

import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6 bg-stone-50/60 border-b border-zinc-200">
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
              02 // SELECTED WORKS
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-500">
            A curated selection of engineering systems, full-stack applications, and intelligent pipelines built with precision.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-8">
          {portfolioData.projects.map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl bg-white border border-zinc-200/90 p-7 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-300 hover:border-zinc-400"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Category Column */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-zinc-100 pb-6 lg:pb-0 lg:pr-6">
                  <div>
                    <span className="text-4xl sm:text-5xl font-mono font-black tracking-tighter text-zinc-300 group-hover:text-zinc-950 transition-colors duration-300">
                      {project.number}
                    </span>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-mono font-medium text-zinc-700 uppercase tracking-wide">
                      {project.category}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-12">
                    <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      Role
                    </span>
                    <span className="text-xs font-semibold text-zinc-800">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Main Details Column */}
                <div className="lg:col-span-9 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 group-hover:text-zinc-950 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-50 border border-zinc-200 text-zinc-700 shadow-2xs cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links & Actions */}
                  <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-4">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-white text-zinc-800 text-xs font-semibold tracking-wider uppercase hover:border-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors shadow-2xs cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    )}

                    {project.liveUrl && project.liveUrl !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-colors shadow-2xs cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Preview</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More on GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 sm:p-10 rounded-2xl border border-zinc-200 bg-white text-center flex flex-col items-center justify-center gap-4 shadow-2xs"
        >
          <Code2 className="w-8 h-8 text-zinc-400" />
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            More projects & experiments on GitHub
          </h4>
          <p className="text-sm text-zinc-500 max-w-lg">
            Explore ongoing explorations, open-source utilities, and architectural prototypes on my GitHub profile.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @banishneupane on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
