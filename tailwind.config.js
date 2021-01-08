module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '48px': '48px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
