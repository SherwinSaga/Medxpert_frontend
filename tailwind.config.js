/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "extra-wide": "200%", // 150% of the parent container's width
      },
    },
  },
  plugins: [],
};
