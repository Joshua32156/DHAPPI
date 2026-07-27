import { ArrowRight, Shield, CheckCircle, Gavel, Scale, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contentieux = () => {
  const services = [
    {
      title: "Contentieux de large spectre",
      description: "Représentation et défense devant toutes les juridictions avec une expertise reconnue.",
      features: [
        "Contentieux civil et social",
        "Contentieux des affaires et investissements",
        "Contentieux maritime et douanier",
        "Contentieux administratif et fiscal",
        "Contentieux de la banque et des assurances",
        "Contentieux du sport"
      ]
    },
    {
      title: "Recouvrement et restructuration",
      description: "Solutions efficaces pour le recouvrement de créances et la gestion des situations d'insolvabilité.",
      features: [
        "Recouvrement des créances",
        "Restructuration d'entreprises",
        "Procédures d'insolvabilité",
        "Négociation avec les créanciers"
      ]
    },
    {
      title: "Litiges fonciers et domaniaux",
      description: "Expertise spécialisée dans les conflits liés au foncier et au domaine public.",
      features: [
        "Litiges de propriété",
        "Conflits domaniaux",
        "Expropriations",
        "Droits d'usage et d'occupation"
      ]
    },
    {
      title: "Médiation et arbitrage des affaires",
      description: "Modes alternatifs de résolution des conflits pour des solutions rapides et efficaces.",
      features: [
        "Arbitrage commercial",
        "Médiation d'entreprise",
        "Conciliation",
        "Négociation assistée"
      ]
    },
    {
      title: "Droit pénal général et des affaires",
      description: "Défense et conseil en matière pénale avec une expertise reconnue.",
      features: [
        "Conseil et assistance des parties civiles",
        "Assistance lors des garde-à-vue et auditions",
        "Défense devant les tribunaux de droit commun",
        "Représentation devant les juridictions spécialisées"
      ]
    }
  ];

  const advantages = [
    "Plus de 40 ans d'expérience en contentieux",
    "Équipe d'avocats spécialisés par domaine",
    "Représentation devant toutes les juridictions",
    "Approche stratégique et pragmatique",
    "Expertise en modes alternatifs de résolution"
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
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Contentieux
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Défense experte de vos intérêts devant toutes les juridictions 
                nationales et internationales
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
                  Votre défense juridique d'excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Notre équipe de contentieux vous accompagne dans la résolution de tous vos 
                  litiges avec une approche stratégique et une expertise reconnue. Nous mettons 
                  notre expérience au service de la défense de vos intérêts, que ce soit devant 
                  les tribunaux ou par des modes alternatifs de résolution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <em>"Une de nos armes les plus puissantes est le dialogue."</em> Cette philosophie 
                  guide notre approche du contentieux, privilégiant toujours la recherche de 
                  solutions amiables avant d'engager des procédures judiciaires.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Pourquoi choisir notre expertise en contentieux ?
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
                  Nos Domaines de Contentieux
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Une expertise complète pour tous vos litiges et procédures judiciaires
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
                  Notre Approche du Contentieux
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">1. Analyse</h3>
                  <p className="text-sm text-muted-foreground">
                    Évaluation approfondie du dossier et des chances de succès
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">2. Stratégie</h3>
                  <p className="text-sm text-muted-foreground">
                    Élaboration d'une stratégie juridique adaptée
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gavel className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">3. Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Mise en œuvre de la stratégie et représentation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">4. Résolution</h3>
                  <p className="text-sm text-muted-foreground">
                    Obtention du meilleur résultat pour nos clients
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Besoin d'une défense juridique experte ?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Nos avocats spécialisés en contentieux sont à votre disposition pour 
                défendre vos intérêts avec détermination et expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    Consulter un avocat
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

export default Contentieux;
