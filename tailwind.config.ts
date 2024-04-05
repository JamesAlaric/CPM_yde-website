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
        seagull: {
          "50": "#f0f9ff",
          "100": "#dff3ff",
          "200": "#b8e8ff",
          "300": "#75d6ff",
          "400": "#33c4fd",
          "500": "#09adee",
          "600": "#008acc",
          "700": "#006ea5",
          "800": "#045d88",
          "900": "#0a4e70",
          "950": "#06314b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
