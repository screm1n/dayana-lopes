import { CIDADE, LINK_AGENDAMENTO, NOME_CLINICA } from "@/lib/links";
import { MapPinned, MonitorSmartphone } from "lucide-react";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

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

const Espaco = () => {
  const { conteudo } = useConteudo();
  const srcLogoClinica = urlImagem(conteudo.imagens.logoClinica, "/logo-clinica.png");

  return (
    <section id="espaco" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
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
                com uma condução próxima e focada no que funciona para sua
                rotina.
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

          <div className="revela">
            <div className="grid place-items-center rounded-2xl bg-secondary/45 px-8 py-14">
              <ImagemComPlaceholder
                src={srcLogoClinica}
                arquivoPendente="logo-clinica.png"
                alt={NOME_CLINICA}
                formato="quadrado"
                compacto
                ajuste="contain"
                className="h-40 w-40 !rounded-lg bg-white p-4 shadow-carta md:h-48 md:w-48"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {modalidades.map(({ icone: Icone, titulo, texto }) => (
                <article
                  key={titulo}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <Icone
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                  <h3 className="mt-4 font-display text-2xl text-primary">
                    {titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Espaco;
