"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-bgPrimary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-12 tracking-tight">
          Building Practical <span className="text-gold-gradient">AI Systems</span>.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Short Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-cardDark p-8 sm:p-10 rounded-3xl border border-borderGold/30 flex flex-col justify-between shadow-cardShadow hover:border-goldPrimary transition-all duration-300"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Software Engineer & AI Enthusiast
              </h3>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-6">
                I specialize in engineering low-latency voice AI desktop assistants, local LLM inference engines, and modular Python automation systems.
              </p>
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                My objective is to build clean, purposeful software that seamlessly connects human workflow intent with intelligent backend automation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-borderDark flex flex-wrap gap-3">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-bgPrimary border border-borderGold/20 text-goldPrimary">
                Artificial Intelligence
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-bgPrimary border border-borderGold/20 text-goldPrimary">
                Machine Learning
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-bgPrimary border border-borderGold/20 text-goldPrimary">
                Python Engineering
              </span>
            </div>
          </motion.div>

          {/* Right Column: Education Card (Without Academic Status Line) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 bg-cardDark p-8 sm:p-10 rounded-3xl border border-borderGold/30 flex flex-col justify-between shadow-cardShadow hover:border-goldPrimary transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-bgPrimary border border-borderGold/30 flex items-center justify-center text-goldPrimary mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-goldPrimary block mb-2">
                ACADEMIC DIPLOMA
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Diploma in Electronics & Computer Engineering
              </h3>

              <p className="text-textSecondary text-sm font-medium mb-4">
                T.B. Girwalkar Polytechnic, Ambajogai
              </p>

              <p className="text-xs text-textSecondary leading-relaxed">
                Comprehensive training in computer engineering fundamentals, programming, logic design, and software architecture.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
