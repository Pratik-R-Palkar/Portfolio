import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#070707",
        goldPrimary: "#F5C542",
        goldSecondary: "#CFA42E",
        cardDark: "#121212",
        cardDarkHover: "#181818",
        borderGold: "rgba(245, 197, 66, 0.3)",
        borderDark: "#222222",
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1AA",
      },
      boxShadow: {
        goldGlow: "0 0 30px rgba(245, 197, 66, 0.2)",
        goldGlowSm: "0 0 15px rgba(245, 197, 66, 0.15)",
        goldGlowLg: "0 0 60px 10px rgba(245, 197, 66, 0.25)",
        cardShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.9)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-satoshi)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
