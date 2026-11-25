import { WhatsAppIcon } from './BrandIcons';
import { SectionHeading } from './SectionHeading';
import { icons } from './icons';
import { site } from '../data/site';

export function HowItWorks() {
  const { stepsSection } = site;

  return (
    <section
      id="como-solicitar"
      aria-labelledby="como-solicitar-title"
      className="relative bg-alt bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.07),transparent_60%)] py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          id="como-solicitar-title"
          eyebrow={stepsSection.eyebrow}
          titleClassName="font-display text-[2rem] font-semibold leading-[1.2] tracking-[-0.015em] text-white sm:text-[2.6rem] lg:text-[2.95rem]"
          title={
            <>
              {stepsSection.titleLine1}{' '}
              <span className="block italic text-brand-light">{stepsSection.titleAccent}</span>
            </>
          }
          description={stepsSection.description}
        />

        <ol className="mx-auto mt-14 grid max-w-[1000px] gap-5 md:grid-cols-3">
          {site.steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand/[0.16] bg-[linear-gradient(180deg,#131622_0%,#0a0c12_100%)] px-[1.6rem] pb-8 pt-[2.2rem] shadow-step transition-all duration-300 ease-expo hover:-translate-y-2 hover:border-brand/55 hover:bg-[linear-gradient(180deg,#181c2d_0%,#0e1017_100%)] hover:shadow-step-hover"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[10%] right-[10%] top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(255,106,0,0.4),transparent)] transition-all duration-300 group-hover:h-[2.5px] group-hover:bg-[linear-gradient(90deg,transparent,#ff6a00,transparent)]"
                />
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-light transition-all duration-300 ease-expo group-hover:scale-[1.06] group-hover:border-brand group-hover:bg-brand group-hover:text-ink group-hover:shadow-[0_0_18px_rgba(255,106,0,0.5)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-heading text-[0.7rem] font-bold text-white/60 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:font-extrabold group-hover:text-ink">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-[1.05rem] font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-mist">{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 flex justify-center">
          <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn-cta">
            <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
