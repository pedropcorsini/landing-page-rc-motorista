import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { site } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';

export function About() {
  const { t } = useLanguage();
  const { about } = t;

  const facts = [
    { key: 'location', icon: <MapPin aria-hidden="true" className="h-5 w-5" />, label: t.location },
    { key: 'schedule', icon: <Clock3 aria-hidden="true" className="h-5 w-5" />, label: t.footer.schedule },
    {
      key: 'phone',
      icon: <Phone aria-hidden="true" className="h-5 w-5" />,
      label: site.phoneDisplay,
      href: site.phoneHref,
    },
    {
      key: 'instagram',
      icon: <InstagramIcon className="h-5 w-5" />,
      label: site.instagramHandle,
      href: site.instagramHref,
      aria: t.ui.instagramAria,
      external: true,
    },
  ];

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-rule bg-paper-2 py-[var(--section-gap-s)]">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 id="sobre-title" className="section-title lg:col-span-5">
            {about.titleLine1} <span className="block">{about.titleLine2}</span>
          </h2>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[60ch] text-[1.05rem] leading-[1.75] text-ink-2">
                {paragraph}
              </p>
            ))}
            <a
              href="#servicos"
              className="group inline-flex min-h-[44px] items-center gap-2 font-semibold text-accent-2 underline decoration-rule-strong underline-offset-[6px] transition-colors hover:decoration-accent-2"
            >
              {about.linkLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <ul className="mt-16 grid border-y border-rule sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => {
            const content = (
              <>
                <span className="text-accent">{fact.icon}</span>
                <span className="font-display text-[1.3rem] font-semibold text-ink">{fact.label}</span>
              </>
            );
            return (
              <li
                key={fact.key}
                className={`border-rule ${index > 0 ? 'border-t sm:border-t-0' : ''} ${index % 2 === 1 ? 'sm:border-l' : ''} ${
                  index === 2 ? 'sm:border-t lg:border-l lg:border-t-0' : ''
                } ${index === 3 ? 'sm:border-t lg:border-t-0' : ''}`}
              >
                {fact.href ? (
                  <a
                    href={fact.href}
                    aria-label={fact.aria}
                    target={fact.external ? '_blank' : undefined}
                    rel={fact.external ? 'noreferrer' : undefined}
                    className="flex h-full flex-col gap-3 px-1 py-7 transition-colors hover:bg-paper-3 sm:px-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 px-1 py-7 sm:px-6">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
