import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CIDADE, LINK_AGENDAMENTO, NOME_COMPLETO, PROFISSAO, REGISTRO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Hero = () => {
  const { conteudo } = useConteudo();
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section className="hero" id="inicio">
      <div className="hero-photo">
        <ImagemComPlaceholder
          src={srcPerfil}
          arquivoPendente="perfil.jpg"
          alt={`${NOME_COMPLETO}, ${PROFISSAO.toLowerCase()}`}
          legenda="foto de perfil"
        />
      </div>
      <div className="hero-shade" />

      <div className="hero-copy container">
        <p className="eyebrow hero-enter">
          DRA. {NOME_COMPLETO.toUpperCase()} · {REGISTRO}
        </p>
        <h1 className="hero-enter">
          Sua beleza,
          <br />
          sua melhor <em>versão.</em>
        </h1>
        <p className="hero-description hero-enter">
          Procedimentos estéticos personalizados
          <br className="desktop" /> para realçar sua beleza com segurança, leveza
          e naturalidade.
        </p>
        <div className="hero-actions hero-enter">
          <a
            className="button light"
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta <ArrowUpRight aria-hidden />
          </a>
          <a className="text-link" href="#procedimentos">
            Conhecer os procedimentos <ArrowDown aria-hidden />
          </a>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>{PROFISSAO} · HARMONIZAÇÃO FACIAL/CORPORAL</span>
        <a href="#procedimentos" aria-label="Explorar os procedimentos">
          <ArrowDown aria-hidden />
        </a>
        <span>{CIDADE.toUpperCase()}</span>
      </div>
    </section>
  );
};

export default Hero;
