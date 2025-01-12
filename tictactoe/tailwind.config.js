/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "50px 50px 50px",
      },
      gridTemplateRows: {
        custom: "50px 50px 50px",
      },
    },
  },
  plugins: [],
  safelist: ["grid-cols-[50px 50px 50px]", "grid-rows-[50px 50px 50px]"],
};
