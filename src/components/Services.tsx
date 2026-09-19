import { BriefcaseBusiness, CalendarDays, Plane, Route } from 'lucide-react';
import { site } from '../data/site';

const icons = [Plane, BriefcaseBusiness, CalendarDays, Route];

export function Services() {
  return (
    <section id="servicos" className="border-y border-white/10 bg-[#0c0c0c] px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
        <div className="max-w-md">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">Serviços</p>
          <h2 className="mt-5 font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl">
            Serviços personalizados para cada compromisso
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Do transfer ao atendimento recorrente, cada trajeto é planejado para oferecer conforto, segurança, organização e previsibilidade.
          </p>
          <div className="mt-10 border-l border-brand/60 pl-5 text-sm leading-6 text-white/55">
            Uma experiência pensada para que o deslocamento seja a parte mais tranquila da sua agenda.
          </div>
        </div>

        <div className="divide-y divide-white/15 border-y border-white/15">
          {site.services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="group grid gap-4 py-7 transition-colors sm:grid-cols-[80px_1fr_28px] sm:items-start sm:gap-6 sm:py-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-heading text-3xl text-brand/70">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl leading-tight text-white sm:text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">{service.description}</p>
                </div>
                <Icon aria-hidden="true" className="h-5 w-5 text-brand transition-transform duration-300 group-hover:translate-x-1" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
