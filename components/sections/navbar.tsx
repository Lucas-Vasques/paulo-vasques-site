import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Left group */}
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center">
            <Image
              src="/LOGO.svg"
              alt="Dr. Paulo Vasques"
              width={150}
              height={42}
              className="object-contain"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#sobre"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mim
            </a>
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
            <a
              href="#duvidas"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mais
            </a>
          </nav>
        </div>

        {/* CTA */}
         <a
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5585999833635"
      target="_blank"
      rel="noopener noreferrer"
    >
          <Button className="h-11 px-7 rounded-full bg-[#3F6F95] hover:bg-[#365f80] text-white shadow-sm hover:shadow-md transition-all">
  Agendar
</Button>
 </a>
      </div>
    </header>
  );
}