import { MessageCircleHeart } from "lucide-react";
import {
  ATENDIMENTO,
  LINK_AGENDAMENTO,
  NOME_COMPLETO,
  PROFISSAO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Hero = () => {
  const { conteudo } = useConteudo();
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section className="faixa-escura relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_15%_0%,hsl(var(--primary)/0.55)_0%,transparent_65%)]"
      />

      <div className="mx-auto grid max-w-[1500px] items-stretch md:grid-cols-[1.08fr_0.92fr]">
        {/* Coluna do texto — respeita a largura do container nas telas grandes. */}
        <div className="animate-sobe-suave flex flex-col justify-center px-6 pb-14 pt-28 md:py-32 md:pl-[max(2rem,calc((100vw-1180px)/2))] md:pr-14 lg:py-36">
          <p className="rotulo">Dra. {NOME_COMPLETO} · CRBM 17976</p>

          <h1 className="mt-6 font-display text-[2.9rem] leading-[1.04] sm:text-6xl md:text-[4.1rem] lg:text-[4.6rem]">
            Sua beleza,
            <span className="block italic text-secondary">sua melhor versão.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-accent-foreground/80">
            Procedimentos estéticos personalizados para realçar sua beleza com
            segurança, leveza e naturalidade.
          </p>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-secondary">
            {PROFISSAO}
            <span className="mx-2 text-accent-foreground/30">|</span>
            Harmonização Facial/Corporal · Histotecnologia Clínica
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent-foreground px-7 py-4 font-medium text-accent shadow-carta transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircleHeart className="h-5 w-5" strokeWidth={1.8} />
              Agendar minha consulta
            </a>
            <a
              href="#metodo"
              className="inline-flex w-full items-center justify-center rounded-full border border-accent-foreground/35 px-7 py-4 font-medium text-accent-foreground transition-colors hover:border-accent-foreground hover:bg-accent-foreground/10 sm:w-auto"
            >
              Como funciona
            </a>
          </div>

          <p className="mt-7 text-sm text-accent-foreground/60">{ATENDIMENTO}</p>
        </div>

        {/* Coluna da foto — sangra na borda direita, como na referência. */}
        <div className="relative min-h-[24rem] md:min-h-[36rem] lg:min-h-[40rem]">
          <ImagemComPlaceholder
            src={srcPerfil}
            arquivoPendente="perfil.jpg"
            alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
            className="absolute inset-0 h-full w-full !rounded-none object-[center_22%] md:!rounded-bl-[2.5rem]"
            legenda="foto de perfil"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/45 to-transparent md:bg-gradient-to-r md:from-accent/35 md:to-transparent md:!rounded-bl-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
