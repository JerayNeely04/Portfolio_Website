/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark theme toggle
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // tells Tailwind which files to scan
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00BFFF',
          green: '#00FF9C',
          purple: '#9D4EDD',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
