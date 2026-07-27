import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Globe, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const expertiseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const expertiseItems = [
    { id: "conseil-juridique", title: "Conseil juridique" },
    { id: "contentieux", title: "Contentieux" },
    {
      id: "conformite-legale-reglementaire",
      title: "Conformité légale & réglementaire",
    },
    { id: "changes-investissements", title: "Douanes, Changes & Investissements" },
    { id: "fiscalite", title: "Fiscalité" },
  ];

  // Fonction pour ouvrir le menu expertise
  const handleExpertiseMouseEnter = () => {
    if (expertiseTimeoutRef.current) {
      clearTimeout(expertiseTimeoutRef.current);
    }
    setIsExpertiseOpen(true);
  };

  // Fonction pour fermer le menu expertise avec délai
  const handleExpertiseMouseLeave = () => {
    expertiseTimeoutRef.current = setTimeout(() => {
      setIsExpertiseOpen(false);
    }, 300); // Délai de 300ms avant fermeture
  };

  // Gérer le clic sur le bouton "Notre Expertise"
  const handleExpertiseClick = () => {
    navigate("/expertise");
    // Fermez le menu après la navigation
    setIsExpertiseOpen(false);
  };

  // Nettoyer le timeout au démontage du composant
  useEffect(() => {
    return () => {
      if (expertiseTimeoutRef.current) {
        clearTimeout(expertiseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card-premium">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-premium flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>+237 233 42 14 29</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>secretariat@dhavocats.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Douala, Cameroun</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <select className="bg-transparent border-none text-primary-foreground">
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-premium py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo blue.png"
              alt="D.Happi Logo"
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`
                font-medium transition-colors
                ${currentPath === "/" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className={`
                font-medium transition-colors
                ${currentPath === "/a-propos" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              À propos
            </Link>

            {/* Expertise Dropdown */}
            <div className="relative group">
              <button
              className={`
                flex items-center gap-1 font-medium transition-colors
                ${currentPath.startsWith("/expertise") ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
              onMouseEnter={handleExpertiseMouseEnter}
              onMouseLeave={handleExpertiseMouseLeave}
              onClick={handleExpertiseClick}
              aria-expanded={isExpertiseOpen}
              aria-haspopup="true"
            >
                Expertise
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isExpertiseOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExpertiseOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-elevation p-4 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handleExpertiseMouseEnter}
                  onMouseLeave={handleExpertiseMouseLeave}
                >
                  <div className="space-y-2">
                    {expertiseItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/expertise#${item.id}`}
                        className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium focus:outline-none focus:bg-accent focus:text-accent-foreground"
                        onClick={() => setIsExpertiseOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/equipe"
              className={`
                font-medium transition-colors
                ${currentPath === "/equipe" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Équipe
            </Link>
            <Link
              to="/blog"
              className={`
                font-medium transition-colors
                ${currentPath === "/blog" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Publications
            </Link>
            <Link
              to="/awards"
              className={`
                font-medium transition-colors
                ${currentPath === "/awards" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Awards
            </Link>
            <Link
              to="/carrieres"
              className={`
                font-medium transition-colors
                ${currentPath === "/carrieres" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Carrières
            </Link>
            <Link
              to="/contact"
              className={`
                font-medium transition-colors
                ${currentPath === "/contact" ? "text-secondary" : "text-foreground hover:text-secondary"}
              `}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border max-h-screen overflow-y-auto">
            <div className="space-y-4">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Accueil
              </Link>
              <Link
                to="/a-propos"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                À propos
              </Link>
              <div className="space-y-2">
                {/* Conteneur pour le lien et le bouton de déroulement */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/expertise`}
                    className="py-2 text-foreground font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notre Expertise
                  </Link>
                  {/* Le bouton pour dérouler le menu */}
                  <button
                    onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                    className="p-2 transition-transform duration-200"
                  >
                    <ChevronDown
                      className={`h-4 w-4 ${
                        isExpertiseOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Le sous-menu des expertises qui s'affiche au clic sur le bouton */}
                {isExpertiseOpen && (
                  <div className="space-y-2 pl-4 border-l border-border">
                    {expertiseItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/expertise#${item.id}`}
                        className="block py-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/equipe"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Équipe
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                to="/awards"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Awards
              </Link>
              <Link
                to="/carrieres"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Carrières
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-foreground hover:text-secondary transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
