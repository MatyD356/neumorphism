/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,tsx,ts,js}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nue': '#ECF0F3',
        'black-nue': '#292D32'
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
        'nue-black': `
        -18px -18px 20px #30343A, 
        18px 18px 20px #00000020
        `,
        'nue-black-inset': `
          0px 0px 20px #2A2D32,
          0px 0px 20px #30343A, 
          inset -18px -18px 20px #30343A, 
          inset 18px 18px 20px #00000020
        `,
      },
    },
  },
  plugins: [],
}
