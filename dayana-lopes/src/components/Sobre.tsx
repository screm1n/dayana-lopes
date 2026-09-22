import { NOME_COMPLETO, PROFISSAO, REGISTRO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Sobre = () => {
  const { conteudo } = useConteudo();
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section id="sobre" className="specialist">
      <div className="container specialist-layout">
        <div className="reveal reveal-image reveal-pending">
          <ImagemComPlaceholder
            src={srcPerfil}
            arquivoPendente="perfil.jpg"
            alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
            legenda="foto de perfil"
          />
        </div>

        <div className="reveal reveal-fade reveal-pending specialist-copy">
          <p className="eyebrow">06 / SOBRE MIM</p>
          <h2>
            Oi, eu sou a Dayana.
            <br />
            <em>Prazer em te conhecer.</em>
          </h2>
          <p className="quote">
            “Meu propósito é entregar resultados naturais, respeitando sua
            beleza.”
          </p>
          <p>
            Trabalho com estética e ajudo mulheres a se sentirem ainda mais
            confiantes com a própria imagem. Cada atendimento começa com escuta,
            cuidado e uma avaliação atenta para entender o que faz sentido para
            você.
          </p>
          <div className="specialist-name">
            <h3>{NOME_COMPLETO}</h3>
            <span>
              {PROFISSAO}
              {REGISTRO && ` · ${REGISTRO}`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
