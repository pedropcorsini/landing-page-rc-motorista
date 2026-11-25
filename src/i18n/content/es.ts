import type { SiteContent } from '../types';

const brand = 'Transporte Executivo RC';

export const es: SiteContent = {
  meta: {
    htmlLang: 'es',
    title: `${brand} | Transporte ejecutivo en São Paulo`,
    description:
      'Transporte ejecutivo en São Paulo y región: traslados al aeropuerto, compromisos corporativos, eventos y viajes programados. Reserve por WhatsApp con nuestros especialistas.',
  },
  brand,
  location: 'São Paulo y región',
  whatsapp: {
    default: `Hola, me gustaría reservar un traslado con ${brand}.`,
    fleet: (vehicleName) => `Hola, me gustaría consultar la disponibilidad de la categoría ${vehicleName} con ${brand}.`,
  },
  nav: {
    top: 'Inicio',
    sobre: 'Nosotros',
    servicos: 'Servicios',
    frota: 'Flota',
    diferenciais: 'Diferenciales',
    'como-solicitar': 'Cómo reservar',
    duvidas: 'Preguntas',
  },
  ui: {
    skipLink: 'Saltar al contenido',
    homeLabel: `${brand}, volver al inicio`,
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    footerNav: 'Navegación del pie de página',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    contactShort: 'Contáctenos',
    bookWhatsapp: 'Reservar por WhatsApp',
    talkSpecialist: 'Hablar con un especialista',
    seeFleet: 'Ver la flota',
    floatLabel: 'Hable con una de nuestras asesoras',
    floatAria: 'Hablar con una de nuestras asesoras por WhatsApp',
    instagramCta: 'Ver Instagram',
    instagramAria: `Instagram de ${brand}`,
    whatsappAria: `WhatsApp de ${brand}`,
    phoneAria: (phone) => `Teléfono ${phone}`,
    aboutImageAlt: `Atención ejecutiva de ${brand}`,
    language: 'Idioma',
  },
  hero: {
    titleLine1: 'Transporte Ejecutivo',
    titleLine2: 'en São Paulo y región',
    subtitle: 'Comodidad, seguridad y puntualidad en traslados al aeropuerto, agendas corporativas, eventos y viajes.',
    status: 'Atención con reserva previa',
    features: [
      { icon: 'plane', label: 'Traslados al aeropuerto' },
      { icon: 'briefcase', label: 'Compromisos corporativos' },
      { icon: 'calendar', label: 'Eventos y ocasiones' },
      { icon: 'route', label: 'Viajes particulares' },
    ],
  },
  about: {
    eyebrow: 'Nuestra misión & propósito',
    titleLine1: 'Atención profesional,',
    titleLine2: 'puntual y discreta',
    paragraphs: [
      `${brand} ofrece movilidad ejecutiva y transporte privado en São Paulo y región. Cada trayecto se planifica con horarios acordados de antemano, conducción responsable y atención a la ruta, para que el desplazamiento sea la parte más tranquila de su agenda.`,
      'Nuestro equipo de especialistas se encarga de cada solicitud, con confirmaciones y ajustes por WhatsApp. Una atención reservada para empresas, ejecutivos, familias y rutinas particulares.',
    ],
    linkLabel: 'Conozca los servicios',
  },
  servicesSection: {
    titleLine1: 'Soluciones a medida',
    titleLine2: 'para cada compromiso',
    description:
      'Del traslado al aeropuerto a la agenda corporativa recurrente, cada trayecto se planifica para ofrecer comodidad, seguridad, organización y previsibilidad.',
  },
  services: [
    {
      icon: 'plane',
      title: 'Traslados al aeropuerto',
      description: 'Llegadas y salidas en el horario acordado, recepción en el desembarque, ruta definida y acompañamiento durante todo el trayecto.',
    },
    {
      icon: 'briefcase',
      title: 'Compromisos corporativos',
      description: 'Desplazamientos a reuniones, agendas empresariales, ejecutivos e invitados de su empresa.',
    },
    {
      icon: 'calendar',
      title: 'Eventos y ocasiones especiales',
      description: 'Atención puntual para cenas, fiestas, ceremonias y eventos particulares, con ida y vuelta coordinadas.',
    },
    {
      icon: 'route',
      title: 'Viajes particulares y ejecutivos',
      description: 'Trayectos planificados con comodidad, comunicación clara y todo el apoyo necesario en su desplazamiento.',
    },
    {
      icon: 'repeat',
      title: 'Atención recurrente',
      description: 'Rutinas con horarios acordados para personas y empresas, con el mismo cuidado en cada trayecto.',
    },
    {
      icon: 'sparkles',
      title: 'Servicio a bordo personalizado',
      description: 'Preferencias del pasajero acordadas antes del embarque para un trayecto cómodo y a su manera.',
    },
  ],
  fleetSection: {
    eyebrow: 'Flota a medida & reservas',
    title: 'Opciones de Movilidad',
    description: 'Elija la categoría ideal para su trayecto. Uno de nuestros especialistas confirma la disponibilidad y organiza toda la atención.',
    linkLabel: 'Consultar disponibilidad',
  },
  fleet: {
    sedan: {
      name: 'Sedán Ejecutivo',
      passengers: '3',
      luggage: '3',
      description: 'Comodidad y discreción para agendas urbanas y aeropuertos.',
    },
    suv: {
      name: 'SUV Ejecutivo',
      passengers: '4',
      luggage: '4',
      description: 'Más espacio y presencia para compromisos importantes.',
    },
    minivan: {
      name: 'Minivan Ejecutiva',
      passengers: '6',
      luggage: '6',
      description: 'Ideal para familias y grupos pequeños.',
    },
    van: {
      name: 'Van Ejecutiva',
      passengers: '10 a 15',
      luggage: '12',
      description: 'Grupos, comitivas y eventos con todos juntos.',
    },
  },
  carousel: {
    roleDescription: 'carrusel',
    regionLabel: 'Categorías de vehículos',
    prev: 'Vehículo anterior',
    next: 'Siguiente vehículo',
    slideLabel: (position, total, name) => `${position} de ${total}: ${name}`,
    imageAlt: (name) => `Ilustración: ${name}`,
    passengers: 'pasajeros',
    luggage: 'maletas',
    show: (name) => `Mostrar ${name}`,
    linkAria: (linkLabel, name) => `${linkLabel}: ${name}, por WhatsApp`,
    live: (position, total, name) => `Vehículo ${position} de ${total}: ${name}`,
  },
  differentialsSection: {
    eyebrow: `Por qué ${brand}`,
    title: 'Diferenciales pensados para su rutina',
    description:
      'Nuestro objetivo es simple: facilitar la reserva, mantener una comunicación clara y ofrecer una atención confiable desde el primer contacto hasta el destino.',
  },
  differentials: [
    {
      icon: 'clock',
      title: 'Puntualidad',
      description: 'Horarios acordados de antemano para reducir esperas e imprevistos.',
    },
    {
      icon: 'eye-off',
      title: 'Discreción',
      description: 'Atención reservada para rutinas personales, familiares, profesionales y ejecutivas.',
    },
    {
      icon: 'user',
      title: 'Atención especializada',
      description: 'Hable con uno de nuestros especialistas y cuente con apoyo desde el primer contacto hasta el destino.',
    },
    {
      icon: 'sparkles',
      title: 'Comodidad',
      description: 'Una experiencia tranquila y organizada, pensada para los mejores desplazamientos.',
    },
    {
      icon: 'message',
      title: 'Comunicación rápida',
      description: 'Confirmaciones y ajustes por WhatsApp para facilitar la reserva.',
    },
    {
      icon: 'shield',
      title: 'Seguridad',
      description: 'Conducción responsable, atención a la ruta y cuidado en cada etapa del desplazamiento.',
    },
  ],
  stepsSection: {
    eyebrow: 'Proceso simple & transparente',
    titleLine1: 'Reserve en tres',
    titleAccent: 'pasos simples',
    description: 'Solicite su atención, informe los detalles del compromiso y reciba la confirmación con toda la información necesaria.',
  },
  steps: [
    {
      icon: 'message',
      title: 'Escríbanos por WhatsApp',
      description: 'Cuéntenos qué desplazamiento necesita y el mejor horario para la atención.',
    },
    {
      icon: 'list',
      title: 'Informe ruta, fecha y hora',
      description: 'Comparta origen, destino, fecha, hora y observaciones importantes.',
    },
    {
      icon: 'calendar',
      title: 'Reciba la confirmación',
      description: 'Nuestro equipo confirma la disponibilidad, acuerda los detalles y organiza la atención.',
    },
  ],
  faqSection: {
    title: 'Preguntas Frecuentes',
    description: 'Resuelva sus dudas antes de reservar.',
  },
  faq: [
    {
      question: '¿Cómo reservo un traslado?',
      answer:
        'Por WhatsApp. Envíe origen, destino, fecha, hora y observaciones importantes. Uno de nuestros especialistas confirma la disponibilidad, acuerda los detalles y organiza la atención.',
    },
    {
      question: '¿Qué regiones atienden?',
      answer: 'São Paulo y región. Para trayectos fuera de esa zona, consulte la disponibilidad por WhatsApp.',
    },
    {
      question: '¿Hacen traslados al aeropuerto?',
      answer: 'Sí. Llegadas y salidas en el horario acordado, recepción, ruta definida y acompañamiento durante todo el trayecto.',
    },
    {
      question: '¿Atienden a empresas?',
      answer: 'Sí. Atendemos agendas corporativas, ejecutivos, clientes e invitados de empresas, además de particulares y familias.',
    },
    {
      question: '¿Necesito reservar con anticipación?',
      answer:
        'La atención es con reserva previa y según disponibilidad. Cuanto antes se comunique, más fácil será asegurar el horario deseado.',
    },
    {
      question: '¿Atienden eventos y ocasiones especiales?',
      answer: 'Sí. Cenas, fiestas, ceremonias y eventos particulares, con horarios acordados para la ida y la vuelta.',
    },
    {
      question: '¿Puedo contratar para grupos?',
      answer:
        'Sí. Además del sedán y la SUV, hay opciones de minivan y van para familias, grupos y comitivas. Consulte la disponibilidad de la categoría deseada.',
    },
    {
      question: '¿Con quién hablo para reservar?',
      answer:
        'Con uno de nuestros especialistas, directamente por WhatsApp. Nuestro equipo de atención se encarga de su reserva desde el primer contacto hasta el destino.',
    },
  ],
  cta: {
    eyebrow: 'Atención con reserva previa',
    title: '¿Listo para un desplazamiento a la altura de su agenda?',
    description: 'Hable con uno de nuestros especialistas para consultar disponibilidad, coordinar el trayecto y reservar su atención.',
  },
  footer: {
    description:
      'Transporte ejecutivo en São Paulo y región. Traslados al aeropuerto, compromisos corporativos, eventos y viajes programados con atención especializada.',
    navTitle: 'Navegación',
    servicesTitle: 'Servicios',
    contactTitle: 'Contacto',
    schedule: 'Atención con reserva previa',
    rights: 'Todos los derechos reservados.',
    developedBy: 'Desarrollado por',
  },
};
