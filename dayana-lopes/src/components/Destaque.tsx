import { HandHeart, MapPinned, UtensilsCrossed } from "lucide-react";

const itens = [
  {
    icone: HandHeart,
    titulo: "Naturalidade",
    texto: "resultados que respeitam seus traços",
  },
  {
    icone: UtensilsCrossed,
    titulo: "Cuidado",
    texto: "atendimento próximo e personalizado",
  },
  {
    icone: MapPinned,
    titulo: "Sempre Linda",
    texto: "beleza, confiança e autoestima",
  },
];

// Faixa de selos colada no hero, com divisórias finas.
const Destaque = () => (
  <section className="border-b border-border bg-card">
    <div className="container">
      <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {itens.map(({ icone: Icone, titulo, texto }) => (
          <li
            key={titulo}
            className="flex items-center gap-4 py-7 md:justify-center md:px-6 md:py-8"
          >
            <Icone
              className="h-5 w-5 shrink-0 text-accent"
              strokeWidth={1.6}
              aria-hidden
            />
            <div>
              <p className="font-display text-xl leading-tight text-primary">
                {titulo}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Destaque;
