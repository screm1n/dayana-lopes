import Cabecalho from "@/components/Cabecalho";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Procedimentos from "@/components/Procedimentos";
import ParaQuem from "@/components/ParaQuem";
import Experiencia from "@/components/Experiencia";
import MenuProcedimentos from "@/components/MenuProcedimentos";
import Metodo from "@/components/Metodo";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Duvidas from "@/components/Duvidas";
import Contato from "@/components/Contato";
import ChamadaFinal from "@/components/ChamadaFinal";
import Rodape from "@/components/Rodape";
import BotaoFlutuante from "@/components/BotaoFlutuante";
import { useProgressoRolagem, useRevela } from "@/hooks/use-revela";

const Index = () => {
  useRevela();
  useProgressoRolagem();

  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="scroll-progress" />
      <Cabecalho />
      <main id="main">
        <Hero />
        <Diferenciais />
        <Procedimentos />
        <ParaQuem />
        <Experiencia />
        <MenuProcedimentos />
        <Metodo />
        <Sobre />
        <Depoimentos />
        <Duvidas />
        <Contato />
        <ChamadaFinal />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  );
};

export default Index;
