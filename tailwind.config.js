/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#1f2f57",
        primary: "#ffd700"

      },
      gridTemplateColumns: {
        "theme-layout": "300px auto"
      },
      backgroundImage: {
        library: " url('/src/assets/background/library.jpg')",
      }
    },
  },
  plugins: [],
}