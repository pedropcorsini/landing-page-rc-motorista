import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../i18n/LanguageProvider';

export function Services() {
  const { t } = useLanguage();
  const { servicesSection } = t;

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-surface py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading
            id="servicos-title"
            align="left"
            eyebrow={t.nav.servicos}
            title={
              <>
                {servicesSection.titleLine1}{' '}
                <span className="block">{servicesSection.titleLine2}</span>
              </>
            }
          />
          <p className="max-w-[460px] text-[0.98rem] leading-relaxed text-mist lg:pb-2">{servicesSection.description}</p>
        </div>

        <ol className="mt-14 grid gap-x-14 md:grid-cols-2 lg:mt-16">
          {t.services.map((service, index) => (
            <li key={service.title} className="group relative flex gap-5 border-t border-white/[0.1] py-8 sm:gap-7">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 ease-expo group-hover:scale-x-100"
              />
              <span aria-hidden="true" className="w-9 flex-none font-display text-[1.35rem] font-semibold leading-none text-brand [font-variant-numeric:lining-nums]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-heading text-[1.1rem] font-bold leading-snug text-white sm:text-[1.18rem]">{service.title}</h3>
                <p className="mt-2.5 text-[0.92rem] leading-[1.7] text-mist">{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
