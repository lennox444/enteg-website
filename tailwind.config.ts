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
        "brand-gray": "#5A5A5A",
        "brand-gray-dark": "#2D2D2D",
        "brand-blue": "#4A8FE0",
        "brand-blue-dark": "#2563EB",
        "bg-light": "#F8F9FA",
        "bg-section": "#EEF2F7",
        "bg-dark": "#1E2A3A",
      },
      fontFamily: {
        headline: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
