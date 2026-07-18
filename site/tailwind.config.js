/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0807",
        surface: "#1C1813",
        brass: "#E6B450",
        "brass-deep": "#1A1206",
        cream: "#F4ECDD",
        muted: "#A89C88",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
