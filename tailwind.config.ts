/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-global": "#444444",
        "gray-dark": "#292929",
        "gray-light": "#999",
        "off-white": "#fafafa",
      },
    },
  },
  plugins: [],
};