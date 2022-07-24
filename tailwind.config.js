/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,tsx,ts,js}'],
  theme: {
    extend: {
      backgroundColor: {
        nue: '#ECF0F3',
        'black-nue': '#292D32'
      },
      boxShadow: {
        nue: `
        -4px -4px 10px #FFF, 
        4px 4px 10px #D1D9E6
        `,
        'nue-inset': `
          0px 0px 10px #FFF, 
          0px 0px 10px #D1D9E6,
          inset -4px -4px 10px #FFF, 
          inset 4px 4px 10px #D1D9E6
        `,
        'nue-black': `
        -4px -4px 10px #30343A, 
        4px 4px 10px #00000020
        `,
        'nue-black-inset': `
          0px 0px 10px #2A2D32,
          0px 0px 10px #30343A, 
          inset -4px -4px 10px #30343A, 
          inset 4px 4px 10px #00000020
        `
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};
