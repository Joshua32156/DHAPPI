import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import com from '@/assets/com.webp';
import { useLanguage } from '@/i18n/LanguageContext';
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

const BlogPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [dateOpen, setDateOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: t("Les nouvelles réformes fiscales 2024 : Impact sur les entreprises", "The 2024 tax reforms: impact on businesses"),
      excerpt: t("Analyse complète des récentes modifications du code des impôts et leurs implications pour les entreprises camerounaises.", "A comprehensive analysis of the recent amendments to the Tax Code and their implications for Cameroonian businesses."),
      author: "Me. Jean-Paul KAMDEM",
      date: t("15 Mars 2024", "15 March 2024"),
      dateValue: new Date(2024, 2, 15),
      category: t("Fiscalité", "Tax"),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
      readTime: "8 min"
    },
    {
      id: 2,
      title: t("RGPD en Afrique : Guide pratique de mise en conformité", "GDPR in Africa: a practical compliance guide"),
      excerpt: t("Comment adapter votre entreprise aux exigences de protection des données personnelles dans le contexte africain.", "How to adapt your business to personal data protection requirements in the African context."),
      author: "Me. Paul FOUDA",
      date: t("10 Mars 2024", "10 March 2024"),
      dateValue: new Date(2024, 2, 10),
      category: t("Conformité", "Compliance"),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
      readTime: "12 min"
    },
    {
      id: 3,
      title: t("Arbitrage commercial en zone OHADA : Tendances récentes", "Commercial arbitration in the OHADA zone: recent trends"),
      excerpt: t("Evolution de l'arbitrage commercial et nouvelles opportunités pour la résolution des conflits d'affaires.", "Developments in commercial arbitration and new opportunities for resolving business disputes."),
      author: "Me. Marie NGONO",
      date: t("5 Mars 2024", "5 March 2024"),
      dateValue: new Date(2024, 2, 5),
      category: t("Contentieux", "Litigation"),
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop",
      readTime: "10 min"
    },
    {
      id: 4,
      title: t("Investissements étrangers : Nouvelles procédures 2024", "Foreign investment: new procedures for 2024"),
      excerpt: t("Guide complet des dernières modifications réglementaires concernant les investissements directs étrangers.", "A complete guide to the latest regulatory changes concerning foreign direct investment."),
      author: "Me. Carole MBALLA",
      date: t("28 Février 2024", "28 February 2024"),
      dateValue: new Date(2024, 1, 28),
      category: t("Investissements", "Investments"),
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop",
      readTime: "15 min"
    },
    {
      id: 5,
      title: t("Droit du travail : Les contrats à durée déterminée", "Employment law: fixed-term contracts"),
      excerpt: t("Analyse juridique des conditions d'utilisation et de renouvellement des CDD selon la législation en vigueur.", "A legal analysis of the conditions governing the use and renewal of fixed-term contracts under current legislation."),
      author: "Me. David TCHOUA",
      date: t("20 Février 2024", "20 February 2024"),
      dateValue: new Date(2024, 1, 20),
      category: t("Droit Social", "Employment Law"),
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop",
      readTime: "7 min"
    },
    {
      id: 6,
      title: t("Transactions immobilières : Pièges à éviter", "Real estate transactions: pitfalls to avoid"),
      excerpt: t("Les erreurs courantes dans les acquisitions immobilières et comment les prévenir efficacement.", "Common mistakes in property acquisitions and how to prevent them effectively."),
      author: "Me. Sylvie MENDOMO",
      date: t("15 Février 2024", "15 February 2024"),
      dateValue: new Date(2024, 1, 15),
      category: t("Immobilier", "Real Estate"),
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop",
      readTime: "6 min"
    }
  ];

  const dateOptions = [
    { key: "all", label: t("Toutes les dates", "All dates"), filter: () => true },
    { key: "month", label: t("Ce mois-ci", "This month"), filter: (d: Date) => {
      const now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }},
    { key: "3m", label: t("3 derniers mois", "Last 3 months"), filter: (d: Date) => {
      const limit = new Date(); limit.setMonth(limit.getMonth() - 3);
      return d >= limit;
    }},
    { key: "6m", label: t("6 derniers mois", "Last 6 months"), filter: (d: Date) => {
      const limit = new Date(); limit.setMonth(limit.getMonth() - 6);
      return d >= limit;
    }},
    { key: "year", label: t("Cette année", "This year"), filter: (d: Date) => d.getFullYear() === new Date().getFullYear() },
    { key: "lastYear", label: t("Année passée", "Last year"), filter: (d: Date) => d.getFullYear() === new Date().getFullYear() - 1 },
  ];

  const selectedDateOption = dateOptions.find(o => o.key === dateFilter) ?? dateOptions[0];

  const filtered = articles.filter(a => {
    const matchSearch =
      searchQuery.trim() === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDate = selectedDateOption.filter(a.dateValue);

    return matchSearch && matchDate;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">

        {/* Page Header */}
        <section className="relative h-64 overflow-hidden">
          <img src={com} alt={t("Publications", "Publications")} className="w-full h-full object-cover object-[50%_40%]" />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Publications</h1>
              <p className="text-xl md:text-2xl text-gray-200">DH News</p>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 bg-accent/30">
          <div className="container-premium">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder={t("Rechercher un article, auteur, catégorie…", "Search for an article, author, category…")}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              {/* Date dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDateOpen(o => !o)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-full border border-border bg-background text-foreground hover:bg-accent transition-colors whitespace-nowrap"
                >
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {selectedDateOption.label}
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${dateOpen ? 'rotate-180' : ''}`} />
                </button>

                {dateOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg z-20 overflow-hidden">
                    {dateOptions.map(option => (
                      <button
                        key={option.key}
                        onClick={() => { setDateFilter(option.key); setDateOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-accent ${
                          dateFilter === option.key ? 'text-secondary font-medium bg-accent/50' : 'text-foreground'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Result count */}
            {(searchQuery || dateFilter !== 'all') && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                {t(
                  `${filtered.length} article${filtered.length !== 1 ? 's' : ''} trouvé${filtered.length !== 1 ? 's' : ''}`,
                  `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found`
                )}
              </p>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((article) => (
                  <Card key={article.id} className="premium-scale overflow-hidden">
                    <div className="relative">
                      <ImageWithSkeleton
                        src={article.image}
                        loading="lazy"
                        decoding="async"
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <h3 className="text-lg font-heading font-bold text-primary line-clamp-2 leading-tight">
                        {article.title}
                      </h3>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      <Link to={`/blog/${article.id}`}>
                        <Button variant="outline" size="sm" className="w-full group">
                          {t("Lire l'article", "Read the article")}
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-medium mb-2">{t("Aucun article trouvé", "No articles found")}</p>
                <p className="text-sm">{t("Essayez un autre mot-clé ou modifiez le filtre de date.", "Try another keyword or change the date filter.")}</p>
              </div>
            )}

            {/* Load More */}
            {filtered.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  {t("Charger plus d'articles", "Load more articles")}
                </Button>
              </div>
            )}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;