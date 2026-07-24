"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star, GitFork, ArrowUpRight, Flame, Code2 } from "lucide-react";

const pinnedRepos = [
  {
    name: "KAIRO",
    description: "Voice-first AI Desktop Assistant with automation, persistent memory, and vision overlay.",
    stars: 18,
    forks: 4,
    language: "Python",
    langColor: "#E6B84A",
    url: "https://github.com/Pratik-R-Palkar/KAIRO",
  },
  {
    name: "NEXA",
    description: "Modern AI Chatbot powered by local LLMs (Ollama) with offline inference architecture.",
    stars: 14,
    forks: 2,
    language: "Python",
    langColor: "#E6B84A",
    url: "https://github.com/Pratik-R-Palkar/NEXA",
  },
];

const languageBreakdown = [
  { name: "Python", percentage: 85, color: "#E6B84A" },
  { name: "C / C++", percentage: 10, color: "#D4A43A" },
  { name: "Shell / HTML", percentage: 5, color: "#BDBDBD" },
];

export default function GithubSection() {
  return (
    <section id="github" className="py-28 relative bg-bgPrimary border-t border-borderDark/40">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surfaceSecondary border border-borderDark text-xs font-mono text-goldPrimary mb-4">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE TELEMETRY</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
              GitHub <span className="text-gold-gradient">Activity</span>.
            </h2>
          </div>
          
          <a
            href="https://github.com/Pratik-R-Palkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surfaceSecondary border border-borderDark text-xs font-semibold text-textPrimary hover:border-goldPrimary/50 transition-all shadow-goldGlowSm w-fit"
          >
            <span>@Pratik-R-Palkar</span>
            <ArrowUpRight className="w-4 h-4 text-goldPrimary" />
          </a>
        </div>

        {/* Top Grid: Contribution Heatmap Representation & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Contribution Activity Grid (Visualizer) */}
          <div className="lg:col-span-8 bg-surface p-8 rounded-3xl border border-borderDark gold-glow-border shadow-surfaceCard flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-goldPrimary" />
                  <h3 className="font-heading text-lg font-bold text-textPrimary">
                    Contribution Heatmap
                  </h3>
                </div>
                <span className="text-xs font-mono text-textSecondary">
                  Consistent Code Commits
                </span>
              </div>

              {/* Matrix of Mock Contribution Squares styled in dark & gold */}
              <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 p-4 rounded-2xl bg-surfaceSecondary/50 border border-borderDark/60 overflow-hidden">
                {Array.from({ length: 120 }).map((_, i) => {
                  // Determine intensity level for gold heatmap styling
                  const rand = (i * 17 + 7) % 10;
                  let bgClass = "bg-surfaceSecondary/40";
                  if (rand > 7) bgClass = "bg-goldPrimary shadow-goldGlowSm";
                  else if (rand > 4) bgClass = "bg-goldPrimary/60";
                  else if (rand > 2) bgClass = "bg-goldPrimary/30";

                  return (
                    <div
                      key={i}
                      className={`h-3 rounded-[3px] transition-all hover:scale-125 hover:z-10 ${bgClass}`}
                      title={`Commit activity node ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-borderDark/60 text-xs text-textSecondary">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-[2px] bg-surfaceSecondary/40" />
                <div className="w-3 h-3 rounded-[2px] bg-goldPrimary/30" />
                <div className="w-3 h-3 rounded-[2px] bg-goldPrimary/60" />
                <div className="w-3 h-3 rounded-[2px] bg-goldPrimary" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Key GitHub Stats */}
          <div className="lg:col-span-4 bg-surface p-8 rounded-3xl border border-borderDark flex flex-col justify-between">
            <h3 className="font-heading text-lg font-bold text-textPrimary mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-goldPrimary" />
              Repository Telemetry
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-surfaceSecondary border border-borderDark/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitCommit className="w-5 h-5 text-goldPrimary" />
                  <span className="text-xs text-textSecondary font-medium">Primary Language</span>
                </div>
                <span className="font-mono text-sm font-bold text-textPrimary">Python</span>
              </div>

              <div className="p-4 rounded-2xl bg-surfaceSecondary border border-borderDark/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitPullRequest className="w-5 h-5 text-goldPrimary" />
                  <span className="text-xs text-textSecondary font-medium">Focus Area</span>
                </div>
                <span className="font-mono text-sm font-bold text-textPrimary">AI Systems</span>
              </div>

              <div className="p-4 rounded-2xl bg-surfaceSecondary border border-borderDark/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-goldPrimary" />
                  <span className="text-xs text-textSecondary font-medium">Core Projects</span>
                </div>
                <span className="font-mono text-sm font-bold text-textPrimary">2 Active</span>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="mt-6 pt-4 border-t border-borderDark/60">
              <span className="text-xs font-mono text-textSecondary block mb-3">Top Languages</span>
              <div className="h-2 rounded-full bg-surfaceSecondary flex overflow-hidden mb-3">
                {languageBreakdown.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.percentage}%`, backgroundColor: l.color }}
                    className="h-full"
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 text-[11px] text-textSecondary font-mono">
                {languageBreakdown.map((l) => (
                  <div key={l.name} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                    <span>{l.name} ({l.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pinnedRepos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-7 rounded-2xl border border-borderDark hover:border-goldPrimary/40 transition-all duration-300 shadow-surfaceCard hover:-translate-y-1 block group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-goldPrimary" />
                  <span className="font-heading text-lg font-bold text-textPrimary group-hover:text-goldPrimary transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-textSecondary group-hover:text-goldPrimary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-textSecondary text-xs leading-relaxed mb-6">
                {repo.description}
              </p>

              <div className="flex items-center justify-between text-xs font-mono text-textSecondary pt-4 border-t border-borderDark/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-goldPrimary" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-textSecondary" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
