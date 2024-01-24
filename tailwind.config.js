/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brokenConsole: ["Broken Console", "sans-serif"],
        louisGeorgeCafe: ["Louis George Cafe", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brokenConsole: ["Broken Console", "sans-serif"],
        louisGeorgeCafe: ["Louis George Cafe", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "white",

          secondary: "#242879",

          accent: "#F97C44",

          neutral: "#FFE1BF",

          "base-100": "white",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
