import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageProvider';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const { t, whatsappHref } = useLanguage();
  const { faqSection } = t;

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="border-t border-rule bg-paper-2 py-[var(--section-gap-s)]">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="duvidas-title" className="section-title">
            {faqSection.title}
          </h2>
          <p className="lead mt-5 max-w-[28rem]">{faqSection.description}</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-cta mt-8">
            <WhatsAppIcon className="h-5 w-5" />
            {t.ui.talkSpecialist}
          </a>
        </div>

        <div className="border-b border-rule lg:col-span-7 lg:col-start-6">
          {t.faq.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={item.question}
                className="border-t border-rule"
              >
                <h3 className="max-w-none">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className={`flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-6 py-3 text-left font-body text-[1.05rem] font-semibold [font-stretch:100%] transition-colors focus-visible:outline-offset-2 ${
                      open ? 'text-ink' : 'text-ink-2 hover:text-ink'
                    }`}
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className={`grid h-7 w-7 flex-none place-items-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-expo ${
                        open ? 'rotate-45 border-accent bg-accent text-accent-ink' : 'border-rule-strong text-accent'
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
                    <p className="max-w-[62ch] pb-7 pr-12 text-[1rem] leading-[1.75] text-muted">
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
