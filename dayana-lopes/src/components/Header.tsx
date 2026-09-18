import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LINK_AGENDAMENTO, NOME, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

// Segue a nova ordem das seções da página.
const secoes = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "procedimentos", rotulo: "Procedimentos" },
  { id: "para-quem", rotulo: "Para quem é" },
  { id: "espaco", rotulo: "Atendimento" },
  { id: "sobre", rotulo: "Sobre mim" },
  { id: "contato", rotulo: "Contato" },
];

const Header = () => {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const { conteudo } = useConteudo();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const irPara = (id: string) => {
    setMenuAberto(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // No topo o header flutua sobre o hero escuro, então inverte as cores.
  const solido = rolou || menuAberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solido ? "bg-background/95 shadow-carta backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between gap-4 py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-left leading-tight"
          aria-label="Voltar ao topo"
        >
          <ImagemComPlaceholder
            src={urlImagem(conteudo.imagens.logo, "/logo.png")}
            arquivoPendente="logo.png"
            alt={`Logo ${NOME}`}
            formato="quadrado"
            compacto
            ajuste="contain"
            className="h-14 w-14 shrink-0 !rounded-md bg-white p-1 shadow-carta md:h-16 md:w-16 md:p-1.5"
          />
          <span>
            <span
              className={`block font-display text-xl transition-colors md:text-2xl ${
                solido ? "text-primary" : "text-accent-foreground"
              }`}
            >
              {NOME}
            </span>
            <span
              className={`hidden text-[0.52rem] uppercase tracking-[0.16em] transition-colors sm:block md:text-[0.6rem] md:tracking-[0.2em] ${
                solido ? "text-accent" : "text-accent-foreground/70"
              }`}
            >
              {PROFISSAO}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {secoes.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => irPara(s.id)}
                className={`text-sm transition-colors ${
                  solido
                    ? "text-foreground/75 hover:text-primary"
                    : "text-accent-foreground/80 hover:text-accent-foreground"
                }`}
              >
                {s.rotulo}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] sm:inline-block ${
              solido
                ? "bg-primary text-primary-foreground"
                : "bg-accent-foreground text-accent"
            }`}
          >
            Agendar consulta
          </a>

          <button
            onClick={() => setMenuAberto((v) => !v)}
            className={`rounded-full p-2 transition-colors lg:hidden ${
              solido ? "text-primary hover:bg-muted" : "text-accent-foreground"
            }`}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuAberto && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <ul className="container flex flex-col py-2">
            {secoes.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => irPara(s.id)}
                  className="w-full border-b border-border/60 py-3.5 text-left font-medium text-foreground/85"
                >
                  {s.rotulo}
                </button>
              </li>
            ))}
            <li className="py-4">
              <a
                href={LINK_AGENDAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
              >
                Agendar consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
