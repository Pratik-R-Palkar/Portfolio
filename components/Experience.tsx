"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-bgPrimary relative border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-14 tracking-tight">
          Work <span className="text-gold-gradient">Experience</span>.
        </h2>

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-goldPrimary/30 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-goldPrimary border-4 border-bgPrimary shadow-goldGlow" />

            <div className="bg-cardDark p-8 rounded-3xl border border-borderGold/30 hover:border-goldPrimary transition-all duration-300 shadow-cardShadow hover:shadow-goldGlow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-goldPrimary" />
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Mountreach Solutions Pvt. Ltd.
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-goldSecondary font-medium">
                    AI & Machine Learning Intern
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bgPrimary border border-borderGold/30 text-xs font-mono text-goldPrimary w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  3 Months Duration
                </span>
              </div>

              <div className="space-y-3 mb-6 text-sm text-textSecondary leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-goldPrimary flex-shrink-0 mt-1" />
                  <span>Constructed data preprocessing and machine learning model training pipelines in Python.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-goldPrimary flex-shrink-0 mt-1" />
                  <span>Engineered computer vision algorithms and model inference scripts for automation workflows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-goldPrimary flex-shrink-0 mt-1" />
                  <span>Evaluated local model quantization performance and multi-threaded desktop execution.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-borderDark font-mono text-xs text-textSecondary">
                <span className="px-3 py-1 rounded-md bg-bgPrimary border border-borderGold/20">Python</span>
                <span className="px-3 py-1 rounded-md bg-bgPrimary border border-borderGold/20">Machine Learning</span>
                <span className="px-3 py-1 rounded-md bg-bgPrimary border border-borderGold/20">Computer Vision</span>
                <span className="px-3 py-1 rounded-md bg-bgPrimary border border-borderGold/20">Git</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
