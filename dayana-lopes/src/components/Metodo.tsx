const passos = [
  {
    titulo: "A gente conversa",
    texto: "Você entra em contato e conta o que gostaria de transformar ou realçar.",
  },
  {
    titulo: "Eu entendo sua rotina",
    texto: "Entendo seus desejos, seus traços e o resultado que combina com você.",
  },
  {
    titulo: "Montamos uma estratégia",
    texto: "Escolhemos o procedimento e o cuidado adequado para um resultado elegante.",
  },
  {
    titulo: "Ajustamos o caminho",
    texto: "Você recebe orientação em cada etapa, com segurança e acompanhamento próximo.",
  },
];

const Metodo = () => (
  <section id="metodo" className="method section container">
    <div className="reveal reveal-fade reveal-pending">
      <p className="eyebrow">05 / COMO FUNCIONA</p>
      <h2>
        Beleza sem exageros,
        <br />
        com <em>cuidado e intenção.</em>
      </h2>
    </div>

    <div className="steps">
      {passos.map((p, i) => (
        <div
          key={p.titulo}
          className="reveal reveal-fade reveal-pending"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <article>
            <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
            <div className="step-line" />
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </article>
        </div>
      ))}
    </div>
  </section>
);

export default Metodo;
