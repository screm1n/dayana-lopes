import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CIDADE, LINK_AGENDAMENTO, NOME_COMPLETO, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Hero = () => {
  const { conteudo } = useConteudo();
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section className="faixa-escura relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* A foto ocupa a direita e se dissolve no painel escuro, sem emenda. */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[66%] lg:w-[62%]">
        <ImagemComPlaceholder
          src={srcPerfil}
          arquivoPendente="perfil.jpg"
          alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
          className="h-full w-full !rounded-none object-[center_18%]"
          legenda="foto de perfil"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-accent from-12% via-accent/85 via-55% to-accent/65 md:bg-gradient-to-r md:from-accent md:from-20% md:via-accent/30 md:via-52% md:to-transparent md:to-80%"
        />
      </div>

      <div className="container flex flex-1 flex-col justify-center pb-32 pt-32 md:pb-36 md:pt-40">
        <div className="max-w-xl animate-sobe-suave lg:max-w-2xl">
          <p className="rotulo">Dra. {NOME_COMPLETO} · CRBM 17976</p>

          <h1 className="titulo mt-8 text-[3.2rem] sm:text-6xl md:text-[4.6rem] lg:text-[5.4rem]">
            Sua beleza,
            <span className="block italic text-secondary">sua melhor versão.</span>
          </h1>

          <p className="mt-9 max-w-md leading-relaxed text-accent-foreground/80">
            Procedimentos estéticos personalizados para realçar sua beleza com
            segurança, leveza e naturalidade.
          </p>

          <div className="mt-12 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-10">
            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-claro"
            >
              Agendar consulta
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </a>
            <a href="#servicos" className="link-fio">
              Conhecer os procedimentos
              <ArrowDown className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior: especialidades à esquerda, cidade à direita. */}
      <div className="relative border-t border-accent-foreground/20">
        <div className="container flex flex-col gap-2 py-5 text-[0.66rem] uppercase tracking-[0.2em] text-accent-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>{PROFISSAO} · Harmonização Facial/Corporal</p>
          <p className="sm:text-right">{CIDADE}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
