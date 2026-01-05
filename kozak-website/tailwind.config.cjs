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
      spacing: {
        112: '28rem',
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};