import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Rotulo from "./Rotulo";

// As 8 imagens são as páginas do menu de procedimentos dela.
// Por isso o formato é de leitor paginado, não de galeria decorativa.
const paginas = Array.from({ length: 8 }, (_, i) => `/${i + 1}.png`);

const Servicos = () => {
  const [indice, setIndice] = useState(0);
  const proximo = () => setIndice((i) => (i + 1) % paginas.length);
  const anterior = () => setIndice((i) => (i - 1 + paginas.length) % paginas.length);

  return (
    <section id="servicos" className="secao scroll-mt-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <div className="revela">
            <Rotulo numero="01" semFio>
              Serviços
            </Rotulo>
            <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
              Realce sua beleza
              <span className="block italic text-accent/85">com naturalidade.</span>
            </h2>
            <p className="mt-7 max-w-sm leading-relaxed text-foreground/70">
              Procedimentos pensados para valorizar seus traços e cuidar de você
              em cada detalhe.
            </p>

            <div className="mt-11 flex items-center gap-8 border-t border-border pt-7">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={anterior}
                  aria-label="Página anterior do menu"
                  className="grid h-11 w-11 place-items-center border border-primary/20 text-primary transition-colors hover:border-primary"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={proximo}
                  aria-label="Próxima página do menu"
                  className="grid h-11 w-11 place-items-center bg-primary text-primary-foreground transition-colors hover:bg-accent"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <p className="font-display text-2xl text-accent/80">
                {String(indice + 1).padStart(2, "0")}
                <span className="ml-2 text-sm tracking-[0.1em] text-muted-foreground">
                  / {String(paginas.length).padStart(2, "0")}
                </span>
              </p>
            </div>
          </div>

          <div className="revela mx-auto w-full max-w-[30rem] lg:max-w-none">
            <img
              key={paginas[indice]}
              src={paginas[indice]}
              alt={`Menu de procedimentos, página ${indice + 1} de ${paginas.length}`}
              className="aspect-[638/907] w-full animate-sobe-suave bg-card object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
