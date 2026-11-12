import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { BrandLogo } from './BrandLogo';
import { site } from '../data/site';

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

function useActiveSection(ids: string[]) {
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

const sectionIds = site.nav.map((item) => item.href.slice(1));

export function Header() {
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
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[16px] transition-all duration-300 ${
          scrolled
            ? 'border-white/[0.14] bg-[rgba(8,9,13,0.96)] py-2.5 shadow-nav'
            : 'border-white/[0.1] bg-[rgba(10,11,15,0.72)] py-3.5'
        }`}
      >
        <div className="container-site flex items-center justify-between gap-3 sm:gap-6">
          <a
            href="#top"
            aria-label="RC Motorista, voltar ao início"
            className="rounded-sm transition-transform duration-200 hover:scale-[1.03]"
          >
            <BrandLogo />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-6">
              {site.nav.map((item) => {
                const active = activeId === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active ? 'true' : undefined}
                      className={`relative inline-flex py-2 font-heading text-[0.66rem] font-bold uppercase tracking-[0.1em] transition-colors duration-300 after:absolute after:bottom-0.5 after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 after:ease-expo ${
                        active
                          ? 'text-white after:w-full'
                          : 'text-white/60 after:w-0 hover:text-white hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-none items-center gap-1.5 sm:gap-2">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn-outline gap-1.5 px-2.5 text-[0.62rem] sm:gap-2 sm:px-4 sm:text-[0.7rem]">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Fale conosco
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/5 lg:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
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
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className={`absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col border-l border-white/10 bg-surface px-6 pb-8 pt-5 shadow-2xl transition-transform duration-[400ms] ease-expo ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/50">Menu</span>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/5"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-6 flex flex-col">
            {site.nav.map((item, index) => {
              const active = activeId === item.href.slice(1);
              return (
                <li key={item.href} className="border-b border-white/[0.06]">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-4 font-heading text-[0.8rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                      active ? 'text-brand-light' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn-cta mt-auto w-full px-4 text-[0.8rem]">
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
