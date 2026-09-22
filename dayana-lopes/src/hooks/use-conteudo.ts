import { useEffect, useState } from "react";

export type ProcedimentoDto = {
  id: string;
  titulo: string;
  descricao: string;
  midiaKey: string;
  ordem: number;
};

export type ConteudoDto = {
  procedimentos: ProcedimentoDto[];
  imagens: {
    logo?: string | null;
    /** O terceiro slot nasceu como logo da clínica e hoje guarda a foto do
     *  espaço. A chave na Function e no Blob continua `logoClinica` — só o
     *  nome exposto ao front mudou, para não migrar dado gravado. */
    espaco?: string | null;
    perfil?: string | null;
  };
};

/** O que a Function `conteudo` devolve, com os nomes de chave originais. */
type ConteudoWire = {
  procedimentos?: ProcedimentoDto[];
  imagens?: {
    logo?: string | null;
    logoClinica?: string | null;
    perfil?: string | null;
  };
};

const INICIAL: ConteudoDto = {
  procedimentos: [],
  imagens: { logo: null, espaco: null, perfil: null },
};

/** Retorna a URL certa para uma imagem gerenciada: se houver override no Blob usa a Function `midia`,
 * senão devolve o caminho estático original em /public. */
export function urlImagem(chaveBlob: string | null | undefined, fallbackEstatico: string) {
  if (chaveBlob) return `/.netlify/functions/midia?k=${encodeURIComponent(chaveBlob)}`;
  return fallbackEstatico;
}

// -----------------------------------------------------------------------------
// Cache/pub-sub em nível de módulo: todos os componentes compartilham o mesmo
// fetch e re-renderizam quando um update chega (do painel admin, por exemplo).
// -----------------------------------------------------------------------------
type Ouvinte = (c: ConteudoDto, carregando: boolean) => void;

let cache: ConteudoDto = INICIAL;
let carregandoGlobal = true;
let promessa: Promise<void> | null = null;
const ouvintes = new Set<Ouvinte>();

function notificar() {
  ouvintes.forEach((o) => o(cache, carregandoGlobal));
}

function normalizar(dados: ConteudoWire): ConteudoDto {
  return {
    procedimentos: Array.isArray(dados.procedimentos)
      ? [...dados.procedimentos].sort((a, b) => a.ordem - b.ordem)
      : [],
    imagens: {
      logo: dados.imagens?.logo ?? null,
      espaco: dados.imagens?.logoClinica ?? null,
      perfil: dados.imagens?.perfil ?? null,
    },
  };
}

async function buscar() {
  if (promessa) return promessa;
  carregandoGlobal = true;
  notificar();
  promessa = (async () => {
    try {
      const r = await fetch("/.netlify/functions/conteudo", { cache: "no-store" });
      if (r.ok) {
        const dados = (await r.json()) as ConteudoDto;
        cache = normalizar(dados);
      }
    } catch {
      /* silencioso: o site continua com fallback estático */
    } finally {
      carregandoGlobal = false;
      promessa = null;
      notificar();
    }
  })();
  return promessa;
}

/** Atualiza o cache manualmente (o painel admin chama quando salva). */
export function atualizarConteudoLocal(novo: ConteudoDto) {
  cache = normalizar(novo);
  carregandoGlobal = false;
  notificar();
}

export function useConteudo() {
  const [snapshot, setSnapshot] = useState<{ conteudo: ConteudoDto; carregando: boolean }>({
    conteudo: cache,
    carregando: carregandoGlobal,
  });

  useEffect(() => {
    const ouvinte: Ouvinte = (c, carregando) => setSnapshot({ conteudo: c, carregando });
    ouvintes.add(ouvinte);
    if (promessa === null && carregandoGlobal) {
      // Primeira montagem em todo o app: dispara a busca única.
      void buscar();
    } else if (cache === INICIAL && !promessa) {
      void buscar();
    }
    return () => {
      ouvintes.delete(ouvinte);
    };
  }, []);

  return {
    conteudo: snapshot.conteudo,
    carregando: snapshot.carregando,
    recarregar: buscar,
  };
}
