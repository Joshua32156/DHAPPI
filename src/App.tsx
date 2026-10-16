import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import PageSkeleton from "./components/PageSkeleton";


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

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
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
  </LanguageProvider>
);

export default App;
