import { HeartHandshake, Leaf, MapPin, Sparkles } from "lucide-react";

const itens = [
  { Icone: Leaf, texto: "Resultados naturais" },
  { Icone: Sparkles, texto: "Técnica e segurança" },
  { Icone: HeartHandshake, texto: "Atendimento personalizado" },
  { Icone: MapPin, texto: "Belo Horizonte ou online" },
];

const Diferenciais = () => (
  <section className="differentials" aria-label="Diferenciais do atendimento">
    <div className="container">
      {itens.map(({ Icone, texto }) => (
        <div key={texto}>
          <Icone aria-hidden />
          <span>{texto}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Diferenciais;
