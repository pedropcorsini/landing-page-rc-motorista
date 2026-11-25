import { ArrowRight, ChevronLeft, ChevronRight, Luggage, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { buildWhatsappHref, fleet } from '../data/site';
import { useLanguage } from '../i18n/LanguageProvider';
import { useFleetCarousel } from '../hooks/useFleetCarousel';
import '../styles/fleet.css';

export function FleetShowcase() {
  const { t } = useLanguage();
  const { fleetSection, carousel: labels } = t;
  const carousel = useFleetCarousel(fleet.length, 1);
  const activeVehicle = t.fleet[fleet[carousel.activeIndex].id];

  return (
    <section id="frota" aria-labelledby="frota-title" className="fleet-section">
      <div className="container-site">
        <SectionHeading
          id="frota-title"
          variant="classic"
          eyebrow={fleetSection.eyebrow}
          title={fleetSection.title}
          description={fleetSection.description}
          titleClassName="font-heading text-[1.85rem] font-black leading-[1.2] tracking-[-0.01em] text-white sm:text-[2.4rem] lg:text-[2.75rem]"
        />

        <div
          className="fleet-wrapper"
          role="region"
          aria-roledescription={labels.roleDescription}
          aria-label={labels.regionLabel}
          onKeyDown={carousel.onKeyDown}
        >
          <button type="button" className="fleet-nav-btn fleet-prev" aria-label={labels.prev} onClick={carousel.prev}>
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>

          <div
            ref={carousel.trackRef}
            className="fleet-track scrollbar-none"
            onScroll={carousel.onScroll}
            onTouchStart={carousel.onTouchStart}
            onTouchEnd={carousel.onTouchEnd}
          >
            {fleet.map(({ id, image }, index) => {
              const vehicle = t.fleet[id];
              const isActive = index === carousel.activeIndex;
              return (
                <article
                  key={id}
                  ref={carousel.setCardRef(index)}
                  className="fleet-card"
                  data-active={isActive}
                  aria-roledescription="slide"
                  aria-label={labels.slideLabel(index + 1, fleet.length, vehicle.name)}
                  onClick={() => {
                    if (!isActive) carousel.select(index);
                  }}
                >
                  <div className="fleet-img-box">
                    <img
                      className="fleet-img"
                      src={image}
                      alt={labels.imageAlt(vehicle.name)}
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
                        <span className="sr-only"> {labels.passengers}</span>
                      </span>
                      <span className="fleet-spec">
                        <Luggage aria-hidden="true" />
                        {vehicle.luggage}
                        <span className="sr-only"> {labels.luggage}</span>
                      </span>
                    </p>
                  </div>
                  <p className="fleet-desc">{vehicle.description}</p>
                  <a
                    className="fleet-link"
                    href={buildWhatsappHref(t.whatsapp.fleet(vehicle.name))}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={labels.linkAria(fleetSection.linkLabel, vehicle.name)}
                  >
                    <span>{fleetSection.linkLabel}</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <button type="button" className="fleet-nav-btn fleet-next" aria-label={labels.next} onClick={carousel.next}>
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="fleet-dots">
          {fleet.map(({ id }, index) => {
            const isActive = index === carousel.activeIndex;
            return (
              <button
                key={id}
                type="button"
                className="fleet-dot-btn"
                data-active={isActive}
                aria-label={labels.show(t.fleet[id].name)}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => carousel.select(index)}
              >
                <span aria-hidden="true" className="fleet-dot" />
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {labels.live(carousel.activeIndex + 1, fleet.length, activeVehicle.name)}
        </p>
      </div>
    </section>
  );
}
