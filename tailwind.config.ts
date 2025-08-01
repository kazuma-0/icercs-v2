import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      colors: {
        background: "#e2e5e8",
        primary: "#0E49B5",
        secondary: "#50CB86",
        gold: "#FFD700",
      },
      fontFamily: {
        sans: ["PT Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
