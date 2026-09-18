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
      aria-label="Fale comigo"
      className={`fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center bg-primary text-primary-foreground shadow-carta transition-all duration-300 hover:bg-accent ${
        visivel
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircleHeart className="h-6 w-6" strokeWidth={1.6} aria-hidden />
    </a>
  );
};

export default BotaoFlutuante;
