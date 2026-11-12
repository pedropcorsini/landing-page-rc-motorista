import { ArrowRight, ChevronLeft, ChevronRight, Luggage, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { buildWhatsappHref, site } from '../data/site';
import { useFleetCarousel } from '../hooks/useFleetCarousel';
import '../styles/fleet.css';

export function FleetShowcase() {
  const { fleet, fleetSection } = site;
  const carousel = useFleetCarousel(fleet.length, 1);
  const activeVehicle = fleet[carousel.activeIndex];

  return (
    <section id="frota" aria-labelledby="frota-title" className="fleet-section">
      <div className="container-site max-w-[1280px]">
        <SectionHeading
          id="frota-title"
          eyebrow={fleetSection.eyebrow}
          title={fleetSection.title}
          description={fleetSection.description}
          titleClassName="font-heading text-[1.85rem] font-black leading-[1.15] tracking-[-0.01em] text-white sm:text-[2.4rem] lg:text-[2.75rem]"
        />

        <div
          className="fleet-wrapper"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Categorias de veículos"
          onKeyDown={carousel.onKeyDown}
        >
          <button type="button" className="fleet-nav-btn fleet-prev" aria-label="Veículo anterior" onClick={carousel.prev}>
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>

          <div
            ref={carousel.trackRef}
            className="fleet-track scrollbar-none"
            onScroll={carousel.onScroll}
            onTouchStart={carousel.onTouchStart}
            onTouchEnd={carousel.onTouchEnd}
          >
            {fleet.map((vehicle, index) => {
              const isActive = index === carousel.activeIndex;
              return (
                <article
                  key={vehicle.id}
                  ref={carousel.setCardRef(index)}
                  className="fleet-card"
                  data-active={isActive}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${fleet.length}: ${vehicle.name}`}
                  onClick={() => {
                    if (!isActive) carousel.select(index);
                  }}
                >
                  <div className="fleet-img-box">
                    <img
                      className="fleet-img"
                      src={vehicle.image}
                      alt={`Ilustração: ${vehicle.name}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="fleet-header">
                    <h3 className="fleet-title">{vehicle.name}</h3>
                    <p className="fleet-specs">
                      <span className="fleet-spec">
                        <Users aria-hidden="true" />
                        {vehicle.passengers}
                        <span className="sr-only"> passageiros</span>
                      </span>
                      <span className="fleet-spec">
                        <Luggage aria-hidden="true" />
                        {vehicle.luggage}
                        <span className="sr-only"> malas</span>
                      </span>
                    </p>
                  </div>
                  <p className="fleet-desc">{vehicle.description}</p>
                  <a
                    className="fleet-link"
                    href={buildWhatsappHref(
                      `Olá Rafael, gostaria de consultar a disponibilidade da categoria ${vehicle.name} com a RC Motorista.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${fleetSection.linkLabel}: ${vehicle.name}, pelo WhatsApp`}
                  >
                    <span>{fleetSection.linkLabel}</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <button type="button" className="fleet-nav-btn fleet-next" aria-label="Próximo veículo" onClick={carousel.next}>
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="fleet-dots">
          {fleet.map((vehicle, index) => {
            const isActive = index === carousel.activeIndex;
            return (
              <button
                key={vehicle.id}
                type="button"
                className="fleet-dot-btn"
                data-active={isActive}
                aria-label={`Mostrar ${vehicle.name}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => carousel.select(index)}
              >
                <span aria-hidden="true" className="fleet-dot" />
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {`Veículo ${carousel.activeIndex + 1} de ${fleet.length}: ${activeVehicle.name}`}
        </p>
      </div>
    </section>
  );
}
