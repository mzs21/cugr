module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse_3011': 'pulse_3011 4s infinite',
        'gradient-301': 'gradient_301 5s ease infinite',
        'animStarRotate': 'animStarRotate 90s linear infinite',
        'animStar': 'animStar 60s linear infinite'
      },
      keyframes: {
        'pulse_3011': {
          '0%': { opacity: '0.5', transform: 'scale(0.8)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)' },
          '70%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
          '100%': { opacity: '0.5', transform: 'scale(0.8)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' },
        },
        'gradient_301': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
        },
        animStarRotate: {
          'from': {
            transform: 'rotate(360deg)',
          },
          'to': {
            transform: 'rotate(0deg)',
          },
        },
        animStar: {
          'from': {
            transform: 'translateY(0)',
          },
          'to': {
            transform: 'translateY(-135rem)'
          }
        }
      },
    },
  },
  plugins: [],
}
