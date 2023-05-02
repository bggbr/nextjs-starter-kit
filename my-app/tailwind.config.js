/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#009879",
        aws: "#196CC2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
