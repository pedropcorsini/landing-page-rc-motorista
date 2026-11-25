import { icons } from './icons';
import { useLanguage } from '../i18n/LanguageProvider';

export function Differentials() {
  const { t } = useLanguage();
  const { differentialsSection } = t;

  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-paper py-[calc(var(--section-gap-l)/2)]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="diferenciais-title" className="section-title lg:col-span-6">
            {differentialsSection.title}
          </h2>
          <p className="lead max-w-[32rem] lg:col-span-5 lg:col-start-8 lg:pb-2">{differentialsSection.description}</p>
        </div>

        <ul className="mt-14 border-b border-rule">
          {t.differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="grid gap-3 border-t border-rule py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8 lg:py-8">
                <h3 className="flex items-center gap-4 font-display text-[length:var(--text-title)] font-semibold text-ink sm:col-span-5">
                  <Icon aria-hidden="true" className="h-6 w-6 flex-none self-center text-accent" />
                  {item.title}
                </h3>
                <p className="max-w-[56ch] text-[1rem] leading-relaxed text-muted sm:col-span-7">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
