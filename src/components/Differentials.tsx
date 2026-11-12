import { SectionHeading } from './SectionHeading';
import { icons } from './icons';
import { site } from '../data/site';

export function Differentials() {
  const { differentialsSection } = site;

  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-ink py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="diferenciais-title"
          align="left"
          eyebrow={differentialsSection.eyebrow}
          title={differentialsSection.title}
          description={differentialsSection.description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-card px-[1.35rem] py-7 shadow-card transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-brand hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-brand/[0.32] bg-brand/[0.12] text-brand-light">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-[1.05rem] font-bold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-mist">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
