import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: "#0F172A",
          surface: "#1E293B",
          border: "#334155",
          text: "#F8FAFC",
          muted: "#94A3B8",
          accent: "#F59E0B",
          hover: "#D97706",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
