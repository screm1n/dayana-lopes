import { useEffect } from "react";

/**
 * Revela elementos marcados com .revela quando entram na tela.
 * Quem prefere menos movimento recebe tudo já visível (tratado no CSS).
 */
export function useRevela() {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>(".revela");

    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("revelado"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("revelado");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 }
    );

    alvos.forEach((el) => observador.observe(el));

    // Fallback: se por algum motivo o observer não disparar para itens
    // já visíveis (scroll programático, cache, etc.), garante em ~1s.
    const timer = window.setTimeout(() => {
      alvos.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("revelado");
        }
      });
    }, 900);

    return () => {
      observador.disconnect();
      window.clearTimeout(timer);
    };
  }, []);
}
