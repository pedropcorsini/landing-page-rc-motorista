import { CheckCircle2, Clock3, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';
import { site } from '../data/site';

const icons = [Clock3, ShieldCheck, UserRoundCheck, Sparkles];

export function Differentials() {
  return (
    <section id="diferenciais" className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))] lg:items-stretch">
        <div className="rounded-[2rem] border border-white/10 bg-surface p-8 sm:col-span-2 sm:p-10 lg:col-span-1 lg:flex lg:h-full lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Diferenciais</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Diferenciais pensados para sua rotina
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              O foco é simples: facilitar o agendamento, manter comunicação clara e entregar um atendimento confiável do primeiro contato até o destino.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-brand/20 bg-brand/10 p-5 text-sky-100">
            <CheckCircle2 aria-hidden="true" className="mb-3 h-6 w-6 text-brand" />
            <p className="font-semibold">Ideal para quem precisa de previsibilidade, discrição e contato direto com o motorista.</p>
          </div>
        </div>

        {site.differentials.map((item, index) => {
          const Icon = icons[index];

          return (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:min-h-[340px]">
              <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
