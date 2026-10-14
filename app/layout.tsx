import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  title: "Pratik Rajabhau Palkar | AI & Software Developer",
  description:
    "Official portfolio of Pratik Rajabhau Palkar, AI & Software Developer specializing in voice-first AI assistants, local LLM systems, and high-performance Python engineering.",
  keywords: [
    "Pratik Rajabhau Palkar",
    "Pratik Palkar",
    "AI Developer",
    "Software Developer",
    "Python Developer",
    "KAIRO AI",
    "NEXA AI",
    "Local LLM",
    "Voice Assistant",
    "Portfolio",
  ],
  authors: [{ name: "Pratik Rajabhau Palkar" }],
  creator: "Pratik Rajabhau Palkar",
  openGraph: {
    title: "Pratik Rajabhau Palkar | AI & Software Developer",
    description:
      "Building intelligent software, AI assistants, and automation systems for the next generation.",
    url: "https://pratik-r-palkar.github.io/Portfolio/",
    siteName: "Pratik Palkar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Rajabhau Palkar | AI & Software Developer",
    description:
      "Building intelligent software, AI assistants, and automation systems for the next generation.",
    creator: "@palkarpratik45",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pratik Rajabhau Palkar",
    jobTitle: "AI & Software Developer",
    url: "https://pratik-r-palkar.github.io/Portfolio/",
    sameAs: [
      "https://github.com/Pratik-R-Palkar",
      "https://linkedin.com/in/pratik-palkar45",
      "https://x.com/palkarpratik45",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Python Development",
      "Computer Vision",
      "Software Architecture",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bgPrimary text-textPrimary antialiased selection:bg-goldPrimary/30 selection:text-textPrimary">
        <CursorGlow />
        <MotionConfig reducedMotion="user">
          <SmoothScroll>{children}</SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
