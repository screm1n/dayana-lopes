// POST /.netlify/functions/admin
// Painel administrativo. Todo request precisa do header x-admin-senha valido.
import {
  ALVOS_IMAGEM,
  CONTEUDO_INICIAL,
  lerConteudo,
  gravarConteudo,
  storeMidia,
  senhaValida,
  json,
  novoId,
  type AlvoImagem,
  type Procedimento,
} from "./_lib";

type Corpo =
  | { acao: "login" }
  | { acao: "salvarProcedimento"; id?: string; titulo: string; descricao: string; imagemBase64?: string; imagemTipo?: string }
  | { acao: "excluirProcedimento"; id: string }
  | { acao: "reordenar"; ids: string[] }
  | { acao: "trocarImagem"; alvo: AlvoImagem; imagemBase64: string; imagemTipo: string }
  | { acao: "restaurarImagem"; alvo: AlvoImagem };

const TIPOS_ACEITOS = new Set(["image/jpeg", "image/png", "image/webp"]);
const TAMANHO_MAX_BYTES = 4 * 1024 * 1024; // 4 MB apos redimensionamento

function bytesDeBase64(base64: string): Uint8Array {
  const puro = base64.replace(/^data:[^;]+;base64,/, "");
  const bin = Buffer.from(puro, "base64");
  return new Uint8Array(bin);
}

async function gravarMidia(prefixo: string, base64: string, tipo: string): Promise<string> {
  if (!TIPOS_ACEITOS.has(tipo)) throw new Error("tipo de imagem nao aceito");
  const bytes = bytesDeBase64(base64);
  if (bytes.byteLength > TAMANHO_MAX_BYTES) throw new Error("imagem grande demais");
  const chave = novoId(prefixo);
  await storeMidia().set(chave, bytes, { metadata: { contentType: tipo } });
  return chave;
}

async function apagarMidia(chave?: string | null) {
  if (!chave) return;
  try {
    await storeMidia().delete(chave);
  } catch {
    /* silencioso: nao bloqueia a operacao principal */
  }
}

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { erro: "metodo nao permitido" });
  if (!senhaValida(req.headers)) return json(401, { erro: "senha invalida" });

  let corpo: Corpo;
  try {
    corpo = (await req.json()) as Corpo;
  } catch {
    return json(400, { erro: "json invalido" });
  }

  try {
    switch (corpo.acao) {
      case "login":
        return json(200, { ok: true });

      case "salvarProcedimento": {
        const titulo = corpo.titulo?.trim() ?? "";
        const descricao = corpo.descricao?.trim() ?? "";
        if (!titulo) return json(400, { erro: "titulo obrigatorio" });
        if (titulo.length > 80) return json(400, { erro: "titulo longo demais" });
        if (descricao.length > 400) return json(400, { erro: "descricao longa demais" });

        const c = await lerConteudo();
        const existente = corpo.id ? c.procedimentos.find((p) => p.id === corpo.id) : undefined;

        let midiaKey = existente?.midiaKey ?? "";
        if (corpo.imagemBase64 && corpo.imagemTipo) {
          const nova = await gravarMidia("proc", corpo.imagemBase64, corpo.imagemTipo);
          if (existente?.midiaKey) await apagarMidia(existente.midiaKey);
          midiaKey = nova;
        }

        if (!midiaKey) return json(400, { erro: "imagem obrigatoria" });

        if (existente) {
          existente.titulo = titulo;
          existente.descricao = descricao;
          existente.midiaKey = midiaKey;
        } else {
          const proc: Procedimento = {
            id: novoId("p"),
            titulo,
            descricao,
            midiaKey,
            ordem: c.procedimentos.length,
          };
          c.procedimentos.push(proc);
        }
        await gravarConteudo(c);
        return json(200, { ok: true, conteudo: c });
      }

      case "excluirProcedimento": {
        const c = await lerConteudo();
        const alvo = c.procedimentos.find((p) => p.id === corpo.id);
        if (!alvo) return json(404, { erro: "procedimento nao encontrado" });
        c.procedimentos = c.procedimentos.filter((p) => p.id !== corpo.id);
        c.procedimentos.forEach((p, i) => (p.ordem = i));
        await apagarMidia(alvo.midiaKey);
        await gravarConteudo(c);
        return json(200, { ok: true, conteudo: c });
      }

      case "reordenar": {
        const c = await lerConteudo();
        const mapa = new Map(c.procedimentos.map((p) => [p.id, p]));
        const nova: Procedimento[] = [];
        corpo.ids.forEach((id, i) => {
          const p = mapa.get(id);
          if (p) {
            p.ordem = i;
            nova.push(p);
          }
        });
        // Anexa qualquer procedimento que ficou de fora da lista, mantendo consistencia.
        c.procedimentos.forEach((p) => {
          if (!corpo.ids.includes(p.id)) {
            p.ordem = nova.length;
            nova.push(p);
          }
        });
        c.procedimentos = nova;
        await gravarConteudo(c);
        return json(200, { ok: true, conteudo: c });
      }

      case "trocarImagem": {
        if (!(ALVOS_IMAGEM as readonly string[]).includes(corpo.alvo))
          return json(400, { erro: "alvo invalido" });
        const c = await lerConteudo();
        const anterior = c.imagens[corpo.alvo];
        const chave = await gravarMidia(`img_${corpo.alvo}`, corpo.imagemBase64, corpo.imagemTipo);
        c.imagens[corpo.alvo] = chave;
        if (anterior) await apagarMidia(anterior);
        await gravarConteudo(c);
        return json(200, { ok: true, conteudo: c });
      }

      case "restaurarImagem": {
        if (!(ALVOS_IMAGEM as readonly string[]).includes(corpo.alvo))
          return json(400, { erro: "alvo invalido" });
        const c = await lerConteudo();
        const anterior = c.imagens[corpo.alvo];
        c.imagens[corpo.alvo] = null;
        if (anterior) await apagarMidia(anterior);
        await gravarConteudo(c);
        return json(200, { ok: true, conteudo: c });
      }

      default:
        return json(400, { erro: "acao desconhecida" });
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "erro desconhecido";
    return json(500, { erro: msg });
  }
};

// Silencia unused warning quando nada usa CONTEUDO_INICIAL diretamente aqui.
void CONTEUDO_INICIAL;
