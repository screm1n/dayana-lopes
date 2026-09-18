import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINK_AGENDAMENTO, NOME, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const secoes = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "procedimentos", rotulo: "Procedimentos" },
  { id: "para-quem", rotulo: "Para quem é" },
  { id: "espaco", rotulo: "Atendimento" },
  { id: "sobre", rotulo: "Sobre" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solido ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between gap-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-left"
          aria-label="Voltar ao topo"
        >
          <ImagemComPlaceholder
            src={urlImagem(conteudo.imagens.logo, "/logo.png")}
            arquivoPendente="logo.png"
            alt={`Logo ${NOME}`}
            formato="quadrado"
            compacto
            ajuste="contain"
            className={`h-11 w-11 shrink-0 !rounded-none md:h-12 md:w-12 ${
              solido ? "" : "bg-accent-foreground/95 p-1"
            }`}
          />
          <span>
            <span
              className={`block font-display text-lg uppercase leading-none tracking-[0.18em] transition-colors md:text-xl ${
                solido ? "text-primary" : "text-accent-foreground"
              }`}
            >
              {NOME}
            </span>
            <span
              className={`mt-1.5 hidden text-[0.55rem] uppercase tracking-[0.22em] transition-colors sm:block ${
                solido ? "text-muted-foreground" : "text-accent-foreground/60"
              }`}
            >
              {PROFISSAO}
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {secoes.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => irPara(s.id)}
                  className={`text-sm transition-colors ${
                    solido
                      ? "text-foreground/70 hover:text-primary"
                      : "text-accent-foreground/75 hover:text-accent-foreground"
                  }`}
                >
                  {s.rotulo}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border-b pb-1.5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors ${
              solido
                ? "border-primary/30 text-primary hover:border-primary"
                : "border-accent-foreground/40 text-accent-foreground hover:border-accent-foreground"
            }`}
          >
            Agendar consulta
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
          </a>
        </div>

        <button
          onClick={() => setMenuAberto((v) => !v)}
          className={`p-2 transition-colors lg:hidden ${
            solido ? "text-primary" : "text-accent-foreground"
          }`}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuAberto && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <ul className="container flex flex-col py-2">
            {secoes.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => irPara(s.id)}
                  className="w-full border-b border-border/70 py-4 text-left text-sm uppercase tracking-[0.12em] text-foreground/80"
                >
                  {s.rotulo}
                </button>
              </li>
            ))}
            <li className="py-5">
              <a
                href={LINK_AGENDAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="botao w-full"
              >
                Agendar consulta
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
