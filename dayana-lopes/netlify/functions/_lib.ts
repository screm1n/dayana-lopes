// Helpers compartilhados pelas Functions.
import { getStore, type Store } from "@netlify/blobs";

export type Procedimento = {
  id: string;
  titulo: string;
  descricao: string;
  midiaKey: string;
  ordem: number;
};

/* Cada alvo aqui vira uma opcao de troca no /admin. A chave e usada como
   nome do arquivo do Blob, entao nao renomear depois de gravado. */
export const ALVOS_IMAGEM = [
  "logo",
  "logoClinica",
  "perfil",
  "menu1",
  "menu2",
  "menu3",
  "menu4",
  "menu5",
  "menu6",
  "menu7",
  "menu8",
] as const;
export type AlvoImagem = (typeof ALVOS_IMAGEM)[number];
export type OverrideImagens = Partial<Record<AlvoImagem, string | null>>;

export type Conteudo = {
  procedimentos: Procedimento[];
  imagens: OverrideImagens;
};

export const CONTEUDO_INICIAL: Conteudo = {
  procedimentos: [],
  imagens: Object.fromEntries(ALVOS_IMAGEM.map((a) => [a, null])) as OverrideImagens,
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
    imagens: Object.fromEntries(
      ALVOS_IMAGEM.map((a) => [a, c.imagens?.[a] ?? null]),
    ) as OverrideImagens,
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
