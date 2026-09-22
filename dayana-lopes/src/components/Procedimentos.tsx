import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LINK_AGENDAMENTO } from "@/lib/links";
import { useConteudo, urlImagem } from "@/hooks/use-conteudo";

/**
 * Seção narrativa dos procedimentos: a foto fica fixa à esquerda e troca
 * conforme a pessoa rola a lista da direita.
 *
 * A lista inteira vem do painel /admin (Netlify Blobs) — este componente só
 * apresenta o que `useConteudo()` devolve e monta as URLs com `urlImagem()`.
 */
const Procedimentos = () => {
  const { conteudo, carregando } = useConteudo();
  const lista = conteudo.procedimentos;
  const [ativo, setAtivo] = useState(0);
  const secaoRef = useRef<HTMLElement>(null);

  // Descobre qual etapa está na faixa de leitura e sincroniza a foto.
  useEffect(() => {
    if (!lista.length) return;
    const etapas = Array.from(
      secaoRef.current?.querySelectorAll<HTMLElement>("[data-etapa]") ?? []
    );
    if (!etapas.length || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visivel) return;
        const i = Number((visivel.target as HTMLElement).dataset.etapa);
        if (!Number.isNaN(i)) setAtivo(i);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    etapas.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [lista.length]);

  const seguro = Math.min(ativo, Math.max(0, lista.length - 1));
  const atual = lista[seguro];

  const Titulo = (
    <>
      <p className="eyebrow">01 / PROCEDIMENTOS</p>
      <h2>
        Cada procedimento,
        <br />
        <em>um cuidado único.</em>
      </h2>
    </>
  );

  if (carregando) {
    return (
      <section id="procedimentos" className="section facial facial-story container">
        {Titulo}
        <p className="footnote">carregando…</p>
      </section>
    );
  }

  if (!lista.length) {
    return (
      <section id="procedimentos" className="section facial facial-story container">
        {Titulo}
        <p className="section-note">
          Os procedimentos estão sendo preparados com carinho.
        </p>
        <p className="footnote">Em breve, a lista completa aparece aqui.</p>
      </section>
    );
  }

  return (
    <section
      id="procedimentos"
      className="section facial facial-story container"
      data-enhanced="true"
      ref={secaoRef}
    >
      <div className="story-layout">
        <div className="story-sticky">
          {Titulo}

          <div className="story-photo">
            {lista.map((p, i) => (
              <img
                key={p.id}
                className={`story-image ${i === seguro ? "is-active" : ""}`}
                src={urlImagem(p.midiaKey, "")}
                alt={p.titulo}
                aria-hidden={i !== seguro}
                loading="lazy"
              />
            ))}
          </div>

          <div
            className="story-status"
            aria-label={`Procedimento ${seguro + 1} de ${lista.length}`}
          >
            <span>
              {String(seguro + 1).padStart(2, "0")}
              <small>/ {String(lista.length).padStart(2, "0")}</small>
            </span>
            <span>{atual.titulo}</span>
          </div>

          <div className="story-progress" aria-hidden="true">
            <span
              style={{ width: `${((seguro + 1) / lista.length) * 100}%` }}
            />
          </div>

          <p className="footnote">O cuidado começa na avaliação.</p>
        </div>

        <div className="story-stages">
          {lista.map((p, i) => (
            <article
              key={p.id}
              data-etapa={i}
              className={`facial-stage ${i === seguro ? "is-active" : ""}`}
            >
              <img
                className="stage-mobile-image"
                src={urlImagem(p.midiaKey, "")}
                alt={p.titulo}
                loading="lazy"
              />
              <div className="stage-copy">
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.titulo}</h3>
                {p.descricao && <p>{p.descricao}</p>}
                <a
                  className="text-link"
                  href={LINK_AGENDAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tirar dúvidas <ArrowUpRight aria-hidden />
                </a>
              </div>
            </article>
          ))}
          <p className="footnote">
            Cada pele é uma história. Seu procedimento também.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Procedimentos;
