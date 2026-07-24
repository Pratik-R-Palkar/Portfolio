"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Diploma in Electronics & Computer Engineering",
    issuer: "T.B. Girwalkar Polytechnic, Ambajogai",
    year: "Academic Qualification",
    desc: "Comprehensive coursework in hardware-software architecture, algorithms, and software engineering principles.",
    tag: "ECE Diploma",
  },
  {
    title: "AI & Machine Learning Internship Certification",
    issuer: "Mountreach Solutions Pvt. Ltd.",
    year: "3 Months Practical",
    desc: "Hands-on engineering of machine learning preprocessing pipelines, computer vision algorithms, and Python automation.",
    tag: "Industry AI Internship",
  },
  {
    title: "Python Systems & Open Source Architecture",
    issuer: "Open Source Development Community",
    year: "Active Practice",
    desc: "Verified open-source contributions focusing on local LLM quantization runtime with Ollama and PyTorch pipelines.",
    tag: "Open Source AI",
  },
];

export default function Certificates() {
  return (
    <section className="py-28 bg-bgPrimary relative border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <Award className="w-3.5 h-3.5" />
          <span>CREDENTIALS & ACCOMPLISHMENTS</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-14 tracking-tight">
          Certificates & <span className="text-gold-gradient">Diplomas</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-cardDark p-8 rounded-3xl border border-borderGold/30 hover:border-goldPrimary transition-all duration-300 shadow-cardShadow hover:shadow-goldGlow flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-bgPrimary border border-borderGold/20 flex items-center justify-center text-goldPrimary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-bgPrimary border border-borderGold/20 text-goldPrimary">
                    {cert.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-goldPrimary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-goldSecondary mb-3">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="text-xs text-textSecondary leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-borderDark flex items-center justify-between text-xs font-mono text-goldPrimary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-goldPrimary" /> Verified Credential
                </span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
