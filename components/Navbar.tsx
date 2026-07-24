"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section === "home" ? "hero" : section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] flex items-center ${
        scrolled ? "nav-sticky shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
        
        {/* Left: Logo PP. */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-heading text-2xl font-black tracking-tight text-white group-hover:text-goldPrimary transition-colors">
            PP
          </span>
          <span className="w-2 h-2 rounded-full bg-goldPrimary group-hover:scale-125 transition-transform" />
        </a>

        {/* Center Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-widest transition-colors py-1 ${
                  isActive ? "text-goldPrimary" : "text-textSecondary hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-goldPrimary rounded-full shadow-goldGlowSm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Upper Right Section: GitHub, LinkedIn, Email Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Pratik-R-Palkar"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-xl bg-cardDark border border-borderGold/40 flex items-center justify-center text-textSecondary hover:text-goldPrimary hover:border-goldPrimary hover:scale-105 transition-all shadow-goldGlowSm group"
          >
            <Github className="w-4 h-4 text-goldPrimary group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/pratik-palkar45"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-xl bg-cardDark border border-borderGold/40 flex items-center justify-center text-textSecondary hover:text-goldPrimary hover:border-goldPrimary hover:scale-105 transition-all shadow-goldGlowSm group"
          >
            <Linkedin className="w-4 h-4 text-goldPrimary group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="mailto:palkarpratik84@gmail.com"
            title="Email Me"
            aria-label="Email Pratik"
            className="w-10 h-10 rounded-xl bg-cardDark border border-borderGold/40 flex items-center justify-center text-textSecondary hover:text-goldPrimary hover:border-goldPrimary hover:scale-105 transition-all shadow-goldGlowSm group"
          >
            <Mail className="w-4 h-4 text-goldPrimary group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg bg-cardDark border border-borderGold/40 flex items-center justify-center text-goldPrimary"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[80px] left-0 right-0 nav-sticky px-6 py-6 border-b border-borderGold/40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-textSecondary hover:text-goldPrimary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-borderDark">
                <a href="https://github.com/Pratik-R-Palkar" target="_blank" rel="noopener noreferrer" className="text-goldPrimary hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/pratik-palkar45" target="_blank" rel="noopener noreferrer" className="text-goldPrimary hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:palkarpratik84@gmail.com" className="text-goldPrimary hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
