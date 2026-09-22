import { useEffect } from "react";

/**
 * Anima a entrada dos blocos marcados com .reveal.
 * O elemento nasce com .reveal-pending (opacidade 0 + deslocamento) e o
 * observador remove a classe quando ele entra na tela, uma vez só.
 * Quem prefere menos movimento recebe tudo visível: o CSS anula o pending.
 */
export function useRevela() {
  useEffect(() => {
    const alvos = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal.reveal-pending")
    );

    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.remove("reveal-pending"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.remove("reveal-pending");
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    alvos.forEach((el) => observador.observe(el));

    // Rede de segurança: se o observer não disparar para o que já está
    // visível (scroll restaurado, bfcache), libera em ~1s.
    const timer = window.setTimeout(() => {
      alvos.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.remove("reveal-pending");
        }
      });
    }, 900);

    return () => {
      observador.disconnect();
      window.clearTimeout(timer);
    };
  }, []);
}

/** Alimenta a barra fina de progresso de leitura no topo da página. */
export function useProgressoRolagem() {
  useEffect(() => {
    const raiz = document.documentElement;

    const atualizar = () => {
      const total = raiz.scrollHeight - window.innerHeight;
      const razao = total > 0 ? window.scrollY / total : 0;
      raiz.style.setProperty("--scroll-progress", String(Math.min(1, razao)));
    };

    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      window.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);
}
