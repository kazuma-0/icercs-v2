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
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-delay": "float 3s ease-in-out infinite 1.5s",
        "float-slow": "float 4s ease-in-out infinite",
        "float-medium": "float 3.5s ease-in-out infinite 1s",
        "float-fast": "float 2.5s ease-in-out infinite 0.5s",
        marquee: "marquee 15s linear infinite", // updated duration
        shimmer: "shimmer 2s ease-in-out infinite alternate",
        wiggle: "wiggle 1s ease-in-out infinite",
        "wiggle-delay": "wiggle 1s ease-in-out infinite 0.5s",
        "pause-animation": "paused",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" }, // updated start position
          "100%": { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
