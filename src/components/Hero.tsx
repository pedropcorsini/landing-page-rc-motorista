import { CalendarCheck, MapPin, Route } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.30),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,106,0,0.12),transparent_26%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            {site.brand} | {site.driver}
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Motorista Executivo para quem valoriza{' '}
            <span className="text-brand">pontualidade, conforto e discrição.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{site.subheadline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-ink transition-colors duration-200 hover:bg-[#ff7a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href={site.instagramHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <InstagramIcon className="h-5 w-5" />
              Ver Instagram
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            {site.trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-glow backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Atendimento executivo</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-white">Viagem agendada</h2>
              </div>
              <CalendarCheck aria-hidden="true" className="h-8 w-8 text-brand" />
            </div>

            <div className="space-y-5 py-6">
              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand" />
                <div>
                  <p className="font-semibold text-white">Região de atendimento</p>
                  <p className="text-sm text-white/60">{site.location}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Route aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-brand" />
                <div>
                  <p className="font-semibold text-white">Trajeto planejado</p>
                  <p className="text-sm text-white/60">Origem, destino e horário alinhados antes da partida.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <WhatsAppIcon className="mt-1 h-5 w-5 flex-none text-brand" />
                <div>
                  <p className="font-semibold text-white">Contato direto</p>
                  <p className="text-sm text-white/60">Agendamento e confirmação pelo WhatsApp.</p>
                </div>
              </div>
            </div>

            <a
              href={site.whatsappHref}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-whatsapp/30 bg-whatsapp/10 px-5 py-4 font-bold text-whatsapp transition-colors duration-200 hover:bg-whatsapp/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
