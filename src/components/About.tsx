import { ArrowRight, Clock3, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import aboutImage from '../../images/atendimento-executivo.jpg';

export function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-[#F5F1EC] py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="relative lg:order-first">
          <img
            src={aboutImage}
            alt={t.ui.aboutImageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[10px] object-cover shadow-[0_30px_60px_rgba(40,25,10,0.22)] lg:aspect-[5/4]"
          />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-col gap-1.5 rounded-[10px] bg-ink/90 px-4 py-3 text-[0.78rem] sm:gap-2 sm:px-5 sm:py-4 sm:text-[0.84rem] text-white backdrop-blur-[8px]">
            <span className="flex items-center gap-2.5">
              <MapPin aria-hidden="true" className="h-4 w-4 flex-none text-brand" />
              {t.location}
            </span>
            <span className="flex items-center gap-2.5 text-white/75">
              <Clock3 aria-hidden="true" className="h-4 w-4 flex-none text-brand" />
              {t.footer.schedule}
            </span>
          </div>
        </div>

        <div>
          <p className="kicker text-brand-dark">{about.eyebrow}</p>
          <h2
            id="sobre-title"
            className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.12] tracking-[-0.015em] text-[#14110f] sm:mt-5 sm:text-[2.8rem] lg:text-[2.6rem] xl:text-[3.05rem]"
          >
            <span className="sm:whitespace-nowrap">{about.titleLine1}</span>{' '}
            <span className="block">{about.titleLine2}</span>
          </h2>
          <div className="mt-7 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-[0.98rem] leading-[1.8] text-[#4a4440]">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="#servicos"
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#14110f]/25 pb-2 font-heading text-sm font-bold text-[#14110f] transition-colors hover:border-brand-dark hover:text-brand-dark"
          >
            {about.linkLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
