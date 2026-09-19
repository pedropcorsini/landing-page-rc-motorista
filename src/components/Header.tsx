import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import rcLogo from '../../docs/rc-logo-transparente.png';

function LogoMark() {
  return (
    <img
      aria-hidden="true"
      alt=""
      className="h-8 w-auto flex-none sm:h-10"
      src={rcLogo}
    />
  );
}

function InstagramGradientMark() {
  return (
    <span className="grid h-6 w-6 place-items-center rounded-lg bg-[radial-gradient(circle_at_30%_110%,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)] shadow-[0_0_20px_rgba(214,41,118,0.28)]">
      <InstagramIcon className="h-3.5 w-3.5 text-white" />
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-8 lg:px-12">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/10 bg-ink/80 px-3 py-2.5 pl-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-4 sm:pl-5 lg:flex lg:justify-between">
        <button
          type="button"
          className="col-start-1 row-start-1 grid h-9 w-9 place-items-center justify-self-start rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:border-brand/60 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
        </button>

        <a
          href="#top"
          className="col-start-2 row-start-1 flex items-center gap-3 justify-self-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:col-auto lg:row-auto lg:justify-self-auto"
          aria-label="RC Motorista - voltar ao inicio"
        >
          <LogoMark />
          <span className="hidden border-l border-white/20 pl-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 sm:block">
            Mobilidade executiva
          </span>
        </a>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.16em] text-white/65 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex rounded-sm py-2 transition-colors duration-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 row-start-1 flex items-center justify-end gap-2 lg:col-auto lg:row-auto lg:flex">
          <a
            href={site.instagramHref}
            className="col-start-1 row-start-1 grid h-9 w-9 cursor-pointer place-items-center justify-self-start rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:border-brand/60 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:col-auto lg:row-auto lg:inline-flex lg:w-auto lg:items-center lg:gap-2 lg:px-3 lg:text-xs lg:font-bold lg:uppercase lg:leading-none lg:tracking-[0.12em]"
            aria-label="Instagram"
          >
            <span className="lg:hidden">
              <InstagramGradientMark />
            </span>
            <InstagramIcon className="hidden h-4 w-4 lg:block" />
            <span className="hidden lg:inline">Instagram</span>
          </a>
          <a
            href={site.whatsappHref}
            className="col-start-3 row-start-1 grid h-9 w-9 cursor-pointer place-items-center justify-self-end rounded-full bg-whatsapp text-sm font-semibold text-ink transition-colors duration-200 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp lg:col-auto lg:row-auto lg:inline-flex lg:w-auto lg:items-center lg:gap-2 lg:px-4 lg:text-xs lg:font-bold lg:uppercase lg:leading-none lg:tracking-[0.12em]"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-3xl border border-white/10 bg-ink/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/75 transition-colors hover:bg-white/5 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
