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
    },
    colors: {
      primary: "#D06F00",
      primaryLight: "#F9912B",
      primaryMedium: "#6E1E00",
      primaryDark: "#510000",
      secondary: "#1271A2",
      secondaryLight: "#85CBFF",
      secondaryExtraLight: "#B0DDFF",
      secondaryDark: "#00416E",
      secondaryMedium: "#62AADF",
      white: "#ffffff",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
