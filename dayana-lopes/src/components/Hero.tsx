import { MessageCircleHeart } from "lucide-react";
import { ATENDIMENTO, LINK_AGENDAMENTO, NOME, NOME_COMPLETO, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";

const FotoPerfil = ({ className = "" }: { className?: string }) => (
  <div className={`relative mx-auto w-full ${className}`}>
    <div
      aria-hidden
      className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/25 md:-right-6 md:-top-6 md:h-32 md:w-32"
    />
    <ImagemComPlaceholder
      src="/perfil.jpg"
      alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
      className="relative aspect-[3/4] w-full shadow-carta"
      legenda="foto de perfil"
    />
  </div>
);

const LogoHeroMobile = () => (
  <ImagemComPlaceholder
    src="/logo.png"
    alt={`Logo ${NOME}`}
    formato="quadrado"
    compacto
    ajuste="contain"
    className="mx-auto mb-7 mt-7 h-28 w-28 !rounded-lg bg-white p-3 shadow-carta md:hidden"
  />
);

const Hero = () => (
  <section className="relative overflow-hidden pb-20 pt-56 md:pb-28 md:pt-52">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_100%_0%,hsl(var(--secondary))_0%,transparent_60%)]"
    />

    <div className="container">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        <div className="order-1 animate-sobe-suave text-center md:order-none md:text-left">
          <p className="rotulo">Dra. Dayana Lopes · CRBM 17976</p>

          <LogoHeroMobile />

          <h1 className="mt-5 font-display text-[2.7rem] leading-[1.06] text-primary sm:text-6xl md:text-[4.2rem]">
            Sua beleza,
            <span className="block italic text-accent">sua melhor versão.</span>
          </h1>

          <FotoPerfil className="mt-8 max-w-[250px] md:hidden" />

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-foreground/80 md:mx-0">
            Procedimentos estéticos personalizados para realçar sua beleza com segurança, leveza e naturalidade.
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-relaxed text-accent md:mx-0">
            Estética Avançada · Tricologia Capilar
            <span className="mx-2 text-primary/35">|</span>
            Harmonização Facial/Corporal · Histotecnologia Clínica
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-carta transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircleHeart className="h-5 w-5" strokeWidth={1.8} />
              Agendar minha consulta
            </a>
            <a
              href="#metodo"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary/25 px-7 py-4 font-medium text-primary transition-colors hover:border-primary/60 hover:bg-secondary/50 sm:w-auto"
            >
              Como funciona
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{ATENDIMENTO}</p>
        </div>

        <FotoPerfil className="hidden max-w-md md:block" />
      </div>
    </div>
  </section>
);

export default Hero;
