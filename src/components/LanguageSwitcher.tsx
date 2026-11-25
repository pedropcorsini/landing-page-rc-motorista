import { locales, useLanguage } from '../i18n/LanguageProvider';
import type { Locale } from '../i18n/types';

const languages: Record<Locale, { short: string; name: string; lang: string }> = {
  pt: { short: 'PT', name: 'Português', lang: 'pt-BR' },
  en: { short: 'EN', name: 'English', lang: 'en' },
  es: { short: 'ES', name: 'Español', lang: 'es' },
};

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`inline-flex h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.03] p-1 ${className}`}
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
            className={`h-8 min-w-[2.25rem] rounded-full px-2 font-heading text-[0.66rem] font-bold tracking-[0.08em] transition-colors duration-200 ${
              active ? 'bg-brand text-ink' : 'text-white/60 hover:text-white'
            }`}
          >
            {short}
            <span className="sr-only"> {name}</span>
          </button>
        );
      })}
    </div>
  );
}
