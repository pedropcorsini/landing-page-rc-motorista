import { BriefcaseBusiness, CalendarDays, Plane, Repeat, Route } from 'lucide-react';
import { site } from '../data/site';

const icons = [Plane, BriefcaseBusiness, CalendarDays, Route, Repeat];

export function Services() {
  return (
    <section id="servicos" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Serviços</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Serviços personalizados para cada compromisso
          </h2>
          <p className="mt-3 text-base leading-7 text-white/60 sm:mt-4 sm:text-lg sm:leading-8">
            Do transfer ao atendimento recorrente, cada trajeto é planejado para oferecer conforto, segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 lg:grid-cols-5">
          {site.services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-brand/40 hover:bg-white/[0.06] sm:p-5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-brand/10 text-brand sm:mb-5 sm:h-11 sm:w-11">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
