import { NOME } from "@/lib/links";

const Sobre = () => (
  <section id="sobre" className="scroll-mt-24 bg-card py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <p className="revela rotulo">Sobre mim</p>
        <h2 className="revela mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
          Oi, eu sou a {NOME}.
          <span className="block italic">Prazer em te conhecer.</span>
        </h2>

        <span className="revela mt-9 fio" />

        <div className="revela mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Trabalho com estética e ajudo mulheres a se sentirem ainda mais confiantes com a própria imagem.
          </p>
          <p>
            Cada atendimento começa com escuta, cuidado e uma avaliação atenta para entender o que faz sentido para você.
          </p>
          <p>
            Meu propósito é entregar resultados naturais, respeitando sua beleza e valorizando a sua individualidade.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
