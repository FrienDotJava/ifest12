/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brokenConsole: ["Broken Console", "sans-serif"],
        louisGeorgeCafe: ["Louis George Cafe", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
});



