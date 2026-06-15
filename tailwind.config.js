/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070A0F',
        surface: '#0B111C',
        line: '#1E293B',
        brand: '#0EA5E9',
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['Rubik', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(14, 165, 233, 0.16)',
      },
    },
  },
  plugins: [],
};
