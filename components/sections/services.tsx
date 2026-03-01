import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Cirurgia de mama",
    description:
      "Procedimentos cirúrgicos de mama, incluindo tratamento de lesões benignas e malignas, cirurgias conservadoras, mastectomias, reconstruções mamárias e demais intervenções da especialidade de mastologia.",
    image: "/cirugia-de-mama.jpg",
    alt: "Cirurgia de mama",
  },
  {
    title: "Mastologia",
    description:
      "Diagnóstico e tratamento de doenças da mama com precisão técnica.",
    image: "/mastologia.png",
    alt: "Mastologia",
  },
  {
    title: "Consultas e acompanhamento",
    description:
      "Avaliação clínica detalhada e seguimento pós-operatório personalizado.",
    image: "/consulta.jpg",
    alt: "Consultas e acompanhamento",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-brand/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1 text-xs font-medium tracking-wide text-brand">
            Especialidades
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Serviços oferecidos pelo Dr. Paulo Vasques
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Cirurgia de mama e mastologia com excelência técnica.
            Acompanhamento completo do seu tratamento.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border/60 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-7 text-center space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                             <a
      href="hhttps://api.whatsapp.com/send?1=pt_BR&phone=5585999833635"
      target="_blank"
      rel="noopener noreferrer"
    >
          <Button className="h-11 px-7 rounded-full bg-[#3F6F95] hover:bg-[#365f80] text-white shadow-sm hover:shadow-md transition-all">
  Agendar 
</Button>
</a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
          >
            Contato <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}