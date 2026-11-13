import { WhatsAppIcon } from './BrandIcons';
import { icons } from './icons';
import { site } from '../data/site';
import heroCar from '../../images/hero-carro.jpg';

const overlay =
  'linear-gradient(0deg, rgba(7,8,10,0.85) 0%, rgba(7,8,10,0.3) 12%, transparent 28%), linear-gradient(90deg, rgba(7,8,10,0.96) 0%, rgba(7,8,10,0.9) 38%, rgba(7,8,10,0.72) 58%, rgba(7,8,10,0.35) 82%, rgba(7,8,10,0.15) 100%)';

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-32">
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

      <div className="container-site">
        <div className="max-w-[580px]">
          <h1 className="font-display text-[1.95rem] font-bold min-[400px]:text-[2.15rem] leading-[1.1] tracking-[-0.015em] text-champagne sm:text-5xl lg:text-[3.6rem]">
            {hero.titleLine1}{' '}
            <span className="block sm:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {hero.features.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <li
                  key={feature.label}
                  className="flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[rgba(14,16,24,0.82)] px-[1.1rem] py-3.5 shadow-chip backdrop-blur-[10px] transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:border-brand/40 hover:bg-[rgba(20,23,34,0.92)] hover:shadow-chip-hover sm:py-3"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 flex-none text-brand-light" />
                  <span className="text-[0.92rem] font-semibold leading-tight text-white">{feature.label}</span>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 max-w-[470px] text-[0.95rem] leading-relaxed text-white/70">{hero.subtitle}</p>

          <div className="mt-7 flex flex-col items-start gap-3.5">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn-cta w-full sm:w-auto">
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              Agendar pelo WhatsApp
            </a>
            <p className="flex items-center gap-2 pl-0.5">
              <span
                aria-hidden="true"
                className="inline-block h-[7px] w-[7px] animate-status-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e,0_0_3px_#22c55e]"
              />
              <span className="font-heading text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#9299a6]">
                {hero.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
