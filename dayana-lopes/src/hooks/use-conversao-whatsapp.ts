import { useEffect } from "react";
import { iniciarGoogleAds, registrarConversaoWhatsApp } from "@/lib/analytics";

/**
 * Registra conversão do Google Ads em qualquer clique de link do WhatsApp.
 *
 * Ouve o clique no documento inteiro em vez de em cada botão. Assim vale para
 * os links que já existem (hero, contato, botão flutuante, rodapé) e para
 * qualquer outro que venha depois, sem precisar lembrar de instrumentar.
 */
export function useConversaoWhatsApp() {
  useEffect(() => {
    iniciarGoogleAds();

    const aoClicar = (evento: MouseEvent) => {
      const alvo = (evento.target as HTMLElement | null)?.closest?.("a");
      if (!alvo) return;

      const destino = alvo.getAttribute("href") ?? "";
      const ehWhatsApp =
        destino.includes("api.whatsapp.com") ||
        destino.includes("wa.me") ||
        destino.includes("web.whatsapp.com");

      if (ehWhatsApp) registrarConversaoWhatsApp();
    };

    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);
}
