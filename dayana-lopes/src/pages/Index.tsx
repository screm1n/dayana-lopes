import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destaque from "@/components/Destaque";
import Servicos from "@/components/Servicos";
import Procedimentos from "@/components/Procedimentos";
import Sobre from "@/components/Sobre";
import Metodo from "@/components/Metodo";
import ParaQuem from "@/components/ParaQuem";
import Espaco from "@/components/Espaco";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import CtaFinal from "@/components/CtaFinal";
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
        <Servicos />
        <Procedimentos />
        <ParaQuem />
        <Espaco />
        <Metodo />
        <Sobre />
        <Contato />
        <CtaFinal />
      </main>
      <Footer />
      <BotaoFlutuante />
    </div>
  );
};

export default Index;
