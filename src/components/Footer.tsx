import { Clock3, MapPin, Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { BrandLogo } from './BrandLogo';
import { site } from '../data/site';

const columnTitle = 'mb-5 font-heading text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white';
const footerLink = 'text-[0.88rem] text-mist transition-colors duration-200 hover:text-brand-light';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] pb-9 pt-16 lg:pt-[5.5rem]">
      <div className="container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-mist">{site.footer.description}</p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da RC Motorista"
                className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-brand hover:text-brand-light"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da RC Motorista"
                className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-brand hover:text-brand-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className={columnTitle}>Navegação</h2>
            <ul className="space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={footerLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitle}>Serviços</h2>
            <ul className="space-y-2.5">
              {site.services.map((service) => (
                <li key={service.title}>
                  <a href="#servicos" className={footerLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={columnTitle}>Contato</h2>
            <ul className="space-y-3.5 text-[0.88rem] text-mist">
              <li>
                <a href={site.phoneHref} className={`inline-flex items-center gap-2.5 ${footerLink}`}>
                  <Phone aria-hidden="true" className="h-4 w-4 text-brand" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2.5 ${footerLink}`}
                >
                  <InstagramIcon className="h-4 w-4 text-brand" />
                  {site.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin aria-hidden="true" className="h-4 w-4 text-brand" />
                {site.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-brand" />
                Atendimento sob agendamento
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[0.78rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.brand}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://github.com/pedropcorsini"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white/65 underline decoration-brand/50 underline-offset-4 transition-colors duration-200 hover:text-brand-light"
            >
              Pedro Passos Corsini
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
