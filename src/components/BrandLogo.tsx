type BrandLogoProps = {
  className?: string;
};

// Teto do Arrizo 6 (perfil lateral) desenhado como arco sobre o monograma RC.
const ROOF_PATH =
  'M4.5 23 C6.75 22.7 14.08 22 18 21.2 C21.92 20.4 22.67 20.07 28 18.2 C33.33 16.33 42.17 12.5 50 10 C57.83 7.5 66.67 4.78 75 3.2 C83.33 1.62 93.33 1.03 100 0.5 C106.67 -0.03 109.67 -0.08 115 0 C120.33 0.08 126.5 0.37 132 1 C137.5 1.63 142.83 2.27 148 3.8 C153.17 5.33 158 7.73 163 10.2 C168 12.67 173.17 16.3 178 18.6 C182.83 20.9 186.67 22.73 192 24 C197.33 25.27 203.33 25.37 210 26.2 C216.67 27.03 225.67 27.87 232 29 C238.33 30.13 245.33 32.33 248 33';

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={`flex items-center ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 124 100" className="h-[34px] w-auto flex-none sm:h-[45px]">
        <path
          d={ROOF_PATH}
          transform="translate(2.66 16) scale(0.47)"
          fill="none"
          className="stroke-brand"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="62"
          y="94"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight={700}
          fontSize={72}
          letterSpacing={1}
        >
          <tspan fill="#F5F5F5">R</tspan>
          <tspan className="fill-brand">C</tspan>
        </text>
      </svg>
      <span aria-hidden="true" className="mx-2.5 h-[23px] w-px flex-none bg-white/20 sm:mx-3.5 sm:h-[31px]" />
      <span className="flex flex-col whitespace-nowrap font-heading uppercase leading-none">
        <span className="mb-[3px] pl-[0.06em] text-[6px] font-semibold tracking-[0.62em] text-white/70 sm:mb-1 sm:text-[8px]">
          Transporte
        </span>
        <span className="text-[13.8px] font-extrabold tracking-[0.1em] text-[#F5F5F5] sm:text-[18.4px]">Executivo</span>
      </span>
    </span>
  );
}
