import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { legacyIdToSlug } from "@/data/publications";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Escritorio = lazy(() => import("./pages/Escritorio"));
const Equipe = lazy(() => import("./pages/Equipe"));
const Atuacao = lazy(() => import("./pages/Atuacao"));
const Publicacoes = lazy(() => import("./pages/Publicacoes"));
const PublicacaoDetalhe = lazy(() => import("./pages/PublicacaoDetalhe"));
const Portugal = lazy(() => import("./pages/Portugal"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Áreas de Atuação subpages
const DireitoEmpresarial = lazy(() => import("./pages/areas/DireitoEmpresarial"));
const NegociacaoJuridica = lazy(() => import("./pages/areas/NegociacaoJuridica"));
const DireitoTributario = lazy(() => import("./pages/areas/DireitoTributario"));
const DireitoTrabalhista = lazy(() => import("./pages/areas/DireitoTrabalhista"));
const FamiliaSucessoes = lazy(() => import("./pages/areas/FamiliaSucessoes"));
const DireitoCivil = lazy(() => import("./pages/areas/DireitoCivil"));
const CreditoCarbono = lazy(() => import("./pages/areas/CreditoCarbono"));
const RecuperacaoJudicial = lazy(() => import("./pages/areas/RecuperacaoJudicial"));
const RecuperacaoJudicialAgro = lazy(() => import("./pages/areas/RecuperacaoJudicialAgro"));

const queryClient = new QueryClient();

/**
 * LegacyRedirect component for handling old numeric publication URLs
 * Provides 301-style redirects to new SEO-friendly slug URLs
 */
function LegacyPublicationRedirect({ id }: { id: string }) {
  const numericId = parseInt(id, 10);
  
  if (!isNaN(numericId) && legacyIdToSlug[numericId]) {
    return <Navigate to={`/publicacoes/${legacyIdToSlug[numericId]}`} replace />;
  }
  
  // If not a valid legacy ID, go to publications list
  return <Navigate to="/publicacoes" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider translations={translations}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
              <Route path="/protecao-rural" element={<RecuperacaoJudicialAgro />} />
              <Route path="/publicacoes" element={<Publicacoes />} />
              {/* New SEO-friendly slug-based publication URLs */}
              <Route path="/publicacoes/:slug" element={<PublicacaoDetalhe />} />
              <Route path="/portugal" element={<Portugal />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
