/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xss: "340px",
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "2lg": "1163px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1868px",
      },
    },
  },
  plugins: [],
};
