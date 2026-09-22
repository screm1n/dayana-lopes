import { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ImagePlus, LogOut, Pencil, Plus, RotateCcw, Save, Trash2, X } from "lucide-react";
import { prepararImagem } from "@/lib/imagem";
import { atualizarConteudoLocal, urlImagem, type ConteudoDto, type ProcedimentoDto } from "@/hooks/use-conteudo";

const CHAVE_SENHA = "dayana_admin_senha";

type Alvo = "logo" | "logoClinica" | "perfil";

const ROTULOS_IMAGEM: Record<Alvo, { titulo: string; ajuda: string; estatico: string }> = {
  logo: { titulo: "Logo da marca", ajuda: "aparece no cabeçalho e no rodapé", estatico: "/logo.png" },
  perfil: { titulo: "Foto de perfil", ajuda: "foto principal ao lado do título", estatico: "/perfil.jpg" },
  // A chave continua logoClinica por causa do que já está gravado no Blob.
  logoClinica: { titulo: "Foto do espaço", ajuda: "consultório, na seção de atendimento e no contato", estatico: "/espaco.jpg" },
};

export default function Admin() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [checando, setChecando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [conteudo, setConteudo] = useState<ConteudoDto | null>(null);
  const [aba, setAba] = useState<"imagens" | "procedimentos">("procedimentos");

  const chamar = useCallback(
    async (corpo: unknown) => {
      const senhaAtual = sessionStorage.getItem(CHAVE_SENHA) ?? "";
      const r = await fetch("/.netlify/functions/admin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-admin-senha": senhaAtual,
        },
        body: JSON.stringify(corpo),
      });
      if (r.status === 401) {
        sessionStorage.removeItem(CHAVE_SENHA);
        setAutenticado(false);
        throw new Error("senha inválida");
      }
      const dados = (await r.json()) as { ok?: boolean; erro?: string; conteudo?: ConteudoDto };
      if (!r.ok || !dados.ok) throw new Error(dados.erro || "erro desconhecido");
      if (dados.conteudo) {
        setConteudo(dados.conteudo);
        atualizarConteudoLocal(dados.conteudo);
      }
      return dados;
    },
    [],
  );

  const carregarConteudo = useCallback(async () => {
    try {
      const r = await fetch("/.netlify/functions/conteudo", { cache: "no-store" });
      if (r.ok) {
        const c = (await r.json()) as ConteudoDto;
        setConteudo(c);
        atualizarConteudoLocal(c);
      }
    } catch {
      /* ignora: o painel ainda funciona sem estado inicial */
    }
  }, []);

  useEffect(() => {
    const salva = sessionStorage.getItem(CHAVE_SENHA);
    if (!salva) {
      setChecando(false);
      return;
    }
    (async () => {
      try {
        const r = await fetch("/.netlify/functions/admin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-admin-senha": salva,
          },
          body: JSON.stringify({ acao: "login" }),
        });
        if (r.ok) {
          setAutenticado(true);
          await carregarConteudo();
        } else {
          sessionStorage.removeItem(CHAVE_SENHA);
        }
      } catch {
        /* offline: deixa o usuário tentar de novo */
      } finally {
        setChecando(false);
      }
    })();
  }, [carregarConteudo]);

  const entrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    sessionStorage.setItem(CHAVE_SENHA, senha);
    try {
      const r = await fetch("/.netlify/functions/admin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-admin-senha": senha,
        },
        body: JSON.stringify({ acao: "login" }),
      });
      if (!r.ok) {
        sessionStorage.removeItem(CHAVE_SENHA);
        setErro("senha inválida");
        return;
      }
      setAutenticado(true);
      setSenha("");
      await carregarConteudo();
    } catch {
      sessionStorage.removeItem(CHAVE_SENHA);
      setErro("falha de conexão");
    }
  };

  const sair = () => {
    sessionStorage.removeItem(CHAVE_SENHA);
    setAutenticado(false);
    setConteudo(null);
  };

  if (checando) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <p className="text-sm text-foreground/60">carregando…</p>
      </div>
    );
  }

  if (!autenticado) {
    return (
      <div className="relative grid min-h-screen place-items-center overflow-hidden bg-[#0f0d13] px-6 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(190,120,175,0.28)_0%,transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(139,92,246,0.22)_0%,transparent_65%)]"
        />
        <form
          onSubmit={entrar}
          className="relative w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        >
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-fuchsia-300/80">
              Solid Page Studio
            </p>
            <h1 className="mt-4 font-display text-[2.1rem] leading-[1.1] text-white">
              Painel de <span className="italic text-fuchsia-200">Dayana Lopes</span>
            </h1>
            <p className="mt-3 text-sm font-light text-white/50">
              Área exclusiva de gerenciamento do site.
            </p>
          </div>

          <div>
            <label
              htmlFor="senha"
              className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/60"
            >
              Senha de acesso
            </label>
            <input
              id="senha"
              type="password"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="digite sua senha"
              className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-fuchsia-300/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/20"
              required
            />
            {erro && (
              <p className="mt-3 text-xs font-medium tracking-wide text-rose-300">{erro}</p>
            )}
          </div>

          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-400 via-primary to-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(220,120,190,0.6)] transition-transform hover:scale-[1.01]"
          >
            <span className="relative z-10">Entrar no painel</span>
          </button>

          <p className="pt-2 text-center text-[0.68rem] font-medium uppercase tracking-[0.32em] text-white/30">
            desenvolvido por Solid Page Studio
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="border-b border-primary/10 bg-card/70 backdrop-blur">
        <div className="container flex items-center justify-between gap-4 py-4">
          <div>
            <p className="rotulo">Painel</p>
            <h1 className="mt-1 font-display text-2xl text-primary">Editar meu site</h1>
          </div>
          <button
            onClick={sair}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary transition-colors hover:bg-secondary/40"
          >
            <LogOut className="h-4 w-4" /> sair
          </button>
        </div>
        <div className="container flex gap-2 pb-4">
          <TabButton ativo={aba === "procedimentos"} onClick={() => setAba("procedimentos")}>
            Procedimentos
          </TabButton>
          <TabButton ativo={aba === "imagens"} onClick={() => setAba("imagens")}>
            Imagens do site
          </TabButton>
        </div>
      </header>

      <main className="container mt-10">
        {aba === "procedimentos" ? (
          <AbaProcedimentos
            conteudo={conteudo}
            chamar={chamar}
          />
        ) : (
          <AbaImagens conteudo={conteudo} chamar={chamar} />
        )}
      </main>
    </div>
  );
}

function TabButton({ ativo, onClick, children }: { ativo: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
        ativo ? "bg-primary text-primary-foreground shadow-carta" : "border border-primary/20 text-primary hover:bg-secondary/40"
      }`}
    >
      {children}
    </button>
  );
}

// -----------------------------------------------------------------------------
// Aba: Procedimentos
// -----------------------------------------------------------------------------

function AbaProcedimentos({
  conteudo,
  chamar,
}: {
  conteudo: ConteudoDto | null;
  chamar: (corpo: unknown) => Promise<unknown>;
}) {
  const procs = conteudo?.procedimentos ?? [];
  const [editando, setEditando] = useState<ProcedimentoDto | "novo" | null>(null);

  const mover = async (id: string, direcao: -1 | 1) => {
    const idx = procs.findIndex((p) => p.id === id);
    if (idx < 0) return;
    const alvo = idx + direcao;
    if (alvo < 0 || alvo >= procs.length) return;
    const ids = procs.map((p) => p.id);
    [ids[idx], ids[alvo]] = [ids[alvo], ids[idx]];
    try {
      await chamar({ acao: "reordenar", ids });
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const excluir = async (id: string) => {
    if (!confirm("excluir este procedimento?")) return;
    try {
      await chamar({ acao: "excluirProcedimento", id });
    } catch (e) {
      alert((e as Error).message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl text-primary">seus procedimentos</h2>
          <p className="mt-1 text-sm text-foreground/60">
            adicione, edite, reordene ou remova os cards do carrossel.
          </p>
        </div>
        <button
          onClick={() => setEditando("novo")}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-carta transition-transform hover:scale-[1.02]"
        >
          <Plus className="h-4 w-4" /> novo
        </button>
      </div>

      <div className="mt-8 grid gap-4">
        {procs.length === 0 && (
          <div className="rounded-2xl border border-dashed border-primary/20 bg-card/40 p-10 text-center text-sm text-foreground/60">
            nenhum procedimento ainda. clique em <strong>novo</strong> para começar.
          </div>
        )}
        {procs.map((p, i) => (
          <div key={p.id} className="flex flex-col gap-4 rounded-2xl border border-primary/10 bg-card p-4 shadow-carta sm:flex-row sm:items-center">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary/40">
              <img src={urlImagem(p.midiaKey, "")} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="rotulo">{i + 1} de {procs.length}</p>
              <p className="mt-1 truncate font-display text-lg text-primary">{p.titulo}</p>
              {p.descricao && <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{p.descricao}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <BotaoIcone rotulo="mover para cima" onClick={() => mover(p.id, -1)} disabled={i === 0}>
                <ArrowUp className="h-4 w-4" />
              </BotaoIcone>
              <BotaoIcone rotulo="mover para baixo" onClick={() => mover(p.id, 1)} disabled={i === procs.length - 1}>
                <ArrowDown className="h-4 w-4" />
              </BotaoIcone>
              <BotaoIcone rotulo="editar" onClick={() => setEditando(p)}>
                <Pencil className="h-4 w-4" />
              </BotaoIcone>
              <BotaoIcone rotulo="excluir" tom="perigo" onClick={() => excluir(p.id)}>
                <Trash2 className="h-4 w-4" />
              </BotaoIcone>
            </div>
          </div>
        ))}
      </div>

      {editando && (
        <ModalProcedimento
          alvo={editando}
          onFechar={() => setEditando(null)}
          chamar={chamar}
        />
      )}
    </div>
  );
}

function BotaoIcone({
  children,
  onClick,
  disabled,
  rotulo,
  tom = "normal",
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  rotulo: string;
  tom?: "normal" | "perigo";
}) {
  const base = "grid h-10 w-10 place-items-center rounded-full border transition-colors disabled:opacity-40";
  const tomClasses =
    tom === "perigo"
      ? "border-red-300 text-red-600 hover:bg-red-50"
      : "border-primary/20 text-primary hover:bg-secondary/40";
  return (
    <button type="button" onClick={onClick} disabled={disabled} aria-label={rotulo} className={`${base} ${tomClasses}`}>
      {children}
    </button>
  );
}

function ModalProcedimento({
  alvo,
  onFechar,
  chamar,
}: {
  alvo: ProcedimentoDto | "novo";
  onFechar: () => void;
  chamar: (corpo: unknown) => Promise<unknown>;
}) {
  const novo = alvo === "novo";
  const [titulo, setTitulo] = useState(novo ? "" : alvo.titulo);
  const [descricao, setDescricao] = useState(novo ? "" : alvo.descricao);
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(novo ? null : urlImagem(alvo.midiaKey, ""));
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const escolherArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setArquivo(f);
    setPreview(URL.createObjectURL(f));
  };

  const salvar = async () => {
    setErro(null);
    if (!titulo.trim()) return setErro("titulo obrigatório");
    if (novo && !arquivo) return setErro("selecione uma foto");
    setSalvando(true);
    try {
      const corpo: Record<string, unknown> = {
        acao: "salvarProcedimento",
        titulo,
        descricao,
      };
      if (!novo) corpo.id = alvo.id;
      if (arquivo) {
        const preparada = await prepararImagem(arquivo);
        corpo.imagemBase64 = preparada.base64;
        corpo.imagemTipo = preparada.tipo;
      }
      await chamar(corpo);
      onFechar();
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/40 p-4 sm:place-items-center">
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card p-6 shadow-carta">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="rotulo">{novo ? "novo procedimento" : "editar procedimento"}</p>
            <h3 className="mt-2 font-display text-2xl text-primary">
              {novo ? "adicionar ao carrossel" : titulo || "editar"}
            </h3>
          </div>
          <button aria-label="fechar" onClick={onFechar} className="rounded-full p-2 text-primary hover:bg-secondary/40">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-xs font-medium uppercase tracking-widest text-foreground/60">Foto</label>
            <div className="mt-2 grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-xl bg-secondary/40">
                {preview && <img src={preview} alt="" className="h-full w-full object-cover" />}
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/20 px-4 py-2.5 text-sm text-primary hover:bg-secondary/40">
                <ImagePlus className="h-4 w-4" />
                {arquivo ? "trocar" : preview ? "trocar" : "escolher foto"}
                <input type="file" accept="image/*" className="hidden" onChange={escolherArquivo} />
              </label>
            </div>
            <p className="mt-2 text-xs text-foreground/50">
              foto do celular funciona. reduzimos automaticamente para carregar rápido.
            </p>
          </div>

          <div>
            <label htmlFor="p-titulo" className="text-xs font-medium uppercase tracking-widest text-foreground/60">
              Título
            </label>
            <input
              id="p-titulo"
              value={titulo}
              maxLength={80}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-2 w-full rounded-full border border-primary/15 bg-background px-5 py-3 text-sm focus:border-primary focus:outline-none"
              placeholder="ex.: Harmonização facial"
            />
          </div>

          <div>
            <label htmlFor="p-desc" className="text-xs font-medium uppercase tracking-widest text-foreground/60">
              Descrição
            </label>
            <textarea
              id="p-desc"
              value={descricao}
              maxLength={400}
              onChange={(e) => setDescricao(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-primary/15 bg-background px-5 py-3 text-sm focus:border-primary focus:outline-none"
              placeholder="conte em poucas linhas o que é o procedimento e para quem serve"
            />
            <p className="mt-1 text-right text-xs text-foreground/50">{descricao.length}/400</p>
          </div>

          {erro && <p className="text-sm text-red-600">{erro}</p>}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onFechar}
            className="rounded-full border border-primary/20 px-5 py-2.5 text-sm text-primary hover:bg-secondary/40"
          >
            cancelar
          </button>
          <button
            onClick={salvar}
            disabled={salvando}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-carta disabled:opacity-60"
          >
            <Save className="h-4 w-4" />
            {salvando ? "salvando…" : "salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Aba: Imagens do site
// -----------------------------------------------------------------------------

function AbaImagens({
  conteudo,
  chamar,
}: {
  conteudo: ConteudoDto | null;
  chamar: (corpo: unknown) => Promise<unknown>;
}) {
  const overrides: Partial<Record<Alvo, string | null>> = {
    logo: conteudo?.imagens?.logo ?? null,
    perfil: conteudo?.imagens?.perfil ?? null,
    logoClinica: conteudo?.imagens?.espaco ?? null,
  };

  return (
    <div>
      <div>
        <h2 className="font-display text-xl text-primary">imagens do site</h2>
        <p className="mt-1 text-sm text-foreground/60">
          troque logo e foto de perfil. você pode voltar para a imagem original quando quiser.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(Object.keys(ROTULOS_IMAGEM) as Alvo[]).map((alvo) => (
          <CartaoImagem
            key={alvo}
            alvo={alvo}
            chaveBlob={overrides[alvo] ?? null}
            chamar={chamar}
          />
        ))}
      </div>
    </div>
  );
}

function CartaoImagem({
  alvo,
  chaveBlob,
  chamar,
}: {
  alvo: Alvo;
  chaveBlob: string | null;
  chamar: (corpo: unknown) => Promise<unknown>;
}) {
  const meta = ROTULOS_IMAGEM[alvo];
  const [ocupado, setOcupado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const enviar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setErro(null);
    setOcupado(true);
    try {
      const preparada = await prepararImagem(f);
      await chamar({
        acao: "trocarImagem",
        alvo,
        imagemBase64: preparada.base64,
        imagemTipo: preparada.tipo,
      });
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setOcupado(false);
      // limpa o input para o mesmo arquivo poder ser reenviado depois
      e.target.value = "";
    }
  };

  const restaurar = async () => {
    if (!confirm(`voltar para a imagem original de ${meta.titulo.toLowerCase()}?`)) return;
    setOcupado(true);
    try {
      await chamar({ acao: "restaurarImagem", alvo });
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setOcupado(false);
    }
  };

  const src = urlImagem(chaveBlob, meta.estatico);

  return (
    <div className="rounded-2xl border border-primary/10 bg-card p-5 shadow-carta">
      <p className="rotulo">{meta.titulo}</p>
      <p className="mt-1 text-xs text-foreground/50">{meta.ajuda}</p>
      <div className="mt-4 grid aspect-square place-items-center overflow-hidden rounded-xl bg-secondary/40">
        <img
          src={src}
          alt={meta.titulo}
          className="h-full w-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0.15";
          }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary hover:bg-secondary/40">
          <ImagePlus className="h-4 w-4" />
          {ocupado ? "enviando…" : "trocar"}
          <input type="file" accept="image/*" className="hidden" onChange={enviar} disabled={ocupado} />
        </label>
        {chaveBlob && (
          <button
            onClick={restaurar}
            disabled={ocupado}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary hover:bg-secondary/40 disabled:opacity-60"
          >
            <RotateCcw className="h-4 w-4" /> restaurar
          </button>
        )}
      </div>
      {erro && <p className="mt-2 text-xs text-red-600">{erro}</p>}
    </div>
  );
}
