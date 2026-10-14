"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu, Terminal, Bot, Sparkles } from "lucide-react";

const skillPills = [
  { name: "AI & ML", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "Automation", icon: Bot },
  { name: "Problem Solver", icon: Sparkles },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex items-center justify-center bg-bgPrimary overflow-hidden">
      
      {/* Background Subtle Radial Glow & Dots */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-goldPrimary/10 blur-[150px] pointer-events-none" />
      
      {/* Dotted Accent Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(245,197,66,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT SIDE (45% -> lg:col-span-5): Floating Circular Portrait extend top */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center relative order-1"
        >
          {/* Behind Image: Faded Large Golden Circle */}
          <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-goldPrimary/15 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          {/* Outer Dashed Golden Circle Frame */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-goldPrimary/30 animate-spin-slow pointer-events-none" />

          {/* Golden Ring Outline */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border-[3px] border-goldPrimary shadow-goldGlowLg animate-float-slow overflow-visible group">
            
            {/* Layer 1: Body & Arms clipped INSIDE circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] left-0 -top-24 sm:-top-28">
                <div role="img" aria-label="Portrait placeholder for Pratik Rajabhau Palkar" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#211b0b] via-[#0d0d0d] to-[#070707]">
                  <span aria-hidden="true" className="font-heading text-8xl sm:text-9xl font-black text-goldPrimary/80">PP</span>
                </div>
              </div>
            </div>

            {/* Layer 2: Head popping OUT OF TOP of circle */}
            <div className="absolute inset-0 pointer-events-none" style={{ clipPath: "inset(-200px 0 55% 0)" }}>
              <div className="absolute w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] left-0 -top-24 sm:-top-28">
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#211b0b] via-[#0d0d0d] to-[#070707]">
                  <span className="font-heading text-8xl sm:text-9xl font-black text-goldPrimary/80">PP</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE (55% -> lg:col-span-7): Headline & Bio & Pills & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center order-2 text-left"
        >
          {/* Small Text Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/40 text-xs font-mono text-goldPrimary mb-6 w-fit shadow-goldGlowSm">
            <span className="w-2 h-2 rounded-full bg-goldPrimary animate-ping" />
            <span>• Hi, I&apos;m</span>
          </div>

          {/* Large Heading: PRATIK (White) PALKAR (Gold) */}
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-4">
            <span className="text-white">PRATIK</span> <br />
            <span className="text-gold-gradient">PALKAR</span>
          </h1>

          {/* Subheading */}
          <h2 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-widest text-goldPrimary mb-6">
            AI & SOFTWARE DEVELOPER
          </h2>

          {/* Description */}
          <p className="text-textSecondary text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">
            I build intelligent software, AI assistants, and automation tools that solve real-world problems and create meaningful impact.
          </p>

          {/* SKILL TAGS / PILLS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {skillPills.map((pill) => {
              const IconComp = pill.icon;
              return (
                <motion.div
                  key={pill.name}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-4 py-2 rounded-full bg-cardDark border border-borderGold/40 hover:border-goldPrimary hover:bg-goldPrimary hover:text-bgPrimary text-textSecondary hover:font-bold transition-all duration-300 shadow-goldGlowSm flex items-center gap-2 cursor-default group"
                >
                  <IconComp className="w-4 h-4 text-goldPrimary group-hover:text-bgPrimary transition-colors" />
                  <span className="text-xs font-semibold font-mono tracking-wide">{pill.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Primary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-8 py-4 rounded-xl bg-goldPrimary text-bgPrimary font-bold text-xs uppercase tracking-wider hover:bg-goldSecondary transition-all duration-300 shadow-goldGlow flex items-center gap-3 group"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-8 py-4 rounded-xl bg-transparent border border-goldPrimary text-goldPrimary font-bold text-xs uppercase tracking-wider hover:bg-goldPrimary hover:text-bgPrimary transition-all duration-300 shadow-goldGlowSm flex items-center gap-3 group"
            >
              <Mail className="w-4 h-4 text-goldPrimary group-hover:text-bgPrimary transition-colors" />
              <span>CONTACT ME</span>
            </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
