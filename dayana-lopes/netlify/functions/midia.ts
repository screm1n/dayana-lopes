// GET /.netlify/functions/midia?k=<chave>
// Público. Devolve os bytes de uma imagem gravada no store `midia`.
import { storeMidia, json } from "./_lib";

export default async (req: Request) => {
  const url = new URL(req.url);
  const chave = url.searchParams.get("k")?.trim();
  if (!chave || !/^[a-z0-9_]+$/i.test(chave)) return json(400, { erro: "chave invalida" });

  try {
    const arquivo = await storeMidia().getWithMetadata(chave, { type: "arrayBuffer" });
    if (!arquivo) return json(404, { erro: "nao encontrado" });
    const tipo = (arquivo.metadata?.contentType as string) || "image/jpeg";
    return new Response(arquivo.data as ArrayBuffer, {
      status: 200,
      headers: {
        "content-type": tipo,
        "cache-control": "public, max-age=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    return json(500, { erro: "falha ao ler midia" });
  }
};
