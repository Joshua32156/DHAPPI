import { ArrowRight, Shield, CheckCircle, Gavel, Scale, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const Contentieux = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Contentieux de large spectre", "Broad-Spectrum Litigation"),
      description: t(
        "Représentation et défense devant toutes les juridictions avec une expertise reconnue.",
        "Representation and defence before all courts and tribunals, backed by recognised expertise."
      ),
      features: [
        t("Contentieux civil et social", "Civil and employment litigation"),
        t("Contentieux des affaires et investissements", "Business and investment litigation"),
        t("Contentieux maritime et douanier", "Maritime and customs litigation"),
        t("Contentieux administratif et fiscal", "Administrative and tax litigation"),
        t("Contentieux de la banque et des assurances", "Banking and insurance litigation"),
        t("Contentieux du sport", "Sports litigation")
      ]
    },
    {
      title: t("Recouvrement et restructuration", "Debt Recovery and Restructuring"),
      description: t(
        "Solutions efficaces pour le recouvrement de créances et la gestion des situations d'insolvabilité.",
        "Effective solutions for debt recovery and the management of insolvency situations."
      ),
      features: [
        t("Recouvrement des créances", "Debt recovery"),
        t("Restructuration d'entreprises", "Corporate restructuring"),
        t("Procédures d'insolvabilité", "Insolvency proceedings"),
        t("Négociation avec les créanciers", "Negotiation with creditors")
      ]
    },
    {
      title: t("Litiges fonciers et domaniaux", "Land and State Property Disputes"),
      description: t(
        "Expertise spécialisée dans les conflits liés au foncier et au domaine public.",
        "Specialist expertise in disputes relating to land and public property."
      ),
      features: [
        t("Litiges de propriété", "Property disputes"),
        t("Conflits domaniaux", "State property disputes"),
        t("Expropriations", "Expropriations"),
        t("Droits d'usage et d'occupation", "Rights of use and occupancy")
      ]
    },
    {
      title: t("Médiation et arbitrage des affaires", "Business Mediation and Arbitration"),
      description: t(
        "Modes alternatifs de résolution des conflits pour des solutions rapides et efficaces.",
        "Alternative dispute resolution for swift and effective solutions."
      ),
      features: [
        t("Arbitrage commercial", "Commercial arbitration"),
        t("Médiation d'entreprise", "Corporate mediation"),
        t("Conciliation", "Conciliation"),
        t("Négociation assistée", "Assisted negotiation")
      ]
    },
    {
      title: t("Droit pénal général et des affaires", "General and Business Criminal Law"),
      description: t(
        "Défense et conseil en matière pénale avec une expertise reconnue.",
        "Defence and advice in criminal matters, backed by recognised expertise."
      ),
      features: [
        t("Conseil et assistance des parties civiles", "Advice and assistance to civil parties"),
        t("Assistance lors des garde-à-vue et auditions", "Assistance during police custody and questioning"),
        t("Défense devant les tribunaux de droit commun", "Defence before the ordinary courts"),
        t("Représentation devant les juridictions spécialisées", "Representation before specialised courts")
      ]
    }
  ];

  const advantages = [
    t("Plus de 40 ans d'expérience en contentieux", "Over 40 years of litigation experience"),
    t("Équipe d'avocats spécialisés par domaine", "A team of lawyers specialised by field"),
    t("Représentation devant toutes les juridictions", "Representation before all courts"),
    t("Approche stratégique et pragmatique", "A strategic and pragmatic approach"),
    t("Expertise en modes alternatifs de résolution", "Expertise in alternative dispute resolution")
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
                {t("Contentieux", "Litigation")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                {t(
                  "Défense experte de vos intérêts devant toutes les juridictions nationales et internationales",
                  "Expert defence of your interests before all national and international courts"
                )}
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
                  {t("Votre défense juridique d'excellence", "Excellence in legal defence")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(
                    "Notre équipe de contentieux vous accompagne dans la résolution de tous vos litiges avec une approche stratégique et une expertise reconnue. Nous mettons notre expérience au service de la défense de vos intérêts, que ce soit devant les tribunaux ou par des modes alternatifs de résolution.",
                    "Our litigation team supports you in resolving all your disputes with a strategic approach and recognised expertise. We put our experience to work in defending your interests, whether before the courts or through alternative dispute resolution."
                  )}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    <>
                      <em>"Une de nos armes les plus puissantes est le dialogue."</em> Cette philosophie
                      guide notre approche du contentieux, privilégiant toujours la recherche de
                      solutions amiables avant d'engager des procédures judiciaires.
                    </>,
                    <>
                      <em>"One of our most powerful weapons is dialogue."</em> This philosophy
                      guides our approach to litigation, always favouring the search for amicable
                      solutions before initiating legal proceedings.
                    </>
                  )}
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {t("Pourquoi choisir notre expertise en contentieux ?", "Why choose our litigation expertise?")}
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
                  {t("Nos Domaines de Contentieux", "Our Areas of Litigation")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t(
                    "Une expertise complète pour tous vos litiges et procédures judiciaires",
                    "Comprehensive expertise for all your disputes and legal proceedings"
                  )}
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
                  {t("Notre Approche du Contentieux", "Our Approach to Litigation")}
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("1. Analyse", "1. Analysis")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "Évaluation approfondie du dossier et des chances de succès",
                      "In-depth assessment of the case and its prospects of success"
                    )}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("2. Stratégie", "2. Strategy")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Élaboration d'une stratégie juridique adaptée", "Development of a tailored legal strategy")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Gavel className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("3. Action", "3. Action")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Mise en œuvre de la stratégie et représentation", "Implementation of the strategy and representation")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("4. Résolution", "4. Resolution")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Obtention du meilleur résultat pour nos clients", "Securing the best outcome for our clients")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {t("Besoin d'une défense juridique experte ?", "In need of expert legal defence?")}
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                {t(
                  "Nos avocats spécialisés en contentieux sont à votre disposition pour défendre vos intérêts avec détermination et expertise.",
                  "Our specialist litigation lawyers are at your disposal to defend your interests with determination and expertise."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    {t("Consulter un avocat", "Consult a lawyer")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="/expertise">
                    {t("Voir toutes nos expertises", "View all our areas of expertise")}
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
