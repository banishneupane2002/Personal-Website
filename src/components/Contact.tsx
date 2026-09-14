"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import CopyEmailButton from "./CopyEmailButton";
import { Mail, ArrowUp, Clock, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

export default function Contact() {
  // Live Nepal Time
  const [nepalTime, setNepalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setNepalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-24 sm:pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact Header Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-zinc-950 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Animated decorative glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-blue-500/10 to-transparent blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              04 // INITIATE CONTACT
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95]">
              Let&apos;s build something <br />
              <span className="text-zinc-400 font-serif italic lowercase font-light">
                extraordinary
              </span>{" "}
              together.
            </h2>
            <p className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Whether you have an upcoming engineering role, freelance project, or simply want to connect over technology and distributed systems, my inbox is always open.
            </p>

            {/* Direct Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send An Email</span>
              </motion.a>

              <CopyEmailButton
                email={portfolioData.personal.email}
                className="bg-zinc-900 border-zinc-700 text-white hover:bg-white hover:text-zinc-900 hover:border-white"
              />
            </div>

            {/* Social Pills */}
            <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-zinc-400 mr-2 uppercase tracking-widest">
                Profiles:
              </span>

              <motion.a
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </motion.a>

              {portfolioData.socials.twitter && (
                <motion.a
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Metadata & Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{portfolioData.personal.location}</span>
            </div>

            {nepalTime && (
              <div className="flex items-center gap-1.5 font-mono text-zinc-600">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Nepal Time: {nepalTime} (NPT)</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2 rounded-full border border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
