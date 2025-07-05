/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#18181b', // black
          light: '#27272a', // dark gray
          dark: '#000000', // pure black
        },
        accent: {
          DEFAULT: '#ec4899', // pink-500
          light: '#f472b6', // pink-400
          dark: '#be185d', // pink-800
        },
        purple: {
          DEFAULT: '#a21caf', // purple-700
          light: '#e879f9', // purple-400
          dark: '#701a75', // purple-900
        },
        neutral: {
          light: '#f4f6fb',
          DEFAULT: '#e0e7ef',
          dark: '#64748b',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pop: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        bounceIcon: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both',
        pop: 'pop 0.4s cubic-bezier(0.4,0,0.2,1) both',
        bounceIcon: 'bounceIcon 0.7s infinite',
      },
    },
  },
  plugins: [],
}; 