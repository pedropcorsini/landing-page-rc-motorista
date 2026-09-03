import { WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import heroCar from '../../images/hero-carro.jpg';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 sm:min-h-[720px] sm:pb-16 sm:pt-32 md:min-h-[760px] lg:min-h-[820px] lg:pb-20"
    >
      <img
        alt="Carro executivo da RC Motorista em atendimento noturno"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_58%]"
        fetchPriority="high"
        loading="eager"
        src={heroCar}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/90 via-ink/65 to-ink" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.22),transparent_45%)]" />

      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          Motorista Executivo para quem valoriza{' '}
          <span className="text-brand">pontualidade, conforto e discrição.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">{site.subheadline}</p>

        <div className="mt-7 flex justify-center sm:mt-9">
          <a
            href={site.whatsappHref}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-bold text-ink transition-colors duration-200 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp sm:px-7 sm:py-4"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-white/70 sm:mt-7 sm:gap-3 sm:text-sm">
          {site.trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
