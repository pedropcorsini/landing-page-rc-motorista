import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import aeroportos from '../../images/servicos/aeroportos.jpg';
import corporativo from '../../images/servicos/corporativo.jpg';
import eventos from '../../images/servicos/eventos.jpg';
import viagens from '../../images/servicos/viagens.jpg';
import recorrente from '../../images/servicos/recorrente.jpg';
import bordo from '../../images/servicos/bordo.jpg';

// Uma foto real da empresa para cada serviço, na mesma ordem de t.services.
const photos = [
  { src: aeroportos, position: '50% 60%' },
  { src: corporativo, position: '50% 60%' },
  { src: eventos, position: '50% 60%' },
  { src: viagens, position: '50% 60%' },
  { src: recorrente, position: '72% 50%' },
  { src: bordo, position: '50% 45%' },
];

export function Services() {
  const { t } = useLanguage();
  const { servicesSection } = t;
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // A foto fixa acompanha o serviço que cruza o meio da tela.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-paper py-[calc(var(--section-gap)/2)]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="servicos-title" className="section-title lg:col-span-6">
            {servicesSection.titleLine1} <span className="block">{servicesSection.titleLine2}</span>
          </h2>
          <p className="lead max-w-[30rem] lg:col-span-5 lg:col-start-8 lg:pb-2">{servicesSection.description}</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative hidden lg:col-span-6 lg:block">
            <div className="sticky top-[112px] aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-paper-2">
              {photos.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={index === active ? t.services[index].title : ''}
                  aria-hidden={index === active ? undefined : true}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
                    index === active ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ objectPosition: photo.position }}
                />
              ))}
            </div>
          </div>

          <ol className="lg:col-span-5 lg:col-start-8">
            {t.services.map((service, index) => (
              <li
                key={service.title}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                className="border-t border-rule py-8 last:border-b lg:flex lg:min-h-[26vh] lg:flex-col lg:justify-center lg:py-10"
              >
                <img
                  src={photos[index].src}
                  alt={service.title}
                  loading="lazy"
                  className="mb-6 aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover lg:hidden"
                  style={{ objectPosition: photos[index].position }}
                />
                <div className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.55em] h-2 w-2 flex-none rounded-full transition-colors duration-300 ${
                      index === active ? 'bg-accent' : 'bg-rule-strong'
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-display text-[length:var(--text-title)] font-semibold leading-snug transition-colors duration-300 ${
                        index === active ? 'text-ink' : 'text-ink-2'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[38ch] text-[1rem] leading-relaxed text-muted">{service.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
