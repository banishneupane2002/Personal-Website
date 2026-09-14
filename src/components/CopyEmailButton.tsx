"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export default function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      prompt("Copy to clipboard: Ctrl+C, Enter", email);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-95 cursor-pointer shadow-xs ${className}`}
      title="Click to copy email"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-600 font-bold">Email Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 opacity-70" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}

