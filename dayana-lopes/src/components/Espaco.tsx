import { CIDADE, LINK_AGENDAMENTO } from "@/lib/links";
import { MapPinned, MonitorSmartphone } from "lucide-react";

const modalidades = [
  {
    icone: MapPinned,
    titulo: "Presencial em BH",
    texto:
      "Consulta em Belo Horizonte para quem prefere estar frente a frente no acompanhamento.",
  },
  {
    icone: MonitorSmartphone,
    titulo: "Online",
    texto:
      "Atendimento à distância com a mesma escuta, planejamento e ajustes do presencial.",
  },
];

const Espaco = () => (
  <section id="espaco" className="scroll-mt-24 py-24 md:py-32">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="revela">
          <p className="rotulo">Atendimento</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            BH ou online.
            <span className="block italic">O plano acompanha você.</span>
          </h2>
          <span className="mt-8 fio" />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              A consulta pode acontecer presencialmente em {CIDADE} ou online,
              com uma condução próxima e focada no que funciona para sua rotina.
            </p>
            <p>
              Em qualquer formato, a ideia é sair com clareza do que fazer, por
              que fazer e como ajustar quando a vida muda.
            </p>
          </div>

          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full border border-primary/25 px-7 py-3.5 font-medium text-primary transition-colors hover:border-primary/60 hover:bg-secondary/50"
          >
            Tirar uma dúvida
          </a>
        </div>

        <div className="grid gap-4">
          {modalidades.map(({ icone: Icone, titulo, texto }, i) => (
            <article
              key={titulo}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="revela rounded-2xl border border-border bg-card p-7 shadow-carta"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/10 bg-background text-primary shadow-carta">
                <Icone className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-3xl text-primary">
                {titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/75">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Espaco;
