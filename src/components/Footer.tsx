import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading font-semibold text-white">{site.brand}</p>
          <p>{site.driver} | Atendimento mediante disponibilidade e agendamento.</p>
        </div>
        <a
          href={site.whatsappHref}
          className="w-fit rounded-full text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          Falar com Rafael
        </a>
      </div>
    </footer>
  );
}
