import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      blue: "#0000FF",
      dodgerBlue: "1E90FF",
      green: "#008000",
      forestGreen: "#228B22",
      orange: "#FFA500",
      purple: "#800080",
      mediumOrchid: "#BA55D3",
      red: "#FF0000",
      white: "#FFFFFF",
      gray: {
        950: "#0D0D0D",
        900: "#1A1A1A",
        800: "#333333",
        700: "#4D4D4D",
        600: "#666666",
        500: "#808080",
        400: "#999999",
        300: "#B3B3B3",
        200: "#CCCCCC",
        100: "#E6E6E6",
        50: "#F2F2F2",
      },
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
};
export default config;
