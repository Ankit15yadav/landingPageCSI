/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: ['hover', 'focus'],
      rotate: {
        '3d': 'rotateX(15deg) rotateY(15deg)', // Define your 3D rotation
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideIn 0.7s ease-out forwards',
      },

      colors: {
        pastelBlue: {
          25: 'rgb(176, 198, 212)',
          50: 'rgb(160, 180, 193)',
          100: 'rgb(144, 162, 174)',
          200: 'rgb(129, 145, 155)',
          300: 'rgb(113, 127, 136)',
          400: 'rgb(97, 110, 117)',
          500: 'rgb(82, 92, 98)',
          600: 'rgb(66, 74, 80)',
          700: 'rgb(50, 57, 61)',
          900: 'rgb(35, 39, 42)',
        },
        regalBlue: {
          25: 'rgb(30, 55, 101)',
          50: 'rgb(27, 50, 92)',
          100: 'rgb(24, 45, 83)',
          200: 'rgb(22, 40, 74)',
          300: 'rgb(19, 35, 65)',
          400: 'rgb(16, 30, 56)',
          500: 'rgb(14, 25, 47)',
          600: 'rgb(11, 20, 38)',
          700: 'rgb(8, 15, 29)',
          900: 'rgb(5, 10, 20)',
        },
        colors: {
          space: {
            25: '#0D0B25',
            50: '#1A103B',
            100: '#271857',
            200: '#36226F',
            300: '#4A2D8F',
            400: '#6544B5',
            500: '#7D61CC',
            600: '#9981E2',
            700: '#B29BF2',
            800: '#D0C4FF',
          },
        },
      },


    },
  },
  plugins: [],
};
