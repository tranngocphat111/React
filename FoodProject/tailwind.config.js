/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary_yellow: "#ffc404",
        primary_brown: "#312c1d",
      },
      backgroundColor: {
        primary_yellow: "#ffc404",
        primary_brown: "#312c1d",
      },
      backgroundImage: {
        primary_linear: "linear-gradient(#29251c, #2c2306)",
      },
      dropShadow: {
        default: "8px 6px 4px #050504",
      },
    },

  },
  plugins: [],
};
