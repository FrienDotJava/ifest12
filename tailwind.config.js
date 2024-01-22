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
