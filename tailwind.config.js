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
    },
  },
  plugins: [],
};
