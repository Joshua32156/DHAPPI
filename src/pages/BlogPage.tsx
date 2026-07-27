import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import com from '@/assets/com.jpg';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('Toutes les dates');
  const [dateOpen, setDateOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Les nouvelles réformes fiscales 2024 : Impact sur les entreprises",
      excerpt: "Analyse complète des récentes modifications du code des impôts et leurs implications pour les entreprises camerounaises.",
      author: "Me. Jean-Paul KAMDEM",
      date: "15 Mars 2024",
      dateValue: new Date(2024, 2, 15),
      category: "Fiscalité",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "RGPD en Afrique : Guide pratique de mise en conformité",
      excerpt: "Comment adapter votre entreprise aux exigences de protection des données personnelles dans le contexte africain.",
      author: "Me. Paul FOUDA",
      date: "10 Mars 2024",
      dateValue: new Date(2024, 2, 10),
      category: "Conformité",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Arbitrage commercial en zone OHADA : Tendances récentes",
      excerpt: "Evolution de l'arbitrage commercial et nouvelles opportunités pour la résolution des conflits d'affaires.",
      author: "Me. Marie NGONO",
      date: "5 Mars 2024",
      dateValue: new Date(2024, 2, 5),
      category: "Contentieux",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "Investissements étrangers : Nouvelles procédures 2024",
      excerpt: "Guide complet des dernières modifications réglementaires concernant les investissements directs étrangers.",
      author: "Me. Carole MBALLA",
      date: "28 Février 2024",
      dateValue: new Date(2024, 1, 28),
      category: "Investissements",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop",
      readTime: "15 min"
    },
    {
      id: 5,
      title: "Droit du travail : Les contrats à durée déterminée",
      excerpt: "Analyse juridique des conditions d'utilisation et de renouvellement des CDD selon la législation en vigueur.",
      author: "Me. David TCHOUA",
      date: "20 Février 2024",
      dateValue: new Date(2024, 1, 20),
      category: "Droit Social",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Transactions immobilières : Pièges à éviter",
      excerpt: "Les erreurs courantes dans les acquisitions immobilières et comment les prévenir efficacement.",
      author: "Me. Sylvie MENDOMO",
      date: "15 Février 2024",
      dateValue: new Date(2024, 1, 15),
      category: "Immobilier",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop",
      readTime: "6 min"
    }
  ];

  const dateOptions = [
    { label: "Toutes les dates", filter: () => true },
    { label: "Ce mois-ci", filter: (d: Date) => {
      const now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }},
    { label: "3 derniers mois", filter: (d: Date) => {
      const limit = new Date(); limit.setMonth(limit.getMonth() - 3);
      return d >= limit;
    }},
    { label: "6 derniers mois", filter: (d: Date) => {
      const limit = new Date(); limit.setMonth(limit.getMonth() - 6);
      return d >= limit;
    }},
    { label: "Cette année", filter: (d: Date) => d.getFullYear() === new Date().getFullYear() },
    { label: "Année passée", filter: (d: Date) => d.getFullYear() === new Date().getFullYear() - 1 },
  ];

  const selectedDateOption = dateOptions.find(o => o.label === dateFilter) ?? dateOptions[0];

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
          <img src={com} alt="Publications" className="w-full h-full object-cover object-[50%_40%]" />
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
                  placeholder="Rechercher un article, auteur, catégorie…"
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
                  {dateFilter}
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${dateOpen ? 'rotate-180' : ''}`} />
                </button>

                {dateOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg z-20 overflow-hidden">
                    {dateOptions.map(option => (
                      <button
                        key={option.label}
                        onClick={() => { setDateFilter(option.label); setDateOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-accent ${
                          dateFilter === option.label ? 'text-secondary font-medium bg-accent/50' : 'text-foreground'
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
            {(searchQuery || dateFilter !== 'Toutes les dates') && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                {filtered.length} article{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
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
                      <img
                        src={article.image}
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
                          Lire l'article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-medium mb-2">Aucun article trouvé</p>
                <p className="text-sm">Essayez un autre mot-clé ou modifiez le filtre de date.</p>
              </div>
            )}

            {/* Load More */}
            {filtered.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Charger plus d'articles
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