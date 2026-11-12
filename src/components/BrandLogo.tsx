import rcLogo from '../../docs/rc-logo-transparente.png';

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <img aria-hidden="true" alt="" className="h-9 w-9 flex-none object-contain sm:h-11 sm:w-11" src={rcLogo} />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-heading text-[0.74rem] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[0.95rem] sm:tracking-[0.2em]">RC Motorista</span>
        <span className="mt-1.5 hidden whitespace-nowrap font-heading text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-white/45 sm:block">
          Mobilidade executiva
        </span>
      </span>
    </span>
  );
}
