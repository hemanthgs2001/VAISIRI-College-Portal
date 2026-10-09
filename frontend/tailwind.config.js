/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          500: "#2e034f",
          600: "#2e034f",
          700: "#2e034f",
          800: "#2e034f",
          900: "#440475",
        },
        gold: { 400: "#facc15", 500: "#eab308" },
      },
      fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"] },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 25s linear infinite" },
    },
  },
  plugins: [],
};
