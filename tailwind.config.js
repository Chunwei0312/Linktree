/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        float: '0 24px 60px -28px rgba(15, 23, 42, 0.55)'
      },
      colors: {
        surface: '#fff7ed',
        ink: '#1f2937',
        accent: '#ea580c',
        accentSoft: '#fdba74',
        pine: '#14532d',
        sky: '#0f766e'
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Noto Sans TC"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Noto Sans TC"', 'sans-serif']
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(253, 186, 116, 0.42), transparent 32%), radial-gradient(circle at top right, rgba(20, 83, 45, 0.26), transparent 28%), linear-gradient(145deg, #fffaf3 0%, #fff1d6 46%, #ffedd5 100%)'
      },
      animation: {
        rise: 'rise 700ms ease-out both',
        drift: 'drift 16s ease-in-out infinite'
      },
      keyframes: {
        rise: {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px) scale(0.98)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        drift: {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '50%': {
            transform: 'translate3d(10px, -16px, 0)'
          }
        }
      }
    }
  },
  plugins: []
};
