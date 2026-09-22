import { ArrowUpRight, MapPin } from "lucide-react";
import {
  ATENDIMENTO,
  CIDADE,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  NOME_CLINICA,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Contato = () => {
  const { conteudo } = useConteudo();
  const srcLogoClinica = urlImagem(conteudo.imagens.logoClinica, "/logo-clinica.png");

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

      <div className="reveal reveal-image reveal-pending contact-place painel-marca">
        <ImagemComPlaceholder
          src={srcLogoClinica}
          arquivoPendente="logo-clinica.png"
          alt={NOME_CLINICA}
          formato="quadrado"
          compacto
          ajuste="contain"
        />
        <div>
          <MapPin aria-hidden />
          <span>
            {CIDADE.split(",")[0]}
            <br />
            <small>{NOME_CLINICA}</small>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contato;
