import { useState } from "react";
import { Plus } from "lucide-react";

// Respostas montadas a partir do que já está no site (avaliação primeiro,
// atendimento em BH ou online, agendamento pelo WhatsApp).
// Vale a Dayana revisar o texto antes de publicar.
const perguntas = [
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A gente conversa antes de qualquer procedimento. Eu entendo o que você gostaria de transformar ou realçar, avalio seus traços e sua rotina, e só então indico o caminho que faz sentido para você.",
  },
  {
    pergunta: "Os procedimentos são personalizados?",
    resposta:
      "Sempre. Não existe protocolo igual para duas pessoas: o plano é montado a partir da sua avaliação, do resultado que você busca e do que combina com a sua individualidade.",
  },
  {
    pergunta: "O atendimento é presencial ou online?",
    resposta:
      "A consulta pode acontecer presencialmente em Belo Horizonte ou online. Em qualquer formato, você sai com clareza do que fazer, por que fazer e como ajustar quando a vida muda.",
  },
  {
    pergunta: "Os resultados ficam naturais?",
    resposta:
      "Esse é o compromisso do meu trabalho: beleza sem exageros. Os procedimentos são escolhidos para valorizar seus traços, respeitando a sua beleza em vez de padronizá-la.",
  },
  {
    pergunta: "Como faço para agendar?",
    resposta:
      "É só me chamar no WhatsApp pelo botão desta página. A gente conversa, tira suas dúvidas e encontra o melhor horário para a sua avaliação.",
  },
];

const Duvidas = () => {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="duvidas" className="faq section container">
      <div className="reveal reveal-title reveal-pending">
        <p className="eyebrow">07 / ANTES DO PRIMEIRO CUIDADO</p>
        <h2>
          Dúvidas <em>frequentes.</em>
        </h2>
        <p>
          Algumas respostas para você entender melhor como é ser atendida por
          mim.
        </p>
      </div>

      <div className="reveal reveal-fade reveal-pending">
        <div className="faq-list">
          {perguntas.map((p, i) => {
            const estado = aberta === i ? "open" : "closed";
            return (
              <div key={p.pergunta} data-state={estado}>
                <h3>
                  <button
                    type="button"
                    className="faq-trigger"
                    data-state={estado}
                    aria-expanded={aberta === i}
                    aria-controls={`resposta-${i}`}
                    onClick={() => setAberta((a) => (a === i ? null : i))}
                  >
                    <span>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      {p.pergunta}
                    </span>
                    <span className="faq-plus" aria-hidden="true">
                      <Plus />
                    </span>
                  </button>
                </h3>
                <div
                  id={`resposta-${i}`}
                  role="region"
                  data-state={estado}
                >
                  {/* O wrapper e quem colapsa: o padding do <p> nao deixaria
                      a linha do grid chegar a zero. */}
                  <div>
                    <p>{p.resposta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Duvidas;
