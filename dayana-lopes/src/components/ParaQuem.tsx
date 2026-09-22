import { ArrowUpRight } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";

const situacoes = [
  "Quer realçar sua beleza com naturalidade",
  "Busca cuidar da pele e dos seus traços",
  "Deseja se sentir mais confiante no espelho",
  "Valoriza um atendimento acolhedor e individual",
  "Quer resultados elegantes, sem exageros",
  "Precisa de orientação para escolher o melhor procedimento",
];

const ParaQuem = () => (
  <section id="para-quem" className="body-section">
    <div className="container body-layout">
      <div className="reveal reveal-fade reveal-pending body-copy">
        <p className="eyebrow">02 / PARA QUEM É</p>
        <h2>
          Se você se
          <br />
          reconhecer <em>em alguma delas.</em>
        </h2>
        <p>
          O cuidado começa entendendo você e termina com uma versão ainda mais
          sua.
        </p>
        <a
          className="text-link"
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
        >
          A gente precisa conversar <ArrowUpRight aria-hidden />
        </a>
      </div>

      <div>
        <div className="reveal reveal-image reveal-pending">
          <img
            className="body-image"
            src="/perfil.jpg"
            alt="Dra. Dayana Lopes em seu atendimento"
            loading="lazy"
          />
        </div>
        <div className="body-treatments">
          {situacoes.map((s, i) => (
            <a
              key={s}
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s}
              <ArrowUpRight aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ParaQuem;
