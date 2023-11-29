import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(150px, 1fr))",
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      gold: "#D6A400",
      orange: {
        100: "#FF921B",
        200: "#FF8500",
        300: "#D36100",
        400: "#A83F00",
        500: "#801A00",
        600: "#5D0000",
        700: "#570000",
      },
      blue: {
        100: "#A2E7FF",
        200: "#82C8FE",
        300: "#62AADF",
        400: "#408DC0",
        500: "#1271A2",
        600: "#003B67",
        700: "#00305A",
      },
      gray: {
        100: "#EEEEEE",
        200: "#CFCFCF",
        300: "#B9B9B9",
        400: "#878787",
        500: "#595959",
        600: "#4E4E4E",
        700: "#2E2E2E",
      },
      green: {
        100: "#04CC00",
        200: "#00A400",
        300: "#007C00",
      },
      red: {
        100: "#ED2B0E",
        200: "#CB0000",
        300: "#A90000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
