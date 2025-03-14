/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFE145",
        yellowDark: "#B79C10",
        yellowLight: "#FFF7CC",
        grayDark: "#3F4255",
        lightBlue: "#F2F4FA",
        lightGray: "#D4D7E5",
        gray: "#9093A6",
        darkBlue: "#181C2E",
        orange: "#FF7622",
      },
    },
  },
  plugins: [],
};
