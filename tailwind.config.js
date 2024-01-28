/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg": "url('./src/assets/hero-bg.png')",
      }),
    },
  },
  plugins: [],
};
