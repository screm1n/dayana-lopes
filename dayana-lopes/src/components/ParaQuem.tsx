const situacoes = [
  "Quer realçar sua beleza com naturalidade",
  "Busca cuidar da pele e dos seus traços",
  "Deseja se sentir mais confiante no espelho",
  "Valoriza um atendimento acolhedor e individual",
  "Quer resultados elegantes, sem exageros",
  "Precisa de orientação para escolher o melhor procedimento",
];

const ParaQuem = () => (
  <section id="para-quem" className="scroll-mt-24 bg-card py-24 md:py-32">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="revela self-start">
          <p className="rotulo">Para quem é</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Se você se reconhecer
            <span className="block italic">em alguma dessas,</span>
            a gente precisa conversar.
          </h2>
          <span className="mt-8 fio" />
          <p className="mt-6 max-w-md leading-relaxed text-foreground/75">
            O cuidado começa entendendo você e termina com uma versão ainda mais sua.
          </p>
        </div>

        <ul className="grid gap-1">
          {situacoes.map((s, i) => (
            <li
              key={s}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="revela flex items-start gap-4 border-b border-border/70 py-4"
            >
              <span
                aria-hidden
                className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <p className="text-lg leading-relaxed text-foreground/85">{s}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ParaQuem;
