"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "TOOLKIT", href: "#toolkit" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <div
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-zinc-200 shadow-sm"
            : "bg-white/70 backdrop-blur-xs border-zinc-200/70"
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-zinc-900 font-bold tracking-tight hover:opacity-80 transition"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 group-hover:scale-125 transition-transform" />
          <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider">
            {portfolioData.personal.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 font-medium">
            // CE
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for hire</span>
          </div>

          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-700 hover:text-zinc-950 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-18 left-4 right-4 bg-white rounded-2xl border border-zinc-200 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-700">
              {portfolioData.personal.status}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-zinc-800 hover:text-zinc-950 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="font-medium text-zinc-600 hover:text-zinc-950"
            >
              {portfolioData.personal.email}
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-zinc-900 inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

