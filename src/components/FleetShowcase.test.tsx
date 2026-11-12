import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FleetShowcase } from './FleetShowcase';

function activeVehicle() {
  return document.querySelector('.fleet-card[data-active="true"] h3')?.textContent;
}

describe('Opções de Mobilidade', () => {
  it('comeca com o SUV em destaque e anuncia para leitores de tela', () => {
    render(<FleetShowcase />);

    expect(activeVehicle()).toBe('SUV Executivo');
    expect(screen.getByText('Veículo 2 de 4: SUV Executivo')).toBeInTheDocument();
    expect(document.querySelectorAll('.fleet-card[data-active="true"]')).toHaveLength(1);
  });

  it('setas navegam entre os veiculos com wrap-around', async () => {
    const user = userEvent.setup();
    render(<FleetShowcase />);

    const next = screen.getByRole('button', { name: /próximo veículo/i });
    const prev = screen.getByRole('button', { name: /veículo anterior/i });

    await user.click(next);
    expect(activeVehicle()).toBe('Minivan Executiva');
    await user.click(next);
    expect(activeVehicle()).toBe('Van Executiva');
    await user.click(next);
    expect(activeVehicle()).toBe('Sedã Executivo');
    await user.click(prev);
    expect(activeVehicle()).toBe('Van Executiva');
    expect(screen.getByText('Veículo 4 de 4: Van Executiva')).toBeInTheDocument();
  });

  it('dots selecionam o veiculo e marcam o atual', async () => {
    const user = userEvent.setup();
    render(<FleetShowcase />);

    const dot = screen.getByRole('button', { name: /mostrar minivan executiva/i });
    await user.click(dot);

    expect(activeVehicle()).toBe('Minivan Executiva');
    expect(dot).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('button', { name: /mostrar suv executivo/i })).not.toHaveAttribute('aria-current');
  });

  it('clicar em um card o coloca em foco', async () => {
    const user = userEvent.setup();
    render(<FleetShowcase />);

    await user.click(screen.getByRole('article', { name: /sedã executivo/i }));

    expect(activeVehicle()).toBe('Sedã Executivo');
  });

  it('setas do teclado trocam o veiculo quando o foco esta no carrossel', async () => {
    const user = userEvent.setup();
    render(<FleetShowcase />);

    screen.getByRole('button', { name: /próximo veículo/i }).focus();
    await user.keyboard('{ArrowRight}');
    expect(activeVehicle()).toBe('Minivan Executiva');
    await user.keyboard('{ArrowLeft}{ArrowLeft}');
    expect(activeVehicle()).toBe('Sedã Executivo');
  });

  it('link de disponibilidade abre o WhatsApp com a categoria do veiculo', () => {
    render(<FleetShowcase />);

    const link = screen.getByRole('link', { name: /consultar disponibilidade: van executiva/i });
    const href = link.getAttribute('href') ?? '';

    expect(href.startsWith('https://wa.me/5511952946402?text=')).toBe(true);
    expect(decodeURIComponent(href)).toContain('categoria Van Executiva');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
