import { useState } from "react";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";
import Rotulo from "./Rotulo";

// A lista vem do painel /admin (Netlify Blobs). Só a apresentação mudou —
// os dados continuam saindo de useConteudo() e as imagens de urlImagem().
const Procedimentos = () => {
  const { conteudo, carregando } = useConteudo();
  const lista = conteudo.procedimentos;
  const [indice, setIndice] = useState(0);

  const seguro = Math.min(indice, Math.max(0, lista.length - 1));
  const atual = lista[seguro];

  const Cabecalho = (
    <>
      <Rotulo numero="02" semFio>
        Procedimentos
      </Rotulo>
      <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
        Cada procedimento,
        <span className="block italic text-accent/85">um cuidado único.</span>
      </h2>
      <p className="mt-7 max-w-sm leading-relaxed text-foreground/70">
        Conheça os tratamentos que ofereço, pensados para valorizar sua beleza
        natural com técnica e delicadeza.
      </p>
    </>
  );

  return (
    <section id="procedimentos" className="secao scroll-mt-24">
      <div className="container">
        {carregando ? (
          <div>
            {Cabecalho}
            <p className="mt-16 text-sm text-foreground/40">carregando…</p>
          </div>
        ) : lista.length === 0 ? (
          <div>
            {Cabecalho}
            <div className="mt-14 border-t border-border pt-14">
              <p className="rotulo">Em breve</p>
              <p className="titulo mt-5 max-w-lg text-3xl italic">
                Os procedimentos estão sendo preparados com carinho.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="revela">
              {Cabecalho}

              {/* Imagem em arco, trocando conforme o item selecionado. */}
              <div className="mt-12 overflow-hidden rounded-arco bg-secondary/30">
                <img
                  key={atual.id}
                  src={urlImagem(atual.midiaKey, "")}
                  alt={atual.titulo}
                  className="aspect-[4/5] w-full animate-sobe-suave object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-5">
                <p className="font-display text-2xl text-accent/80">
                  {String(seguro + 1).padStart(2, "0")}
                  <span className="ml-2 text-sm tracking-[0.1em] text-muted-foreground">
                    / {String(lista.length).padStart(2, "0")}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">{atual.titulo}</p>
              </div>
            </div>

            <ul className="lg:pt-4">
              {lista.map((p, i) => {
                const ativo = i === seguro;
                return (
                  <li key={p.id} className="border-b border-border first:border-t lg:first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setIndice(i)}
                      aria-current={ativo}
                      className={`flex w-full gap-6 border-l-2 py-9 pl-6 text-left transition-colors md:py-11 ${
                        ativo ? "border-accent" : "border-transparent hover:border-border"
                      }`}
                    >
                      <span className="rotulo pt-2.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">
                        <span
                          className={`titulo block text-3xl transition-colors md:text-4xl ${
                            ativo ? "text-primary" : "text-primary/55"
                          }`}
                        >
                          {p.titulo}
                        </span>
                        {p.descricao && (
                          <span className="mt-4 block max-w-xl whitespace-pre-line leading-relaxed text-foreground/70">
                            {p.descricao}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Procedimentos;
