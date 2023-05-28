/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        yell: "#d1a054",
      },
    },
  },
  plugins: [require("daisyui")],
  plugins: [require("flowbite/plugin")],
};
