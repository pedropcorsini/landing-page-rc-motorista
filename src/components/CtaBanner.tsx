import { Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

// O contorno de foco padrão é laranja e sumiria na faixa laranja.
const darkFocus = 'focus-visible:outline-ink';

export function CtaBanner() {
  const { t, whatsappHref } = useLanguage();
  const { cta } = t;

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-brand py-16 text-ink lg:py-20">
      <div className="container-site flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[680px]">
          <p className="kicker text-ink/75 before:bg-ink">{cta.eyebrow}</p>
          <h2
            id="contato-title"
            className="mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.015em] sm:text-[2.6rem] lg:text-[2.9rem]"
          >
            {cta.title}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/75">{cta.description}</p>
        </div>

        <div className="flex flex-col items-stretch gap-5 sm:items-start lg:items-end">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-ink px-8 py-4 font-heading text-[0.92rem] font-bold text-white transition-[background-color,transform] duration-300 ease-expo hover:-translate-y-px hover:bg-[#1c1e24] ${darkFocus}`}
          >
            <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] text-brand" />
            {t.ui.bookWhatsapp}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.88rem] font-semibold sm:justify-start lg:justify-end">
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-ink/75 transition-colors hover:text-ink ${darkFocus}`}
            >
              <InstagramIcon className="h-4 w-4" />
              {t.ui.instagramCta}
            </a>
            <a
              href={site.phoneHref}
              aria-label={t.ui.phoneAria(site.phoneDisplay)}
              className={`inline-flex items-center gap-2 text-ink/75 transition-colors hover:text-ink ${darkFocus}`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>{site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
