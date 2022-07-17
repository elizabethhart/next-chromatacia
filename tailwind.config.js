module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'Helvetica', 'sans-serif'],
        sans: ['"Orbitron"', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#434C68',
        'blue-gray': '#A7AFC7',
        'light-gray': '#C0C7D8',
        'brown-gray': '#4C4450',
        'medium-blue': '#4C588C',
      },
    },
  },
  plugins: [],
};
