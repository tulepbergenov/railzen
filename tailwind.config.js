/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "app-fm-montserrat": ["'Montserrat', sans-serif", "system-ui"],
      },
      screens: {
        "3xl": "1832px",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};
