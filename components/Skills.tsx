"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "C Language", level: 85 },
      { name: "C++", level: 80 },
    ],
  },
  {
    category: "Artificial Intelligence",
    icon: Cpu,
    skills: [
      { name: "LLMs Inference", level: 90 },
      { name: "Ollama Runtime", level: 92 },
      { name: "Hugging Face", level: 88 },
    ],
  },
  {
    category: "Developer Tools",
    icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code IDE", level: 95 },
      { name: "Linux OS", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-bgPrimary relative border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL PROFICIENCY</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-14 tracking-tight">
          Skills & <span class="text-gold-gradient">Progress Bars</span>.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-cardDark p-8 rounded-3xl border border-borderGold/30 hover:border-goldPrimary transition-all duration-300 shadow-cardShadow hover:shadow-goldGlow flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-borderDark">
                    <div className="w-10 h-10 rounded-xl bg-bgPrimary border border-borderGold/20 flex items-center justify-center text-goldPrimary">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Progress Bars */}
                  <div className="space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-goldPrimary font-bold">{skill.level}%</span>
                        </div>

                        <div className="h-2 rounded-full bg-bgPrimary overflow-hidden border border-borderDark relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: catIdx * 0.1 }}
                            className="h-full bg-gradient-to-r from-goldPrimary to-goldSecondary rounded-full shadow-goldGlowSm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
