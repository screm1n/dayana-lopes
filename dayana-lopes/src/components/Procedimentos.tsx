import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

const Procedimentos = () => {
  const { conteudo, carregando } = useConteudo();
  const lista = conteudo.procedimentos;
  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice((i) => (lista.length ? (i + 1) % lista.length : 0));
  const anterior = () => setIndice((i) => (lista.length ? (i - 1 + lista.length) % lista.length : 0));

  const seguro = Math.min(indice, Math.max(0, lista.length - 1));
  const atual = lista[seguro];

  return (
    <section id="procedimentos" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="revela mx-auto max-w-2xl text-center">
          <p className="rotulo">Procedimentos</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Cada procedimento,
            <span className="block italic">um cuidado único.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-foreground/75">
            Conheça os tratamentos que ofereço, pensados para valorizar sua beleza natural com técnica e delicadeza.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {carregando ? (
            <div className="grid h-[420px] place-items-center rounded-2xl border border-primary/10 bg-card/70 shadow-carta">
              <p className="text-sm text-foreground/50">carregando…</p>
            </div>
          ) : lista.length === 0 ? (
            <div className="grid h-[420px] place-items-center rounded-2xl border border-dashed border-primary/25 bg-card/50 px-6 text-center">
              <div>
                <p className="rotulo">Em breve</p>
                <p className="mt-4 max-w-md font-display text-2xl italic text-primary">
                  Os procedimentos estão sendo preparados com carinho.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-stretch">
              <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-carta">
                <div className="relative aspect-[4/5] w-full bg-secondary/25 md:aspect-auto md:h-full">
                  <img
                    key={atual.id}
                    src={urlImagem(atual.midiaKey, "")}
                    alt={atual.titulo}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-primary/10 bg-card/80 p-8 shadow-carta">
                <div>
                  <p className="rotulo">{`${seguro + 1} de ${lista.length}`}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-primary">{atual.titulo}</h3>
                  {atual.descricao && (
                    <p className="mt-5 text-base leading-relaxed text-foreground/75 whitespace-pre-line">
                      {atual.descricao}
                    </p>
                  )}
                </div>

                {lista.length > 1 && (
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={anterior}
                        aria-label="Procedimento anterior"
                        className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-secondary/50"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={proximo}
                        aria-label="Próximo procedimento"
                        className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-carta transition-transform hover:scale-105"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {lista.map((p, i) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setIndice(i)}
                          aria-label={`Ir para procedimento ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === seguro ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Procedimentos;
