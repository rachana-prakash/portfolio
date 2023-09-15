/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#131532",
        sky: "#1e81b0",
        turquoise: "#abdbe3",
        cerulean: "#59a1d4",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        swing: {
          "0%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        swing: "swing ease-in-out 1s infinite alternate",
      },
    },
  },
  plugins: [],
};
