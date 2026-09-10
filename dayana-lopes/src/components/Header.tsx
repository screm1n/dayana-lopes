import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LINK_AGENDAMENTO, NOME, PROFISSAO } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";

const secoes = [
  { id: "sobre", rotulo: "Sobre mim" },
  { id: "servicos", rotulo: "Serviços" },
  { id: "para-quem", rotulo: "Para quem é" },
  { id: "espaco", rotulo: "Atendimento" },
  { id: "contato", rotulo: "Contato" },
];

const Header = () => {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || menuAberto
          ? "bg-background/95 shadow-carta backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between gap-4 py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start gap-1.5 text-left leading-tight md:flex-row md:items-center md:gap-3"
          aria-label="Voltar ao topo"
        >
          <ImagemComPlaceholder
            src="/logo.png"
            alt={`Logo ${NOME}`}
            formato="quadrado"
            compacto
            ajuste="contain"
            className="h-16 w-16 shrink-0 !rounded-md border border-primary/10 bg-white p-1 shadow-carta md:h-14 md:w-14 md:p-1.5"
          />
          <span>
            <span className="block font-display text-xl text-primary md:text-2xl">
              {NOME}
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.26em] text-accent">
              {PROFISSAO}
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {secoes.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => irPara(s.id)}
                className="text-sm text-foreground/75 transition-colors hover:text-primary"
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
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Agendar consulta
          </a>

          <button
            onClick={() => setMenuAberto((v) => !v)}
            className="rounded-full p-2 text-primary transition-colors hover:bg-muted lg:hidden"
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
