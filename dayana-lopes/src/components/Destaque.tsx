import { HandHeart, MapPinned, UtensilsCrossed } from "lucide-react";

const itens = [
  {
    icone: HandHeart,
    titulo: "Sem medo",
    texto: "uma relação mais leve com a comida",
  },
  {
    icone: UtensilsCrossed,
    titulo: "Sem dieta pronta",
    texto: "estratégias para a sua rotina real",
  },
  {
    icone: MapPinned,
    titulo: "BH e online",
    texto: "consulta em Belo Horizonte ou à distância",
  },
];

const Destaque = () => (
  <section className="border-y border-primary/10 bg-primary text-primary-foreground">
    <div className="container">
      <ul className="grid divide-y divide-primary-foreground/15 md:grid-cols-3 md:divide-x md:divide-y-0">
        {itens.map(({ icone: Icone, titulo, texto }) => (
          <li
            key={titulo}
            className="flex items-center gap-4 py-8 md:justify-center md:py-10"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 shadow-carta">
              <Icone className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </span>
            <div>
              <p className="font-display text-2xl leading-tight">{titulo}</p>
              <p className="text-sm text-primary-foreground/70">{texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Destaque;
