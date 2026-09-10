import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const titulos = ["Harmonização facial", "Design de sobrancelhas", "Limpeza de pele", "Preenchimento labial", "Bioestimuladores", "Procedimentos faciais", "Cuidados personalizados", "Resultados reais"];
const imagens = Array.from({ length: 8 }, (_, i) => `/${i + 1}.png`);

const Servicos = () => {
  const [indice, setIndice] = useState(0);
  const anterior = () => setIndice((atual) => (atual - 1 + imagens.length) % imagens.length);
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
          <div className="grid md:grid-cols-[1.35fr_0.65fr]">
            <img src={imagens[indice]} alt={titulos[indice]} className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-[440px]" />
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div><span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><Sparkles className="h-5 w-5" /></span><p className="mt-8 text-sm uppercase tracking-[0.25em] text-accent">{String(indice + 1).padStart(2, "0")} / 08</p><h3 className="mt-3 font-display text-3xl text-primary md:text-4xl">{titulos[indice]}</h3></div>
              <div className="mt-8 flex items-center justify-between"><div className="flex gap-2" aria-label="Selecionar serviço">{imagens.map((imagem, i) => <button key={imagem} onClick={() => setIndice(i)} aria-label={`Ver serviço ${i + 1}`} className={`h-2 rounded-full transition-all ${i === indice ? "w-8 bg-primary" : "w-2 bg-primary/25"}`} />)}</div><div className="flex gap-2"><button onClick={anterior} aria-label="Serviço anterior" className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 text-primary hover:bg-secondary"><ChevronLeft className="h-5 w-5" /></button><button onClick={proximo} aria-label="Próximo serviço" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90"><ChevronRight className="h-5 w-5" /></button></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
