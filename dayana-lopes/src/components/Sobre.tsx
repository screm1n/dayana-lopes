import { NOME, NOME_COMPLETO, PROFISSAO, REGISTRO } from "@/lib/links";

const Sobre = () => (
  <section id="sobre" className="scroll-mt-24 py-24 md:py-32">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="revela lg:sticky lg:top-28 lg:self-start">
          <p className="rotulo">Sobre mim</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Oi, eu sou a {NOME}.
            <span className="block italic">Prazer em te conhecer.</span>
          </h2>
          <span className="mt-8 fio" />
        </div>

        <div>
          <div className="revela space-y-6 text-lg leading-relaxed text-foreground/80 md:text-xl md:leading-relaxed">
            <p>
              Trabalho com estética e ajudo mulheres a se sentirem ainda mais
              confiantes com a própria imagem.
            </p>
            <p>
              Cada atendimento começa com escuta, cuidado e uma avaliação atenta
              para entender o que faz sentido para você.
            </p>
            <p>
              Meu propósito é entregar resultados naturais, respeitando sua
              beleza e valorizando a sua individualidade.
            </p>
          </div>

          <div className="revela mt-12 border-t border-border pt-7">
            <p className="font-display text-2xl text-primary">{NOME_COMPLETO}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {PROFISSAO}
              {REGISTRO && ` · ${REGISTRO}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
