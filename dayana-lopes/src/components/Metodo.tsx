import { LINK_AGENDAMENTO } from "@/lib/links";

const passos = [
  {
    numero: "01",
    titulo: "A gente conversa",
    texto:
      "Você entra em contato e conta o que gostaria de transformar ou realçar.",
  },
  {
    numero: "02",
    titulo: "Eu entendo sua rotina",
    texto:
      "Entendo seus desejos, seus traços e o resultado que combina com você.",
  },
  {
    numero: "03",
    titulo: "Montamos uma estratégia",
    texto:
      "Escolhemos o procedimento e o cuidado adequado para um resultado elegante.",
  },
  {
    numero: "04",
    titulo: "Ajustamos o caminho",
    texto:
      "Você recebe orientação em cada etapa, com segurança e acompanhamento próximo.",
  },
];

const Metodo = () => (
  <section id="metodo" className="scroll-mt-24 py-24 md:py-32">
    <div className="container">
      <div className="revela mx-auto max-w-2xl text-center">
        <p className="rotulo">Como funciona</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
          Beleza sem exageros.
          <span className="block italic">Com cuidado e intenção.</span>
        </h2>
      </div>

      <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
        {passos.map((p, i) => (
          <li
            key={p.numero}
            style={{ transitionDelay: `${i * 80}ms` }}
            className="revela flex gap-5 rounded-2xl border border-border bg-card p-7"
          >
            <span className="font-display text-3xl italic text-accent">
              {p.numero}
            </span>
            <div>
              <h3 className="font-display text-2xl text-primary">{p.titulo}</h3>
              <p className="mt-2 leading-relaxed text-foreground/75">{p.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="revela mt-12 text-center">
        <a
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-carta transition-transform hover:scale-[1.03]"
        >
          Quero começar
        </a>
      </div>
    </div>
  </section>
);

export default Metodo;
