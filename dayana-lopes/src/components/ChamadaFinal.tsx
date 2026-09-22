import { ArrowUpRight } from "lucide-react";
import { ATENDIMENTO, LINK_AGENDAMENTO } from "@/lib/links";

const ChamadaFinal = () => (
  <section className="final-cta">
    <div className="reveal reveal-fade reveal-pending container">
      <p className="eyebrow">{ATENDIMENTO.toUpperCase()}</p>
      <h2>
        Sua beleza,
        <br />
        sua melhor <em>versão.</em>
      </h2>
      <p>
        Procedimentos estéticos personalizados para realçar sua beleza com
        segurança, leveza e naturalidade.
      </p>
      <a
        className="button light"
        href={LINK_AGENDAMENTO}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar consulta <ArrowUpRight aria-hidden />
      </a>
    </div>
  </section>
);

export default ChamadaFinal;
