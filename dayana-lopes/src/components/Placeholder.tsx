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
};

export function ImagemComPlaceholder({
  src,
  alt,
  className = "",
  formato = "quadrado",
  legenda = "aguardando arquivo",
  compacto = false,
  ajuste = "cover",
}: Props) {
  const [erro, setErro] = useState(false);

  const forma =
    formato === "circular" ? "rounded-full" : "rounded-2xl";
  const encaixe = ajuste === "contain" ? "object-contain" : "object-cover";

  if (erro) {
    if (compacto) {
      return (
        <div
          role="img"
          aria-label={`${alt} — pendente`}
          title="Substituir public/logo.png"
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
          <p className="mt-2 text-[0.7rem] text-foreground/50">
            substituir <code className="font-mono">public/{src.replace(/^\//, "")}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErro(true)}
      className={`${forma} ${encaixe} ${className}`}
    />
  );
}
