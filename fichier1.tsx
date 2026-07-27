import { useState } from "react";
import React from "react";
import {
  ArrowRight,
  Scale,
  Shield,
  FileCheck,
  TrendingUp,
  Calculator,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hiring2 from "@/assets/Hiring2.png";
import hiring from "@/assets/hiring.png";
import aboutHeader from "@/assets/about-header.jpg";
import { motion, AnimatePresence } from "framer-motion";

const ExpertisePage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const expertises = [
    {
      title: "Conseil juridique",
      icon: FileCheck,
      image: hiring,
      description:
        "Accompagnement juridique personnalisé pour sécuriser vos décisions stratégiques et opérationnelles. Notre équipe vous guide dans toutes vos démarches avec une approche pragmatique et innovante.",
      points: [
        "Droit et gouvernance des sociétés",
        "Droit commercial et commerce international",
        "Investissement et financement",
        "Droit du numérique et des TIC",
        "Droit du travail et protection sociale",
        "Droit du sport",
        "PPP",
      ],
      link: "/expertise/conseil-juridique",
      longDescription: `
      **DROIT ET GOUVERNANCE DES SOCIÉTÉS**
      
      * Création des sociétés
      * Structuration des opérations sur le capital (augmentation et réduction de capital, investissement en capital, conversion des créances en capital, émission de valeurs mobilières composées ou subordonnées…)
      * Structuration des opérations de croissance organique (fusion et acquisition, scission, apport partiel d’actif, transformation) ou externe (joint-venture, consortium, succursale, bureau de représentation ou de liaison)
      * Assistance dans la gouvernance d’entreprise: secrétariat juridique des conseils d’administration et assemblées générales, audit des documents sociaux et des décisions des organes exécutifs, rédaction des conventions sociétaires
      
      **INVESTISSEMENT ET FINANCEMENT**
      
      * Étude de faisabilité juridique des projets
      * Négociation et structuration des opérations d’investissement
      * Négociation et rédaction des contrats d’investissement et de placement
      * Structuration juridique des levées de fonds et financement de projet
      * Revue de la documentation juridique des Financements structurés et syndiqués
      * Conseil sur les aspects juridiques des transactions de crédit-bail, SBLC et crédit documentaire
      * Assistance dans la gestion et les transferts d’actifs
      
      **PPP ET MARCHÉS PUBLICS**
      
      * Négociation et rédaction des accords cadre de type BOT
      * Revue de la documentation juridique des projets structurants
      * Négociation et rédaction des contrats de construction clés en mains
      * Négociation et rédaction des contrats d’ingénierie et de Sous-traitance industrielle
      * Négociation et rédaction des conventions de concessions, d’affermage et Régies
      
      **DROIT COMMERCIAL ET COMMERCE INTERNATIONAL**
      
      * Conseil sur les aspects juridiques des transactions commerciales d’achat/vente internationale des marchandises, biens et services
      * Structuration des opérations de cession de fonds de commerce et cession groupée d’actifs
      * Négociation des garanties commerciales
      * Négociation et rédaction des contrats commerciaux (distribution, franchise, agence commerciale, représentation, fourniture, baux à usage professionnel, location-gérance)
      
      **DROIT DU TRAVAIL ET PROTECTION SOCIALE**
      
      * Rédaction des contrats de travail et gestion de la mobilité internationale des travailleurs
      * Conseil sur tous les aspects juridiques de la sécurité et de la prévoyance sociales
      * Traitement de la paie
      
      **DROIT DU NUMERIQUE ET DES TIC**
      
      * Conseil sur les aspects relatifs à la protection et à l’utilisation des données personnelles
      * Contrats de développement des plateformes et prestations de services informatiques
      * Conseil sur les aspects juridiques des NTIC
      
      **DROIT DU SPORT**
      
      * Création et agrément des sociétés et associations sportives
      * Négociation et rédaction des contrats sportifs
      * Assistance juridique des fédérations sportives
      `,
    },
    {
      title: "Contentieux",
      icon: Scale,
      image: hiring2,
      description:
        "Défense experte de vos intérêts devant toutes les juridictions nationales et internationales. Une de nos armes les plus puissantes est le dialogue.",
      points: [
        "Contentieux civil et social",
        "Contentieux des affaires et investissements",
        "Contentieux maritime et douanier",
        "Contentieux administratif et fiscal",
        "Recouvrement des créances",
        "Médiation et arbitrage des affaires",
        "Droit pénal général et des affaires",
      ],
      link: "/expertise/contentieux",
      longDescription: `
      **CONTENTIEUX CIVIL ET SOCIAL**
      
      * Contentieux des contrats, de la responsabilité civile et de l’exécution forcée des décisions de justice
      * Contentieux des accidents de travail, des maladies professionnelles et du licenciement
      * Assistance et représentation devant les tribunaux de l’ordre judiciaire et administratif.
      
      **CONTENTIEUX DES AFFAIRES ET INVESTISSEMENTS**
      
      * Contentieux de la concurrence déloyale et des pratiques commerciales déloyales
      * Contentieux des sociétés, des fusions & acquisitions
      * Recouvrement des créances et exécution forcée
      
      **DROIT PENAL GENERAL ET DES AFFAIRES**
      
      * Assistance des personnes en garde à vue et en détention provisoire
      * Assistance et représentation devant les juridictions répressives (Tribunaux de Grande Instance, Tribunaux de Commerce, Cours d’Appel, Cour Suprême)
      * Conseil sur les aspects juridiques des infractions économiques et financières
      
      **PPP ET MARCHÉS PUBLICS**
      
      * Contentieux des procédures de passation, d’attribution et d’exécution des contrats de concessions, d’affermage et des marchés publics
      * Assistance et représentation des entreprises
      
      **FISCALITÉ**
      
      * Contentieux des redressements fiscaux et des contrôles fiscaux
      * Assistance et représentation des contribuables
      `,
    },
    {
      title: "Conformité légale & réglementaire",
      icon: Shield,
      image: hiring,
      description:
        "Solutions complètes pour assurer la conformité de votre entreprise aux réglementations en vigueur. Le mensonge donne des fleurs mais pas de fruits.",
      points: [
        "Cartographie des risques légaux et réglementaires",
        "Audit des processus de conformité",
        "Élaboration et mise en œuvre des programmes",
        "Formation et sensibilisation",
        "Gestion du risque réglementaire",
        "Assistance dans l'élaboration de rapports",
      ],
      link: "/expertise/conformite-legale-reglementaire",
      longDescription: `
      **AUDIT ET GESTION DES RISQUES**

      * Évaluation des risques de non-conformité
      * Audit de la conformité des processus internes
      * Mise en place d’un plan d’actions
      
      **FORMATION ET SENSIBILISATION**

      * Élaboration de supports de formation
      * Séminaires et ateliers de sensibilisation
      
      **RÉGLEMENTATION SECTORIELLE**

      * Conformité aux réglementations du secteur bancaire et financier
      * Conformité aux réglementations minières et énergétiques
      * Conformité aux réglementations des télécommunications
      `,
    },
    {
      title: "Changes & investissements",
      icon: TrendingUp,
      image: hiring2,
      description:
        "Expertise en réglementation des changes et accompagnement des investissements internationaux pour optimiser vos opérations financières.",
      points: [
        "Réglementation des changes",
        "Investissements directs étrangers",
        "Structuration d'opérations",
        "Conseil en financement",
        "Autorisations administratives",
        "Opérations de change",
      ],
      link: "/expertise/changes-investissements",
      longDescription: `
      **INVESTISSEMENTS DIRECTS ÉTRANGERS (IDE)**

      * Conseil sur le cadre juridique des investissements
      * Assistance dans les formalités administratives et l’obtention des autorisations requises
      * Structuration d'opérations d'investissement
      
      **RÉGLEMENTATION DES CHANGES**

      * Conseil sur le cadre juridique des opérations de change
      * Assistance dans les formalités administratives et l’obtention des autorisations requises
      * Conseil sur les opérations de change
      `,
    },
    {
      title: "Fiscalité",
      icon: Calculator,
      image: hiring,
      description:
        "Optimisation fiscale et accompagnement dans toutes vos problématiques fiscales nationales et internationales avec une expertise reconnue.",
      points: [
        "Conseil en fiscalité des entreprises",
        "Fiscalité internationale",
        "Contentieux fiscal",
        "Optimisation fiscale",
        "Contrôles fiscaux",
        "TVA et droits de douane",
      ],
      link: "/expertise/fiscalite",
      longDescription: `
      **CONSEIL EN FISCALITÉ DES ENTREPRISES**

      * Conseil sur le cadre juridique de la fiscalité des entreprises
      * Assistance dans la déclaration et le paiement des impôts
      * Conseil sur les opérations de restructuration d'entreprises
      
      **FISCALITÉ INTERNATIONALE**

      * Conseil sur le cadre juridique des transactions internationales
      * Assistance dans la déclaration et le paiement des impôts
      * Conseil sur les opérations de restructuration d'entreprises
      `,
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  const headerTitleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const ctaVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const getHtmlFromText = (text) => {
    // Remplacement des sauts de ligne pour les listes non-ordonnées
    const formattedText = text.replace(
      /\* /g,
      '<li><span style="display: inline-block; transform: scale(1.5) translateX(-2px); margin-right: 4px;">&bull;</span>'
    );

    // Mise en gras des titres de section et retour à la ligne
    const html = formattedText.replace(
      /\n\n\s*\*\*(.*?)\*\*/g,
      `<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>`
    );

    // Retour à la ligne pour le reste
    const finalHtml = html.replace(/\n/g, "<br />");

    return finalHtml;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={aboutHeader}
            alt="À propos de D. Legal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Nos Expertises
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Plus de 40 ans d'expertise juridique
              </p>
            </div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Cibler là où cela compte
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nos avocats ont joué un rôle clé dans plusieurs des
                  transactions les plus complexes et les plus marquantes sur le
                  continent au cours de ces dernières années, en contribuant à
                  la mise en place de structures contractuelles sur mesure et de
                  solutions innovantes en matière d’accords de
                  commercialisation.
                </p>
              </motion.div>
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-[700px] space-y-8">
              {/* Panneau de description/détails - à gauche */}
              <motion.div
                key={activeExpertise}
                initial="initial"
                animate="animate"
                variants={contentVariants}
                className={`absolute left-0 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full max-w-sm h-auto max-h-[600px] md:max-h-[500px] overflow-y-auto ${
                  showDetails ? "z-20" : "z-10"
                }`}
              >
                <AnimatePresence mode="wait">
                  {showDetails ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-heading font-bold text-primary">
                          {expertises[activeExpertise].title}
                        </h2>
                        <button onClick={() => setShowDetails(false)}>
                          <X className="h-6 w-6 text-primary hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                      <div
                        className="text-sm text-muted-foreground leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{
                          __html: getHtmlFromText(
                            expertises[activeExpertise].longDescription
                          ),
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-heading font-bold text-primary mb-3">
                        {expertises[activeExpertise].title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {expertises[activeExpertise].description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Image centrale - plus grande */}
              <motion.img
                key={activeExpertise + 1}
                initial="initial"
                animate="animate"
                variants={imageVariants}
                src={expertises[activeExpertise].image}
                alt={expertises[activeExpertise].title}
                className={`w-[500px] h-[500px] object-contain rounded-2xl relative transition-all duration-500 ${
                  showDetails ? "md:right-[-200px]" : "right-0"
                }`}
              />

              {/* Points d'expertise - à droite */}
              <motion.div
                key={activeExpertise + 2}
                initial="initial"
                animate="animate"
                variants={contentVariants}
                className="absolute right-0 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs z-10"
              >
                <div className="space-y-2">
                  {expertises[activeExpertise].points
                    .slice(0, 4)
                    .map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                </div>
                <div className="pt-3">
                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-xs text-secondary hover:text-primary transition-colors"
                    >
                      Voir plus...
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Navigation des expertises - en bas */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {expertises.map((expertise, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveExpertise(index);
                      setShowDetails(false); // Réinitialiser le mode "détails" à chaque changement d'expertise
                    }}
                    disabled={showDetails} // Désactiver les boutons quand les détails sont affichés
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    animate={{
                      scale: activeExpertise === index ? 1 : 0.9,
                      opacity: activeExpertise === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeExpertise === index
                        ? "bg-secondary text-white shadow-md"
                        : "bg-white/60 text-muted-foreground hover:bg-white/80 hover:text-primary"
                    } ${showDetails ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    {expertise.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-padding bg-accent/30">
          <div className="container-premium">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={ctaVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center bg-gradient-hero p-8 md:p-12 rounded-xl text-white"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Besoin d'un conseil juridique ?
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour analyser votre
                situation et vous proposer les meilleures solutions juridiques.
              </p>
              <Button size="lg" className="btn-secondary-premium" asChild>
                <a href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ExpertisePage;
