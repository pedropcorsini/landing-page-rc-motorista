import { site } from '../data/site';
import rcLogo from '../../docs/rc-logo-transparente.png';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12">
      <div className="mx-auto max-w-7xl text-sm text-white/60 sm:px-2">
        <div className="flex max-w-xl items-start gap-4">
          <img aria-hidden="true" alt="" className="h-12 w-12 flex-none object-contain" src={rcLogo} />
          <div>
            <p className="font-heading text-xl text-white">{site.brand}</p>
            <p>{site.driver} | Atendimento mediante disponibilidade e agendamento.</p>
            <p className="mt-3 text-xs leading-5 text-white/40">
              2026 {site.brand}. Todos os direitos reservados. Desenvolvido por{' '}
              <a
                href="https://github.com/pedropcorsini"
                className="rounded-sm font-semibold text-white/65 underline decoration-brand/50 underline-offset-4 transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                target="_blank"
                rel="noreferrer"
              >
                Pedro Passos Corsini
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
