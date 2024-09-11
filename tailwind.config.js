module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      colors: {
        main: 'var(--color-main)',
        base: 'var(--color-base)',
        primary: 'var(--color-primary)',
        secondery: 'var(--color-secondery)',
        cards: 'var(--color-cards)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
