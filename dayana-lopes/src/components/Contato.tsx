import { ArrowUpRight, MapPin } from "lucide-react";
import {
  ATENDIMENTO,
  CIDADE,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  PROFISSAO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Contato = () => {
  const { conteudo } = useConteudo();
  // O terceiro slot de imagem do painel /admin passou a ser a foto do espaço.
  const srcEspaco = urlImagem(conteudo.imagens.espaco, "/espaco.jpg");

  return (
    <section id="contato" className="contact section container">
      <div className="reveal reveal-fade reveal-pending">
        <p className="eyebrow">08 / VAMOS COMEÇAR</p>
        <h2>
          Vamos cuidar
          <br />
          de <em>você?</em>
        </h2>
        <p>
          Entre em contato para tirar dúvidas, entender o acompanhamento e
          agendar sua consulta.
        </p>
        <a
          className="button dark"
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar consulta <ArrowUpRight aria-hidden />
        </a>

        <dl>
          <div>
            <dt>ONDE ATENDO</dt>
            <dd>{ATENDIMENTO}</dd>
          </div>
          <div>
            <dt>FALE COMIGO</dt>
            <dd>
              <a href={LINK_AGENDAMENTO} target="_blank" rel="noopener noreferrer">
                {ROTULO_AGENDAMENTO}
              </a>
            </dd>
          </div>
          <div>
            <dt>INSTAGRAM</dt>
            <dd>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="reveal reveal-image reveal-pending contact-place">
        <ImagemComPlaceholder
          src={srcEspaco}
          arquivoPendente="espaco.jpg"
          alt="Consultório da Dra. Dayana Lopes em Belo Horizonte"
          legenda="foto do espaço"
        />
        <div>
          <MapPin aria-hidden />
          <span>
            {CIDADE.split(",")[0]}
            <br />
            <small>{PROFISSAO}</small>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
