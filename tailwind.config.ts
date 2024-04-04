import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      thistle: "#f3c4fb",
      whiteSmoke: "#f5f5f5",
      lightSkyBlue: "#bde0fe",
      peach: "#ffee93",
      classicCream: "#fcf5c7",
      magicMint: "#adf7b6",
      lavenderPink: "#f3c4fb",
      lightGrey: "#F6F6F6",
      black: "#000000",
      mediumPurple: "#C67ED2",
      white: "#FFFFFF",
      mistyGray: "#D9D9D9",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
