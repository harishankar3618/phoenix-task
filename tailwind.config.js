/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        phoenix: {
          red: '#c1121f',
          black: '#111111',
          ink: '#171717',
          smoke: '#f6f6f6',
          pearl: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter Tight', 'system-ui', 'sans-serif'],
        stat: ['Oswald', 'Inter Tight', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(17, 17, 17, 0.16)',
        glow: '0 0 48px rgba(193, 18, 31, 0.3)',
      },
      backgroundImage: {
        'red-luxury': 'linear-gradient(135deg, #c1121f 0%, #810a13 58%, #111111 100%)',
        'dark-radial':
          'radial-gradient(circle at top left, rgba(193,18,31,0.28), transparent 36%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 34%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
