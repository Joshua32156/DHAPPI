import { ArrowRight, Scale, CheckCircle, Users, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const ConseilJuridique = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Droit et Gouvernance des Sociétés", "Corporate Law and Governance"),
      description: t(
        "Accompagnement complet dans la création et la structuration de vos sociétés.",
        "Full support in the incorporation and structuring of your companies."
      ),
      features: [
        t("Création des sociétés", "Company incorporation"),
        t(
          "Structuration des opérations sur le capital (augmentation, réduction, investissement)",
          "Structuring of capital transactions (increase, reduction, investment)"
        ),
        t(
          "Structuration des opérations de croissance (fusion, acquisition, scission)",
          "Structuring of growth transactions (merger, acquisition, demerger)"
        ),
        t(
          "Assistance dans la gouvernance d'entreprise et secrétariat juridique",
          "Corporate governance assistance and company secretarial services"
        )
      ]
    },
    {
      title: t("Investissement et Financement", "Investment and Finance"),
      description: t(
        "Expertise en structuration financière et accompagnement des levées de fonds.",
        "Expertise in financial structuring and support with fundraising."
      ),
      features: [
        t("Étude de faisabilité juridique des projets", "Legal feasibility studies for projects"),
        t("Négociation et structuration des opérations d'investissement", "Negotiation and structuring of investment transactions"),
        t(
          "Structuration juridique des levées de fonds et financement de projet",
          "Legal structuring of fundraising and project finance"
        ),
        t("Conseil sur crédit-bail, SBLC et crédit documentaire", "Advice on leasing, SBLCs and documentary credits")
      ]
    },
    {
      title: t("PPP et Marchés Publics", "PPPs and Public Procurement"),
      description: t(
        "Spécialisation dans les partenariats public-privé et les grands projets structurants.",
        "Specialisation in public-private partnerships and major infrastructure projects."
      ),
      features: [
        t("Négociation et rédaction des accords cadre de type BOT", "Negotiation and drafting of BOT framework agreements"),
        t("Contrats de construction clés en mains", "Turnkey construction contracts"),
        t(
          "Négociation des conventions de concessions, d'affermage et Régies",
          "Negotiation of concession, lease (affermage) and management (régie) agreements"
        ),
        t(
          "Revue de la documentation juridique des projets structurants",
          "Review of legal documentation for major infrastructure projects"
        )
      ]
    },
    {
      title: t("Droit Commercial et Commerce International", "Commercial Law and International Trade"),
      description: t(
        "Conseil en transactions commerciales nationales et internationales.",
        "Advice on domestic and international commercial transactions."
      ),
      features: [
        t("Transactions commerciales d'achat/vente internationale", "International sale and purchase transactions"),
        t(
          "Structuration des opérations de cession de fonds de commerce",
          "Structuring of business transfer transactions"
        ),
        t("Négociation des garanties commerciales", "Negotiation of commercial guarantees"),
        t(
          "Contrats commerciaux (distribution, franchise, agence, représentation)",
          "Commercial contracts (distribution, franchising, agency, representation)"
        )
      ]
    },
    {
      title: t("Droit du Travail et Protection Sociale", "Employment Law and Social Protection"),
      description: t(
        "Accompagnement en droit social et gestion des ressources humaines.",
        "Support in employment law and human resources management."
      ),
      features: [
        t("Rédaction des contrats de travail", "Drafting of employment contracts"),
        t("Gestion de la mobilité internationale des travailleurs", "Management of international employee mobility"),
        t("Conseil en sécurité et prévoyance sociales", "Advice on social security and welfare schemes"),
        t("Traitement de la paie", "Payroll processing")
      ]
    },
    {
      title: t("Droit du Numérique et des TIC", "Digital and ICT Law"),
      description: t(
        "Expertise en nouvelles technologies et protection des données.",
        "Expertise in new technologies and data protection."
      ),
      features: [
        t("Protection et utilisation des données personnelles", "Protection and use of personal data"),
        t("Contrats de développement des plateformes informatiques", "IT platform development contracts"),
        t("Conseil sur les aspects juridiques des NTIC", "Advice on the legal aspects of new ICTs"),
        t("Prestations de services informatiques", "IT services agreements")
      ]
    },
    {
      title: t("Droit du Sport", "Sports Law"),
      description: t(
        "Spécialisation en droit sportif et accompagnement des acteurs du sport.",
        "Specialisation in sports law and support for stakeholders in the sports sector."
      ),
      features: [
        t(
          "Création et agrément des sociétés et associations sportives",
          "Incorporation and accreditation of sports companies and associations"
        ),
        t("Négociation et rédaction des contrats sportifs", "Negotiation and drafting of sports contracts"),
        t("Assistance juridique des fédérations sportives", "Legal assistance to sports federations"),
        t("Conseil en gouvernance sportive", "Advice on sports governance")
      ]
    }
  ];

  const advantages = [
    t("Expertise reconnue depuis plus de 40 ans", "Recognised expertise for over 40 years"),
    t("Approche personnalisée et pragmatique", "A tailored and pragmatic approach"),
    t("Équipe pluridisciplinaire dédiée", "A dedicated multidisciplinary team"),
    t("Accompagnement de A à Z", "End-to-end support"),
    t("Tarification transparente et competitive", "Transparent and competitive fees")
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
                {t("Conseil Juridique", "Legal Advisory")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                {t(
                  "Accompagnement juridique personnalisé pour sécuriser vos décisions stratégiques et opérationnelles",
                  "Tailored legal support to secure your strategic and operational decisions"
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
                  {t("Votre partenaire juridique de confiance", "Your trusted legal partner")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(
                    "Notre équipe de conseil juridique vous accompagne dans toutes vos démarches juridiques avec une approche personnalisée et pragmatique. Nous mettons notre expertise au service de votre réussite, en vous proposant des solutions juridiques innovantes et adaptées à vos enjeux.",
                    "Our legal advisory team supports you in all your legal matters with a tailored and pragmatic approach. We put our expertise at the service of your success, offering innovative legal solutions suited to your needs."
                  )}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    "Que vous soyez une start-up en création, une PME en croissance ou une grande entreprise, nous vous offrons un accompagnement sur mesure pour sécuriser vos projets et optimiser votre développement.",
                    "Whether you are a start-up being established, a growing SME or a large corporation, we offer bespoke support to secure your projects and optimise your development."
                  )}
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {t("Pourquoi choisir notre conseil juridique ?", "Why choose our legal advisory services?")}
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
                  {t("Nos Services de Conseil", "Our Advisory Services")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t(
                    "Une gamme complète de services juridiques pour répondre à tous vos besoins",
                    "A comprehensive range of legal services to meet all your needs"
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
                  {t("Notre Approche", "Our Approach")}
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("1. Écoute", "1. Listening")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Analyse approfondie de vos besoins et objectifs", "In-depth analysis of your needs and objectives")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("2. Analyse", "2. Analysis")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Étude juridique complète de votre situation", "Comprehensive legal review of your situation")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("3. Solution", "3. Solution")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Proposition de stratégies juridiques adaptées", "Proposal of tailored legal strategies")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{t("4. Suivi", "4. Follow-up")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Accompagnement continu et mise en œuvre", "Ongoing support and implementation")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {t("Besoin d'un conseil juridique personnalisé ?", "In need of tailored legal advice?")}
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                {t(
                  "Nos experts en conseil juridique sont à votre disposition pour analyser votre situation et vous proposer les meilleures solutions.",
                  "Our legal advisory experts are at your disposal to analyse your situation and propose the best solutions."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/contact">
                    {t("Prendre rendez-vous", "Book an appointment")}
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

export default ConseilJuridique;
