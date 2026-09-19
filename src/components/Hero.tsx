import { WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';
import heroCar from '../../images/hero-carro.jpg';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[760px] lg:pb-24 lg:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(255,106,0,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-px w-1/3 bg-brand/50" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
        <div className="relative z-10 max-w-2xl lg:col-start-1 lg:row-start-1">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand sm:mb-6 sm:text-[11px] sm:tracking-[0.25em]">RC Motorista · São Paulo e região</p>
          <h1 className="font-heading text-[2.25rem] leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.8rem]">
            Motorista executivo com{' '}
            <span className="text-brand">pontualidade, conforto e discrição.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:mt-8 sm:text-lg sm:leading-8">{site.subheadline}</p>
        </div>

        <div className="relative mx-auto w-full max-w-[760px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0">
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-brand/70 sm:-right-6 sm:-top-6 sm:h-40 sm:w-40" />
          <div className="relative aspect-[1.18] overflow-hidden border border-white/20 bg-surface sm:aspect-[1.12] lg:aspect-[0.96]">
            <img
              alt="Carro executivo da RC Motorista em atendimento noturno"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
              loading="eager"
              src={heroCar}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-brand/10" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/15 bg-ink/65 p-4 backdrop-blur-sm sm:p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">RC Motorista</p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Atendimento sob agendamento</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="mt-1 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <a
            href={site.whatsappHref}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-bold text-ink transition-colors duration-200 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp sm:px-7"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            Conheça a experiência
          </a>
          </div>

        </div>
      </div>

    </section>
  );
}
