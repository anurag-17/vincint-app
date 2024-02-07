/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        oswald: "Oswald, sans-serif",
        urbanist: "Urbanist, sans-serif",
        redHatDisplay : 'Red Hat Display'
    },
    colors: {
      ...colors,
      primary: "#133239;",
      secondary: "#000",
      main: "#fff",
      "white": "#ffffff",
        "black": "#38424D",
        "gray": "#FBFBFF",
        "yellow": "#FDD446",
        "theme-color": "#1b3138;",
        "border-color": "#E8E8E8",
        "body-color": "#747E88",
        "heading-color": "#162447",
        "shadow": "#9D6A6A",
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
    extend: {},
},
  plugins: [],
}
