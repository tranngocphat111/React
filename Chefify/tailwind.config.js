/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f64a86",
      },
      backgroundColor: {
        primary: "#f64a86",
        second: "#fef0f5"
      }
    },
  },
  plugins: [],
}