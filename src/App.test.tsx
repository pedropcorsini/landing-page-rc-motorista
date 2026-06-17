import { render, screen } from '@testing-library/react';
import App from './App';

describe('Landing page RC Motorista', () => {
  it('renderiza a promessa principal e CTAs de conversao', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /motorista executivo para quem valoriza pontualidade/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/transporte particular e executivo com Rafael Corsini/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /agendar pelo whatsapp/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /ver instagram/i }).length).toBeGreaterThan(0);
  });

  it('mantem navegacao curta para as secoes principais', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /navegacao principal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /serviços/i })).toHaveAttribute('href', '#servicos');
    expect(screen.getByRole('link', { name: /diferenciais/i })).toHaveAttribute('href', '#diferenciais');
    expect(screen.getByRole('link', { name: /contato/i })).toHaveAttribute('href', '#contato');
  });

  it('exibe servicos, diferenciais e fluxo de agendamento', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /serviços personalizados para cada compromisso/i })).toBeInTheDocument();
    expect(screen.getByText(/transfers para aeroportos/i)).toBeInTheDocument();
    expect(screen.getByText(/compromissos executivos/i)).toBeInTheDocument();
    expect(screen.getByText(/eventos e ocasiões especiais/i)).toBeInTheDocument();
    expect(screen.getByText(/viagens particulares/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /atendimento recorrente/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /diferenciais pensados para sua rotina/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /pontualidade/i })).toBeInTheDocument();
    expect(screen.getAllByText(/discrição/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/atendimento direto/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /conforto/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /comunicação rápida/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /segurança/i })).toBeInTheDocument();
    expect(screen.getByText(/condução responsável, atenção ao percurso/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /como funciona/i })).toBeInTheDocument();
    expect(screen.getByText(/chame no whatsapp/i)).toBeInTheDocument();
    expect(screen.getByText(/informe trajeto, data e horário/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /receba a confirmação/i })).toBeInTheDocument();
  });

  it('remove a prova social e mantem contatos com links validos', () => {
    render(<App />);

    expect(screen.queryByText(/prova social/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /clientes que priorizam confiança/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/depoimento editável/i)).not.toBeInTheDocument();

    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.some((link) => link.getAttribute('href')?.startsWith('https://wa.me/5511952946402'))).toBe(
      true,
    );

    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i });
    expect(instagramLinks.some((link) => link.getAttribute('href') === 'https://www.instagram.com/rcmotorista/')).toBe(
      true,
    );
    expect(screen.getByRole('link', { name: /telefone/i })).toHaveAttribute('href', expect.stringMatching(/^tel:\+55/));
    expect(screen.getByText('(11) 95294-6402')).toBeInTheDocument();
  });

  it('exibe footer com icones sociais discretos e creditos', () => {
    render(<App />);

    expect(screen.getByText(/2026 RC Motorista/i)).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
    expect(screen.getByText(/desenvolvido por Pedro Passos Corsini/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /whatsapp no rodape/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/5511952946402'),
    );
    expect(screen.getByRole('link', { name: /instagram no rodape/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/rcmotorista/',
    );
  });
});
