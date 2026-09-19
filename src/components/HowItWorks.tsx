import { site } from '../data/site';

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] border-y border-white/15 py-10 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">Agendamento</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl">
              Como funciona?
            </h2>
            <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Solicite seu atendimento, informe os detalhes do compromisso e receba a confirmação com todas as informações necessárias.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {site.steps.map((step, index) => (
              <article key={step.title} className="border-t border-white/15 py-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0">
                <span className="font-heading text-4xl text-brand">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 font-heading text-2xl leading-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
