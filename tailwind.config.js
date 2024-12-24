/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff7171',
          500: '#ff4040',
          600: '#ff1f1f',
          700: '#e60000',
          800: '#b30000',
          900: '#910000',
        },
        peach: {
          50: '#fff5f2',
          100: '#ffe6e0',
          200: '#ffd1c7',
          300: '#ffb3a3',
          400: '#ff8771',
          500: '#ff5c40',
          600: '#ff3b1f',
          700: '#ff1a00',
          800: '#cc1500',
          900: '#a61100',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};