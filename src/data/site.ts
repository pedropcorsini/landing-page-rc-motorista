import sedanImage from '../../images/frota/sedan.jpg';
import suvImage from '../../images/frota/suv.jpg';
import minivanImage from '../../images/frota/minivan.jpg';
import vanImage from '../../images/frota/van.jpg';

const whatsappNumber = '5511952946402';
const defaultWhatsappMessage = 'Olá Rafael, gostaria de agendar uma corrida com a RC Motorista.';

export function buildWhatsappHref(message: string = defaultWhatsappMessage) {
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

export type FleetVehicle = {
  id: string;
  name: string;
  passengers: string;
  luggage: string;
  description: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const fleet: FleetVehicle[] = [
  {
    id: 'sedan',
    name: 'Sedã Executivo',
    passengers: '3',
    luggage: '3',
    description: 'Conforto e discrição para agendas urbanas e aeroportos.',
    image: sedanImage,
  },
  {
    id: 'suv',
    name: 'SUV Executivo',
    passengers: '4',
    luggage: '4',
    description: 'Mais espaço e presença para compromissos importantes.',
    image: suvImage,
  },
  {
    id: 'minivan',
    name: 'Minivan Executiva',
    passengers: '6',
    luggage: '6',
    description: 'Ideal para famílias e pequenos grupos.',
    image: minivanImage,
  },
  {
    id: 'van',
    name: 'Van Executiva',
    passengers: '10 a 15',
    luggage: '12',
    description: 'Grupos, comitivas e eventos com todos juntos.',
    image: vanImage,
  },
];

const faq: FaqItem[] = [
  {
    question: 'Como faço para agendar uma corrida?',
    answer:
      'Pelo WhatsApp. Envie origem, destino, data, horário e observações importantes. Rafael confirma a disponibilidade, combina os detalhes e organiza o atendimento.',
  },
  {
    question: 'Quais regiões vocês atendem?',
    answer:
      'São Paulo e região. Para trajetos fora dessa área, consulte a disponibilidade pelo WhatsApp.',
  },
  {
    question: 'Vocês fazem transfer para aeroportos?',
    answer:
      'Sim. Chegadas e partidas com horário combinado, receptivo, rota definida e acompanhamento direto durante todo o trajeto.',
  },
  {
    question: 'Preciso agendar com antecedência?',
    answer:
      'O atendimento é feito sob agendamento e conforme disponibilidade. Quanto antes você entrar em contato, mais fácil garantir o horário desejado.',
  },
  {
    question: 'Vocês atendem eventos e ocasiões especiais?',
    answer:
      'Sim. Jantares, festas, cerimônias e eventos particulares, com horários alinhados para a ida e para a volta.',
  },
  {
    question: 'Posso contratar para grupos?',
    answer:
      'Sim. Além do sedã e do SUV, há opções de minivan e van para famílias, grupos e comitivas. Consulte a disponibilidade da categoria desejada.',
  },
  {
    question: 'Vou falar direto com o motorista?',
    answer: 'Sim. O contato é direto com Rafael C., sem intermediação ou suporte genérico.',
  },
];

export const site = {
  brand: 'RC Motorista',
  driver: 'Rafael C.',
  location: 'São Paulo e região',
  phoneDisplay: '(11) 95294-6402',
  phoneHref: 'tel:+5511952946402',
  whatsappHref: buildWhatsappHref(),
  instagramHandle: '@rcmotorista',
  instagramHref: 'https://www.instagram.com/rcmotorista/',
  nav: [
    { label: 'Início', href: '#top' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como solicitar', href: '#como-solicitar' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  hero: {
    titleLine1: 'Motorista Executivo',
    titleLine2: 'em São Paulo e região',
    subtitle: 'Mobilidade executiva com Rafael C. para aeroportos, compromissos, eventos e viagens agendadas.',
    status: 'Atendimento sob agendamento',
    features: [
      { icon: 'plane', label: 'Transfers para aeroportos' },
      { icon: 'briefcase', label: 'Compromissos executivos' },
      { icon: 'calendar', label: 'Eventos e ocasiões' },
      { icon: 'route', label: 'Viagens particulares' },
      { icon: 'clock', label: 'Atendimento sob agendamento' },
      { icon: 'user', label: 'Contato direto com Rafael' },
    ] satisfies { icon: IconKey; label: string }[],
  },
  about: {
    eyebrow: 'Nossa missão & propósito',
    titleLine1: 'Atendimento profissional,',
    titleLine2: 'pontual e discreto',
    paragraphs: [
      'A RC Motorista oferece mobilidade executiva com Rafael C. em São Paulo e região. Cada trajeto é planejado com horários alinhados com antecedência, condução responsável e atenção ao percurso, para que o deslocamento seja a parte mais tranquila da sua agenda.',
      'O contato é direto com o motorista, sem intermediação, com confirmações e ajustes pelo WhatsApp. Um atendimento reservado para rotinas pessoais, familiares, profissionais e executivas.',
    ],
    linkLabel: 'Conheça os serviços',
  },
  servicesSection: {
    eyebrow: 'Serviços',
    titleLine1: 'Serviços sob medida',
    titleLine2: 'para cada compromisso',
    description:
      'Do transfer ao atendimento recorrente, cada trajeto é planejado para oferecer conforto, segurança, organização e previsibilidade.',
  },
  services: [
    {
      icon: 'plane',
      title: 'Transfers para aeroportos',
      description: 'Chegadas e partidas com horário combinado, receptivo, rota definida e acompanhamento direto.',
    },
    {
      icon: 'briefcase',
      title: 'Compromissos executivos',
      description: 'Deslocamentos para reuniões, agendas profissionais e compromissos de rotina.',
    },
    {
      icon: 'calendar',
      title: 'Eventos e ocasiões especiais',
      description: 'Atendimento pontual para jantares, festas, cerimônias e eventos particulares.',
    },
    {
      icon: 'route',
      title: 'Viagens particulares e executivas',
      description:
        'Trajetos planejados com conforto, comunicação clara, com todo apoio e suporte necessários em seu deslocamento.',
    },
    {
      icon: 'repeat',
      title: 'Atendimento recorrente',
      description: 'Rotinas com horários combinados e o mesmo cuidado em cada trajeto da sua agenda.',
    },
    {
      icon: 'sparkles',
      title: 'Serviço de bordo personalizado',
      description: 'Preferências do passageiro alinhadas antes do embarque para um trajeto confortável e do seu jeito.',
    },
  ] satisfies { icon: IconKey; title: string; description: string }[],
  fleetSection: {
    eyebrow: 'Frota sob medida & agendamento',
    title: 'Opções de Mobilidade',
    description: 'Escolha a categoria ideal para o seu trajeto. Rafael confirma a disponibilidade e organiza todo o atendimento.',
    linkLabel: 'Consultar disponibilidade',
  },
  fleet,
  differentialsSection: {
    eyebrow: 'Por que a RC Motorista',
    title: 'Diferenciais pensados para sua rotina',
    description:
      'O objetivo é simples: facilitar o agendamento, manter comunicação clara e entregar um atendimento confiável do primeiro contato até o destino.',
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
      title: 'Atendimento direto',
      description: 'Contato direto com Rafael C., sem intermediação ou suporte genérico.',
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
  ] satisfies { icon: IconKey; title: string; description: string }[],
  stepsSection: {
    eyebrow: 'Processo simples & transparente',
    titleLine1: 'Agende em três',
    titleAccent: 'passos simples',
    description:
      'Solicite seu atendimento, informe os detalhes do compromisso e receba a confirmação com todas as informações necessárias.',
  },
  steps: [
    {
      icon: 'message',
      title: 'Chame no WhatsApp',
      description: 'Envie sua necessidade de deslocamento e o melhor horário para atendimento.',
    },
    {
      icon: 'list',
      title: 'Informe trajeto, data e horário',
      description: 'Compartilhe origem, destino, data, horário e observações importantes.',
    },
    {
      icon: 'calendar',
      title: 'Receba a confirmação',
      description: 'Rafael confirma disponibilidade, combina os detalhes e organiza o atendimento.',
    },
  ] satisfies { icon: IconKey; title: string; description: string }[],
  faqSection: {
    title: 'Perguntas Frequentes',
    description: 'Tire suas dúvidas antes de agendar o seu atendimento.',
  },
  faq,
  cta: {
    eyebrow: 'Atendimento sob agendamento',
    title: 'Pronto para um deslocamento à altura da sua agenda?',
    description:
      'Fale diretamente com Rafael C. para consultar disponibilidade, combinar trajeto e agendar seu atendimento.',
  },
  footer: {
    description:
      'Motorista executivo em São Paulo e região. Transfers para aeroportos, compromissos, eventos e viagens agendadas com atendimento direto.',
  },
};
