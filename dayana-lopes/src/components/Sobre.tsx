import { NOME, NOME_COMPLETO, PROFISSAO, REGISTRO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";
import Rotulo from "./Rotulo";

const Sobre = () => {
  const { conteudo } = useConteudo();
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section id="sobre" className="secao scroll-mt-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div className="revela">
            <div className="overflow-hidden rounded-arco bg-secondary/30">
              <ImagemComPlaceholder
                src={srcPerfil}
                arquivoPendente="perfil.jpg"
                alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
                className="aspect-[4/5] w-full !rounded-none object-[center_18%]"
                legenda="foto de perfil"
              />
            </div>
          </div>

          <div>
            <div className="revela">
              <Rotulo numero="06" semFio>
                Sobre mim
              </Rotulo>
              <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
                Oi, eu sou a {NOME}.
                <span className="block italic text-accent/85">Prazer em te conhecer.</span>
              </h2>
            </div>

            <div className="revela mt-10 max-w-xl space-y-6 leading-relaxed text-foreground/75">
              <p>
                Trabalho com estética e ajudo mulheres a se sentirem ainda mais
                confiantes com a própria imagem.
              </p>
              <p>
                Cada atendimento começa com escuta, cuidado e uma avaliação
                atenta para entender o que faz sentido para você.
              </p>
              <p>
                Meu propósito é entregar resultados naturais, respeitando sua
                beleza e valorizando a sua individualidade.
              </p>
            </div>

            <div className="revela mt-12 border-t border-border pt-7">
              <p className="titulo text-2xl">{NOME_COMPLETO}</p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                {PROFISSAO}
                {REGISTRO && ` · ${REGISTRO}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
