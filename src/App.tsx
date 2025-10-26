import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuizPersonalizacao from "./pages/QuizPersonalizacao";
import Recomendacoes from "./pages/Recomendacoes";
import DashboardAprendizado from "./pages/DashboardAprendizado";
import Layout from "./components/Layout";
import DynamicLesson from "@/components/DynamicLesson";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="quiz" element={<QuizPersonalizacao />} />
            <Route path="recomendacoes" element={<Recomendacoes />} />
            <Route path="aprendizado" element={<DashboardAprendizado />} />
            <Route path="licao/:licaoId" element={<DynamicLesson onComplete={() => {}} onBack={() => window.history.back()} />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;