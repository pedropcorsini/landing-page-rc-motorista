import { WhatsAppIcon } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageProvider';

export function WhatsAppFloat() {
  const { t, whatsappHref } = useLanguage();

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={t.ui.floatAria}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-paper shadow-lift transition-transform duration-300 ease-expo hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-rule bg-paper-2 px-4 py-2 text-[0.875rem] font-semibold text-ink opacity-0 shadow-lift transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        {t.ui.floatLabel}
      </span>
      <span aria-hidden="true" className="absolute inset-0 animate-whatsapp-pulse rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
