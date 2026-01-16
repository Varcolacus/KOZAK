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
        160: '40rem',
        300: '300px',
        320: '320px',
        450: '450px',
        480: '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};