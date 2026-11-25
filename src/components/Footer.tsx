import { Clock3, MapPin, Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { sectionIds, site } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

const columnTitle = 'mb-5 font-heading text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white';
const footerLink = 'text-[0.88rem] text-mist transition-colors duration-200 hover:text-brand-light';

export function Footer() {
  const { t, whatsappHref } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] pb-9 pt-16 lg:pt-[5.5rem]">
      <div className="container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-mist">{t.footer.description}</p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t.ui.instagramAria}
                className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-brand hover:text-brand-light"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t.ui.whatsappAria}
                className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-brand hover:text-brand-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
            <LanguageSwitcher className="mt-6" />
          </div>

          <nav aria-label={t.ui.footerNav}>
            <h2 className={columnTitle}>{t.footer.navTitle}</h2>
            <ul className="space-y-2.5">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={footerLink}>
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitle}>{t.footer.servicesTitle}</h2>
            <ul className="space-y-2.5">
              {t.services.map((service) => (
                <li key={service.title}>
                  <a href="#servicos" className={footerLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={columnTitle}>{t.footer.contactTitle}</h2>
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
                {t.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-brand" />
                {t.footer.schedule}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[0.78rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {t.brand}. {t.footer.rights}
          </p>
          <p>
            {t.footer.developedBy}{' '}
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
