import { Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';

export function CtaBanner() {
  const { cta } = site;

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-[#08090e] pb-24 pt-16">
      <div className="container-site">
        <div className="relative flex flex-col gap-10 overflow-hidden rounded-2xl border border-brand bg-[linear-gradient(135deg,#141724_0%,#07080a_100%)] px-6 py-12 shadow-cta sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-[4.5rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[100px] -top-[100px] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(255,106,0,0.25)_0%,transparent_70%)]"
          />

          <div className="relative z-10 max-w-[650px]">
            <p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand">{cta.eyebrow}</p>
            <h2
              id="contato-title"
              className="mt-3 font-heading text-[clamp(1.7rem,2.8vw,2.5rem)] font-extrabold leading-[1.2] text-white"
            >
              {cta.title}
            </h2>
            <p className="mt-3.5 text-[1.02rem] leading-relaxed text-[#c9d0db]">{cta.description}</p>
          </div>

          <div className="relative z-10 flex flex-col items-stretch gap-4 sm:items-start lg:items-end">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-brand bg-brand/15 px-7 py-4 font-heading text-[0.85rem] font-bold text-champagne shadow-[0_0_24px_rgba(255,106,0,0.25)] transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-brand hover:text-ink hover:shadow-[0_0_32px_rgba(255,106,0,0.45)]"
            >
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              Agendar pelo WhatsApp
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.85rem] sm:justify-start lg:justify-end">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand-light"
              >
                <InstagramIcon className="h-4 w-4" />
                Ver Instagram
              </a>
              <a
                href={site.phoneHref}
                aria-label={`Telefone ${site.phoneDisplay}`}
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand-light"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span>{site.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
