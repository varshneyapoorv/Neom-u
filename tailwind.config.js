/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        source_serif: ["Source Serif 4", "serif"],
        BrownMedium: ["BrownMedium", "sans-serif"],
      },
    },
  },
};
