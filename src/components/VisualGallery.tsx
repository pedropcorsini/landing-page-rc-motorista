import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import image1 from '../../images/atendimento-executivo.jpg';
import image2 from '../../images/interior-veiculo.png';
import image3 from '../../images/aeroportos.jpg';
import image4 from '../../images/compromissos.jpeg';
import image5 from '../../images/eventos.jpeg';

const galleryItems = [
  {
    title: 'Atendimento Executivo VIP',
    image: image1,
    alt: 'Atendimento executivo da RC Motorista',
    featured: true,
  },
  {
    title: 'Serviço de bordo personalizados',
    image: image2,
    alt: 'Interior confortável do veículo',
  },
  {
    title: 'Aeroportos',
    image: image3,
    alt: 'Serviço de transfer para aeroportos',
  },
  {
    title: 'Compromissos',
    image: image4,
    alt: 'Deslocamento para compromissos executivos',
  },
  {
    title: 'Eventos',
    image: image5,
    alt: 'Atendimento para eventos e ocasiões especiais',
  },
];

export function VisualGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeItem = openIndex !== null ? galleryItems[openIndex] : null;

  useEffect(() => {
    if (!activeItem) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem]);

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-16">
          <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">Excelência operacional</p>
          <h2 className="mt-5 font-heading text-4xl leading-[1.02] tracking-[-0.025em] text-white sm:text-5xl">
            Profissional de apoio à agenda executiva e particular
          </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Disponibilidade, Confiança, Organização, Tranquilidade, Tempo e Previsibilidade são os principais pontos que oferecemos, cuidando de toda a sua experiência de deslocamento.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mt-14 lg:mx-0 lg:grid lg:grid-cols-12 lg:grid-rows-2 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-w-[82%] snap-start overflow-hidden border border-white/15 bg-black ${
                item.featured ? 'lg:col-span-6 lg:row-span-2 lg:min-h-[560px]' : 'lg:col-span-3 lg:aspect-[1.25] lg:min-w-0'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                aria-label={`Ampliar imagem: ${item.title}`}
              />
              <img
                alt={item.alt}
                className="absolute inset-0 h-full w-full scale-100 object-cover transition-transform duration-700 ease-out motion-reduce:transform-none lg:scale-105 lg:group-hover:scale-100"
                loading={item.featured ? 'eager' : 'lazy'}
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative flex min-h-[220px] h-full flex-col justify-end p-5 sm:min-h-[280px] sm:p-6 lg:min-h-0">
                <h3 className="font-heading text-xl text-white sm:text-3xl lg:text-2xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          aria-label={activeItem.title}
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:right-8 sm:top-8"
            aria-label="Fechar imagem ampliada"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <figure className="m-0 flex max-h-[85vh] max-w-[90vw] flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img
              alt={activeItem.alt}
              className="max-h-[75vh] max-w-[90vw] rounded-2xl border border-white/10 object-contain shadow-2xl"
              src={activeItem.image}
            />
            <figcaption className="mt-4 font-heading text-lg font-semibold text-white">{activeItem.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
