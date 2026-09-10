// ============================================================
//  PREENCHER TUDO AQUI. Reflete no site inteiro.
// ============================================================

export const NOME = "NOME DA CLIENTE";
export const NOME_COMPLETO = "NOME COMPLETO";
export const PROFISSAO = "Nutricionista"; // ou Psicóloga, Fisioterapeuta...

// Registro do conselho (CRN, CRP, CREFITO...). Vazio = some do rodapé.
export const REGISTRO = "";

export const CIDADE = "CIDADE, UF";
export const ATENDIMENTO = "Presencial em CIDADE e online para todo o Brasil";

// Só os dígitos, com DDI 55.
export const WHATSAPP_NUMERO = "(00) 00000-0000";
export const WHATSAPP_TEL = "";

export const INSTAGRAM = "https://www.instagram.com/USUARIO";
export const INSTAGRAM_HANDLE = "@USUARIO";

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
