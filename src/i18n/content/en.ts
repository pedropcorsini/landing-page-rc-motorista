import type { SiteContent } from '../types';

const brand = 'Transporte Executivo RC';

export const en: SiteContent = {
  meta: {
    htmlLang: 'en',
    title: `${brand} | Executive transportation in São Paulo`,
    description:
      'Executive transportation in São Paulo and the surrounding region: airport transfers, corporate appointments, events and scheduled trips. Book on WhatsApp with our specialists.',
  },
  brand,
  location: 'São Paulo and region',
  whatsapp: {
    default: `Hello, I would like to book a ride with ${brand}.`,
    fleet: (vehicleName) => `Hello, I would like to check the availability of the ${vehicleName} category with ${brand}.`,
  },
  nav: {
    top: 'Home',
    sobre: 'About',
    servicos: 'Services',
    frota: 'Fleet',
    diferenciais: 'Why us',
    'como-solicitar': 'How to book',
    duvidas: 'FAQ',
  },
  ui: {
    skipLink: 'Skip to content',
    homeLabel: `${brand}, back to top`,
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer navigation',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    contactShort: 'Contact us',
    bookWhatsapp: 'Book on WhatsApp',
    talkSpecialist: 'Talk to a specialist',
    seeFleet: 'See the fleet',
    pauseMotion: 'Pause the strip',
    playMotion: 'Resume the strip',
    floatLabel: 'Talk to one of our agents',
    floatAria: 'Talk to one of our agents on WhatsApp',
    instagramCta: 'See Instagram',
    instagramAria: `${brand} on Instagram`,
    whatsappAria: `${brand} on WhatsApp`,
    phoneAria: (phone) => `Phone ${phone}`,
    aboutImageAlt: `Executive service by ${brand}`,
    language: 'Language',
  },
  hero: {
    titleLine1: 'Executive Transportation',
    titleLine2: 'in São Paulo and region',
    subtitle: 'Comfort, safety and punctuality for airport transfers, corporate schedules, events and trips.',
    status: 'Service by appointment',
    features: [
      { icon: 'plane', label: 'Airport transfers' },
      { icon: 'briefcase', label: 'Corporate appointments' },
      { icon: 'calendar', label: 'Events and occasions' },
      { icon: 'route', label: 'Private trips' },
      { icon: 'clock', label: 'Service by appointment' },
      { icon: 'user', label: 'Specialized service' },
    ],
  },
  about: {
    eyebrow: 'Our mission & purpose',
    titleLine1: 'Professional, punctual',
    titleLine2: 'and discreet service',
    paragraphs: [
      `${brand} provides executive mobility and private transportation in São Paulo and the surrounding region. Every trip is planned with times agreed in advance, responsible driving and attention to the route, so that getting there is the easiest part of your day.`,
      'Our team of specialists handles every request, with confirmations and adjustments on WhatsApp. A discreet service for companies, executives, families and private routines.',
    ],
    linkLabel: 'Explore our services',
  },
  servicesSection: {
    titleLine1: 'Tailored solutions',
    titleLine2: 'for every commitment',
    description:
      'From airport transfers to recurring corporate schedules, every trip is planned to deliver comfort, safety, organization and predictability.',
  },
  services: [
    {
      icon: 'plane',
      title: 'Airport transfers',
      description: 'Arrivals and departures at the agreed time, meet & greet at arrivals, a defined route and support throughout the trip.',
    },
    {
      icon: 'briefcase',
      title: 'Corporate appointments',
      description: 'Rides to meetings, business schedules, executives and guests of your company.',
    },
    {
      icon: 'calendar',
      title: 'Events and special occasions',
      description: 'Punctual service for dinners, parties, ceremonies and private events, with both ways planned.',
    },
    {
      icon: 'route',
      title: 'Private and business trips',
      description: 'Well planned trips with comfort, clear communication and all the support you need along the way.',
    },
    {
      icon: 'repeat',
      title: 'Recurring service',
      description: 'Routines with agreed times for people and companies, with the same care on every trip.',
    },
    {
      icon: 'sparkles',
      title: 'Personalized onboard service',
      description: 'Passenger preferences agreed before boarding for a comfortable trip, just the way you like it.',
    },
  ],
  fleetSection: {
    eyebrow: 'Tailored fleet & booking',
    title: 'Mobility Options',
    description: 'Choose the right category for your trip. One of our specialists confirms availability and arranges the whole service.',
    linkLabel: 'Check availability',
  },
  fleet: {
    sedan: {
      name: 'Executive Sedan',
      passengers: '3',
      luggage: '3',
      description: 'Comfort and discretion for city schedules and airports.',
    },
    suv: {
      name: 'Executive SUV',
      passengers: '4',
      luggage: '4',
      description: 'More space and presence for important appointments.',
    },
    minivan: {
      name: 'Executive Minivan',
      passengers: '6',
      luggage: '6',
      description: 'Ideal for families and small groups.',
    },
    van: {
      name: 'Executive Van',
      passengers: '10 to 15',
      luggage: '12',
      description: 'Groups, delegations and events, everyone together.',
    },
  },
  carousel: {
    roleDescription: 'carousel',
    regionLabel: 'Vehicle categories',
    prev: 'Previous vehicle',
    next: 'Next vehicle',
    slideLabel: (position, total, name) => `${position} of ${total}: ${name}`,
    imageAlt: (name) => `Illustration: ${name}`,
    passengers: 'passengers',
    luggage: 'bags',
    show: (name) => `Show ${name}`,
    linkAria: (linkLabel, name) => `${linkLabel}: ${name}, on WhatsApp`,
    live: (position, total, name) => `Vehicle ${position} of ${total}: ${name}`,
  },
  differentialsSection: {
    eyebrow: `Why ${brand}`,
    title: 'Designed around your routine',
    description:
      'Our goal is simple: make booking easy, keep communication clear and deliver reliable service from the first contact to your destination.',
  },
  differentials: [
    {
      icon: 'clock',
      title: 'Punctuality',
      description: 'Times agreed in advance to reduce waiting and surprises.',
    },
    {
      icon: 'eye-off',
      title: 'Discretion',
      description: 'Discreet service for personal, family, professional and executive routines.',
    },
    {
      icon: 'user',
      title: 'Specialized service',
      description: 'Talk to one of our specialists and count on support from the first contact to your destination.',
    },
    {
      icon: 'sparkles',
      title: 'Comfort',
      description: 'A calm, organized ride designed for the best travel experience.',
    },
    {
      icon: 'message',
      title: 'Fast communication',
      description: 'Confirmations and adjustments on WhatsApp to make booking easier.',
    },
    {
      icon: 'shield',
      title: 'Safety',
      description: 'Responsible driving, attention to the route and care at every step of the trip.',
    },
  ],
  stepsSection: {
    eyebrow: 'Simple & transparent process',
    titleLine1: 'Book in three',
    titleAccent: 'simple steps',
    description: 'Request your service, share the details of your appointment and receive a confirmation with all the information you need.',
  },
  steps: [
    {
      icon: 'message',
      title: 'Message us on WhatsApp',
      description: 'Tell us where you need to go and the best time for the service.',
    },
    {
      icon: 'list',
      title: 'Share route, date and time',
      description: 'Send pickup, destination, date, time and any important notes.',
    },
    {
      icon: 'calendar',
      title: 'Get your confirmation',
      description: 'Our team confirms availability, agrees on the details and arranges the service.',
    },
  ],
  faqSection: {
    title: 'Frequently Asked Questions',
    description: 'Get your questions answered before booking.',
  },
  faq: [
    {
      question: 'How do I book a ride?',
      answer:
        'On WhatsApp. Send pickup, destination, date, time and any important notes. One of our specialists confirms availability, agrees on the details and arranges the service.',
    },
    {
      question: 'Which areas do you serve?',
      answer: 'São Paulo and the surrounding region. For trips outside this area, check availability on WhatsApp.',
    },
    {
      question: 'Do you offer airport transfers?',
      answer: 'Yes. Arrivals and departures at the agreed time, meet & greet, a defined route and support throughout the trip.',
    },
    {
      question: 'Do you work with companies?',
      answer: 'Yes. We serve corporate schedules, executives, clients and guests of companies, as well as individuals and families.',
    },
    {
      question: 'Do I need to book in advance?',
      answer:
        'Service is by appointment and subject to availability. The sooner you get in touch, the easier it is to secure your preferred time.',
    },
    {
      question: 'Do you serve events and special occasions?',
      answer: 'Yes. Dinners, parties, ceremonies and private events, with times agreed for both ways.',
    },
    {
      question: 'Can I book for groups?',
      answer:
        'Yes. Besides the sedan and the SUV, there are minivan and van options for families, groups and delegations. Check availability for the category you need.',
    },
    {
      question: 'Who do I talk to when booking?',
      answer:
        'One of our specialists, directly on WhatsApp. Our service team takes care of your booking from the first contact to your destination.',
    },
  ],
  cta: {
    eyebrow: 'Service by appointment',
    title: 'Ready for a ride that matches your schedule?',
    description: 'Talk to one of our specialists to check availability, plan your route and book your service.',
  },
  footer: {
    description:
      'Executive transportation in São Paulo and the surrounding region. Airport transfers, corporate appointments, events and scheduled trips with specialized service.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    schedule: 'Service by appointment',
    rights: 'All rights reserved.',
    developedBy: 'Developed by',
  },
};
