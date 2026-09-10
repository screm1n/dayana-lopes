// Google Ads: medição de conversão no clique do WhatsApp.
//
// >>> PARA ATIVAR, PREENCHA OS DOIS CAMPOS ABAIXO com o que o Google Ads gerar.
//
// Onde achar no Google Ads:
//   Objetivos > Conversões > escolher a conversão > "Configurar tag"
//   O código vem no formato:
//
//     gtag('event', 'conversion', {'send_to': 'AW-123456789/AbC-D_efGhIjKlMnOp'})
//                                              └──── ID ────┘ └───── RÓTULO ─────┘
//
// Enquanto estiverem vazios, nenhum script do Google é carregado
// e nada é rastreado. O site funciona normalmente.

export const GOOGLE_ADS_ID = ""; // ex: "AW-123456789"
export const GOOGLE_ADS_CONVERSAO = ""; // ex: "AW-123456789/AbC-D_efGhIjKlMnOp"

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const configurado = () => GOOGLE_ADS_ID.trim().length > 0;

/** Carrega o gtag.js uma única vez, e só se houver ID configurado. */
export function iniciarGoogleAds() {
  if (!configurado() || typeof window === "undefined") return;
  if (document.getElementById("gtag-google-ads")) return;

  const script = document.createElement("script");
  script.id = "gtag-google-ads";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // O gtag exige o objeto `arguments` cru, não um array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_ID);
}

/** Dispara a conversão. Silencioso se o Google Ads não estiver configurado. */
export function registrarConversaoWhatsApp() {
  if (!configurado() || !GOOGLE_ADS_CONVERSAO || typeof window === "undefined") {
    return;
  }
  window.gtag?.("event", "conversion", { send_to: GOOGLE_ADS_CONVERSAO });
}
