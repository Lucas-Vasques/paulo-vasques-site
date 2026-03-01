import { Button } from "@/components/ui/button";
import { BadgeCheck, Handshake, ThumbsUp, ArrowRight } from "lucide-react";


export default function Quality() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-24 bg-gradient-to-b from-[#3F6F95]/[0.06] to-transparent"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border bg-white/70 px-4 py-1 text-xs font-medium tracking-wide text-muted-foreground shadow-sm">
              Qualidade
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Por que escolher o Dr. Paulo Vasques
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Experiência sólida em cirurgia geral e mastologia. Atendimento que
            coloca você em primeiro lugar.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<BadgeCheck className="h-6 w-6" />}
            title="Experiência comprovada"
            description="Anos de prática em procedimentos cirúrgicos de alta complexidade."
          />
          <FeatureCard
            icon={<Handshake className="h-6 w-6" />}
            title="Atendimento humanizado"
            description="Escuta atenta e cuidado genuíno com cada paciente."
          />
          <FeatureCard
            icon={<ThumbsUp className="h-6 w-6" />}
            title="Resultados que falam"
            description="Pacientes satisfeitos e recuperações bem-sucedidas."
          />
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
                   <a
      href="https://wa.me/5585999999999?text=Olá,%20gostaria%20de%20agendar%20consulta."
      target="_blank"
      rel="noopener noreferrer"
    >
          <Button className="h-11 px-7 rounded-full bg-[#3F6F95] hover:bg-[#365f80] text-white shadow-sm hover:shadow-md transition-all">
  Agendar consulta
</Button>
</a>

          <a
            href="#duvidas"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Saiba mais <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border bg-white/70 backdrop-blur p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="flex flex-col items-center text-center gap-3">
        {/* Icon bubble */}
        <div className="h-12 w-12 rounded-2xl flex items-center justify-center border bg-[#3F6F95]/10 text-[#3F6F95]">
          {icon}
        </div>

        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}