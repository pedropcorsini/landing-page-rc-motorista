import { Quote } from 'lucide-react';
import { site } from '../data/site';

export function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand">Prova social</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Clientes que priorizam confiança
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Depoimentos provisórios para substituição por relatos reais após validação com clientes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {site.testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {testimonial.label}
                </p>
                <Quote aria-hidden="true" className="h-5 w-5 text-brand" />
              </div>
              <blockquote className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</blockquote>
              <p className="mt-6 text-sm font-semibold text-white">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
