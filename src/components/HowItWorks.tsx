import { site } from '../data/site';

export function HowItWorks() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Agendamento</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Como funciona
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Solicite seu atendimento, informe os detalhes do compromisso e receba a confirmação com todas as informações necessárias.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {site.steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-ink/60 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-ink">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
