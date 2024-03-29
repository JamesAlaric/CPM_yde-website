import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        base: ["var(--font-mts)"],
      },
      colors: {
        cornflower: {
          "50": "#f2f9fd",
          "100": "#e3f1fb",
          "200": "#c2e3f5",
          "300": "#83c9ec",
          "400": "#4eb2e2",
          "500": "#2799d0",
          "600": "#197bb0",
          "700": "#15638f",
          "800": "#165476",
          "900": "#174663",
          "950": "#102c41",
        },
      },
    },
  },
  plugins: [],
};
export default config;
