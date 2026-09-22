import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// As oito imagens em /public são as páginas do menu impresso da clínica.
// Por isso a seção é um leitor paginado, e não uma galeria decorativa.
const paginas = Array.from({ length: 8 }, (_, i) => `/${i + 1}.png`);

const MenuProcedimentos = () => {
  const [indice, setIndice] = useState(0);
  const total = paginas.length;
  const ir = (passo: number) => setIndice((i) => (i + passo + total) % total);

  return (
    <section className="results section" id="menu">
      <div className="container results-layout">
        <div className="reveal reveal-fade reveal-pending">
          <p className="eyebrow">04 / MENU DE PROCEDIMENTOS</p>
          <h2>
            Realce sua beleza
            <br />
            <em>com naturalidade.</em>
          </h2>
          <p>
            Procedimentos pensados para valorizar seus traços e cuidar de você
            em cada detalhe. Folheie o menu completo.
          </p>
        </div>

        <div className="reveal reveal-image reveal-pending">
          <figure className="menu-leitor">
            <img
              key={paginas[indice]}
              src={paginas[indice]}
              alt={`Menu de procedimentos, página ${indice + 1} de ${total}`}
              loading="lazy"
            />
            <figcaption>
              <div className="menu-controles">
                <button
                  type="button"
                  onClick={() => ir(-1)}
                  aria-label="Página anterior do menu"
                >
                  <ArrowLeft aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => ir(1)}
                  aria-label="Próxima página do menu"
                >
                  <ArrowRight aria-hidden />
                </button>
              </div>
              <span className="menu-contador">
                {String(indice + 1).padStart(2, "0")}
                <small> / {String(total).padStart(2, "0")}</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MenuProcedimentos;
