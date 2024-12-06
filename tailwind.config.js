/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "16px",
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        helvetica: ["helvetica", "sans-serif"],
      },
      colors: {
        'darkGreen': "#003459F5",
        'darkBlack': "#00000033",
        'skyBlue': "#00A8E8",
        'deepBlue': "#00171F",
      },
    },
  },
  plugins: [],
};

