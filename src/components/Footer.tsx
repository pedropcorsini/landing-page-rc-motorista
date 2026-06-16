import { Camera, MessageCircle } from 'lucide-react';
import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-heading font-semibold text-white">{site.brand}</p>
          <p>{site.driver} | Atendimento mediante disponibilidade e agendamento.</p>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            2026 {site.brand}. Todos os direitos reservados. Desenvolvido por Pedro Passos Corsini.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={site.whatsappHref}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/10 text-slate-400 transition-colors duration-200 hover:border-whatsapp/40 hover:text-whatsapp focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp"
            aria-label="WhatsApp no rodape"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href={site.instagramHref}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/10 text-slate-400 transition-colors duration-200 hover:border-brand/40 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            aria-label="Instagram no rodape"
          >
            <Camera aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
