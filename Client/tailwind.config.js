/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    backgroundImage: {
      site: "url('./assets/site-bg.jpg')",
      about: "url('./assets/about.png')",
      services: "url('./assets/services.png')",
    },
    extend: {},
  },
  plugins: [],
};
