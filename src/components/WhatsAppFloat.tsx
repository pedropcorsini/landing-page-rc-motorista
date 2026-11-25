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
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 ease-expo hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 font-heading text-[0.78rem] font-bold text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        {t.ui.floatLabel}
      </span>
      <span aria-hidden="true" className="absolute inset-0 animate-whatsapp-pulse rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
