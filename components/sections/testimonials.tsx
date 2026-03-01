import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Há quase 10 anos, o Dr. Paulo Vasques (Mastoanjo) cuida com excelência e humanidade da saúde das mamas das maranguapenses, e no Outubro Rosa tivemos a honra de homenageá-lo e fortalecer, juntos, a prevenção ao câncer de mama com conhecimento, carinho e gratidão.",
    name: "Dadynha Saturnino",
    meta: "Paciente, Fortaleza",
  },
  {
    quote:
      "“MASTOANJO!” é a nossa homenagem em forma de poesia ao @dr.paulovasques, celebrando sua humanidade, amizade e dedicação incansável às mulheres maranguapenses, com gratidão e carinho das Deusas da Mama.",
    name: "Associação Deusas da Mama de Maranguape-CE",
    meta: "Paciente, Fortaleza",
  },
  {
    quote:
      "Gratidão, Dr. Paulo, por todo cuidado e dedicação, e ao Geeon pelo apoio e parceria fundamentais durante a pesquisa.",
    name: "Patrícia Cândido",
    meta: "Paciente, Fortaleza",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 bg-gradient-to-b from-brand/5 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1 text-xs font-medium tracking-wide text-brand">
            Depoimentos
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Histórias reais
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Pacientes que confiaram e encontraram alívio
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative rounded-2xl border bg-white/80 backdrop-blur p-8 shadow-sm hover:shadow-md transition-all"
            >
              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/60 via-brand/20 to-transparent" />

              {/* quote icon */}
              <div className="mx-auto w-12 h-12 rounded-2xl border border-brand/20 bg-brand/10 flex items-center justify-center text-brand">
                <Quote className="h-5 w-5" />
              </div>

              {/* Quote */}
              <p className="mt-6 text-center text-[17px] leading-relaxed font-medium text-foreground">
                “{t.quote}”
              </p>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.meta}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Small trust note (optional but premium) */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Depoimentos ilustrativos para fins de apresentação do layout.
          </p>
        </div>
      </div>
    </section>
  );
}