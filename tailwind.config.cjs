/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2D55',
          50: '#EEF1F8',
          100: '#D6DCEC',
          200: '#A8B4D2',
          300: '#7888B6',
          400: '#4D5F94',
          500: '#1B2D55',
          600: '#16264A',
          700: '#11203D',
          800: '#0C172C',
          900: '#070E1B',
        },
        gold: {
          DEFAULT: '#F5A623',
          50: '#FEF6E7',
          100: '#FCE9C2',
          200: '#FAD489',
          300: '#F7BE53',
          400: '#F5A623',
          500: '#D88B0A',
          600: '#A56A08',
          700: '#754B05',
          800: '#472C03',
        },
        offwhite: '#F8F7F4',
        ink: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 3.5vw + 1rem, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 2vw + 1rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(27,45,85,0.04), 0 8px 24px rgba(27,45,85,0.06)',
        'lift': '0 12px 32px rgba(27,45,85,0.10)',
        'gold': '0 6px 20px rgba(245,166,35,0.35)',
      },
      backgroundImage: {
        'navy-grain': 'radial-gradient(circle at 20% 20%, rgba(245,166,35,0.08), transparent 50%), radial-gradient(circle at 80% 80%, rgba(245,166,35,0.05), transparent 40%), linear-gradient(180deg, #1B2D55 0%, #11203D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F5A623 0%, #E89311 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
