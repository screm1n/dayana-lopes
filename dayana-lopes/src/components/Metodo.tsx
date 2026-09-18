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
  <section id="metodo" className="scroll-mt-24 bg-secondary/30 py-24 md:py-32">
    <div className="container">
      <div className="revela max-w-2xl">
        <p className="rotulo">Como funciona</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
          Beleza sem exageros.
          <span className="block italic">Com cuidado e intenção.</span>
        </h2>
      </div>

      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {passos.map((p, i) => (
          <li
            key={p.numero}
            style={{ transitionDelay: `${i * 80}ms` }}
            className="revela border-t border-primary/20 pt-6"
          >
            <span className="font-display text-4xl italic text-accent/70">
              {p.numero}
            </span>
            <h3 className="mt-5 font-display text-2xl leading-tight text-primary">
              {p.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {p.texto}
            </p>
          </li>
        ))}
      </ol>

      <div className="revela mt-16">
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
