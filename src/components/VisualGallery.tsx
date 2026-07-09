import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.jpeg';
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
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`group relative min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-black ${
                item.featured ? 'lg:col-span-2 lg:row-span-2 lg:min-h-[460px]' : 'lg:aspect-[4/3] lg:min-w-0'
              }`}
            >
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
    </section>
  );
}
