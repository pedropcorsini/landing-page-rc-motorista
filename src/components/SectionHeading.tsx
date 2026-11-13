import type { ReactNode } from 'react';

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  tone?: 'dark' | 'light';
  titleClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  titleClassName = 'section-title',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-[720px] text-center' : 'max-w-[640px]'}>
      {eyebrow ? (
        <p className={`eyebrow ${tone === 'light' ? 'text-brand-dark' : ''}`}>
          <span aria-hidden="true" className="eyebrow-dot" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={`${eyebrow ? (centered ? 'mt-5 sm:mt-7' : 'mt-4') : ''} ${titleClassName}`}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[0.95rem] leading-relaxed sm:mt-7 sm:text-base ${centered ? 'mx-auto max-w-[620px]' : ''} ${
            tone === 'light' ? 'text-slate-600' : 'text-mist'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
