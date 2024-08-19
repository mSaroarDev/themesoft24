/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "#fb6f92",
        darkBg: "#1D2327",
        lightBg: "#F6F7F7",
        borderColor: "#ddd",
        body: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
