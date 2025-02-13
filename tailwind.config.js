/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: "#FBFBFB",
        deepBlue: "#0D0526",
        deepPurple: "#0C0524",
        lightGreen: "#CCEBF1",
        hovBaground: "#FAF9FB",
        faqBackground: "#ebfbff",
        grayBackground: "#f8f8f8",
        lightPurple: "#9672FF",
        primaryLight: "#9671ff",
        primaryBlack: {
          default: "#18171B",
        },

        text: {
          default: "#18171B",
          dark: "#18171B;",
          gray: "#757576",
          "gray-c": "#D2D2D2",
          "gray-text": "#5b5a5d",
          white: "#FBFBFB",
          secWhite: "#f5f4fa",
          green: "#1E8A5E",
        },
        primary: {
          main: "#623ECA",
          dark: "#04020D;",
          light: "#9671ff",
          deepBlue: "#12002B",
          deepIndigo: "#160840",
          "bg-light": "#D8DAF3",
          "Primary/light": "#F7F6FC",
          "lemon-light": "#F5FBFC",
          "lemon-green": "#F6FAF9",
          "lemon-pink": "#F7F6FC",
          "gray-bg": "#D9D9D9",
        },
        border: {
          eo: "#E0E0E2",
        },
      },
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
