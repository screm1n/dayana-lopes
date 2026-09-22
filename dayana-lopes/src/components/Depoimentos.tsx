type Depoimento = { texto: string; autora: string };

/**
 * PREENCHER com relatos reais de clientes, com autorização delas.
 *
 * Deixei a lista vazia de propósito: depoimento inventado é propaganda falsa,
 * então a seção só aparece no site depois que houver relato de verdade aqui.
 * Formato:
 *   { texto: "O atendimento foi...", autora: "Primeiro nome + inicial" }
 */
const depoimentos: Depoimento[] = [];

const Depoimentos = () => {
  if (!depoimentos.length) return null;

  return (
    <section className="testimonials section container">
      <div className="reveal reveal-fade reveal-pending">
        <p className="eyebrow">07 / QUEM JÁ PASSOU POR AQUI</p>
        <h2>
          Experiências que <em>acolhem.</em>
        </h2>
      </div>

      <div className="quotes">
        {depoimentos.map((d, i) => (
          <div
            key={d.autora}
            className="reveal reveal-fade reveal-pending"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <blockquote>
              <span className="quote-mark">“</span>
              <p>{d.texto}</p>
              <footer>{d.autora}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
