import { ArrowUpRight } from "lucide-react";
import { CIDADE, LINK_AGENDAMENTO, NOME_CLINICA } from "@/lib/links";
import { ImagemComPlaceholder } from "./Placeholder";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";
import Rotulo from "./Rotulo";

const modalidades = [
  {
    titulo: "Presencial em BH",
    texto:
      "Consulta em Belo Horizonte para quem prefere estar frente a frente no acompanhamento.",
  },
  {
    titulo: "Online",
    texto:
      "Atendimento à distância com a mesma escuta, planejamento e ajustes do presencial.",
  },
];

const Espaco = () => {
  const { conteudo } = useConteudo();
  const srcLogoClinica = urlImagem(conteudo.imagens.logoClinica, "/logo-clinica.png");

  return (
    <section id="espaco" className="secao scroll-mt-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div className="revela">
            <Rotulo numero="04" semFio>
              Atendimento
            </Rotulo>
            <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
              BH ou online.
              <span className="block italic text-accent/85">O plano acompanha você.</span>
            </h2>

            <div className="mt-9 max-w-md space-y-5 leading-relaxed text-foreground/75">
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

            <ul className="mt-12">
              {modalidades.map((m, i) => (
                <li key={m.titulo} className="border-b border-border py-7 first:border-t">
                  <div className="flex gap-6">
                    <span className="rotulo pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="titulo text-2xl">{m.titulo}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/70">
                        {m.texto}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="link-fio mt-10"
            >
              Tirar uma dúvida
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </a>
          </div>

          <div className="revela">
            <div className="grid place-items-center overflow-hidden rounded-arco bg-secondary/40 px-8 py-20">
              <ImagemComPlaceholder
                src={srcLogoClinica}
                arquivoPendente="logo-clinica.png"
                alt={NOME_CLINICA}
                formato="quadrado"
                compacto
                ajuste="contain"
                className="h-40 w-40 !rounded-none md:h-52 md:w-52"
              />
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">
              {NOME_CLINICA}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Espaco;
