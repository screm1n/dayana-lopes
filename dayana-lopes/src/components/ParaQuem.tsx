import Rotulo from "./Rotulo";

const situacoes = [
  "Quer realçar sua beleza com naturalidade",
  "Busca cuidar da pele e dos seus traços",
  "Deseja se sentir mais confiante no espelho",
  "Valoriza um atendimento acolhedor e individual",
  "Quer resultados elegantes, sem exageros",
  "Precisa de orientação para escolher o melhor procedimento",
];

const ParaQuem = () => (
  <section id="para-quem" className="faixa-escura secao scroll-mt-24">
    <div className="container">
      <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="revela self-start">
          <Rotulo numero="03" semFio>
            Para quem é
          </Rotulo>
          <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
            Se você se reconhecer
            <span className="block italic text-secondary">em alguma dessas,</span>
            a gente precisa conversar.
          </h2>
          <p className="mt-8 max-w-sm leading-relaxed text-accent-foreground/70">
            O cuidado começa entendendo você e termina com uma versão ainda mais
            sua.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 sm:gap-x-12">
          {situacoes.map((s, i) => (
            <li
              key={s}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="revela flex gap-5 border-b border-accent-foreground/20 py-6"
            >
              <span className="rotulo pt-1">{String(i + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-accent-foreground/90">{s}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ParaQuem;
