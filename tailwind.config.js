/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        surface: '#111111',
        line: '#27272A',
        brand: '#FF6A00',
        whatsapp: '#FF6A00',
      },
      fontFamily: {
        heading: ['Rubik', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(255, 106, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
