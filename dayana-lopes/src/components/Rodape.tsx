import { Link } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";
import {
  ATENDIMENTO,
  CIDADE,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  NOME_COMPLETO,
  PROFISSAO,
  REGISTRO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const secoes = [
  { id: "inicio", rotulo: "Início" },
  { id: "procedimentos", rotulo: "Procedimentos" },
  { id: "para-quem", rotulo: "Para quem é" },
  { id: "atendimento", rotulo: "Atendimento" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "contato", rotulo: "Contato" },
];

const Rodape = () => {
  const { conteudo } = useConteudo();
  const srcLogo = urlImagem(conteudo.imagens.logo, "/logo.png");

  const irPara = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a
            className="brand"
            href="#inicio"
            aria-label={`${NOME_COMPLETO} — início`}
            onClick={(e) => irPara(e, "inicio")}
          >
            <ImagemComPlaceholder
              src={srcLogo}
              arquivoPendente="logo.png"
              alt=""
              formato="quadrado"
              compacto
              ajuste="contain"
              className="marca-simbolo"
            />
            <span>
              DAYANA L<i>O</i>PES
            </span>
            <small>{PROFISSAO}</small>
          </a>
          <p>
            Beleza com naturalidade.
            <br />
            Cuidado com presença.
          </p>
          <a
            className="text-link"
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta ↗
          </a>
        </div>

        <div className="footer-middle">
          <nav aria-label="Rodapé">
            {secoes.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => irPara(e, s.id)}>
                {s.rotulo}
              </a>
            ))}
          </nav>
          <div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              {INSTAGRAM_HANDLE}
            </a>
            <a href={LINK_AGENDAMENTO} target="_blank" rel="noopener noreferrer">
              {ROTULO_AGENDAMENTO}
            </a>
            <span>{CIDADE}</span>
          </div>
        </div>

        <a
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-conversa"
          aria-label="Fale comigo"
        >
          <MessageCircleHeart aria-hidden />
          <span>
            Fale comigo <small>{ATENDIMENTO}</small>
          </span>
        </a>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {NOME_COMPLETO}
            {REGISTRO && ` · ${REGISTRO}`}
          </span>
          <Link to="/privacidade">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
