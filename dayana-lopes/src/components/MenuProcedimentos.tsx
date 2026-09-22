import { useRef, useState } from "react";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";
import { ArrowLeft, ArrowRight } from "lucide-react";

// As oito imagens em /public são as páginas do menu impresso da clínica.
// Por isso a seção é um leitor paginado, e não uma galeria decorativa.
const CHAVES = Array.from({ length: 8 }, (_, i) => `menu${i + 1}` as const);

const MenuProcedimentos = () => {
  const { conteudo } = useConteudo();
  // A chave no Blob e a fallback em /public: /1.png ate /8.png.
  const paginas = CHAVES.map((k, i) => urlImagem(conteudo.imagens[k], `/${i + 1}.png`));
  const [indice, setIndice] = useState(0);
  const total = paginas.length;
  const ir = (passo: number) => setIndice((i) => (i + passo + total) % total);

  // Suporte a arraste: mouse e touch. Passa quando o gesto supera 40px.
  const inicio = useRef<number | null>(null);
  const iniciar = (x: number) => (inicio.current = x);
  const terminar = (x: number) => {
    if (inicio.current === null) return;
    const delta = x - inicio.current;
    inicio.current = null;
    if (Math.abs(delta) < 40) return;
    ir(delta < 0 ? 1 : -1);
  };

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
          <p className="menu-dica">
            Clique na seta ou arraste pro lado para passar.
          </p>
        </div>

        <div className="reveal reveal-image reveal-pending">
          <figure
            className="menu-leitor"
            onPointerDown={(e) => iniciar(e.clientX)}
            onPointerUp={(e) => terminar(e.clientX)}
            onPointerCancel={() => (inicio.current = null)}
            onTouchStart={(e) => iniciar(e.touches[0].clientX)}
            onTouchEnd={(e) => terminar(e.changedTouches[0].clientX)}
          >
            <img
              key={paginas[indice]}
              src={paginas[indice]}
              alt={`Menu de procedimentos, página ${indice + 1} de ${total}`}
              loading="lazy"
              draggable={false}
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
