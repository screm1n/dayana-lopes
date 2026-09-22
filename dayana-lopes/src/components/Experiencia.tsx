import { NOME_CLINICA } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Experiencia = () => {
  const { conteudo } = useConteudo();
  const srcLogoClinica = urlImagem(conteudo.imagens.logoClinica, "/logo-clinica.png");
  const srcPerfil = urlImagem(conteudo.imagens.perfil, "/perfil.jpg");

  return (
    <section id="atendimento" className="experience section container">
      <div className="reveal reveal-fade reveal-pending">
        <p className="eyebrow">03 / ATENDIMENTO</p>
        <h2>
          BH ou online,
          <br />o plano <em>acompanha você.</em>
        </h2>
      </div>

      <div className="experience-collage">
        <div className="reveal reveal-image reveal-pending experience-main painel-marca">
          <ImagemComPlaceholder
            src={srcLogoClinica}
            arquivoPendente="logo-clinica.png"
            alt={NOME_CLINICA}
            formato="quadrado"
            compacto
            ajuste="contain"
          />
          <span className="image-caption">{NOME_CLINICA}</span>
        </div>

        <div className="experience-aside">
          <p>
            A consulta pode acontecer presencialmente em Belo Horizonte ou
            online, com uma condução próxima e focada no que funciona para sua
            rotina. Em qualquer formato, a ideia é sair com clareza do que
            fazer, por que fazer e como ajustar quando a vida muda.
          </p>
          <div className="reveal reveal-image reveal-pending">
            <ImagemComPlaceholder
              src={srcPerfil}
              arquivoPendente="perfil.jpg"
              alt="Atendimento com a Dra. Dayana Lopes"
              legenda="foto de perfil"
            />
          </div>
          <span className="eyebrow">ESCUTA. AVALIAÇÃO. ACOMPANHAMENTO.</span>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
