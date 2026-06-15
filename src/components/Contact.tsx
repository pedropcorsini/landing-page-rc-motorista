import { ArrowRight, Camera, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site } from '../data/site';

export function Contact() {
  return (
    <section id="contato" className="px-4 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Contato</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Precisa de um motorista de confiança?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Fale diretamente com Rafael Corsini para consultar disponibilidade, combinar trajeto e agendar seu atendimento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsappHref}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-bold text-ink transition-colors duration-200 hover:bg-[#42e37c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp"
              >
                Agendar pelo WhatsApp
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href={site.instagramHref}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <Camera aria-hidden="true" className="h-5 w-5" />
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="space-y-4">
              <a
                href={site.whatsappHref}
                className="flex cursor-pointer items-center gap-4 rounded-3xl border border-white/10 bg-ink/50 p-5 transition-colors duration-200 hover:border-whatsapp/40 hover:bg-whatsapp/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp"
                aria-label="WhatsApp"
              >
                <MessageCircle aria-hidden="true" className="h-6 w-6 text-whatsapp" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-slate-400">Resposta direta para agendamento</p>
                </div>
              </a>
              <a
                href={site.instagramHref}
                className="flex cursor-pointer items-center gap-4 rounded-3xl border border-white/10 bg-ink/50 p-5 transition-colors duration-200 hover:border-brand/40 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                aria-label="Instagram"
              >
                <Camera aria-hidden="true" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-sm text-slate-400">{site.instagramHandle}</p>
                </div>
              </a>
              <a
                href={site.phoneHref}
                className="flex cursor-pointer items-center gap-4 rounded-3xl border border-white/10 bg-ink/50 p-5 transition-colors duration-200 hover:border-brand/40 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                aria-label="Telefone"
              >
                <Phone aria-hidden="true" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <p className="text-sm text-slate-400">{site.phoneDisplay}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-ink/50 p-5">
                <MapPin aria-hidden="true" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Região</p>
                  <p className="text-sm text-slate-400">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
