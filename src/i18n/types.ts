import type { FleetId, IconKey, SectionId } from '../data/site';

export type Locale = 'pt' | 'en' | 'es';

type IconLabel = { icon: IconKey; label: string };
type IconCard = { icon: IconKey; title: string; description: string };

export type SiteContent = {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  brand: string;
  location: string;
  whatsapp: {
    default: string;
    fleet: (vehicleName: string) => string;
  };
  nav: Record<SectionId, string>;
  ui: {
    skipLink: string;
    homeLabel: string;
    mainNav: string;
    mobileNav: string;
    footerNav: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    contactShort: string;
    bookWhatsapp: string;
    talkSpecialist: string;
    seeFleet: string;
    floatLabel: string;
    floatAria: string;
    floatOnline: string;
    instagramCta: string;
    instagramAria: string;
    whatsappAria: string;
    phoneAria: (phone: string) => string;
    aboutImageAlt: string;
    language: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    status: string;
    features: IconLabel[];
  };
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraphs: string[];
    linkLabel: string;
  };
  servicesSection: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  services: IconCard[];
  fleetSection: {
    eyebrow: string;
    title: string;
    description: string;
    linkLabel: string;
  };
  fleet: Record<FleetId, { name: string; passengers: string; luggage: string; description: string }>;
  carousel: {
    roleDescription: string;
    regionLabel: string;
    prev: string;
    next: string;
    slideLabel: (position: number, total: number, name: string) => string;
    imageAlt: (name: string) => string;
    passengers: string;
    luggage: string;
    show: (name: string) => string;
    linkAria: (linkLabel: string, name: string) => string;
    live: (position: number, total: number, name: string) => string;
  };
  differentialsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  differentials: IconCard[];
  faqSection: {
    title: string;
    description: string;
  };
  faq: { question: string; answer: string }[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    description: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    schedule: string;
    rights: string;
    developedBy: string;
  };
};
