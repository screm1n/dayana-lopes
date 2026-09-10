import { Link } from "react-router-dom";
import { Instagram, MessageCircleHeart } from "lucide-react";
import {
  ATENDIMENTO,
  REGISTRO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  NOME_COMPLETO,
  PROFISSAO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <ImagemComPlaceholder
              src="/logo.png"
              alt={`Logo ${NOME_COMPLETO}`}
              formato="quadrado"
              compacto
              ajuste="contain"
              className="h-14 w-14 shrink-0 !rounded-md bg-white p-2 shadow-carta"
            />
            <p className="font-display text-3xl">{NOME_COMPLETO}</p>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.26em] text-primary-foreground/60">
            {PROFISSAO}
            {REGISTRO && ` · ${REGISTRO}`}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            {ATENDIMENTO}
          </p>

          <Link
            to="/privacidade"
            className="mt-5 inline-block text-sm text-primary-foreground/60 underline underline-offset-4 transition-colors hover:text-secondary"
          >
            Política de privacidade
          </Link>
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
    </div>
  </footer>
);

export default Footer;
