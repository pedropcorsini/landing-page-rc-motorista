import { SectionHeading } from './SectionHeading';
import { icons } from './icons';
import { site } from '../data/site';

export function Services() {
  const { servicesSection } = site;

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-surface py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="servicos-title"
          title={
            <>
              {servicesSection.titleLine1}{' '}
              <span className="block">{servicesSection.titleLine2}</span>
            </>
          }
          description={servicesSection.description}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {site.services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-card p-7 shadow-card transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-brand hover:shadow-card-hover sm:p-[2.2rem]"
              >
                <span className="mb-[1.4rem] grid h-[52px] w-[52px] place-items-center rounded-xl border border-brand/[0.32] bg-brand/[0.12] text-brand-light">
                  <Icon aria-hidden="true" className="h-[1.35rem] w-[1.35rem]" />
                </span>
                <h3 className="mb-3 font-heading text-[1.15rem] font-bold leading-snug text-white sm:text-[1.25rem]">
                  {service.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.65] text-mist">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
