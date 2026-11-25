import { Clock3, MapPin, Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { sectionIds, site } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

const rowTitle = 'text-[0.875rem] text-muted';
const rowLink = 'inline-flex min-h-[32px] items-center text-[0.95rem] text-ink-2 transition-colors duration-200 hover:text-accent-2';

export function Footer() {
  const { t, whatsappHref } = useLanguage();

  return (
    <footer className="bg-paper-deep pb-10 pt-[var(--section-gap-s)]">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <BrandLogo />
            <p className="mt-8 max-w-[38ch] text-[1.2rem] leading-[1.5] text-ink sm:text-[length:var(--text-xl)] sm:leading-[1.45]">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-4 lg:col-start-9">
            <h2 className={rowTitle}>{t.footer.contactTitle}</h2>
            <ul className="space-y-3 text-[1rem] text-ink-2">
              <li>
                <a href={site.phoneHref} className={`gap-3 ${rowLink}`}>
                  <Phone aria-hidden="true" className="h-4 w-4 text-accent" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.instagramHref} target="_blank" rel="noreferrer" className={`gap-3 ${rowLink}`}>
                  <InstagramIcon className="h-4 w-4 text-accent" />
                  {site.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
                {t.location}
              </li>
              <li className="flex items-center gap-3">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-accent" />
                {t.footer.schedule}
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t.ui.instagramAria}
                className="grid h-11 w-11 place-items-center rounded-full border border-rule text-ink-2 transition-colors hover:border-accent hover:text-accent-2"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label={t.ui.whatsappAria}
                className="grid h-11 w-11 place-items-center rounded-full border border-rule text-ink-2 transition-colors hover:border-accent hover:text-accent-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-rule pt-8 lg:grid-cols-12 lg:gap-8">
          <nav aria-label={t.ui.footerNav} className="lg:col-span-7">
            <h2 className={rowTitle}>{t.footer.navTitle}</h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={rowLink}>
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className={rowTitle}>{t.footer.servicesTitle}</h2>
            <ul className="mt-3 flex flex-col">
              {t.services.map((service) => (
                <li key={service.title}>
                  <a href="#servicos" className={rowLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-6 text-[0.875rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {t.brand}. {t.footer.rights}
          </p>
          <p>
            {t.footer.developedBy}{' '}
            <a
              href="https://github.com/pedropcorsini"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink-2 underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-accent-2"
            >
              Pedro Passos Corsini
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
