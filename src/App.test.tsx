import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('Landing page RC Motorista', () => {
  it('renderiza a promessa principal e CTAs de conversao', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /motorista executivo em são paulo e região/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Mobilidade executiva com Rafael C. para aeroportos, compromissos, eventos e viagens agendadas.'),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /agendar pelo whatsapp/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /ver instagram/i }).length).toBeGreaterThan(0);
  });

  it('mantem navegacao para todas as secoes da pagina', () => {
    const { container } = render(<App />);

    const nav = screen.getByRole('navigation', { name: /navegação principal/i });
    const expected = [
      ['Início', '#top'],
      ['Sobre', '#sobre'],
      ['Serviços', '#servicos'],
      ['Frota', '#frota'],
      ['Diferenciais', '#diferenciais'],
      ['Como solicitar', '#como-solicitar'],
      ['Dúvidas', '#duvidas'],
    ];

    for (const [label, href] of expected) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', href);
      expect(container.querySelector(href)).not.toBeNull();
    }
  });

  it('exibe servicos, frota, diferenciais, passos e duvidas', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /serviços sob medida para cada compromisso/i })).toBeInTheDocument();
    for (const service of [
      /^transfers para aeroportos$/i,
      /^compromissos executivos$/i,
      /^eventos e ocasiões especiais$/i,
      /^viagens particulares e executivas$/i,
      /^atendimento recorrente$/i,
      /^serviço de bordo personalizado$/i,
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: service })).toBeInTheDocument();
    }

    expect(screen.getByRole('heading', { level: 2, name: /opções de mobilidade/i })).toBeInTheDocument();
    for (const vehicle of [/^sedã executivo$/i, /^suv executivo$/i, /^minivan executiva$/i, /^van executiva$/i]) {
      expect(screen.getByRole('heading', { level: 3, name: vehicle })).toBeInTheDocument();
    }

    expect(screen.getByRole('heading', { name: /diferenciais pensados para sua rotina/i })).toBeInTheDocument();
    for (const item of [/^pontualidade$/i, /^discrição$/i, /^atendimento direto$/i, /^conforto$/i, /^comunicação rápida$/i, /^segurança$/i]) {
      expect(screen.getByRole('heading', { level: 3, name: item })).toBeInTheDocument();
    }

    expect(screen.getByRole('heading', { level: 2, name: /agende em três passos simples/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /chame no whatsapp/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /informe trajeto, data e horário/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /receba a confirmação/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /perguntas frequentes/i })).toBeInTheDocument();
  });

  it('nao exibe depoimentos inventados e mantem contatos com links validos', () => {
    render(<App />);

    expect(screen.queryByText(/depoimento/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/avaliações/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/24h|24 horas/i)).not.toBeInTheDocument();

    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.every((link) => link.getAttribute('href')?.startsWith('https://wa.me/5511952946402'))).toBe(true);

    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i });
    expect(instagramLinks.some((link) => link.getAttribute('href') === 'https://www.instagram.com/rcmotorista/')).toBe(true);

    expect(screen.getByRole('link', { name: /telefone/i })).toHaveAttribute('href', expect.stringMatching(/^tel:\+55/));
    expect(screen.getAllByText('(11) 95294-6402').length).toBeGreaterThan(0);
  });

  it('exibe footer com creditos', () => {
    render(<App />);

    expect(screen.getByText(/2026 RC Motorista/i)).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
    expect(screen.getByText(/desenvolvido por/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Pedro Passos Corsini/i })).toHaveAttribute(
      'href',
      'https://github.com/pedropcorsini',
    );
  });
});
