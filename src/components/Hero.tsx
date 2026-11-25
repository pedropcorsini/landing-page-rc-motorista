import { ArrowDown } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { icons } from './icons';
import { useLanguage } from '../i18n/LanguageProvider';
import heroCar from '../../images/hero-carro.jpg';

const overlay =
  'linear-gradient(0deg, rgba(7,8,10,0.92) 0%, rgba(7,8,10,0.35) 22%, transparent 40%), linear-gradient(90deg, rgba(7,8,10,0.95) 0%, rgba(7,8,10,0.86) 36%, rgba(7,8,10,0.6) 58%, rgba(7,8,10,0.25) 82%, rgba(7,8,10,0.1) 100%)';

export function Hero() {
  const { t, whatsappHref } = useLanguage();
  const { hero } = t;

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        <img
          alt=""
          src={heroCar}
          fetchPriority="high"
          loading="eager"
          className="h-full w-full animate-hero-zoom object-cover object-[68%_center] motion-reduce:animate-none"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ backgroundImage: overlay }} />

      <div className="container-site flex flex-1 items-center pb-12 pt-32 sm:pb-16 sm:pt-36">
        <div className="max-w-[600px]">
          <p className="kicker">{hero.status}</p>

          <h1 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.1] tracking-[-0.015em] text-champagne min-[400px]:text-[2.35rem] sm:text-[3.2rem] lg:text-[3.6rem]">
            <span className="lg:whitespace-nowrap">{hero.titleLine1}</span>{' '}
            <span className="block sm:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-[500px] text-[1rem] leading-relaxed text-white/75 sm:text-[1.05rem]">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta">
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              {t.ui.bookWhatsapp}
            </a>
            <a href="#frota" className="btn-ghost">
              {t.ui.seeFleet}
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="group/marquee relative overflow-hidden border-t border-white/[0.1] bg-[rgba(7,8,10,0.78)] backdrop-blur-[10px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28"
        />
        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className={`flex flex-none items-center motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center ${
                copy === 1 ? 'motion-reduce:hidden' : ''
              }`}
            >
              {hero.features.map((feature) => {
                const Icon = icons[feature.icon];
                return (
                  <li key={feature.label} className="flex items-center gap-3.5 py-6 sm:py-7">
                    <Icon aria-hidden="true" className="h-6 w-6 flex-none text-brand sm:h-7 sm:w-7" />
                    <span className="whitespace-nowrap font-display text-[1.15rem] font-semibold text-white sm:text-[1.4rem]">
                      {feature.label}
                    </span>
                    <span aria-hidden="true" className="ml-6 mr-10 h-1.5 w-1.5 flex-none rotate-45 bg-brand/70 sm:ml-11 sm:mr-14" />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
