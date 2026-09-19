import { CheckCircle2, Clock3, EyeOff, MessageCircle, ShieldCheck, Sparkles, UserRoundCheck } from 'lucide-react';
import { site } from '../data/site';
import interiorVehicle from '../../images/interior-veiculo.png';

const icons = [Clock3, EyeOff, UserRoundCheck, Sparkles, MessageCircle, ShieldCheck];

export function Differentials() {
  return (
    <section id="diferenciais" className="border-y border-white/10 bg-[#0c0c0c] px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-24 lg:px-12">
        <div className="relative min-h-[420px] overflow-hidden border border-white/15 sm:min-h-[620px]">
          <img src={interiorVehicle} alt="Interior confortável do veículo da RC Motorista" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">O cuidado está nos detalhes</p>
            <p className="mt-2 max-w-xs font-heading text-3xl leading-none text-white">Sua agenda merece um deslocamento à altura.</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">Diferenciais</p>
          <h2 className="mt-5 max-w-xl font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl">
              Diferenciais pensados para sua rotina
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              O objetivo é simples: facilitar o agendamento, manter comunicação clara e entregar um atendimento confiável do primeiro contato até o destino.
            </p>
          <div className="mt-8 flex items-start gap-3 border-y border-brand/30 py-4 text-white/85 sm:mt-10 sm:py-5">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-6 w-6 flex-none text-brand" />
            <p className="font-semibold">Ideal para quem precisa de pontualidade, discrição, conforto, segurança e contato direto com o motorista.</p>
          </div>

        <div className="mt-8 grid border-t border-white/15 sm:grid-cols-2">
          {site.differentials.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="group border-b border-white/15 py-5 sm:px-4 sm:py-6 sm:nth-[odd]:border-r sm:first-of-type:pt-6">
                <div className="flex items-center gap-3">
                  <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
                  <h3 className="font-heading text-xl text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-5 text-white/55">{item.description}</p>
              </article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
