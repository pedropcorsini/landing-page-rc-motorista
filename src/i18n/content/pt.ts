import type { SiteContent } from '../types';

const brand = 'Transporte Executivo RC';

export const pt: SiteContent = {
  meta: {
    htmlLang: 'pt-BR',
    title: `${brand} | Transporte executivo em São Paulo`,
    description:
      'Transporte executivo em São Paulo e região: transfers para aeroportos, compromissos corporativos, eventos e viagens agendadas. Agende pelo WhatsApp com nossos especialistas.',
  },
  brand,
  location: 'São Paulo e região',
  whatsapp: {
    default: `Olá, gostaria de agendar uma corrida com a ${brand}.`,
    fleet: (vehicleName) => `Olá, gostaria de consultar a disponibilidade da categoria ${vehicleName} com a ${brand}.`,
  },
  nav: {
    top: 'Início',
    sobre: 'Sobre',
    servicos: 'Serviços',
    frota: 'Frota',
    diferenciais: 'Diferenciais',
    duvidas: 'Dúvidas',
  },
  ui: {
    skipLink: 'Pular para o conteúdo',
    homeLabel: `${brand}, voltar ao início`,
    mainNav: 'Navegação principal',
    mobileNav: 'Navegação mobile',
    footerNav: 'Navegação do rodapé',
    menu: 'Menu',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    contactShort: 'Fale conosco',
    bookWhatsapp: 'Agendar pelo WhatsApp',
    talkSpecialist: 'Falar com um especialista',
    seeFleet: 'Ver a frota',
    floatLabel: 'Fale com um de nossos especialistas',
    floatAria: 'Falar com um de nossos especialistas no WhatsApp',
    floatOnline: 'Atendente online agora',
    instagramCta: 'Ver Instagram',
    instagramAria: `Instagram da ${brand}`,
    whatsappAria: `WhatsApp da ${brand}`,
    phoneAria: (phone) => `Telefone ${phone}`,
    aboutImageAlt: `Atendimento executivo da ${brand}`,
    language: 'Idioma',
  },
  hero: {
    titleLine1: 'Transporte Executivo',
    titleLine2: 'em São Paulo e região',
    subtitle: 'Conforto, segurança e pontualidade em transfers para aeroportos, agendas corporativas, eventos e viagens.',
    status: 'Atendimento sob agendamento',
    features: [
      { icon: 'plane', label: 'Transfers para aeroportos' },
      { icon: 'briefcase', label: 'Compromissos corporativos' },
      { icon: 'calendar', label: 'Eventos e ocasiões' },
      { icon: 'route', label: 'Viagens particulares' },
      { icon: 'clock', label: 'Atendimento sob agendamento' },
      { icon: 'user', label: 'Atendimento especializado' },
    ],
  },
  about: {
    eyebrow: 'Nossa missão & propósito',
    titleLine1: 'Atendimento profissional,',
    titleLine2: 'pontual e discreto',
    paragraphs: [
      `A ${brand} oferece mobilidade executiva e transporte privativo em São Paulo e região. Cada trajeto é planejado com horários alinhados com antecedência, condução responsável e atenção ao percurso, para que o deslocamento seja a parte mais tranquila da sua agenda.`,
      'Nossa equipe de especialistas cuida de cada solicitação, com confirmações e ajustes pelo WhatsApp. Um atendimento reservado para empresas, executivos, famílias e rotinas particulares.',
    ],
    linkLabel: 'Conheça os serviços',
  },
  servicesSection: {
    titleLine1: 'Soluções sob medida',
    titleLine2: 'para cada compromisso',
    description:
      'Do transfer aeroportuário à agenda corporativa recorrente, cada trajeto é planejado para oferecer conforto, segurança, organização e previsibilidade.',
  },
  services: [
    {
      icon: 'plane',
      title: 'Transfers para aeroportos',
      description: 'Chegadas e partidas com horário combinado, receptivo no desembarque, rota definida e acompanhamento durante todo o trajeto.',
    },
    {
      icon: 'briefcase',
      title: 'Compromissos corporativos',
      description: 'Deslocamentos para reuniões, agendas empresariais, executivos e convidados da sua empresa.',
    },
    {
      icon: 'calendar',
      title: 'Eventos e ocasiões especiais',
      description: 'Atendimento pontual para jantares, festas, cerimônias e eventos particulares, com ida e volta alinhadas.',
    },
    {
      icon: 'route',
      title: 'Viagens particulares e executivas',
      description: 'Trajetos planejados com conforto, comunicação clara e todo o apoio necessário no seu deslocamento.',
    },
    {
      icon: 'repeat',
      title: 'Atendimento recorrente',
      description: 'Rotinas com horários combinados para pessoas e empresas, com o mesmo cuidado em cada trajeto.',
    },
    {
      icon: 'sparkles',
      title: 'Serviço de bordo personalizado',
      description: 'Preferências do passageiro alinhadas antes do embarque para um trajeto confortável e do seu jeito.',
    },
  ],
  fleetSection: {
    eyebrow: 'Frota sob medida & agendamento',
    title: 'Opções de Mobilidade',
    description: 'Escolha a categoria ideal para o seu trajeto. Um de nossos especialistas confirma a disponibilidade e organiza todo o atendimento.',
    linkLabel: 'Consultar disponibilidade',
  },
  fleet: {
    sedan: {
      name: 'Sedã Executivo',
      passengers: '3',
      luggage: '3',
      description: 'Conforto e discrição para agendas urbanas e aeroportos.',
    },
    suv: {
      name: 'SUV Executivo',
      passengers: '4',
      luggage: '4',
      description: 'Mais espaço e presença para compromissos importantes.',
    },
    minivan: {
      name: 'Minivan Executiva',
      passengers: '6',
      luggage: '6',
      description: 'Ideal para famílias e pequenos grupos.',
    },
    van: {
      name: 'Van Executiva',
      passengers: '10 a 15',
      luggage: '12',
      description: 'Grupos, comitivas e eventos com todos juntos.',
    },
  },
  carousel: {
    roleDescription: 'carrossel',
    regionLabel: 'Categorias de veículos',
    prev: 'Veículo anterior',
    next: 'Próximo veículo',
    slideLabel: (position, total, name) => `${position} de ${total}: ${name}`,
    imageAlt: (name) => `Ilustração: ${name}`,
    passengers: 'passageiros',
    luggage: 'malas',
    show: (name) => `Mostrar ${name}`,
    linkAria: (linkLabel, name) => `${linkLabel}: ${name}, pelo WhatsApp`,
    live: (position, total, name) => `Veículo ${position} de ${total}: ${name}`,
  },
  differentialsSection: {
    eyebrow: `Por que a ${brand}`,
    title: 'Diferenciais pensados para sua rotina',
    description:
      'Nosso objetivo é simples: facilitar o agendamento, manter comunicação clara e entregar um atendimento confiável do primeiro contato até o destino.',
  },
  differentials: [
    {
      icon: 'clock',
      title: 'Pontualidade',
      description: 'Horários alinhados com antecedência para reduzir espera e imprevistos.',
    },
    {
      icon: 'eye-off',
      title: 'Discrição',
      description: 'Atendimento reservado para rotinas pessoais, familiares, profissionais e executivas.',
    },
    {
      icon: 'user',
      title: 'Atendimento especializado',
      description: 'Fale com um de nossos especialistas e conte com apoio do primeiro contato até o destino.',
    },
    {
      icon: 'sparkles',
      title: 'Conforto',
      description: 'Experiência tranquila, organizada e adequada para a melhor experiência nos deslocamentos.',
    },
    {
      icon: 'message',
      title: 'Comunicação rápida',
      description: 'Confirmações e ajustes pelo WhatsApp para facilitar o agendamento.',
    },
    {
      icon: 'shield',
      title: 'Segurança',
      description: 'Condução responsável, atenção ao percurso e cuidado em cada etapa do deslocamento.',
    },
  ],
  faqSection: {
    title: 'Perguntas Frequentes',
    description: 'Tire suas dúvidas antes de agendar o seu atendimento.',
  },
  faq: [
    {
      question: 'Como faço para agendar uma corrida?',
      answer:
        'Pelo WhatsApp. Envie origem, destino, data, horário e observações importantes. Um de nossos especialistas confirma a disponibilidade, combina os detalhes e organiza o atendimento.',
    },
    {
      question: 'Quais regiões vocês atendem?',
      answer: 'São Paulo e região. Para trajetos fora dessa área, consulte a disponibilidade pelo WhatsApp.',
    },
    {
      question: 'Vocês fazem transfer para aeroportos?',
      answer:
        'Sim. Chegadas e partidas com horário combinado, receptivo, rota definida e acompanhamento durante todo o trajeto.',
    },
    {
      question: 'Vocês atendem empresas?',
      answer:
        'Sim. Atendemos agendas corporativas, executivos, clientes e convidados de empresas, além de pessoas físicas e famílias.',
    },
    {
      question: 'Preciso agendar com antecedência?',
      answer:
        'O atendimento é feito sob agendamento e conforme disponibilidade. Quanto antes você entrar em contato, mais fácil garantir o horário desejado.',
    },
    {
      question: 'Vocês atendem eventos e ocasiões especiais?',
      answer: 'Sim. Jantares, festas, cerimônias e eventos particulares, com horários alinhados para a ida e para a volta.',
    },
    {
      question: 'Posso contratar para grupos?',
      answer:
        'Sim. Além do sedã e do SUV, há opções de minivan e van para famílias, grupos e comitivas. Consulte a disponibilidade da categoria desejada.',
    },
    {
      question: 'Com quem eu falo para agendar?',
      answer:
        'Com um de nossos especialistas, direto pelo WhatsApp. Nossa equipe de atendimento cuida do seu agendamento do primeiro contato até o destino.',
    },
  ],
  cta: {
    eyebrow: 'Atendimento sob agendamento',
    title: 'Pronto para um deslocamento à altura da sua agenda?',
    description: 'Fale com um de nossos especialistas para consultar disponibilidade, combinar trajeto e agendar seu atendimento.',
  },
  footer: {
    description:
      'Transporte executivo em São Paulo e região. Transfers para aeroportos, compromissos corporativos, eventos e viagens agendadas com atendimento especializado.',
    navTitle: 'Navegação',
    servicesTitle: 'Serviços',
    contactTitle: 'Contato',
    schedule: 'Atendimento sob agendamento',
    rights: 'Todos os direitos reservados.',
    developedBy: 'Desenvolvido por',
  },
};
