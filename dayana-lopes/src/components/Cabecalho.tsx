import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINK_AGENDAMENTO, NOME, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const secoes = [
  { id: "inicio", rotulo: "Início" },
  { id: "procedimentos", rotulo: "Procedimentos" },
  { id: "atendimento", rotulo: "Atendimento" },
  { id: "menu", rotulo: "Menu" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "contato", rotulo: "Contato" },
];

const Marca = ({ src }: { src: string }) => (
  <>
    <ImagemComPlaceholder
      src={src}
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
  </>
);

const Cabecalho = () => {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const { conteudo } = useConteudo();
  const srcLogo = urlImagem(conteudo.imagens.logo, "/logo.png");

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava o scroll do fundo enquanto o menu de celular está aberto.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const irPara = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuAberto(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`header ${rolou ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            className="brand"
            href="#inicio"
            aria-label={`${NOME} — início`}
            onClick={(e) => irPara(e, "inicio")}
          >
            <Marca src={srcLogo} />
          </a>

          <nav className="desktop-nav" aria-label="Principal">
            {secoes.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => irPara(e, s.id)}>
                {s.rotulo}
              </a>
            ))}
          </nav>

          <a
            className="header-cta"
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta <ArrowUpRight aria-hidden />
          </a>

          <button
            type="button"
            className="menu-trigger"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
          >
            {menuAberto ? <Menu aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </header>

      {menuAberto && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="menu-trigger menu-fechar"
            aria-label="Fechar menu"
            onClick={() => setMenuAberto(false)}
          >
            <X aria-hidden />
          </button>
          <nav aria-label="Navegação principal">
            {secoes.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => irPara(e, s.id)}>
                {s.rotulo}
              </a>
            ))}
          </nav>
          <a
            className="button dark"
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta <ArrowUpRight aria-hidden />
          </a>
        </div>
      )}
    </>
  );
};

export default Cabecalho;
