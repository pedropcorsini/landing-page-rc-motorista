import { Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

// O contorno de foco padrão é laranja e sumiria na faixa laranja.
const darkFocus = 'focus-visible:outline-focus-on-accent';

export function CtaBanner() {
  const { t, whatsappHref } = useLanguage();
  const { cta } = t;

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-accent py-[var(--section-gap-s)] text-accent-ink">
      <div className="container-site flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[680px]">
          <h2
            id="contato-title"
            className="font-display text-[length:var(--text-section)] font-semibold leading-[1.08] tracking-[-0.015em] [overflow-wrap:break-word]"
          >
            {cta.title}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[1.1rem] leading-relaxed">{cta.description}</p>
        </div>

        <div className="flex flex-col items-stretch gap-5 sm:items-start lg:items-end">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap min-h-[52px] rounded-full bg-paper px-8 text-[1rem] font-semibold text-ink transition-[background-color,transform] duration-300 ease-expo hover:bg-paper-3 active:translate-y-px ${darkFocus}`}
          >
            <WhatsAppIcon className="h-5 w-5 text-accent" />
            {t.ui.bookWhatsapp}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[1rem] font-semibold sm:justify-start lg:justify-end">
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-[44px] items-center gap-2 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${darkFocus}`}
            >
              <InstagramIcon className="h-4 w-4" />
              {t.ui.instagramCta}
            </a>
            <a
              href={site.phoneHref}
              aria-label={t.ui.phoneAria(site.phoneDisplay)}
              className={`inline-flex min-h-[44px] items-center gap-2 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${darkFocus}`}
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
