import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { buildWhatsappHref } from '../data/site';
import { en } from './content/en';
import { es } from './content/es';
import { pt } from './content/pt';
import type { Locale, SiteContent } from './types';

export const contents: Record<Locale, SiteContent> = { pt, en, es };
export const locales: Locale[] = ['pt', 'en', 'es'];

export const STORAGE_KEY = 'rc-lang';
const DEFAULT_LOCALE: Locale = 'pt';

function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as string[]).includes(value);
}

/** Ordem: ?lang= na URL, depois a escolha salva, depois português. */
function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLocale(fromUrl)) return fromUrl;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // Armazenamento bloqueado (aba anônima, cookies desativados): segue em português.
  }

  return DEFAULT_LOCALE;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteContent;
  whatsappHref: string;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: pt,
  whatsappHref: buildWhatsappHref(pt.whatsapp.default),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const t = contents[locale];

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [t]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem armazenamento a escolha vale só para esta visita.
    }

    // Mantém o idioma no link para que ele possa ser compartilhado.
    const url = new URL(window.location.href);
    if (next === DEFAULT_LOCALE) url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    window.history.replaceState(window.history.state, '', url);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t, whatsappHref: buildWhatsappHref(t.whatsapp.default) }),
    [locale, setLocale, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
