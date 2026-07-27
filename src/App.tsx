import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import VanessaPage from "./pages/vanessa-de-happi";
import DieudonneHappiPage from "./pages/dieudonne-happi";
import LionelNgadjuiPage from "./pages/lionel-ngadjui";
import JoelTenePage from "./pages/joel-tene";
import AdamouMfonziePage from "./pages/adamou-mfonzie"
import IngridTchuemPage from "./pages/ingridTchuem";
import RusselNgakoPage from "./pages/rusellNgako";
import RosalieDipitaPage from "./pages/rosalieDipita";
import EstelleTahouePage from "./pages/estelleTahoue";
import ArielBolangaPage from "./pages/arielBolanga";
import GloryHuamboPage from "./pages/gloryHuambo";
import EstherNgoNyobePage from "./pages/ngoNyobe";
import AllysonPage from "./pages/allysonmpondo";
import PascalLavandeOnanaPage from "./pages/pascalLavandeOnana";
import JodieNgodemPage from "./pages/jodieNgodem";
import GraceEpotePage from "./pages/graceEpote";
import JudicaelNguelefackPage from "./pages/JudicaelNguelefack";

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
            <Route path="/team/vanessa-de-happi" element={<VanessaPage />} />
            <Route
              path="/team/dieudonne-happi"
              element={<DieudonneHappiPage />}
            />
            <Route
              path="/team/lionel-ngadjui"
              element={<LionelNgadjuiPage />}
            />
            <Route
            path="/team/Joel-Tene"
            element={<JoelTenePage/>}
              />
            <Route
              path="/team/judicael-nguelefack"
              element={<JudicaelNguelefackPage/>}
              />
            <Route
              path="/team/adamou-mfonzie"
              element={<AdamouMfonziePage/>}
              />
            <Route path="/team/ingrid-tchuem"
            element={<IngridTchuemPage />}
            />
            <Route path="/team/russel-ngako"
            element={<RusselNgakoPage />}
            />
            <Route
              path="/team/rosalie-dipita"
              element={<RosalieDipitaPage />}
            />
            <Route
              path="/team/estelle-tahoue"
              element={<EstelleTahouePage />}
            />
            <Route
              path="/team/ariel-bolanga-ogolong"
              element={<ArielBolangaPage />}
            />
            <Route
              path="/team/glory-huambo"
              element={<GloryHuamboPage />}
            />
            <Route
              path="/team/esther-ngo-nyobe"
              element={<EstherNgoNyobePage />}
            />
            <Route
              path="/team/allyson-mpondo"
              element={<AllysonPage />}
            />
            <Route
              path="/team/pascal-lavande-onana"
              element={<PascalLavandeOnanaPage />}
            />
            <Route
              path="/team/jodie-ngodem"
              element={<JodieNgodemPage />}
            />
            <Route
              path="/team/grace-epote"
              element={<GraceEpotePage />}
            />
            {/* <Route
              path="/team/stephane-djontu"
              element={<StephaneDjontuPage />}
            />
            <Route path="/team/marie-hatho" element={<MarieHathoPage />} />
            <Route path="/team/ingrid-tchuem" element={<IngridTchuemPage />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
