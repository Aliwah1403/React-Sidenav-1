/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#053030',
        secondaryGreen: '#1CB447',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
