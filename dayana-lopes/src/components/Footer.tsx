import { Link } from "react-router-dom";
import { Instagram, MessageCircleHeart } from "lucide-react";
import {
  ATENDIMENTO,
  REGISTRO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
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
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <ImagemComPlaceholder
                src={urlImagem(conteudo.imagens.logo, "/logo.png")}
                arquivoPendente="logo.png"
                alt={`Logo ${NOME_COMPLETO}`}
                formato="quadrado"
                compacto
                ajuste="contain"
                className="h-14 w-14 shrink-0 !rounded-md bg-white p-2 shadow-carta"
              />
              <div>
                <p className="font-display text-2xl leading-tight">
                  {NOME_COMPLETO}
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] text-primary-foreground/60">
                  {PROFISSAO}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {NOME_CLINICA}. {ATENDIMENTO}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl">Navegar</h2>
            <ul className="mt-4 space-y-2.5">
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
            <h2 className="font-display text-xl">Falar comigo</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINK_AGENDAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-secondary"
                >
                  <MessageCircleHeart className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                  {ROTULO_AGENDAMENTO}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-secondary"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-7 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {NOME_COMPLETO}
            {REGISTRO && ` · ${REGISTRO}`}
          </p>
          <Link
            to="/privacidade"
            className="underline underline-offset-4 transition-colors hover:text-secondary"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
