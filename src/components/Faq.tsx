import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../i18n/LanguageProvider';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const { t, whatsappHref } = useLanguage();
  const { faqSection } = t;

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="bg-surface py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="duvidas-title"
            align="left"
            eyebrow={t.nav.duvidas}
            title={faqSection.title}
            description={faqSection.description}
          />
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta mt-8">
            <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
            {t.ui.talkSpecialist}
          </a>
        </div>

        <div className="border-b border-white/[0.1]">
          {t.faq.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={item.question}
                className="border-t border-white/[0.1]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left font-heading text-[0.95rem] font-bold transition-colors focus-visible:outline-offset-2 sm:text-[1.02rem] ${
                      open ? 'text-white' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full border transition-all duration-300 ease-expo ${
                        open ? 'rotate-45 border-brand bg-brand text-ink' : 'border-white/15 text-brand'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                  inert={!open}
                  className="grid transition-[grid-template-rows] duration-[400ms] ease-expo"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-12 text-[0.95rem] leading-[1.75] text-mist">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
