import { ArrowUpRight } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";
import Rotulo from "./Rotulo";

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
  <section id="metodo" className="secao scroll-mt-24 bg-card">
    <div className="container">
      <div className="revela max-w-2xl">
        <Rotulo numero="05" semFio>
          Como funciona
        </Rotulo>
        <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
          Beleza sem exageros.
          <span className="block italic text-accent/85">Com cuidado e intenção.</span>
        </h2>
      </div>

      <ol className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {passos.map((p, i) => (
          <li
            key={p.numero}
            style={{ transitionDelay: `${i * 80}ms` }}
            className="revela border-t border-primary/25 pt-7"
          >
            <span className="font-display text-3xl italic text-accent/75">
              {p.numero}
            </span>
            <h3 className="titulo mt-6 text-2xl">{p.titulo}</h3>
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
          className="botao"
        >
          Quero começar
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
        </a>
      </div>
    </div>
  </section>
);

export default Metodo;
