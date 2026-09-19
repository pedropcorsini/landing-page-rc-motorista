import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';

export function Contact() {
  return (
    <section id="contato" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] overflow-hidden border border-brand/40 bg-brand">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 sm:p-12 lg:p-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/65">Contato</p>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
              Profissional confiável e pontual
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Fale diretamente com Rafael C. para consultar disponibilidade, combinar trajeto e agendar seu atendimento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href={site.whatsappHref}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 font-bold text-white transition-colors duration-200 hover:bg-[#202020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:px-6"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar pelo WhatsApp
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href={site.instagramHref}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-ink/30 px-5 py-4 font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:px-6"
              >
                <InstagramIcon className="h-5 w-5" />
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-ink/20 bg-ink p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="space-y-4">
              <a
                href={site.whatsappHref}
                className="hidden cursor-pointer items-center gap-4 border-b border-white/15 py-4 transition-colors duration-200 hover:border-whatsapp/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp lg:flex sm:py-5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-white/60">Resposta direta para agendamento</p>
                </div>
              </a>
              <a
                href={site.instagramHref}
                className="hidden cursor-pointer items-center gap-4 border-b border-white/15 py-4 transition-colors duration-200 hover:border-brand/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:flex sm:py-5"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <p className="text-sm text-white/60">{site.instagramHandle}</p>
                </div>
              </a>
              <a
                href={site.phoneHref}
                className="hidden cursor-pointer items-center gap-4 border-b border-white/15 py-4 transition-colors duration-200 hover:border-brand/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:flex sm:py-5"
                aria-label="Telefone"
              >
                <Phone aria-hidden="true" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <p className="text-sm text-white/60">{site.phoneDisplay}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 border-b border-white/15 py-4 sm:py-5">
                <MapPin aria-hidden="true" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-white">Região</p>
                  <p className="text-sm text-white/60">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
