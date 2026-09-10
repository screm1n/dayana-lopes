import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destaque from "@/components/Destaque";
import Sobre from "@/components/Sobre";
import Metodo from "@/components/Metodo";
import ParaQuem from "@/components/ParaQuem";
import Espaco from "@/components/Espaco";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import BotaoFlutuante from "@/components/BotaoFlutuante";
import { useRevela } from "@/hooks/use-revela";

const Index = () => {
  useRevela();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destaque />
        <Sobre />
        <Metodo />
        <ParaQuem />
        <Espaco />
        <Contato />
      </main>
      <Footer />
      <BotaoFlutuante />
    </div>
  );
};

export default Index;
