module.exports = {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};