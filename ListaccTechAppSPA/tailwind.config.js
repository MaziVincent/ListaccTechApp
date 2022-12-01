/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
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
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      blue: {
        400: '#60a5fa',
        500: '#3b82f6',
      },
    },
    fontFamily: {
      sans: [
        'Epilogue',
        'Inter',
        'Montserrat',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ],
      serif: ['MerriwEeather', 'serif'],
    },
    extend: {
      backgroundImage: {
        worldmap: "url('../public/WorldMap02.png')",
      },
    },
  },
  plugins: [],
}
