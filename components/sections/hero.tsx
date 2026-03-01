import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <p className="inline-flex w-fit items-center rounded-full border bg-brand/5 px-4 py-1 text-xs font-medium tracking-wide text-brand">
            Cirurgia e Mastologia
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Cirurgião Geral e <br />
            Mastologista em <br />
            Fortaleza
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Atendimento especializado com experiência comprovada. Cuidado
            humanizado para sua saúde.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                     <a
      href="https://wa.me/5585999999999?text=Olá,%20gostaria%20de%20agendar%20consulta."
      target="_blank"
      rel="noopener noreferrer"
    >
          <Button className="h-11 px-7 rounded-full bg-[#3F6F95] hover:bg-[#365f80] text-white shadow-sm hover:shadow-md transition-all">
  Agendar
</Button>
</a>

            <a
              href="#sobre"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Ver diferenciais →
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[480px] md:h-[600px] w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/main_photo.jpg"
            alt="Dr. Paulo Vasques"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}