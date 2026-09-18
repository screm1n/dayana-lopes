import { MessageCircleHeart } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";

// Faixa de fechamento antes do rodapé, no magenta profundo da paleta.
const CtaFinal = () => (
  <section className="faixa-escura py-20 md:py-28">
    <div className="container">
      <div className="revela mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Sua beleza,
          <span className="block italic text-secondary">sua melhor versão.</span>
        </h2>
        <a
          href={LINK_AGENDAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent-foreground px-8 py-4 font-medium text-accent shadow-carta transition-transform hover:scale-[1.03]"
        >
          <MessageCircleHeart className="h-5 w-5" strokeWidth={1.8} />
          Agendar minha consulta
        </a>
      </div>
    </div>
  </section>
);

export default CtaFinal;
