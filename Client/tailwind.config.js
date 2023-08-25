/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "sans-serif",
      secondary: "sans-serif",
      tertiary: "sans-serif",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    backgroundImage: {
      site: "url('./assets/fondo.png')",
    },
    extend: {},
  },
  plugins: [],
};
