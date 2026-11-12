/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07080a',
        surface: '#0c0d12',
        alt: '#0a0c13',
        card: {
          DEFAULT: '#11131c',
          hover: '#161925',
        },
        fleet: '#08090d',
        faq: '#12141f',
        mist: '#9da8b6',
        muted: '#64748b',
        champagne: '#F4E7DC',
        brand: {
          DEFAULT: '#FF6A00',
          light: '#FF8A3D',
          dark: '#B84A00',
          deep: '#d9600a',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1180px',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 106, 0, 0.15)',
        chip: '0 8px 24px rgba(0, 0, 0, 0.4)',
        'chip-hover': '0 12px 28px rgba(0, 0, 0, 0.6), 0 0 16px rgba(255, 106, 0, 0.15)',
        step: '0 12px 32px rgba(0, 0, 0, 0.45)',
        'step-hover': '0 22px 48px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 106, 0, 0.18)',
        nav: '0 10px 30px rgba(0, 0, 0, 0.7)',
        cta: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 106, 0, 0.15)',
        'fleet-btn': '0 6px 20px rgba(0, 0, 0, 0.6)',
        'fleet-btn-hover': '0 0 25px rgba(255, 106, 0, 0.45)',
        dot: '0 0 10px rgba(255, 106, 0, 0.5)',
      },
      keyframes: {
        statusPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.85)' },
        },
        whatsappPulse: {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.6)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'status-pulse': 'statusPulse 2.5s ease-in-out infinite',
        'whatsapp-pulse': 'whatsappPulse 2.2s ease-out infinite',
        'hero-zoom': 'heroZoom 24s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
