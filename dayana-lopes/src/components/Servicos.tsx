import { ChevronRight } from "lucide-react";
import { useState } from "react";

const imagens = Array.from({ length: 8 }, (_, i) => `/${i + 1}.png`);

const Servicos = () => {
  const [indice, setIndice] = useState(0);
  const proximo = () => setIndice((atual) => (atual + 1) % imagens.length);

  return (
    <section id="servicos" className="scroll-mt-24 bg-secondary/35 py-24 md:py-32">
      <div className="container">
        <div className="revela mx-auto max-w-2xl text-center">
          <p className="rotulo">Serviços</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">Realce sua beleza<span className="block italic">com naturalidade.</span></h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-foreground/75">Procedimentos pensados para valorizar seus traços e cuidar de você em cada detalhe.</p>
        </div>
        <div className="revela relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-carta">
          <div className="relative flex h-[min(110vw,520px)] w-full items-center justify-center bg-secondary/20 md:h-[560px]">
            <img src={imagens[indice]} alt={`Serviço ${indice + 1}`} className="max-h-full max-w-full object-contain" />
            <button onClick={proximo} aria-label="Próximo serviço" className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-carta transition-transform hover:scale-105">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
