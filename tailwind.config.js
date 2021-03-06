module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      padding: {
        '48px': '48px',
      },
      outline: {
        blue: '3px solid blue',
        green: '3px solid green',
        yellow: '3px solid yellow',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
