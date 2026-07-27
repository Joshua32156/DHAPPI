import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import contentieux from "@/assets/ContentieuxRespo.png";
import douanes from "@/assets/inco3.png";
import fiscalite from "@/assets/inco2.png";
import hiring from "@/assets/hiring.png";
import aboutHeader from "@/assets/about-header.jpg";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { IconLeft } from "react-day-picker";

const ExpertisePage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const expertises = [
    {
      id: "conseil-juridique",
      title: "Conseil juridique",
      icon: FileCheck,
      image: hiring2,
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
      **Droit et gouvernance des sociétés**
      
      * Création des sociétés
      * Structuration des opérations sur le capital (augmentation et réduction de capital, investissement en capital, conversion des créances en capital, émission de valeurs mobilières composées ou subordonnées…)
      * Structuration des opérations de croissance organique (fusion et acquisition, scission, apport partiel d'actif, transformation) ou externe (joint-venture, consortium, succursale, bureau de représentation ou de liaison)
      * Assistance dans la gouvernance d'entreprise: secrétariat juridique des conseils d'administration et assemblées générales, audit des documents sociaux et des décisions des organes exécutifs, rédaction des conventions sociétaires
      
      **Investissement et Financement**
      
      * Étude de faisabilité juridique des projets
      * Négociation et structuration des opérations d'investissement
      * Négociation et rédaction des contrats d'investissement et de placement
      * Structuration juridique des levées de fonds et financement de projet
      * Revue de la documentation juridique des Financements structurés et syndiqués
      * Conseil sur les aspects juridiques des transactions de crédit-bail, SBLC et crédit documentaire
      * Assistance dans la gestion et les transferts d'actifs
      
      **PPP et marchés publics**
      
      * Négociation et rédaction des accords cadre de type BOT
      * Revue de la documentation juridique des projets structurants
      * Négociation et rédaction des contrats de construction clés en mains
      * Négociation et rédaction des contrats d'ingénierie et de Sous-traitance industrielle
      * Négociation et rédaction des conventions de concessions, d'affermage et Régies
      
      **Droit commercial et commerce international**
      
      * Conseil sur les aspects juridiques des transactions commerciales d'achat/vente internationale des marchandises, biens et services
      * Structuration des opérations de cession de fonds de commerce et cession groupée d'actifs
      * Négociation des garanties commerciales
      * Négociation et rédaction des contrats commerciaux (distribution, franchise, agence commerciale, représentation, fourniture, baux à usage professionnel, location-gérance)
      
      **Droit du travail et relations sociales**
      
      * Rédaction des contrats de travail et gestion de la mobilité internationale des travailleurs
      * Conseil sur tous les aspects juridiques de la sécurité et de la prévoyance sociales
      * Traitement de la paie
      
      **Droit du numérique et des TIC**
      
      * Conseil sur les aspects relatifs à la protection et à l'utilisation des données personnelles
      * Contrats de développement des plateformes et prestations de services informatiques
      * Conseil sur les aspects juridiques des NTIC
      
      **Droit du sport**
      
      * Création et agrément des sociétés et associations sportives
      * Négociation et rédaction des contrats sportifs
      * Assistance juridique des fédérations sportives
      `,
      persons: [
        {
          name: "Vanessa de HAPPI",
          post: "Responsable du Département Conseil",
          top: 70,
          right: 50,
          bottom: 0,
          Left: 0,
        },
        {
          name: "Freedy NJOMGANG",
          post: "Adjoint du Département Conseil",
          top: 60,
          right: -5,
        },
      ],
    },
    {
      id: "contentieux",
      title: "Contentieux",
      icon: Scale,
      image: contentieux,
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
      **Contentieux de large spectre**
      
      * Contentieux civil et social
      * Contentieux des affaires
      * Contentieux des investissements 
      * Contentieux maritime et douanier
      * Contentieux administratif et fiscal
      * Contentieux de la banque et des assurances
      * Contentieux du sport
      * Recouvrement des créances
      * Restructuration et insolvabilité
      * Litiges fonciers et domaniaux
      * Médiation et arbitrage des affaires
      
      **Droit pénal général et droit pénal des affaires**
      
      * Conseil, assistance et représentation des parties civiles
      * Conseil et assistance des justiciables lors des garde-à-vue et auditions, enquêtes préliminaires et procédures d’instruction
      * Défense des justiciables devant les tribunaux de droit commun et les juridictions spécialisées
      `,
      persons: [
        {
          name: "Lionel NGADJUI",
          post: "Responsable du Département Contentieux ",
          top: 70,
          right: 50,
          bottom: 0,
          left: 0,
        },
        {
          name: "Glory HUAMBO",
          post: "Responsable Adjoint du Département Contentieux",
          top: 60,
          right: -30,
          bottom: 0,
          Left: 0,
        },
      ],
    },
    {
      id: "conformite-legale-reglementaire",
      title: "Conformité légale & réglementaire",
      icon: Shield,
      image: hiring2,
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

      * Cartographie des risques légaux et réglementaires
      * Audit des processus de conformité
      * Audit de gestion des engagements contractuels
      * Accompagnement dans la gestion du risque règlementaire
      * Élaboration et mise en œuvre des programmes de conformité
      * Formation et sensibilisation des administrateurs, des dirigeants et du personnel sur les risques légaux et règlementaires les plus critiques dans le secteur d’activité de l’entreprise
      * Assistance dans l’élaboration de rapports destinés au conseil d’administration
      * Évaluation et mise à jour du programme de conformité
      `,
      persons: [
        {
          name: "Vanessa de HAPPI",
          post: "Responsable du Département Conformité legale et règlementaire ",
          top: 70,
          right: 50,
        },
        {
          name: "Freedy NJOMGANG",
          post: "Responsable Adjoint du Département Contentieux ",
          top: 60,
          right: -30,
        },
      ],
    },
    {
      id: "changes-investissements",
      title: "Douanes, Changes & Investissements",
      icon: TrendingUp,
      image: douanes,
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
      Pour répondre à une demande croissante de nos clients locaux et internationaux, le Cabinet a mis sur pied une équipe Douanes, Changes et Investissement, chapeautée par un expert en droit des douanes CEMAC et du commerce extérieur, qui intervient dans les domaines suivant:

      * Conseil et contentieux douanier
      * Commerce extérieur
      * Commerce international
      *  Règlementation des changes CEMAC
      *  Droit des transports
      *  Droit des investissements
      *  Audit et mise en conformité des opérations commerciales, douanières et de changes
      *  Zone de Libre-Echange Continentale Africaine (ZLECAf)
      *  Formation du personnel
      `,
      persons: [
        {
          name: "Joel TENE TEKOU",
          post: "Responsable du Département Douanes, Changes et Investissement",
          top: 70,
          right: 50,
        },
        {
          name: "Esther GONYOBE",
          post: "Responsable du Département Douanes, Changes et Investissement",
          top: 60,
          right: -30,
        },
      ],
    },
    {
      id: "fiscalite",
      title: "Fiscalité",
      icon: Calculator,
      image: fiscalite,
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
      Pour répondre à une demande croissante de nos clients locaux et internationaux et face aux multiples problématiques d’ordre fiscal et changement dans les textes de loi, au mois de septembre 2024, le Cabinet a mis sur pied un département Fiscalité, qui intervient principalement dans les domaines suivants:

      * Révision périodique de la comptabilité et de la conformité des pièces comptables justificatives ;
      * Gestion des déclarations fiscales ;
      * Révision des déclarations statistiques et fiscales ;
      * Gestion des contrôles et contentieux fiscaux ;
      * Conseil sur les mesures d’optimisation et de planification fiscale ;
      * Assistance dans le cadre de l’accomplissement des obligations déclaratives mensuelles et annuelles;
      * Mise en place d’une veille fiscale ;
      * Évaluation permanente des risques fiscaux sectoriels;
      * Interaction avec les administrations fiscales ;
      * Accompagnement dans le cadre des investissements.
      `,
      persons: [
        {
          name: "Adamou MFONZIE",
          post: "Responsable du Département Fiscalité",
          top: 70,
          right: 50,
        },
        {
          name: "Russel NGAKO",
          post: "Responsable Adjoint du Département Fiscalité",
          top: 60,
          right: -30,
        },
      ],
    },
  ];

  // Effect pour gérer la navigation depuis le header
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Extraire l'ID de l'expertise du hash (exemple: #conseil-juridique)
      const expertiseId = hash.replace("#", "");
      const expertiseIndex = expertises.findIndex(
        (exp) => exp.id === expertiseId
      );

      if (expertiseIndex !== -1) {
        setActiveExpertise(expertiseIndex);
        setShowDetails(false);

        // Optionnel: faire défiler vers la section expertise après un court délai
        setTimeout(() => {
          const expertiseSection = document.getElementById("expertise-section");
          if (expertiseSection) {
            expertiseSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    }
  }, [location.hash]);

  // Fonction pour changer d'expertise et mettre à jour l'URL
  const changeExpertise = (index) => {
    setActiveExpertise(index);
    setShowDetails(false);

    // Mettre à jour l'URL avec le hash correspondant
    const expertiseId = expertises[index].id;
    navigate(`/expertise#${expertiseId}`, { replace: true });
  };

  const personCardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

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

  // Fonction pour rendre la description longue avec mise en forme améliorée
  const renderLongDescription = (text) => {
    if (!text) return null;

    const sections = [];
    const lines = text.split("\n").map((line) => line.trim());

    let currentSection = { title: "", points: [] };

    lines.forEach((line) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        if (currentSection.title) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace(/\*\*/g, ""),
          points: [],
        };
      } else if (line.startsWith("* ")) {
        currentSection.points.push(line.substring(2).trim());
      } else if (line) {
        // Ajouter comme un paragraphe si ce n'est ni un titre ni un point
        if (currentSection.points.length > 0) {
          sections.push(currentSection);
          currentSection = { title: "", points: [] };
        }
        sections.push({ type: "paragraph", content: line });
      }
    });

    if (currentSection.title || currentSection.points.length > 0) {
      sections.push(currentSection);
    }

    return (
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            {section.type === "paragraph" ? (
              <p className="text-sm text-muted-foreground">{section.content}</p>
            ) : (
              <>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {section.title}
                </h3>
                <ul className="list-none p-0 m-0 space-y-1">
                  {section.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    );
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
                  solutions innovantes en matière d'accords de
                  commercialisation.
                </p>
              </motion.div>
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-[700px] space-y-8">
              {/* Conteneur de l'image avec les rectangles de personnes */}
              <div
                className={`relative w-[500px] h-[500px] transition-all duration-500 ${
                  showDetails ? "md:right-[-200px]" : "right-0"
                }`}
              >
                <motion.img
                  key={activeExpertise + 1}
                  initial="initial"
                  whileInView="animate"
                  variants={imageVariants}
                  viewport={{ once: true, amount: 0.3 }}
                  src={expertises[activeExpertise].image}
                  alt={expertises[activeExpertise].title}
                  className="w-full h-full object-contain rounded-2xl"
                />

                {/* Rendu des rectangles pour les personnes */}
                {expertises[activeExpertise].persons &&
                  expertises[activeExpertise].persons.map((person, idx) => (
                    <motion.div
                      key={activeExpertise + "-" + idx}
                      variants={personCardVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md max-w-[180px] text-left"
                      style={{
                        zIndex: 20,
                        top: person.top ? `${person.top * 4}px` : undefined,
                        bottom: person.bottom
                          ? `${person.bottom * 4}px`
                          : undefined,
                        left: person.left ? `${person.left * 4}px` : undefined,
                        right: person.right
                          ? `${person.right * 4}px`
                          : undefined,
                      }}
                    >
                      <p className="font-bold text-secondary text-sm">
                        {person.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {person.post}
                      </p>
                    </motion.div>
                  ))}
              </div>

              {/* Titre et description - à gauche, compact */}
              <motion.div
                key={`${activeExpertise}-${showDetails}`}
                initial="initial"
                whileInView="animate"
                variants={contentVariants}
                viewport={{ once: true, amount: 0.3 }}
                className={`absolute left-8 top-1/4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg z-10 ${
                  showDetails ? "max-w-md h-96 overflow-y-auto" : "max-w-sm"
                }`}
                onClick={(e) => e.stopPropagation()}
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
                      <div className="sticky top-0 z-50 text-right">
                        <button
                          onClick={() => setShowDetails(false)}
                          className="bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-sm"
                        >
                          <X className="h-6 w-6 text-primary hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                      <div className="pr-10">
                        <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                          {expertises[activeExpertise].title}
                        </h2>
                        {renderLongDescription(
                          expertises[activeExpertise].longDescription
                        )}
                      </div>
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

              {/* Points d'expertise - à droite, compact */}
              {!showDetails && (
                <motion.div
                  key={activeExpertise + 2}
                  initial="initial"
                  whileInView="animate"
                  variants={contentVariants}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs z-10"
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
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-xs text-secondary hover:text-primary transition-colors"
                    >
                      Voir plus...
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Navigation des expertises - en bas */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {expertises.map((expertise, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveExpertise(index);
                      setShowDetails(false);
                    }}
                    disabled={showDetails}
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{
                      scale: activeExpertise === index ? 1 : 0.9,
                      opacity: activeExpertise === index ? 1 : 0.6,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
