// GET /.netlify/functions/conteudo
// Público. Devolve o JSON com procedimentos e overrides de imagem.
import { lerConteudo, json } from "./_lib";

export default async () => {
  try {
    const c = await lerConteudo();
    return new Response(JSON.stringify(c), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=30, stale-while-revalidate=60",
      },
    });
  } catch (e) {
    return json(500, { erro: "falha ao ler conteudo" });
  }
};
