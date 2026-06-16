const whatsappNumber = '5511952946402';
const whatsappMessage = encodeURIComponent('Olá Rafael, gostaria de agendar uma corrida com a RC Motorista.');

export const site = {
  brand: 'RC Motorista',
  driver: 'Rafael Corsini',
  location: 'São Paulo e região',
  phoneDisplay: '(11) 95294-6402',
  phoneHref: 'tel:+5511952946402',
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  instagramHandle: '@rcmotorista',
  instagramHref: 'https://www.instagram.com/rcmotorista/',
  headline: 'Motorista Executivo com atendimento profissional, pontual e discreto.',
  subheadline:
    'Transporte exclusivo com Motorista Executivo para aeroportos, compromissos, eventos e viagens.',
  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ],
  trustBadges: ['Atendimento por agendamento', 'Rotas planejadas', 'Contato direto'],
  services: [
    {
      title: 'Transfers para aeroportos',
      description: 'Atendimento receptivo em chegadas e apoio em partidas, rotas definidas e acompanhamento direto.',
    },
    {
      title: 'Compromissos executivos',
      description: 'Deslocamentos para reuniões, agendas profissionais e compromissos de rotina.',
    },
    {
      title: 'Eventos e ocasiões especiais',
      description: 'Atendimento pontual e discreto para eventos diversos, show, jantares e eventos particulares.',
    },
    {
      title: 'Viagens particulares',
      description: 'Trajetos planejados com conforto, comunicação clara e disponibilidade sob consulta.',
    },
    {
      title: 'Atendimento recorrente',
      description: 'Rotinas semanais ou mensais para quem precisa de um motorista de confiança. Disponibilidade sob consulta.',
    },
  ],
  differentials: [
    {
      title: 'Pontualidade',
      description: 'Horários alinhados com antecedência para reduzir espera e imprevistos.',
    },
    {
      title: 'Discrição',
      description: 'Atendimento reservado para rotinas pessoais, familiares e profissionais.',
    },
    {
      title: 'Atendimento direto',
      description: 'Contato direto com Rafael Corsini, sem intermediação ou suporte genérico.',
    },
    {
      title: 'Conforto',
      description: 'Experiência tranquila, organizada e adequada para deslocamentos importantes.',
    },
  ],
  steps: [
    {
      title: 'Chame no WhatsApp',
      description: 'Envie sua necessidade de deslocamento e o melhor horário para atendimento.',
    },
    {
      title: 'Informe trajeto, data e horário',
      description: 'Compartilhe origem, destino, data, horário e observações importantes.',
    },
    {
      title: 'Receba a confirmação',
      description: 'Rafael confirma disponibilidade, combina os detalhes e organiza o atendimento.',
    },
  ],
} as const;
