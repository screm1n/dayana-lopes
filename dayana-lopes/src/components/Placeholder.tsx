// Placeholders visuais para foto/logo que o cliente vai mandar.
// Assim que ela mandar perfil.png e logo.png em /public,
// os placeholders somem sozinhos (a <img> real substitui via onError).

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  formato?: "quadrado" | "circular";
  legenda?: string;
  /** Sem texto — só um bloco de cor. Bom para logos pequenos no header. */
  compacto?: boolean;
  ajuste?: "cover" | "contain";
  /** Nome do arquivo estático correspondente (pra mensagem "substituir public/..."). */
  arquivoPendente?: string;
};

export function ImagemComPlaceholder({
  src,
  alt,
  className = "",
  formato = "quadrado",
  legenda = "aguardando arquivo",
  compacto = false,
  ajuste = "cover",
  arquivoPendente,
}: Props) {
  const [erro, setErro] = useState(false);

  const forma =
    formato === "circular" ? "rounded-full" : "rounded-2xl";
  const encaixe = ajuste === "contain" ? "object-contain" : "object-cover";

  const nomeArquivo =
    arquivoPendente ??
    (src.includes("/.netlify/functions/") ? "" : src.replace(/^\//, ""));

  if (erro) {
    if (compacto) {
      return (
        <div
          role="img"
          aria-label={`${alt} — pendente`}
          title={nomeArquivo ? `Substituir public/${nomeArquivo}` : `Pendente: ${alt}`}
          className={`overflow-hidden bg-secondary/70 ${forma} ${className}`}
        />
      );
    }

    return (
      <div
        role="img"
        aria-label={`${alt} — ${legenda}`}
        className={`overflow-hidden bg-secondary/60 text-primary/70 ${forma} ${className}`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-primary/60">
            Pendente
          </p>
          <p className="mt-2 font-display text-xl italic leading-tight">{alt}</p>
          {nomeArquivo && (
            <p className="mt-2 text-[0.7rem] text-foreground/50">
              substituir <code className="font-mono">public/{nomeArquivo}</code>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErro(true)}
      onLoad={() => erro && setErro(false)}
      className={`${forma} ${encaixe} ${className}`}
    />
  );
}
