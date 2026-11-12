import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Faq } from './Faq';

function triggers() {
  return screen.getAllByRole('button').filter((button) => button.hasAttribute('aria-expanded'));
}

describe('Perguntas Frequentes', () => {
  it('abre a primeira pergunta por padrao', () => {
    render(<Faq />);

    const [first, ...rest] = triggers();
    expect(first).toHaveAttribute('aria-expanded', 'true');
    rest.forEach((button) => expect(button).toHaveAttribute('aria-expanded', 'false'));
  });

  it('mantem apenas uma pergunta aberta por vez', async () => {
    const user = userEvent.setup();
    render(<Faq />);

    const buttons = triggers();
    await user.click(buttons[2]);

    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons.filter((button) => button.getAttribute('aria-expanded') === 'true')).toHaveLength(1);

    await user.click(buttons[2]);
    expect(buttons.every((button) => button.getAttribute('aria-expanded') === 'false')).toBe(true);
  });

  it('liga cada pergunta ao seu painel de resposta', () => {
    render(<Faq />);

    const first = triggers()[0];
    const panel = document.getElementById(first.getAttribute('aria-controls') ?? '');

    expect(panel).not.toBeNull();
    expect(panel).toHaveAttribute('aria-labelledby', first.id);
    expect(panel).toHaveTextContent(/pelo whatsapp/i);
  });
});
