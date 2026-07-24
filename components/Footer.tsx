"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-borderDark bg-bgPrimary text-textSecondary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Signature */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="font-heading font-bold text-white text-base">
            Pratik Rajabhau Palkar
          </span>
          <span className="hidden md:inline-block text-borderDark">•</span>
          <span className="text-xs font-mono text-goldPrimary">
            AI & Software Developer
          </span>
        </div>

        {/* Copyright & Top Scroll */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-textSecondary">
            © 2026. All rights reserved.
          </span>
          
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-cardDark border border-borderGold/30 flex items-center justify-center text-textSecondary hover:text-goldPrimary hover:border-goldPrimary hover:scale-110 transition-all shadow-goldGlowSm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
