import { WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import rcLogo from '../../docs/rc-logo-transparente.png';

function LogoMark() {
  return (
    <img
      aria-hidden="true"
      alt=""
      className="h-10 w-auto flex-none"
      src={rcLogo}
    />
  );
}

export function Header() {
  return (
    <header className="fixed left-4 right-4 top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="RC Motorista - voltar ao inicio"
        >
          <LogoMark />
          <span className="font-heading text-sm font-semibold tracking-wide text-white sm:text-base">
            Motorista
          </span>
        </a>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.whatsappHref}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
