import type { ReactNode } from 'react';
import { locales, useLanguage } from '../i18n/LanguageProvider';
import type { Locale } from '../i18n/types';

// Bandeiras simplificadas em SVG (emoji de bandeira não aparece no Windows).
const flags: Record<Locale, ReactNode> = {
  pt: (
    <>
      <rect width="26" height="26" fill="#009B3A" />
      <path d="M13 4.5 23 13 13 21.5 3 13Z" fill="#FEDF00" />
      <circle cx="13" cy="13" r="4.6" fill="#002776" />
      <path d="M8.6 12.1c2.9-.6 6-.2 8.7 1.2" stroke="#fff" strokeWidth="0.9" fill="none" />
    </>
  ),
  en: (
    <>
      <rect width="26" height="26" fill="#fff" />
      {[0, 4, 8, 12, 16, 20, 24].map((y) => (
        <rect key={y} y={y} width="26" height="2" fill="#B22234" />
      ))}
      <rect width="13" height="14" fill="#3C3B6E" />
      {[
        [3, 3], [7, 3], [11, 3], [5, 6], [9, 6], [3, 9], [7, 9], [11, 9], [5, 12], [9, 12],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.8" fill="#fff" />
      ))}
    </>
  ),
  es: (
    <>
      <rect width="26" height="26" fill="#AA151B" />
      <rect y="6.5" width="26" height="13" fill="#F1BF00" />
      <rect x="6" y="10" width="3.2" height="6" rx="0.6" fill="#AA151B" />
    </>
  ),
};

const languages: Record<Locale, { short: string; name: string; lang: string }> = {
  pt: { short: 'PT', name: 'Português', lang: 'pt-BR' },
  en: { short: 'EN', name: 'English', lang: 'en' },
  es: { short: 'ES', name: 'Español', lang: 'es' },
};

type LanguageSwitcherProps = {
  className?: string;
  /** Só as bandeiras, sem a sigla (usado no header, onde o espaço é curto). */
  compact?: boolean;
};

export function LanguageSwitcher({ className = '', compact = false }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`inline-flex h-10 items-center gap-0.5 rounded-full border border-white/[0.14] bg-white/[0.03] p-1 ${className}`}
    >
      {locales.map((code) => {
        const active = code === locale;
        const { short, name, lang } = languages[code];
        return (
          <button
            key={code}
            type="button"
            lang={lang}
            title={name}
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`group/flag inline-flex h-8 items-center gap-1.5 rounded-full font-heading text-[0.66rem] font-bold tracking-[0.08em] transition-colors duration-200 ${
              compact ? 'w-8 justify-center' : 'pl-1.5 pr-2.5'
            } ${active ? 'bg-white/[0.12] text-white' : 'text-white/55 hover:bg-white/[0.06] hover:text-white'}`}
          >
            <span
              aria-hidden="true"
              className={`block h-5 w-5 flex-none overflow-hidden rounded-full transition-[opacity,box-shadow] duration-200 ${
                active
                  ? 'opacity-100 shadow-[0_0_0_1.5px_#ff6a00]'
                  : 'opacity-60 shadow-[0_0_0_1px_rgba(255,255,255,0.25)] group-hover/flag:opacity-100'
              }`}
            >
              <svg viewBox="0 0 26 26" className="block h-full w-full">
                {flags[code]}
              </svg>
            </span>
            {compact ? null : <span aria-hidden="true">{short}</span>}
            <span className="sr-only">{name}</span>
          </button>
        );
      })}
    </div>
  );
}
