import { WhatsAppIcon } from './BrandIcons';
import { site } from '../data/site';

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 ease-expo hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-whatsapp-pulse rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
