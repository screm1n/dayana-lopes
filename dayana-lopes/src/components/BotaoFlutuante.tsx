import { useEffect, useState } from "react";
import { MessageCircleHeart } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";

// Mantem o contato sempre à mão depois do hero.
// Aparece depois que a pessoa passa do hero, pra não competir com o CTA de lá.
const BotaoFlutuante = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 520);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <a
      href={LINK_AGENDAMENTO}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-primary px-5 py-3.5 font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 ${
        visivel
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircleHeart className="h-5 w-5" strokeWidth={1.8} aria-hidden />
      <span className="hidden sm:inline">Agendar consulta</span>
    </a>
  );
};

export default BotaoFlutuante;
