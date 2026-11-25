import { ArrowDown, ArrowUpRight, Clock3, Luggage, Users } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { icons } from './icons';
import { buildWhatsappHref, fleet } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';
import heroCar from '../../images/hero-carro.jpg';

// Escurece só o lado do texto e a base, onde fica a faixa; o carro continua visível à direita.
const scrim =
  'linear-gradient(90deg, color-mix(in oklab, var(--color-paper) 94%, transparent) 0%, color-mix(in oklab, var(--color-paper) 82%, transparent) 40%, color-mix(in oklab, var(--color-paper) 40%, transparent) 75%, color-mix(in oklab, var(--color-paper) 25%, transparent) 100%), linear-gradient(0deg, var(--color-paper) 0%, transparent 30%)';

export function Hero() {
  const { t, whatsappHref } = useLanguage();
  const { hero, fleetSection, carousel } = t;

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        <img
          alt=""
          src={heroCar}
          fetchPriority="high"
          loading="eager"
          className="h-full w-full animate-hero-zoom object-cover object-[70%_center] motion-reduce:animate-none"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ backgroundImage: scrim }} />

      <div className="container-site grid flex-1 items-center gap-12 pb-14 pt-[120px] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:pb-16">
        <div>
          <h1 className="font-display text-[clamp(1.9rem,2.3vw+1rem,3.1rem)] font-bold leading-[1.08] tracking-[-0.01em] text-ink [overflow-wrap:break-word]">
            <span className="block">{hero.titleLine1}</span> <span className="block">{hero.titleLine2}</span>
          </h1>
          <p className="lead mt-6 max-w-[34rem] text-ink-2">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta">
              <WhatsAppIcon className="h-5 w-5" />
              {t.ui.bookWhatsapp}
            </a>
            <a href="#frota" className="btn-ghost">
              {t.ui.seeFleet}
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-rule bg-paper-2 p-6 shadow-lift sm:p-9">
          <h2 className="font-display text-[length:var(--text-title)] font-semibold text-ink">{fleetSection.linkLabel}</h2>
          <ul className="mt-5 border-t border-rule">
            {fleet.map(({ id }) => {
              const vehicle = t.fleet[id];
              return (
                <li key={id} className="border-b border-rule">
                  <a
                    href={buildWhatsappHref(t.whatsapp.fleet(vehicle.name))}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={carousel.linkAria(fleetSection.linkLabel, vehicle.name)}
                    className="group flex min-h-[68px] items-center justify-between gap-4 py-3 text-[1.05rem]"
                  >
                    <span className="font-semibold text-ink transition-colors duration-200 group-hover:text-accent-2">
                      {vehicle.name}
                    </span>
                    <span className="flex items-center gap-4 text-[0.875rem] text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Users aria-hidden="true" className="h-4 w-4 text-accent" />
                        {vehicle.passengers}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Luggage aria-hidden="true" className="h-4 w-4 text-accent" />
                        {vehicle.luggage}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 text-ink-2 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-[0.875rem] text-muted">
            <Clock3 aria-hidden="true" className="h-4 w-4 text-accent" />
            {hero.status}
          </p>
        </div>
      </div>

      <div className="group/marquee relative flex items-center border-t border-rule bg-paper-deep">
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-deep to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-deep to-transparent sm:w-28"
          />
          <div
            className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none"
          >
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
                      <Icon aria-hidden="true" className="h-6 w-6 flex-none text-accent" />
                      <span className="whitespace-nowrap font-display text-[1.15rem] font-semibold text-ink sm:text-[1.4rem]">
                        {feature.label}
                      </span>
                      <span aria-hidden="true" className="ml-6 mr-10 h-1.5 w-1.5 flex-none rotate-45 bg-accent sm:ml-11 sm:mr-14" />
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
