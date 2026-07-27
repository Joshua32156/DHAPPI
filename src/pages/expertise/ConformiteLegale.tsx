import { ArrowRight, Users, CheckCircle, Shield, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConformiteLegale = () => {
  const services = [
    {
      title: "Cartographie des risques légaux et réglementaires",
      description: "Identification et analyse complète des risques juridiques auxquels votre entreprise est exposée.",
      features: [
        "Analyse sectorielle des réglementations",
        "Identification des zones de risque",
        "Évaluation de l'impact potentiel",
        "Priorisation des actions correctives"
      ]
    },
    {
      title: "Audit des processus de conformité",
      description: "Évaluation approfondie de vos processus internes pour assurer leur conformité réglementaire.",
      features: [
        "Audit des procédures existantes",
        "Évaluation des contrôles internes",
        "Identification des lacunes",
        "Recommandations d'amélioration"
      ]
    },
    {
      title: "Élaboration et mise en œuvre des programmes de conformité",
      description: "Conception et déploiement de programmes de conformité adaptés à votre secteur d'activité.",
      features: [
        "Conception de programmes sur mesure",
        "Mise en place des procédures",
        "Définition des indicateurs de suivi",
        "Accompagnement dans le déploiement"
      ]
    },
    {
      title: "Formation et sensibilisation",
      description: "Formation des équipes dirigeantes et du personnel sur les enjeux de conformité.",
      features: [
        "Formation des administrateurs et dirigeants",
        "Sensibilisation du personnel",
        "Sessions sur les risques critiques",
        "Mise à jour réglementaire continue"
      ]
    },
    {
      title: "Gestion du risque réglementaire",
      description: "Accompagnement dans la gestion proactive des risques réglementaires.",
      features: [
        "Veille réglementaire",
        "Analyse d'impact des nouvelles réglementations",
        "Plans d'action préventifs",
        "Gestion des incidents de conformité"
      ]
    },
    {
      title: "Reporting et gouvernance",
      description: "Assistance dans l'élaboration de rapports et la gouvernance de la conformité.",
      features: [
        "Rapports destinés au conseil d'administration",
        "Tableaux de bord de conformité",
        "Évaluation et mise à jour des programmes",
        "Audit de gestion des engagements contractuels"
      ]
    }
  ];

  const advantages = [
    "Expertise reconnue en conformité réglementaire",
    "Approche personnalisée par secteur d'activité",
    "Équipe spécialisée en risk management",
    "Accompagnement de la conception à la mise en œuvre",
    "Veille réglementaire continue"
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
                <Users className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Conformité Légale & Réglementaire
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Solutions complètes pour assurer la conformité de votre entreprise 
                aux réglementations en vigueur
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
                  Maîtrisez vos risques réglementaires
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Dans un environnement réglementaire en constante évolution, la conformité 
                  légale est devenue un enjeu stratégique majeur. Notre équipe d'experts vous 
                  accompagne dans l'identification, l'évaluation et la gestion de vos risques 
                  réglementaires.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous vous aidons à mettre en place des programmes de conformité robustes 
                  et adaptés à votre secteur d'activité, garantissant ainsi la pérennité 
                  et la réputation de votre entreprise.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Pourquoi choisir notre expertise en conformité ?
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
                  Nos Services de Conformité
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Une approche complète pour sécuriser votre conformité réglementaire
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
                  Notre Méthodologie
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">1. Diagnostic</h3>
                  <p className="text-sm text-muted-foreground">
                    Cartographie complète des risques réglementaires
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">2. Conception</h3>
                  <p className="text-sm text-muted-foreground">
                    Élaboration du programme de conformité sur mesure
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">3. Déploiement</h3>
                  <p className="text-sm text-muted-foreground">
                    Mise en œuvre et formation des équipes
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">4. Suivi</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitoring continu et mise à jour du programme
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Sécurisez votre conformité réglementaire
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Nos experts en conformité vous accompagnent dans la mise en place 
                d'un programme de conformité robuste et adapté à vos enjeux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    Demander un audit
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

export default ConformiteLegale;
