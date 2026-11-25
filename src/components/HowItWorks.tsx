import { WhatsAppIcon } from './BrandIcons';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../i18n/LanguageProvider';

export function HowItWorks() {
  const { t, whatsappHref } = useLanguage();
  const { stepsSection } = t;

  return (
    <section id="como-solicitar" aria-labelledby="como-solicitar-title" className="bg-alt py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="como-solicitar-title"
          eyebrow={stepsSection.eyebrow}
          title={
            <>
              {stepsSection.titleLine1} <span className="text-brand-light">{stepsSection.titleAccent}</span>
            </>
          }
          description={stepsSection.description}
        />

        <div className="relative mx-auto mt-16 max-w-[1040px]">
          <span
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-gradient-to-r from-brand/20 via-brand/70 to-brand/20 md:block"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {t.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[3rem_1fr] gap-x-5 md:flex md:flex-col md:items-center md:text-center [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:bottom-[-2.5rem] [&:not(:last-child)]:before:left-6 [&:not(:last-child)]:before:top-12 [&:not(:last-child)]:before:w-px [&:not(:last-child)]:before:bg-brand/30 md:before:!hidden"
            >
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-brand bg-alt font-display text-[1.2rem] font-semibold text-brand [font-variant-numeric:lining-nums]">
                {index + 1}
              </span>
              <div className="pt-2.5 md:pt-0">
                <h3 className="font-heading text-[1.05rem] font-bold text-white md:mt-6">{step.title}</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-mist md:mx-auto md:max-w-[280px]">{step.description}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta">
            <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
            {t.ui.talkSpecialist}
          </a>
        </div>
      </div>
    </section>
  );
}
