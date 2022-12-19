/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        oswald: "'Oswald', sans-serif",
        zen: "'Zen Antique', serif",
        lora: "'Lora', serif",
        austin: "'Austin-web', serif",
      },
    },
  },
  plugins: [],
};
