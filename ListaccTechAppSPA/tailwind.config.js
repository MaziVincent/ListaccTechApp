/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue':{
        400:'#60a5fa',
        500:'#3b82f6',
        300:'#93c5fd'
      },
      'gray':{
        50:'#f9fafb',
        100:'#f3f4f6',
        200:'#e5e7eb',
        300:'#d1d5db',
        400:'#9ca3af',
        500:'#4b5563'
      },
      'orange':{
        400:'#fb923c',
        500:'#f97316'
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg:'1.12rem',
      xl: '1.25rem',
      xl2: '1.563rem',
      xl3: '1.953rem',
      xl4: '2.441rem',
      xl5: '3.052rem',
      xl6:'3.72rem'
    },
    fontFamily: {
      sans: ['Epilogue', 'Inter','Montserrat','Roboto','Helvetica','sans-serif'],
      serif: ['MerriwEeather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
