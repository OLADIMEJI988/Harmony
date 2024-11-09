/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "340px",
      xl: "1085px",
      sxl: "991px",
      lmd: "892px",
      md: "765px",
    },
    extend: {},
  },
  plugins: [],
}

