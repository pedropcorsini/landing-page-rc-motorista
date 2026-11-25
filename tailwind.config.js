/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
          3: 'var(--color-paper-3)',
          deep: 'var(--color-paper-deep)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          2: 'var(--color-ink-2)',
        },
        muted: 'var(--color-muted)',
        mist: 'var(--color-muted)',
        rule: {
          DEFAULT: 'var(--color-rule)',
          strong: 'var(--color-rule-strong)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          2: 'var(--color-accent-2)',
          ink: 'var(--color-accent-ink)',
        },
        brand: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-2)',
        },
        scrim: {
          DEFAULT: 'var(--color-scrim)',
          soft: 'var(--color-scrim-soft)',
        },
        focus: {
          DEFAULT: 'var(--color-focus)',
          'on-accent': 'var(--color-focus-on-accent)',
        },
        whatsapp: 'var(--color-whatsapp)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        heading: ['var(--font-outlier)'],
      },
      maxWidth: {
        site: 'var(--container)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'fleet-btn': '0 6px 20px var(--fleet-shadow)',
        'fleet-btn-hover': '0 0 25px var(--fleet-glow-45)',
        lift: '0 24px 48px var(--color-shadow)',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'status-pulse': 'statusPulse 2.5s ease-in-out infinite',
        'whatsapp-pulse': 'whatsappPulse 2.2s ease-out infinite',
        'hero-zoom': 'heroZoom 24s ease-in-out infinite alternate',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
