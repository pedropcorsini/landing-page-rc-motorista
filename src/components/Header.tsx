import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { sectionIds } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Header() {
  const { t, whatsappHref } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!menuOpen) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper-deep transition-shadow duration-300 ${
          scrolled ? 'shadow-lift' : ''
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-3 sm:gap-6">
          <a href="#top" aria-label={t.ui.homeLabel} className="rounded-sm">
            <BrandLogo />
          </a>

          <nav aria-label={t.ui.mainNav} className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {sectionIds.map((id) => {
                const active = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={active ? 'true' : undefined}
                      className={`relative inline-flex whitespace-nowrap py-2 text-[0.875rem] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 after:ease-expo ${
                        active ? 'text-ink after:scale-x-100' : 'text-muted after:scale-x-0 hover:text-ink'
                      }`}
                    >
                      {t.nav[id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-none items-center gap-2">
            <LanguageSwitcher compact className="hidden sm:inline-flex" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-cta min-h-[44px] gap-2 px-4 text-[0.875rem] max-[379px]:w-11 max-[379px]:px-0 sm:px-5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="max-[379px]:sr-only">{t.ui.contactShort}</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md text-ink transition-colors hover:bg-paper-3 active:bg-paper-2 xl:hidden"
              aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] xl:hidden ${menuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-scrim-soft transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          id="mobile-navigation"
          aria-label={t.ui.mobileNav}
          className={`absolute right-0 top-0 flex h-full w-[min(340px,86vw)] flex-col border-l border-rule bg-paper-2 px-6 pb-8 pt-4 transition-transform duration-[400ms] ease-expo ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-14 items-center justify-between">
            <span className="text-[0.875rem] text-muted">{t.ui.menu}</span>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md text-ink transition-colors hover:bg-paper-3 active:bg-paper"
              aria-label={t.ui.closeMenu}
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-4 flex flex-col">
            {sectionIds.map((id, index) => {
              const active = activeId === id;
              return (
                <li key={id} className="border-b border-rule">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center py-3.5 font-display text-[1.35rem] font-semibold transition-colors ${
                      active ? 'text-accent' : 'text-ink hover:text-accent-2'
                    }`}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcher className="mt-6 self-start sm:hidden" />
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta mt-auto w-full">
            <WhatsAppIcon className="h-4 w-4" />
            {t.ui.bookWhatsapp}
          </a>
        </nav>
      </div>
    </>
  );
}
