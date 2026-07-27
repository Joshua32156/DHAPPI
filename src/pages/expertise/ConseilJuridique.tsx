import { ArrowRight, Scale, CheckCircle, Users, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConseilJuridique = () => {
  const services = [
    {
      title: "Droit et Gouvernance des Sociétés",
      description: "Accompagnement complet dans la création et la structuration de vos sociétés.",
      features: [
        "Création des sociétés",
        "Structuration des opérations sur le capital (augmentation, réduction, investissement)",
        "Structuration des opérations de croissance (fusion, acquisition, scission)",
        "Assistance dans la gouvernance d'entreprise et secrétariat juridique"
      ]
    },
    {
      title: "Investissement et Financement",
      description: "Expertise en structuration financière et accompagnement des levées de fonds.",
      features: [
        "Étude de faisabilité juridique des projets",
        "Négociation et structuration des opérations d'investissement",
        "Structuration juridique des levées de fonds et financement de projet",
        "Conseil sur crédit-bail, SBLC et crédit documentaire"
      ]
    },
    {
      title: "PPP et Marchés Publics",
      description: "Spécialisation dans les partenariats public-privé et les grands projets structurants.",
      features: [
        "Négociation et rédaction des accords cadre de type BOT",
        "Contrats de construction clés en mains",
        "Négociation des conventions de concessions, d'affermage et Régies",
        "Revue de la documentation juridique des projets structurants"
      ]
    },
    {
      title: "Droit Commercial et Commerce International",
      description: "Conseil en transactions commerciales nationales et internationales.",
      features: [
        "Transactions commerciales d'achat/vente internationale",
        "Structuration des opérations de cession de fonds de commerce",
        "Négociation des garanties commerciales",
        "Contrats commerciaux (distribution, franchise, agence, représentation)"
      ]
    },
    {
      title: "Droit du Travail et Protection Sociale",
      description: "Accompagnement en droit social et gestion des ressources humaines.",
      features: [
        "Rédaction des contrats de travail",
        "Gestion de la mobilité internationale des travailleurs",
        "Conseil en sécurité et prévoyance sociales",
        "Traitement de la paie"
      ]
    },
    {
      title: "Droit du Numérique et des TIC",
      description: "Expertise en nouvelles technologies et protection des données.",
      features: [
        "Protection et utilisation des données personnelles",
        "Contrats de développement des plateformes informatiques",
        "Conseil sur les aspects juridiques des NTIC",
        "Prestations de services informatiques"
      ]
    },
    {
      title: "Droit du Sport",
      description: "Spécialisation en droit sportif et accompagnement des acteurs du sport.",
      features: [
        "Création et agrément des sociétés et associations sportives",
        "Négociation et rédaction des contrats sportifs",
        "Assistance juridique des fédérations sportives",
        "Conseil en gouvernance sportive"
      ]
    }
  ];

  const advantages = [
    "Expertise reconnue depuis plus de 40 ans",
    "Approche personnalisée et pragmatique",
    "Équipe pluridisciplinaire dédiée",
    "Accompagnement de A à Z",
    "Tarification transparente et competitive"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scale className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Conseil Juridique
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Accompagnement juridique personnalisé pour sécuriser vos décisions 
                stratégiques et opérationnelles
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Votre partenaire juridique de confiance
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Notre équipe de conseil juridique vous accompagne dans toutes vos démarches 
                  juridiques avec une approche personnalisée et pragmatique. Nous mettons notre 
                  expertise au service de votre réussite, en vous proposant des solutions 
                  juridiques innovantes et adaptées à vos enjeux.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez une start-up en création, une PME en croissance ou une grande 
                  entreprise, nous vous offrons un accompagnement sur mesure pour sécuriser 
                  vos projets et optimiser votre développement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Pourquoi choisir notre conseil juridique ?
                </h3>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Nos Services de Conseil
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Une gamme complète de services juridiques pour répondre à tous vos besoins
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="premium-scale h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Notre Approche
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">1. Écoute</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyse approfondie de vos besoins et objectifs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">2. Analyse</h3>
                  <p className="text-sm text-muted-foreground">
                    Étude juridique complète de votre situation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">3. Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Proposition de stratégies juridiques adaptées
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">4. Suivi</h3>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement continu et mise en œuvre
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Besoin d'un conseil juridique personnalisé ?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Nos experts en conseil juridique sont à votre disposition pour analyser 
                votre situation et vous proposer les meilleures solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="/expertise">
                    Voir toutes nos expertises
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ConseilJuridique;
