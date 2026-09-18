import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// As 8 imagens são as páginas do menu de procedimentos dela.
// Por isso o formato é de leitor paginado, não de galeria decorativa.
const paginas = Array.from({ length: 8 }, (_, i) => `/${i + 1}.png`);

const Servicos = () => {
  const [indice, setIndice] = useState(0);
  const proximo = () => setIndice((i) => (i + 1) % paginas.length);
  const anterior = () => setIndice((i) => (i - 1 + paginas.length) % paginas.length);

  return (
    <section id="servicos" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div className="revela">
            <p className="rotulo">Serviços</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              Realce sua beleza
              <span className="block italic">com naturalidade.</span>
            </h2>
            <span className="mt-8 fio" />
            <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground/75">
              Procedimentos pensados para valorizar seus traços e cuidar de você
              em cada detalhe.
            </p>

            <div className="mt-9 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={anterior}
                  aria-label="Página anterior do menu"
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-secondary/50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={proximo}
                  aria-label="Próxima página do menu"
                  className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-carta transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <p className="font-display text-xl text-primary/60">
                {String(indice + 1).padStart(2, "0")}
                <span className="mx-1.5 text-primary/25">/</span>
                {String(paginas.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="revela relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-28 w-28 rounded-2xl bg-secondary/70 md:-left-8 md:-top-8 md:h-40 md:w-40"
            />
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-carta">
              <img
                key={paginas[indice]}
                src={paginas[indice]}
                alt={`Menu de procedimentos, página ${indice + 1} de ${paginas.length}`}
                className="aspect-[638/907] w-full animate-sobe-suave object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
