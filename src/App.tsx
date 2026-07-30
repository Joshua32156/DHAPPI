import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";


// Lazy loading des composants
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Awards = lazy(() => import("./pages/Awards"));
const ExpertisePage = lazy(() => import("./pages/ExpertisePage"));
const ConseilJuridique = lazy(
  () => import("./pages/expertise/ConseilJuridique")
);
const ConformiteLegale = lazy(
  () => import("./pages/expertise/ConformiteLegale")
);
const Contentieux = lazy(() => import("./pages/expertise/Contentieux"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TeamMemberProfile = lazy(() => import("./pages/TeamMemberProfile"));

const queryClient = new QueryClient();

// Composant de loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route
              path="/expertise/conseil-juridique"
              element={<ConseilJuridique />}
            />
            <Route
              path="/expertise/conformite-legale-reglementaire"
              element={<ConformiteLegale />}
            />
            <Route path="/expertise/contentieux" element={<Contentieux />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/carrieres" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team/:id" element={<TeamMemberProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
