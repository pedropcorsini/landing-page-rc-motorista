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
              className="group relative inline-flex rounded-full px-1.5 py-2 transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transform-none"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-brand after:to-transparent after:opacity-0 after:transition-[opacity,transform] after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:opacity-100 group-focus-visible:after:scale-x-100 group-focus-visible:after:opacity-100">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagramHref}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:inline-flex sm:w-auto sm:gap-2 sm:px-4 sm:text-sm sm:font-semibold"
            aria-label="Instagram"
          >
            <InstagramGradientMark />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href={site.whatsappHref}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-whatsapp text-sm font-semibold text-ink transition-colors duration-200 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp sm:inline-flex sm:w-auto sm:gap-2 sm:px-4"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
