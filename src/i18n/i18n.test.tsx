import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { contents, locales, STORAGE_KEY } from './LanguageProvider';

function heroWhatsappMessage() {
  const href = screen.getAllByRole('link', { name: /whatsapp/i })[0].getAttribute('href') ?? '';
  return decodeURIComponent(href.split('?text=')[1] ?? '');
}

afterEach(() => {
  window.localStorage.clear();
  window.history.replaceState(null, '', '/');
});

describe('Idiomas do site', () => {
  it('abre em português por padrão', () => {
    render(<App />);

    expect(document.documentElement.lang).toBe('pt-BR');
    expect(screen.getByRole('heading', { level: 1, name: /transporte executivo em são paulo e região/i })).toBeInTheDocument();
    expect(heroWhatsappMessage()).toBe('Olá, gostaria de agendar uma corrida com a Transporte Executivo RC.');
  });

  it('troca para inglês pelo botão, salva a escolha e traduz o WhatsApp', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: /english/i })[0]);

    expect(screen.getByRole('heading', { level: 1, name: /executive transportation in são paulo and region/i })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(contents.en.meta.title);
    expect(screen.getAllByRole('button', { name: /english/i })[0]).toHaveAttribute('aria-pressed', 'true');
    expect(heroWhatsappMessage()).toBe('Hello, I would like to book a ride with Transporte Executivo RC.');
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe('en');
    expect(window.location.search).toBe('?lang=en');
  });

  it('troca para espanhol e volta para português limpando o link', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: /español/i })[0]);
    expect(screen.getByRole('heading', { level: 1, name: /transporte ejecutivo en são paulo y región/i })).toBeInTheDocument();
    expect(heroWhatsappMessage()).toContain('Hola');

    await user.click(screen.getAllByRole('button', { name: /português/i })[0]);
    expect(screen.getByRole('heading', { level: 1, name: /transporte executivo em são paulo e região/i })).toBeInTheDocument();
    expect(window.location.search).toBe('');
  });

  it('respeita o idioma do link (?lang=es)', () => {
    window.history.replaceState(null, '', '/?lang=es');
    render(<App />);

    expect(document.documentElement.lang).toBe('es');
    expect(screen.getByRole('heading', { level: 2, name: /preguntas frecuentes/i })).toBeInTheDocument();
  });

  it('lembra o idioma escolhido em visitas anteriores', () => {
    window.localStorage.setItem(STORAGE_KEY, 'en');
    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /frequently asked questions/i })).toBeInTheDocument();
  });

  it.each(locales)('não exibe fatos inventados em %s', (locale) => {
    window.history.replaceState(null, '', `/?lang=${locale}`);
    render(<App />);

    expect(screen.queryByText(/24h|24 horas|24 hours|24 horas|depoimento|testimonial|testimonio|avaliações|reviews|reseñas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/rafael/i)).not.toBeInTheDocument();
    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.every((link) => link.getAttribute('href')?.startsWith('https://wa.me/5511952946402?text='))).toBe(true);
  });
});
