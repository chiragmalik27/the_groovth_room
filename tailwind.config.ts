import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Specified Scroll Gradient Palette
        groove: {
          dark: "#04110d",
          forest: "#0f3a2c",
          emerald: "#1f6b52",
          teal: "#3f9179",
          sage: "#c9ddd0",
          cream: "#f4f1ea",
          tabActive: "#b7c9b9",
          tabInactive: "#0c2a21",
        },

        // Brand Palette
        forest: {
          DEFAULT: "#0f3a2c",
          dark: "#04110d",
          rich: "#164637",
          light: "#1f6b52",
          deep: "#04110d",
          border: "rgba(168, 184, 163, 0.18)",
        },
        sage: {
          DEFAULT: "#b7c9b9",
          light: "#c9ddd0",
          dark: "#7A8C74",
        },
        ivory: {
          DEFAULT: "#f4f1ea",
          subtle: "#EFEBE1",
          pure: "#FFFDF9",
        },
        gold: {
          DEFAULT: "#C5A66A",
          light: "#D8BE8E",
          dark: "#A3864E",
        },
        canvas: {
          DEFAULT: "#f4f1ea", // Set default canvas to the exact specified cream
          subtle: "#EDE8DF",
          card: "#FAF8F4",
          pure: "#FEFFF6",
        },
        charcoal: {
          DEFAULT: "#252922",
          light: "#33372F",
          dark: "#1A1D18",
          border: "#3F453A",
        },
        burgundy: {
          DEFAULT: "#622B2C",
          light: "#783536",
          dark: "#4E2223",
          hover: "#532425",
        },
        taupe: {
          DEFAULT: "#B7AA96",
          light: "#C9BFAD",
          dark: "#9E907B",
          subtle: "#E5E0D6",
        },
        line: {
          DEFAULT: "#D8D6CC",
          dark: "#383E34",
        },
        muted: {
          DEFAULT: "#696B63",
          light: "#8B8E85",
          dark: "#4B4D46",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
        ultra: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;
