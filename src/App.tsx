import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Institutions from "./pages/Institutions";
import InstitutionDetail from "./pages/InstitutionDetail";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/:id" element={<InstitutionDetail />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
