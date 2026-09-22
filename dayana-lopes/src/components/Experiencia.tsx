import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Experiencia = () => {
  const { conteudo } = useConteudo();
  // O terceiro slot de imagem do painel /admin passou a ser a foto do espaço.
  const srcEspaco = urlImagem(conteudo.imagens.espaco, "/espaco.jpg");

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
        <div className="reveal reveal-image reveal-pending experience-main">
          <ImagemComPlaceholder
            src={srcEspaco}
            arquivoPendente="espaco.jpg"
            alt="Consultório da Dra. Dayana Lopes em Belo Horizonte"
            legenda="foto do espaço"
          />
          <span className="image-caption">Um espaço pensado para você.</span>
        </div>

        <div className="experience-aside">
          <p>
            A consulta pode acontecer presencialmente em Belo Horizonte ou
            online, com uma condução próxima e focada no que funciona para sua
            rotina. Em qualquer formato, a ideia é sair com clareza do que
            fazer, por que fazer e como ajustar quando a vida muda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
