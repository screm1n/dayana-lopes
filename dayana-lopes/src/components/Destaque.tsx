const itens = [
  { titulo: "Naturalidade", texto: "resultados que respeitam seus traços" },
  { titulo: "Cuidado", texto: "atendimento próximo e personalizado" },
  { titulo: "Sempre Linda", texto: "beleza, confiança e autoestima" },
];

// Faixa de assinatura logo abaixo do hero, só fios e tipografia.
const Destaque = () => (
  <section className="border-b border-border">
    <div className="container">
      <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {itens.map(({ titulo, texto }, i) => (
          <li key={titulo} className="py-9 md:px-10 md:py-12 md:first:pl-0 md:last:pr-0">
            <p className="rotulo">{String(i + 1).padStart(2, "0")}</p>
            <p className="titulo mt-4 text-3xl">{titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Destaque;
