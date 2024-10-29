import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add any other custom colors you might want to reference
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 
                0px 1px 0px 0px rgba(25,28,33,0.02), 
                0px 0px 0px 1px rgba(25,28,33,0.08)`, // Custom shadow for inputs
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

// Add plugin to inject CSS variables for colors
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
