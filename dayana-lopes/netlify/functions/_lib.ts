// Helpers compartilhados pelas Functions.
import { getStore, type Store } from "@netlify/blobs";

export type Procedimento = {
  id: string;
  titulo: string;
  descricao: string;
  midiaKey: string;
  ordem: number;
};

export type OverrideImagens = {
  logo?: string | null;
  logoClinica?: string | null;
  perfil?: string | null;
};

export type Conteudo = {
  procedimentos: Procedimento[];
  imagens: OverrideImagens;
};

export const CONTEUDO_INICIAL: Conteudo = {
  procedimentos: [],
  imagens: { logo: null, logoClinica: null, perfil: null },
};

export const CHAVE_CONTEUDO = "conteudo";

export const storeDados = (): Store => getStore({ name: "dados", consistency: "strong" });
export const storeMidia = (): Store => getStore({ name: "midia" });

export async function lerConteudo(): Promise<Conteudo> {
  const salvo = await storeDados().get(CHAVE_CONTEUDO, { type: "json" });
  if (!salvo) return CONTEUDO_INICIAL;
  const c = salvo as Partial<Conteudo>;
  return {
    procedimentos: Array.isArray(c.procedimentos) ? c.procedimentos : [],
    imagens: {
      logo: c.imagens?.logo ?? null,
      logoClinica: c.imagens?.logoClinica ?? null,
      perfil: c.imagens?.perfil ?? null,
    },
  };
}

export async function gravarConteudo(c: Conteudo) {
  await storeDados().setJSON(CHAVE_CONTEUDO, c);
}

export function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export function senhaValida(headers: Headers): boolean {
  const enviada = headers.get("x-admin-senha") ?? "";
  const esperada = process.env.ADMIN_SENHA ?? "";
  if (!esperada) return false;
  if (enviada.length !== esperada.length) return false;
  let dif = 0;
  for (let i = 0; i < enviada.length; i++) dif |= enviada.charCodeAt(i) ^ esperada.charCodeAt(i);
  return dif === 0;
}

export function novoId(prefixo: string): string {
  const parte = Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
  return `${prefixo}_${parte}`;
}
