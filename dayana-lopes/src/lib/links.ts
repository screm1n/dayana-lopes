// ============================================================
//  PREENCHER TUDO AQUI. Reflete no site inteiro.
// ============================================================

export const NOME = "Dayana Lopes";
export const NOME_COMPLETO = "Dayana Lopes";
export const PROFISSAO = "Estética Avançada · Tricologia Capilar";
export const NOME_CLINICA = "Espaço Sempre Linda Estética e Beleza";

// Registro do conselho (CRN, CRP, CREFITO...). Vazio = some do rodapé.
export const REGISTRO = "CRBM 17976";

export const CIDADE = "Belo Horizonte, MG";
export const ATENDIMENTO = "Atendimento presencial em Belo Horizonte";

// Só os dígitos, com DDI 55.
export const WHATSAPP_NUMERO = "(31) 98387-4765";
export const WHATSAPP_TEL = "5531983874765";

export const INSTAGRAM = "https://www.instagram.com/explore/locations/584703575030591/espaco-sempre-linda-estetica-e-beleza/";
export const INSTAGRAM_HANDLE = "Espaço Sempre Linda";

// Cai no Instagram enquanto o WhatsApp não estiver preenchido,
// pra nenhum botão do site ficar quebrado.
export const LINK_AGENDAMENTO = WHATSAPP_TEL
  ? `https://api.whatsapp.com/send?phone=${WHATSAPP_TEL}` +
    "&text=" +
    encodeURIComponent(
      "Oi! Vim do site e tenho interesse em agendar uma consulta."
    )
  : INSTAGRAM;

export const ROTULO_AGENDAMENTO = WHATSAPP_TEL
  ? WHATSAPP_NUMERO
  : INSTAGRAM_HANDLE;

export const WHATSAPP = LINK_AGENDAMENTO;

// Prova social do hero e da faixa de destaque. Vazio = some.
export const CLIENTES_ATENDIDOS = "";
