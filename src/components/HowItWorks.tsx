import { WhatsAppIcon } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageProvider';

export function HowItWorks() {
  const { t, whatsappHref } = useLanguage();
  const { stepsSection } = t;

  return (
    <section id="como-solicitar" aria-labelledby="como-solicitar-title" className="border-t border-rule bg-paper-2 py-[var(--section-gap-s)]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="como-solicitar-title" className="section-title lg:col-span-6">
            {stepsSection.titleLine1} {stepsSection.titleAccent}
          </h2>
          <p className="lead max-w-[32rem] lg:col-span-5 lg:col-start-8 lg:pb-2">{stepsSection.description}</p>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.steps.map((step, index) => (
            <li key={step.title} className="border-t border-rule-strong pt-6">
              <span
                aria-hidden="true"
                className="block font-display text-[clamp(3.5rem,5vw,4.75rem)] font-semibold leading-none text-accent [font-variant-numeric:lining-nums]"
              >
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-[length:var(--text-title)] font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[1rem] leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta mt-14">
          <WhatsAppIcon className="h-5 w-5" />
          {t.ui.talkSpecialist}
        </a>
      </div>
    </section>
  );
}
