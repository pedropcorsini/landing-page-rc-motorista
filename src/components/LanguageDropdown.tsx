import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { flags, languages } from './LanguageSwitcher';
import { locales, useLanguage } from '../i18n/LanguageProvider';

type LanguageDropdownProps = {
  className?: string;
};

// Seletor de idioma compacto para telas pequenas: a bandeira atual abre a lista dos três idiomas.
export function LanguageDropdown({ className = '' }: LanguageDropdownProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t.ui.language}: ${languages[locale].name}`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center gap-1 rounded-full border border-rule bg-paper-2 text-ink-2 min-[380px]:w-auto min-[380px]:pl-2.5 min-[380px]:pr-1.5 transition-colors hover:border-rule-strong hover:text-ink active:bg-paper min-[380px]:h-11"
      >
        <img src={flags[locale]} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
        <ChevronDown aria-hidden="true" className={`hidden h-4 w-4 transition-transform duration-200 min-[380px]:block ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <ul
          id={listId}
          className="absolute right-0 top-full z-[70] mt-2 min-w-[11rem] rounded-[var(--radius-card)] border border-rule bg-paper-2 p-1 shadow-lift"
        >
          {locales.map((code) => {
            const active = code === locale;
            const { name, lang } = languages[code];
            return (
              <li key={code}>
                <button
                  type="button"
                  lang={lang}
                  aria-pressed={active}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                    triggerRef.current?.focus();
                  }}
                  className={`flex min-h-[44px] w-full items-center gap-3 rounded px-3 text-left text-[0.95rem] transition-colors ${
                    active ? 'bg-paper-3 text-ink' : 'text-ink-2 hover:bg-paper-3 hover:text-ink active:bg-paper'
                  }`}
                >
                  <img src={flags[code]} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
                  <span className="flex-1">{name}</span>
                  {active ? <Check aria-hidden="true" className="h-4 w-4 text-accent" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
