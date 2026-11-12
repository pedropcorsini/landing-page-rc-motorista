import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { site } from '../data/site';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const { faqSection } = site;

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="bg-surface py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading id="duvidas-title" title={faqSection.title} description={faqSection.description} />

        <div className="mx-auto mt-12 flex max-w-[820px] flex-col gap-4">
          {site.faq.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-xl border bg-faq transition-[border-color,box-shadow] duration-200 ${
                  open
                    ? 'border-brand shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,106,0,0.12)]'
                    : 'border-white/[0.08] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:border-white/20'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left font-heading text-[0.92rem] font-bold text-white sm:px-[1.6rem] sm:py-[1.4rem] sm:text-[0.98rem]"
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 flex-none place-items-center rounded-full border transition-all duration-300 ease-expo ${
                        open ? 'rotate-45 border-brand bg-brand text-ink' : 'border-white/10 bg-white/[0.06] text-white'
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
                    <p className="px-5 pb-5 text-[0.92rem] leading-relaxed text-mist sm:px-[1.6rem] sm:pb-[1.4rem]">
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
