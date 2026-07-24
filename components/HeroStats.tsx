"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Briefcase, Cpu, Sparkles } from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    number: "2+",
    label: "Major Projects",
    desc: "KAIRO & NEXA AI",
  },
  {
    icon: Briefcase,
    number: "1",
    label: "Internship",
    desc: "Mountreach Solutions",
  },
  {
    icon: Cpu,
    number: "10+",
    label: "Technologies",
    desc: "Python, AI, LLMs",
  },
  {
    icon: Sparkles,
    number: "100%",
    label: "Always Learning",
    desc: "AI Innovation Focus",
  },
];

export default function HeroStats() {
  return (
    <section className="py-12 bg-bgPrimary border-y border-borderGold/20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-cardDark p-6 rounded-2xl border border-borderGold/30 hover:border-goldPrimary transition-all duration-300 shadow-cardShadow hover:shadow-goldGlow flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Icon & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-bgPrimary border border-borderGold/20 flex items-center justify-center text-goldPrimary group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-heading text-3xl font-black tracking-tight text-white group-hover:text-goldPrimary transition-colors">
                    {stat.number}
                  </span>
                </div>

                {/* Label & Subtitle */}
                <div>
                  <h3 className="font-heading text-sm font-bold text-white mb-1 group-hover:text-goldPrimary transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-textSecondary font-mono">
                    {stat.desc}
                  </p>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-goldPrimary via-goldSecondary to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
