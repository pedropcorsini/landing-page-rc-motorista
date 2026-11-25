import type { ReactNode } from 'react';

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  titleClassName?: string;
  /** "classic" mantém o selo antigo (bolinha + caixa alta), usado só em Opções de Mobilidade. */
  variant?: 'default' | 'classic';
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  titleClassName = 'section-title',
  variant = 'default',
}: SectionHeadingProps) {
  const centered = align === 'center';
  const classic = variant === 'classic';

  return (
    <div className={centered ? 'mx-auto max-w-[720px] text-center' : 'max-w-[640px]'}>
      {eyebrow ? (
        classic ? (
          <p className="eyebrow">
            <span aria-hidden="true" className="eyebrow-dot" />
            {eyebrow}
          </p>
        ) : (
          <p className="kicker">{eyebrow}</p>
        )
      ) : null}
      <h2
        id={id}
        className={`${eyebrow ? (classic ? (centered ? 'mt-5 sm:mt-7' : 'mt-4') : 'mt-4 sm:mt-5') : ''} ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-[0.95rem] leading-relaxed text-mist sm:text-base ${classic ? 'mt-5 sm:mt-7' : 'mt-5'} ${
            centered ? 'mx-auto max-w-[620px]' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
