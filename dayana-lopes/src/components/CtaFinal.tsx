import { ArrowUpRight } from "lucide-react";
import { ATENDIMENTO, LINK_AGENDAMENTO } from "@/lib/links";

// Faixa de fechamento antes do rodapé, no magenta profundo da paleta.
const CtaFinal = () => (
  <section className="faixa-escura secao">
    <div className="container">
      <div className="revela mx-auto max-w-2xl text-center">
        <p className="rotulo">{ATENDIMENTO}</p>
        <h2 className="titulo mt-7 text-[2.8rem] md:text-5xl lg:text-[3.8rem]">
          Sua beleza,
          <span className="block italic text-secondary">sua melhor versão.</span>
        </h2>
        <a
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          className="botao-claro mt-12"
        >
          Agendar consulta
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
        </a>
      </div>
    </div>
  </section>
);

export default CtaFinal;
