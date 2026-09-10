import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Privacidade from "./pages/Privacidade";
import NotFound from "./pages/NotFound";
import { useConversaoWhatsApp } from "@/hooks/use-conversao-whatsapp";

const App = () => {
  // Vale para o site inteiro, inclusive a página de privacidade.
  useConversaoWhatsApp();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
