import { MessageCircleHeart } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";

// Rótulos e classes neutros de propósito: filtros de ad blocker escondem
// elementos com "whatsapp" no nome.
const BotaoFlutuante = () => (
  <a
    className="conversa-float"
    href={LINK_AGENDAMENTO}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale comigo"
    title="Fale comigo"
  >
    <MessageCircleHeart aria-hidden />
    <span className="conversa-dica">Fale comigo</span>
  </a>
);

export default BotaoFlutuante;
