import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como agendar consulta?",
    a: "Você pode agendar pelo formulário de contato ou ligar diretamente para a clínica. Oferecemos horários flexíveis para sua conveniência. O primeiro atendimento inclui avaliação completa.",
  },
  {
    q: "Qual é o tempo de recuperação?",
    a: "Cada procedimento tem seu próprio tempo de cicatrização. O Dr. Paulo fornece orientações detalhadas e acompanhamento personalizado. A maioria dos pacientes retorna às atividades normais em poucas semanas.",
  },
  {
    q: "Realizam cirurgias de emergência?",
    a: "Sim, atendemos casos de urgência em cirurgia geral. Contate a clínica para informações sobre disponibilidade. Estamos preparados para situações que exigem intervenção rápida.",
  },
  {
    q: "Qual é o valor das consultas?",
    a: "Os valores variam conforme o tipo de atendimento. Oferecemos diferentes formas de pagamento para facilitar. Consulte diretamente para orçamento personalizado.",
  },
  {
    q: "Aceitam convênios médicos?",
    a: "Trabalhamos com diversos convênios e planos de saúde. Verifique se seu plano está na lista de credenciados. Também atendemos pacientes particulares.",
  },
  {
    q: "Como é o pós-operatório?",
    a: "Você recebe instruções claras sobre cuidados e medicações. O Dr. Paulo realiza acompanhamento regular até a recuperação completa. Qualquer dúvida pode ser esclarecida durante as consultas de retorno.",
  },
];

export default function FAQ() {
  return (
    <section
      id="duvidas"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-brand/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1 text-xs font-medium tracking-wide text-brand">
            <HelpCircle className="h-4 w-4" />
            Dúvidas
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Dúvidas
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Respostas diretas sobre consultas, cirurgias e acompanhamento
            pós-operatório.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {faqs.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border bg-white/80 backdrop-blur p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <h3 className="text-base font-semibold tracking-tight">
                {item.q}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border bg-white/80 backdrop-blur p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ainda tem dúvidas?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Entre em contato conosco para esclarecer suas questões.
            </p>
          </div>
                                       <a
      href="https://wa.me/5585999999999?text=Olá,%20gostaria%20de%20agendar%20consulta."
      target="_blank"
      rel="noopener noreferrer"
    >
          <Button className="h-11 px-7 rounded-full bg-[#3F6F95] hover:bg-[#365f80] text-white shadow-sm hover:shadow-md transition-all">
Fale conosco
</Button>
</a>
        </div>
      </div>
    </section>
  );
}