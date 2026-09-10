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
            Sou nutricionista e ajudo pessoas que querem emagrecer, ganhar massa
            e cuidar do corpo sem transformar a alimentação em medo, culpa ou
            regra impossível de cumprir.
          </p>
          <p>
            Meu trabalho é te ensinar a comer com autonomia: entendendo suas
            escolhas, respeitando sua rotina e construindo um caminho que faça
            sentido fora do papel.
          </p>
          <p>
            Nada de dieta de gaveta. O plano nasce da sua vida real, dos seus
            objetivos e do que precisa mudar para você sustentar resultado com
            mais segurança.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
