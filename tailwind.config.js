/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,tsx,ts,js}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nue': '#ECF0F3'
      },
      boxShadow: {
        'nue': `
        -18px -18px 30px #FFF, 
        18px 18px 30px #D1D9E6
        `,
        'nue-inset': `
          0px 0px 30px #FFF, 
          0px 0px 30px #D1D9E6,
          inset -18px -18px 30px #FFF, 
          inset 18px 18px 30px #D1D9E6
        `,

      },
    },
  },
  plugins: [],
}
