"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const email = "palkarpratik84@gmail.com";

  const handleCopy = async () => {
    setCopied(false);
    setCopyError(false);

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopyError(true);
    }

    setTimeout(() => {
      setCopied(false);
      setCopyError(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-28 bg-bgPrimary relative border-t border-borderDark">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Let&apos;s Build Something <span className="text-gold-gradient">Extraordinary</span>.
        </h2>

        <p className="text-textSecondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Open for software engineering roles, technical collaborations, AI system architectures, or open-source discussions.
        </p>

        {/* Email Direct Card */}
        <div className="bg-cardDark p-8 sm:p-10 rounded-3xl border border-borderGold/30 shadow-cardShadow hover:border-goldPrimary transition-all duration-300 max-w-2xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-bgPrimary border border-borderGold/30 flex items-center justify-center text-goldPrimary flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-textSecondary uppercase tracking-wider block">
                  Direct Contact Email
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold text-white">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                type="button"
                aria-label="Copy contact email"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-bgPrimary border border-borderGold/30 text-xs font-mono font-bold text-white hover:border-goldPrimary transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className={`w-4 h-4 ${copyError ? "text-red-400" : "text-goldPrimary"}`} />}
                <span role="status" aria-live="polite" className={copied ? "text-emerald-400" : copyError ? "text-red-400" : ""}>{copied ? "Copied!" : copyError ? "Copy failed" : "Copy"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-goldPrimary text-bgPrimary text-xs font-bold hover:bg-goldSecondary transition-all shadow-goldGlow flex items-center justify-center gap-1.5"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Link Cards (LinkedIn, GitHub, Twitter) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          
          <a
            href="https://linkedin.com/in/pratik-palkar45"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-cardDark border border-borderGold/30 hover:border-goldPrimary hover:scale-105 transition-all flex items-center justify-between group shadow-goldGlowSm"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-goldPrimary" />
              <span className="font-heading text-sm font-bold text-white group-hover:text-goldPrimary transition-colors">
                LinkedIn
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-textSecondary group-hover:text-goldPrimary" />
          </a>

          <a
            href="https://github.com/Pratik-R-Palkar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-cardDark border border-borderGold/30 hover:border-goldPrimary hover:scale-105 transition-all flex items-center justify-between group shadow-goldGlowSm"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-goldPrimary" />
              <span className="font-heading text-sm font-bold text-white group-hover:text-goldPrimary transition-colors">
                GitHub
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-textSecondary group-hover:text-goldPrimary" />
          </a>

          <a
            href="https://x.com/palkarpratik45"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-cardDark border border-borderGold/30 hover:border-goldPrimary hover:scale-105 transition-all flex items-center justify-between group shadow-goldGlowSm"
          >
            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-goldPrimary" />
              <span className="font-heading text-sm font-bold text-white group-hover:text-goldPrimary transition-colors">
                Twitter (X)
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-textSecondary group-hover:text-goldPrimary" />
          </a>

        </div>

      </div>
    </section>
  );
}
