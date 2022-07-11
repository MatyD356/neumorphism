/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,tsx,ts,js}',
  ],
  theme: {
    extend: {
      borderColor: {
        'nue': 'rgba(255, 255, 255, 0.20)'
      },
      backgroundColor: {
        'nue': '#DFECF4'
      },
      boxShadow: {
        'nue': '-12px -12px 24px 0 rgba(255, 255, 255, 0.80), 12px 12px 24px 0 rgba(108, 141, 194, 0.50)',
        'nueInset': 'inset -12px -12px 24px 0 rgba(255, 255, 255, 0.80), inset 12px 12px 24px 0 rgba(108, 141, 194, 0.50)'

      },
    },
  },
  plugins: [],
}
