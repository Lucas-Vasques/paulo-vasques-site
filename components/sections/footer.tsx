import Image from "next/image";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="border-t bg-gradient-to-b from-white to-brand/10">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center">
              <Image
                src="/LOGO.svg"
                alt="Dr. Paulo Vasques"
                width={180}
                height={50}
                className="object-contain"
              />
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Cirurgia geral e mastologia com atendimento humanizado e acompanhamento
              completo do seu tratamento.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-medium text-brand">
              Atendimento em Fortaleza • Agendamentos
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-tight">Contato</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  href="mailto:phdvasques@gmail.com"
                >
                  <span className="h-9 w-9 rounded-xl border bg-white/70 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-brand" />
                  </span>
                  phdvasques@gmail.com
                </a>
              </li>

              <li>
                <a
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5585999833635"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h-9 w-9 rounded-xl border bg-white/70 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-brand" />
                  </span>
                  WhatsApp: +55 (85) 99983 - 3635
                </a>
              </li>

              <li>
                <a
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  href="https://www.instagram.com/dr.paulovasques?igsh=eHA1ZnM3OGkzYmxv&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h-9 w-9 rounded-xl border bg-white/70 flex items-center justify-center">
                    <AtSign className="h-4 w-4 text-brand" />
                  </span>
                  @dr.paulovasques
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-tight">Endereço</h3>

            <div className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-xl border bg-white/70 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-brand" />
                </span>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Clínica / Consultório</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rua Cel. Linhares,950 <br />
                    2º sobreloja - Sl. 05 - Aldeota <br />
                    CEP 60170-150
                  </p>

                  <a
                    href="https://www.google.com/maps/place/R.+Cel.+Linhares,+950+-+Aldeota,+Fortaleza+-+CE,+60170-150/@-3.736862,-38.49456,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74887e90c450b:0x892dc41add93047b!8m2!3d-3.736862!4d-38.49456!16s%2Fg%2F11bw409st0?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-2 transition-colors mt-2"
                  >
                    Ver no mapa →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Paulo Vasques. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#sobre" className="hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">
              Depoimentos
            </a>
            <a href="#duvidas" className="hover:text-foreground transition-colors">
              Dúvidas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}