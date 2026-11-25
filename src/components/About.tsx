import { ArrowRight } from 'lucide-react';
import { site } from '../data/site';
import aboutImage from '../../images/atendimento-executivo.jpg';

export function About() {
  const { about } = site;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-white py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-brand-dark">
            <span aria-hidden="true" className="eyebrow-dot" />
            {about.eyebrow}
          </p>
          <h2
            id="sobre-title"
            className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.15] tracking-[-0.015em] text-slate-900 sm:text-[2.8rem] lg:text-[2.4rem] xl:text-[3rem]"
          >
            <span className="sm:whitespace-nowrap">{about.titleLine1}</span>{' '}
            <span className="block">{about.titleLine2}</span>
          </h2>
          <div className="mt-7 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-left lg:hyphens-auto text-[0.95rem] leading-[1.85] text-slate-700 lg:text-justify">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="#servicos"
            className="group mt-8 inline-flex items-center gap-2 border-b border-slate-300 pb-2.5 font-heading text-sm font-bold text-slate-900 transition-colors hover:border-brand-dark hover:text-brand-dark"
          >
            {about.linkLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative">
          <img
            src={aboutImage}
            alt="Atendimento executivo da RC Motorista"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_rgba(15,23,42,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
