"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const projectsList = [
  {
    title: "KAIRO",
    subtitle: "Voice-first AI Desktop Assistant",
    description:
      "Next-generation desktop assistant engineered for low-latency voice execution, local system automation, contextual vector memory, and real-time computer vision overlays.",
    tech: ["Python", "Rust", "Ollama", "OpenCV", "SpeechRecognition"],
    image: "/kairo-preview.jpg",
  },
  {
    title: "NEXA",
    subtitle: "AI Chatbot Powered by Local LLMs",
    description:
      "Modern, privacy-centric AI workspace running entirely offline via Ollama local model quantization with custom long-term vector memory architectures.",
    tech: ["Python", "Ollama", "Hugging Face", "Streamlit"],
    image: "/nexa-preview.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-bgPrimary relative border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderGold/30 text-xs font-mono text-goldPrimary mb-6">
          <Layers className="w-3.5 h-3.5" />
          <span>FEATURED PROJECTS</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-14 tracking-tight">
          Selected <span className="text-gold-gradient">Software Systems</span>.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-cardDark rounded-3xl border border-borderGold/30 hover:border-goldPrimary overflow-hidden flex flex-col justify-between group shadow-cardShadow hover:shadow-goldGlow transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-bgPrimary">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardDark via-cardDark/40 to-transparent" />

                {/* Tech Pills */}
                <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-bgPrimary/90 backdrop-blur-md border border-borderGold/30 text-goldPrimary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-3xl font-black text-white group-hover:text-goldPrimary transition-colors mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-goldSecondary mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-textSecondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
