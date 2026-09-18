import { Link } from "react-router-dom";
import {
  ATENDIMENTO,
  REGISTRO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  NOME,
  NOME_CLINICA,
  NOME_COMPLETO,
  PROFISSAO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const navegacao = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "procedimentos", rotulo: "Procedimentos" },
  { id: "para-quem", rotulo: "Para quem é" },
  { id: "espaco", rotulo: "Atendimento" },
  { id: "metodo", rotulo: "Como funciona" },
  { id: "sobre", rotulo: "Sobre mim" },
];

const Footer = () => {
  const { conteudo } = useConteudo();

  const irPara = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <ImagemComPlaceholder
                src={urlImagem(conteudo.imagens.logo, "/logo.png")}
                arquivoPendente="logo.png"
                alt={`Logo ${NOME_COMPLETO}`}
                formato="quadrado"
                compacto
                ajuste="contain"
                className="h-12 w-12 shrink-0 !rounded-none bg-primary-foreground/95 p-1"
              />
              <p className="font-display text-xl uppercase leading-none tracking-[0.18em]">
                {NOME}
              </p>
            </div>
            <p className="mt-6 text-[0.66rem] uppercase tracking-[0.2em] text-primary-foreground/55">
              {PROFISSAO}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {NOME_CLINICA}. {ATENDIMENTO}.
            </p>
          </div>

          <div>
            <p className="rotulo text-primary-foreground/55">Navegar</p>
            <ul className="mt-6 space-y-3">
              {navegacao.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => irPara(item.id)}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                  >
                    {item.rotulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="rotulo text-primary-foreground/55">Falar comigo</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={LINK_AGENDAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {ROTULO_AGENDAMENTO}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-primary-foreground/20 pt-7 text-[0.66rem] uppercase tracking-[0.18em] text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {NOME_COMPLETO}
            {REGISTRO && ` · ${REGISTRO}`}
          </p>
          <Link
            to="/privacidade"
            className="transition-colors hover:text-secondary"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
