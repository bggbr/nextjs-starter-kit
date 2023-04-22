/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                turquoise: "#009879",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
