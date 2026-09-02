import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import image1 from '../../images/atendimento-executivo.jpg';
import image2 from '../../images/2.png';
import image3 from '../../images/aeroportos.jpg';
import image4 from '../../images/4.jpeg';
import image5 from '../../images/5.jpeg';

const galleryItems = [
  {
    title: 'Atendimento executivo',
    image: image1,
    alt: 'Atendimento executivo da RC Motorista',
    featured: true,
  },
  {
    title: 'Interior confortável',
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
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Detalhes</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Atendimento em cada detalhe
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            Espaço visual para apresentar veículo, conforto e momentos do atendimento sem tirar o foco da conversão.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:overflow-visible lg:px-0 lg:pb-0">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-black ${
                item.featured ? 'lg:col-span-2 lg:row-span-2 lg:min-h-[460px]' : 'lg:aspect-[4/3] lg:min-w-0'
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
              <div className="relative flex min-h-[320px] h-full flex-col justify-end p-6 lg:min-h-0">
                <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl lg:text-2xl">{item.title}</h3>
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
