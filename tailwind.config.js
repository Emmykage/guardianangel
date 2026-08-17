/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#1f2f57",
        primary: "#ffd700",
        ink: "#14213D",
        "ink-soft": "#233559",
        paper: "#F4F6F5",
        "paper-deep": "#E8EBE7",
        gold: "#C79A3E",
        "gold-soft": "#E7CE93",
        slate: "#5B6472",
        pass: "#2F6F4E",
        fail: "#B3402A",
        live: "#C0392B",
        line: "#D9DCD6",
      },
      fontFamily: {
        display: "'Fraunces', 'Georgia', serif",
        body: "'Inter', 'Helvetica Neue', sans-serif",
        mono: "'IBM Plex Mono', 'Courier New', monospace",
      },
      gridTemplateColumns: {
        "theme-layout": "300px auto",
      },
      backgroundImage: {
        library: " url('/src/assets/background/library.jpg')",
      },
    },
  },
  plugins: [],
};
