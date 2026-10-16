import { ArrowRight, Users, CheckCircle, Shield, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const ConformiteLegale = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Cartographie des risques légaux et réglementaires", "Legal and Regulatory Risk Mapping"),
      description: t(
        "Identification et analyse complète des risques juridiques auxquels votre entreprise est exposée.",
        "Comprehensive identification and analysis of the legal risks to which your company is exposed."
      ),
      features: [
        t("Analyse sectorielle des réglementations", "Sector-specific analysis of regulations"),
        t("Identification des zones de risque", "Identification of risk areas"),
        t("Évaluation de l'impact potentiel", "Assessment of potential impact"),
        t("Priorisation des actions correctives", "Prioritisation of corrective actions")
      ]
    },
    {
      title: t("Audit des processus de conformité", "Compliance Process Audit"),
      description: t(
        "Évaluation approfondie de vos processus internes pour assurer leur conformité réglementaire.",
        "In-depth assessment of your internal processes to ensure their regulatory compliance."
      ),
      features: [
        t("Audit des procédures existantes", "Audit of existing procedures"),
        t("Évaluation des contrôles internes", "Assessment of internal controls"),
        t("Identification des lacunes", "Identification of gaps"),
        t("Recommandations d'amélioration", "Recommendations for improvement")
      ]
    },
    {
      title: t(
        "Élaboration et mise en œuvre des programmes de conformité",
        "Design and Implementation of Compliance Programmes"
      ),
      description: t(
        "Conception et déploiement de programmes de conformité adaptés à votre secteur d'activité.",
        "Design and roll-out of compliance programmes tailored to your business sector."
      ),
      features: [
        t("Conception de programmes sur mesure", "Design of bespoke programmes"),
        t("Mise en place des procédures", "Implementation of procedures"),
        t("Définition des indicateurs de suivi", "Definition of monitoring indicators"),
        t("Accompagnement dans le déploiement", "Support throughout the roll-out")
      ]
    },
    {
      title: t("Formation et sensibilisation", "Training and Awareness"),
      description: t(
        "Formation des équipes dirigeantes et du personnel sur les enjeux de conformité.",
        "Training of management teams and staff on compliance issues."
      ),
      features: [
        t("Formation des administrateurs et dirigeants", "Training of directors and executives"),
        t("Sensibilisation du personnel", "Staff awareness"),
        t("Sessions sur les risques critiques", "Sessions on critical risks"),
        t("Mise à jour réglementaire continue", "Ongoing regulatory updates")
      ]
    },
    {
      title: t("Gestion du risque réglementaire", "Regulatory Risk Management"),
      description: t(
        "Accompagnement dans la gestion proactive des risques réglementaires.",
        "Support in the proactive management of regulatory risks."
      ),
      features: [
        t("Veille réglementaire", "Regulatory monitoring"),
        t("Analyse d'impact des nouvelles réglementations", "Impact analysis of new regulations"),
        t("Plans d'action préventifs", "Preventive action plans"),
        t("Gestion des incidents de conformité", "Management of compliance incidents")
      ]
    },
    {
      title: t("Reporting et gouvernance", "Reporting and Governance"),
      description: t(
        "Assistance dans l'élaboration de rapports et la gouvernance de la conformité.",
        "Assistance with report preparation and compliance governance."
      ),
      features: [
        t("Rapports destinés au conseil d'administration", "Reports to the board of directors"),
        t("Tableaux de bord de conformité", "Compliance dashboards"),
        t("Évaluation et mise à jour des programmes", "Assessment and updating of programmes"),
        t("Audit de gestion des engagements contractuels", "Audit of contractual commitment management")
      ]
    }
  ];

  const advantages = [
    t("Expertise reconnue en conformité réglementaire", "Recognised expertise in regulatory compliance"),
    t("Approche personnalisée par secteur d'activité", "A tailored approach for each business sector"),
    t("Équipe spécialisée en risk management", "A team specialised in risk management"),
    t("Accompagnement de la conception à la mise en œuvre", "Support from design through to implementation"),
    t("Veille réglementaire continue", "Continuous regulatory monitoring")
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
                {t("Conformité Légale & Réglementaire", "Legal & Regulatory Compliance")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                {t(
                  "Solutions complètes pour assurer la conformité de votre entreprise aux réglementations en vigueur",
                  "Comprehensive solutions to ensure your company complies with the regulations in force"
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
                  {t("Maîtrisez vos risques réglementaires", "Take control of your regulatory risks")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(
                    "Dans un environnement réglementaire en constante évolution, la conformité légale est devenue un enjeu stratégique majeur. Notre équipe d'experts vous accompagne dans l'identification, l'évaluation et la gestion de vos risques réglementaires.",
                    "In a constantly evolving regulatory environment, legal compliance has become a major strategic issue. Our team of experts supports you in identifying, assessing and managing your regulatory risks."
                  )}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    "Nous vous aidons à mettre en place des programmes de conformité robustes et adaptés à votre secteur d'activité, garantissant ainsi la pérennité et la réputation de votre entreprise.",
                    "We help you put in place robust compliance programmes tailored to your business sector, thereby safeguarding the long-term viability and reputation of your company."
                  )}
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {t("Pourquoi choisir notre expertise en conformité ?", "Why choose our compliance expertise?")}
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
                  {t("Nos Services de Conformité", "Our Compliance Services")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t(
                    "Une approche complète pour sécuriser votre conformité réglementaire",
                    "A comprehensive approach to securing your regulatory compliance"
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
                  {t("Notre Méthodologie", "Our Methodology")}
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("1. Diagnostic", "1. Diagnosis")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Cartographie complète des risques réglementaires", "Comprehensive mapping of regulatory risks")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("2. Conception", "2. Design")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Élaboration du programme de conformité sur mesure", "Development of a bespoke compliance programme")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("3. Déploiement", "3. Roll-out")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Mise en œuvre et formation des équipes", "Implementation and team training")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("4. Suivi", "4. Follow-up")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Monitoring continu et mise à jour du programme", "Continuous monitoring and programme updates")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {t("Sécurisez votre conformité réglementaire", "Secure your regulatory compliance")}
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                {t(
                  "Nos experts en conformité vous accompagnent dans la mise en place d'un programme de conformité robuste et adapté à vos enjeux.",
                  "Our compliance experts support you in establishing a robust compliance programme tailored to your needs."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    {t("Demander un audit", "Request an audit")}
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

export default ConformiteLegale;
