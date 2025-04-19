import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Simulateur from "./pages/Simulateur";
import Quiz from "./pages/Quiz";
import MiniCours from "./pages/MiniCours";
import Generateur from "./pages/Generateur";
import Offre from "./pages/Offre";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/mini-cours" element={<MiniCours />} />
          <Route path="/generateur" element={<Generateur />} />
          <Route path="/offre" element={<Offre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
