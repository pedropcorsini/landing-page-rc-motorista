import sedanImage from '../../images/frota/sedan.jpg';
import suvImage from '../../images/frota/suv.jpg';
import minivanImage from '../../images/frota/minivan.jpg';
import vanImage from '../../images/frota/van.jpg';

// Dados que não dependem de idioma. Os textos ficam em src/i18n/content.

const whatsappNumber = '5511952946402';

export function buildWhatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type IconKey =
  | 'plane'
  | 'briefcase'
  | 'calendar'
  | 'route'
  | 'repeat'
  | 'sparkles'
  | 'clock'
  | 'user'
  | 'eye-off'
  | 'message'
  | 'shield'
  | 'map-pin'
  | 'list';

export const sectionIds = ['top', 'sobre', 'servicos', 'frota', 'diferenciais', 'como-solicitar', 'duvidas'] as const;
export type SectionId = (typeof sectionIds)[number];

export type FleetId = 'sedan' | 'suv' | 'minivan' | 'van';

export const fleet: { id: FleetId; image: string }[] = [
  { id: 'sedan', image: sedanImage },
  { id: 'suv', image: suvImage },
  { id: 'minivan', image: minivanImage },
  { id: 'van', image: vanImage },
];

export const site = {
  phoneDisplay: '(11) 95294-6402',
  phoneHref: 'tel:+5511952946402',
  instagramHandle: '@rcmotorista',
  instagramHref: 'https://www.instagram.com/rcmotorista/',
};
