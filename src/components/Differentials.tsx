import { SectionHeading } from './SectionHeading';
import { icons } from './icons';
import { useLanguage } from '../i18n/LanguageProvider';

export function Differentials() {
  const { t } = useLanguage();
  const { differentialsSection } = t;

  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-ink py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="diferenciais-title"
            align="left"
            eyebrow={differentialsSection.eyebrow}
            title={differentialsSection.title}
            description={differentialsSection.description}
          />
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2">
          {t.differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="border-t border-white/[0.1] py-8">
                <Icon aria-hidden="true" className="h-6 w-6 text-brand" />
                <h3 className="mt-5 font-heading text-[1.05rem] font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-mist">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
