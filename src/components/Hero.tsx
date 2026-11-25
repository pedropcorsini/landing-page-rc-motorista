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

      <div className="border-t border-white/[0.1] bg-[rgba(7,8,10,0.72)] backdrop-blur-[10px]">
        <ul className="container-site grid grid-cols-2 lg:grid-cols-4">
          {hero.features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <li
                key={feature.label}
                className={`flex items-center gap-3 py-4 pr-3 sm:py-5 ${index % 2 === 1 ? 'border-l border-white/[0.08] pl-4 sm:pl-6' : ''} ${
                  index === 2 ? 'border-t border-white/[0.08] lg:border-l lg:border-t-0 lg:pl-6' : ''
                } ${index === 3 ? 'border-t border-white/[0.08] lg:border-t-0' : ''}`}
              >
                <Icon aria-hidden="true" className="h-5 w-5 flex-none text-brand" />
                <span className="text-[0.82rem] font-semibold leading-tight text-white/90 sm:text-[0.9rem]">{feature.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
