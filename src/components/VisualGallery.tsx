const galleryItems = [
  {
    title: 'Atendimento executivo',
    description: 'Imagem principal para destacar presença, conforto e discrição.',
    featured: true,
  },
  {
    title: 'Interior confortável',
    description: 'Espaço reservado para imagem do interior do veículo.',
  },
  {
    title: 'Aeroportos',
    description: 'Espaço reservado para chegadas, partidas e transfers.',
  },
  {
    title: 'Compromissos',
    description: 'Espaço reservado para contexto urbano e executivo.',
  },
  {
    title: 'Eventos',
    description: 'Espaço reservado para atendimento noturno ou especial.',
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
              <div
                aria-label={item.title}
                className="absolute inset-0 scale-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,0.18),transparent_30%),linear-gradient(135deg,#020202,#101010_52%,#050505)] transition-transform duration-700 ease-out motion-reduce:transform-none lg:scale-105 lg:group-hover:scale-100"
                role="img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative flex min-h-[320px] h-full flex-col justify-end p-6 lg:min-h-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Imagem teste</p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
