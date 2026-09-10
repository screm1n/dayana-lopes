import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="grid min-h-screen place-items-center bg-card px-6 text-center">
    <div>
      <p className="rotulo">404</p>
      <h1 className="mt-4 font-display text-5xl text-primary">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-lg text-foreground/75">
        O endereço que você abriu não existe por aqui. Voltamos pro começo?
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-carta transition-transform hover:scale-[1.03]"
      >
        Voltar para o início
      </Link>
    </div>
  </main>
);

export default NotFound;
