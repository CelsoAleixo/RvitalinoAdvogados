import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Escritorio from "./pages/Escritorio";
import Equipe from "./pages/Equipe";
import Atuacao from "./pages/Atuacao";
import Publicacoes from "./pages/Publicacoes";
import PublicacaoDetalhe from "./pages/PublicacaoDetalhe";
import Portugal from "./pages/Portugal";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

// Áreas de Atuação subpages
import DireitoEmpresarial from "./pages/areas/DireitoEmpresarial";
import NegociacaoJuridica from "./pages/areas/NegociacaoJuridica";
import DireitoTributario from "./pages/areas/DireitoTributario";
import DireitoTrabalhista from "./pages/areas/DireitoTrabalhista";
import FamiliaSucessoes from "./pages/areas/FamiliaSucessoes";
import DireitoCivil from "./pages/areas/DireitoCivil";
import CreditoCarbono from "./pages/areas/CreditoCarbono";
import RecuperacaoJudicial from "./pages/areas/RecuperacaoJudicial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/escritorio" element={<Escritorio />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/atuacao/direito-empresarial" element={<DireitoEmpresarial />} />
          <Route path="/atuacao/negociacao-juridica" element={<NegociacaoJuridica />} />
          <Route path="/atuacao/direito-tributario" element={<DireitoTributario />} />
          <Route path="/atuacao/direito-trabalhista" element={<DireitoTrabalhista />} />
          <Route path="/atuacao/familia-e-sucessoes" element={<FamiliaSucessoes />} />
          <Route path="/atuacao/direito-civil" element={<DireitoCivil />} />
          <Route path="/atuacao/credito-de-carbono" element={<CreditoCarbono />} />
          <Route path="/atuacao/recuperacao-judicial" element={<RecuperacaoJudicial />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/publicacoes/:id" element={<PublicacaoDetalhe />} />
          <Route path="/portugal" element={<Portugal />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
