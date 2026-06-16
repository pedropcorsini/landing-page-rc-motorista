import { BriefcaseBusiness, CalendarDays, Plane, Repeat, Route } from 'lucide-react';
import { site } from '../data/site';

const icons = [Plane, BriefcaseBusiness, CalendarDays, Route, Repeat];

export function Services() {
  return (
    <section id="servicos" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Serviços</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Serviços personalizados para cada compromisso
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Do transfer ao atendimento recorrente, cada trajeto é planejado para oferecer conforto, segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {site.services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:border-brand/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
