import { locales, useLanguage } from '../i18n/LanguageProvider';
import type { Locale } from '../i18n/types';

// Bandeiras em SVG estático (emoji de bandeira não aparece no Windows).
const flags: Record<Locale, string> = {
  pt: '/flags/br.svg',
  en: '/flags/us.svg',
  es: '/flags/es.svg',
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
      className={`inline-flex h-10 items-center gap-0.5 rounded-full border border-rule bg-paper-2 p-1 ${className}`}
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
            className={`group/flag inline-flex h-8 items-center gap-1.5 rounded-full text-[0.75rem] font-semibold transition-colors duration-200 ${
              compact ? 'w-8 justify-center' : 'pl-1.5 pr-2.5'
            } ${active ? 'bg-paper-3 text-ink' : 'text-muted hover:bg-paper-3 hover:text-ink active:bg-paper'}`}
          >
            <span
              aria-hidden="true"
              className={`block h-5 w-5 flex-none overflow-hidden rounded-full transition-opacity duration-200 ${
                active
                  ? 'opacity-100 ring-[1.5px] ring-accent'
                  : 'opacity-60 ring-1 ring-rule-strong group-hover/flag:opacity-100'
              }`}
            >
              <img src={flags[code]} alt="" width={20} height={20} className="block h-full w-full" />
            </span>
            {compact ? null : <span aria-hidden="true">{short}</span>}
            <span className="sr-only">{name}</span>
          </button>
        );
      })}
    </div>
  );
}
