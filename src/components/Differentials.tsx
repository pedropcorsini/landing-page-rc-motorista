import { CheckCircle2, Clock3, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';
import { site } from '../data/site';

const icons = [Clock3, ShieldCheck, UserRoundCheck, Sparkles];

export function Differentials() {
  return (
    <section id="diferenciais" className="px-4 py-20">
      <div className="relative isolate mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
        <div className="relative z-0 rounded-[2rem] border border-white/10 bg-surface p-8 shadow-glow sm:p-10 lg:h-full">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Diferenciais</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Diferenciais pensados para sua rotina
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/60">
              O foco é simples: facilitar o agendamento, manter comunicação clara e entregar um atendimento confiável do primeiro contato até o destino.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-brand/25 bg-brand/10 p-5 text-white/85">
            <CheckCircle2 aria-hidden="true" className="mb-3 h-6 w-6 text-brand" />
            <p className="font-semibold">Ideal para quem precisa de pontualidade, discrição, conforto, segurança e contato direto com o motorista.</p>
          </div>
        </div>

        <div className="relative z-10 grid gap-2.5 sm:grid-cols-2 lg:h-full lg:max-w-[520px] lg:grid-rows-2 lg:self-stretch">
          {site.differentials.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:aspect-square lg:aspect-auto lg:h-full">
                <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
                <h3 className="mt-3 font-heading text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
