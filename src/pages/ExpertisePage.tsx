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
import hiring2 from "@/assets/hiring2.webp";
import contentieux from "@/assets/contentieuxrespo.webp";
import douanes from "@/assets/inco3.webp";
import fiscalite from "@/assets/inco2.webp";
import hiring from "@/assets/hiring.webp";
import aboutHeader from "@/assets/about-header.webp";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ExpertisePage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { t } = useLanguage();

  const expertises = [
    {
      id: "conseil-juridique",
      title: t("Conseil juridique", "Legal Advisory"),
      icon: FileCheck,
      image: hiring2,
      description: t(
        "Accompagnement juridique personnalisé pour sécuriser vos décisions stratégiques et opérationnelles. Notre équipe vous guide dans toutes vos démarches avec une approche pragmatique et innovante.",
        "Tailored legal support to secure your strategic and operational decisions. Our team guides you through every step with a pragmatic and innovative approach."
      ),
      points: [
        t("Droit et gouvernance des sociétés", "Corporate law and governance"),
        t("Droit commercial et commerce international", "Commercial law and international trade"),
        t("Investissement et financement", "Investment and finance"),
        t("Droit du numérique et des TIC", "Digital and ICT law"),
        t("Droit du travail et protection sociale", "Employment law and social protection"),
        t("Droit du sport", "Sports law"),
        t("PPP", "PPPs"),
      ],
      link: "/expertise/conseil-juridique",
      longDescription: t(
        `
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
        `
      **Corporate law and governance**

      * Company incorporation
      * Structuring of capital transactions (capital increases and reductions, equity investment, debt-to-equity conversion, issuance of compound or subordinated securities…)
      * Structuring of organic growth transactions (mergers and acquisitions, demergers, partial asset contributions, conversions) or external growth (joint ventures, consortia, branches, representative or liaison offices)
      * Corporate governance assistance: company secretarial services for boards of directors and general meetings, audit of corporate records and executive body decisions, drafting of shareholder agreements

      **Investment and Finance**

      * Legal feasibility studies for projects
      * Negotiation and structuring of investment transactions
      * Negotiation and drafting of investment and placement agreements
      * Legal structuring of fundraising and project finance
      * Review of legal documentation for structured and syndicated financings
      * Advice on the legal aspects of leasing, SBLC and documentary credit transactions
      * Assistance with asset management and asset transfers

      **PPPs and public procurement**

      * Negotiation and drafting of BOT-type framework agreements
      * Review of legal documentation for major infrastructure projects
      * Negotiation and drafting of turnkey construction contracts
      * Negotiation and drafting of engineering and industrial subcontracting agreements
      * Negotiation and drafting of concession, lease (affermage) and management (régie) agreements

      **Commercial law and international trade**

      * Advice on the legal aspects of international sale and purchase transactions for goods, property and services
      * Structuring of business transfers and bulk asset disposals
      * Negotiation of commercial guarantees
      * Negotiation and drafting of commercial contracts (distribution, franchising, commercial agency, representation, supply, commercial leases, lease-management)

      **Employment law and labour relations**

      * Drafting of employment contracts and management of international employee mobility
      * Advice on all legal aspects of social security and welfare schemes
      * Payroll processing

      **Digital and ICT law**

      * Advice on the protection and use of personal data
      * Platform development and IT services agreements
      * Advice on the legal aspects of new ICTs

      **Sports law**

      * Incorporation and accreditation of sports companies and associations
      * Negotiation and drafting of sports contracts
      * Legal assistance to sports federations
      `
      ),
      persons: [
        {
          name: "Vanessa de HAPPI",
          post: t("Responsable du Département Conseil", "Head of the Advisory Department"),
          top: 70,
          right: 50,
          bottom: 0,
          Left: 0,
        },
        {
          name: "Freedy NJOMGANG",
          post: t("Adjoint du Département Conseil", "Deputy, Advisory Department"),
          top: 60,
          right: -5,
        },
      ],
    },
    {
      id: "contentieux",
      title: t("Contentieux", "Litigation"),
      icon: Scale,
      image: contentieux,
      description: t(
        "Défense experte de vos intérêts devant toutes les juridictions nationales et internationales. Une de nos armes les plus puissantes est le dialogue.",
        "Expert defence of your interests before all national and international courts. One of our most powerful weapons is dialogue."
      ),
      points: [
        t("Contentieux civil et social", "Civil and employment litigation"),
        t("Contentieux des affaires et investissements", "Business and investment litigation"),
        t("Contentieux maritime et douanier", "Maritime and customs litigation"),
        t("Contentieux administratif et fiscal", "Administrative and tax litigation"),
        t("Recouvrement des créances", "Debt recovery"),
        t("Médiation et arbitrage des affaires", "Business mediation and arbitration"),
        t("Droit pénal général et des affaires", "General and business criminal law"),
      ],
      link: "/expertise/contentieux",
      longDescription: t(
        `
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
        `
      **Broad-spectrum litigation**

      * Civil and employment litigation
      * Business litigation
      * Investment litigation
      * Maritime and customs litigation
      * Administrative and tax litigation
      * Banking and insurance litigation
      * Sports litigation
      * Debt recovery
      * Restructuring and insolvency
      * Land and state property disputes
      * Business mediation and arbitration

      **General criminal law and business criminal law**

      * Advice, assistance and representation of civil parties
      * Advice and assistance to litigants during police custody and questioning, preliminary investigations and judicial investigation proceedings
      * Defence of litigants before the ordinary courts and specialised courts
      `
      ),
      persons: [
        {
          name: "Lionel NGADJUI",
          post: t("Responsable du Département Contentieux ", "Head of the Litigation Department"),
          top: 70,
          right: 50,
          bottom: 0,
          left: 0,
        },
        {
          name: "Glory HUAMBO",
          post: t("Responsable Adjoint du Département Contentieux", "Deputy Head of the Litigation Department"),
          top: 60,
          right: -30,
          bottom: 0,
          Left: 0,
        },
      ],
    },
    {
      id: "conformite-legale-reglementaire",
      title: t("Conformité légale & réglementaire", "Legal & Regulatory Compliance"),
      icon: Shield,
      image: hiring2,
      description: t(
        "Solutions complètes pour assurer la conformité de votre entreprise aux réglementations en vigueur. Le mensonge donne des fleurs mais pas de fruits.",
        "Comprehensive solutions to ensure your company complies with the regulations in force. A lie may bear flowers, but never fruit."
      ),
      points: [
        t("Cartographie des risques légaux et réglementaires", "Legal and regulatory risk mapping"),
        t("Audit des processus de conformité", "Compliance process audit"),
        t("Élaboration et mise en œuvre des programmes", "Design and implementation of programmes"),
        t("Formation et sensibilisation", "Training and awareness"),
        t("Gestion du risque réglementaire", "Regulatory risk management"),
        t("Assistance dans l'élaboration de rapports", "Assistance with report preparation"),
      ],
      link: "/expertise/conformite-legale-reglementaire",
      longDescription: t(
        `

      * Cartographie des risques légaux et réglementaires
      * Audit des processus de conformité
      * Audit de gestion des engagements contractuels
      * Accompagnement dans la gestion du risque règlementaire
      * Élaboration et mise en œuvre des programmes de conformité
      * Formation et sensibilisation des administrateurs, des dirigeants et du personnel sur les risques légaux et règlementaires les plus critiques dans le secteur d’activité de l’entreprise
      * Assistance dans l’élaboration de rapports destinés au conseil d’administration
      * Évaluation et mise à jour du programme de conformité
      `,
        `

      * Legal and regulatory risk mapping
      * Compliance process audit
      * Audit of contractual commitment management
      * Support in regulatory risk management
      * Design and implementation of compliance programmes
      * Training and awareness for directors, executives and staff on the most critical legal and regulatory risks in the company's sector of activity
      * Assistance in preparing reports for the board of directors
      * Assessment and updating of the compliance programme
      `
      ),
      persons: [
        {
          name: "Vanessa de HAPPI",
          post: t(
            "Responsable du Département Conformité legale et règlementaire ",
            "Head of the Legal & Regulatory Compliance Department"
          ),
          top: 70,
          right: 50,
        },
        {
          name: "Freedy NJOMGANG",
          post: t("Responsable Adjoint du Département Contentieux ", "Deputy Head of the Litigation Department"),
          top: 60,
          right: -30,
        },
      ],
    },
    {
      id: "changes-investissements",
      title: t("Douanes, Changes & Investissements", "Customs, Exchange & Investments"),
      icon: TrendingUp,
      image: douanes,
      description: t(
        "Expertise en réglementation des changes et accompagnement des investissements internationaux pour optimiser vos opérations financières.",
        "Expertise in exchange control regulations and support for international investments to optimise your financial operations."
      ),
      points: [
        t("Réglementation des changes", "Exchange control regulations"),
        t("Investissements directs étrangers", "Foreign direct investment"),
        t("Structuration d'opérations", "Transaction structuring"),
        t("Conseil en financement", "Financing advice"),
        t("Autorisations administratives", "Administrative authorisations"),
        t("Opérations de change", "Foreign exchange transactions"),
      ],
      link: "/expertise/changes-investissements",
      longDescription: t(
        `
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
        `
      To meet growing demand from our local and international clients, the Firm has set up a Customs, Exchange and Investment team, led by an expert in CEMAC customs law and foreign trade, which operates in the following areas:

      * Customs advisory and litigation
      * Foreign trade
      * International trade
      *  CEMAC exchange control regulations
      *  Transport law
      *  Investment law
      *  Audit and compliance of commercial, customs and foreign exchange operations
      *  African Continental Free Trade Area (AfCFTA)
      *  Staff training
      `
      ),
      persons: [
        {
          name: "Joel TENE TEKOU",
          post: t(
            "Responsable du Département Douanes, Changes et Investissement",
            "Head of the Customs, Exchange & Investment Department"
          ),
          top: 70,
          right: 50,
        },
        {
          name: "Esther GONYOBE",
          post: t(
            "Responsable du Département Douanes, Changes et Investissement",
            "Head of the Customs, Exchange & Investment Department"
          ),
          top: 60,
          right: -30,
        },
      ],
    },
    {
      id: "fiscalite",
      title: t("Fiscalité", "Tax"),
      icon: Calculator,
      image: fiscalite,
      description: t(
        "Optimisation fiscale et accompagnement dans toutes vos problématiques fiscales nationales et internationales avec une expertise reconnue.",
        "Tax optimisation and support with all your domestic and international tax matters, backed by recognised expertise."
      ),
      points: [
        t("Conseil en fiscalité des entreprises", "Corporate tax advisory"),
        t("Fiscalité internationale", "International tax"),
        t("Contentieux fiscal", "Tax litigation"),
        t("Optimisation fiscale", "Tax optimisation"),
        t("Contrôles fiscaux", "Tax audits"),
        t("TVA et droits de douane", "VAT and customs duties"),
      ],
      link: "/expertise/fiscalite",
      longDescription: t(
        `
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
        `
      To meet growing demand from our local and international clients, and in response to numerous tax issues and changes in legislation, in September 2024 the Firm set up a Tax department, which operates mainly in the following areas:

      * Periodic review of accounts and of the compliance of supporting accounting documents;
      * Management of tax returns;
      * Review of statistical and tax returns;
      * Management of tax audits and tax litigation;
      * Advice on tax optimisation and tax planning measures;
      * Assistance with meeting monthly and annual reporting obligations;
      * Establishment of tax monitoring;
      * Ongoing assessment of sector-specific tax risks;
      * Liaison with tax authorities;
      * Support with investments.
      `
      ),
      persons: [
        {
          name: "Adamou MFONZIE",
          post: t("Responsable du Département Fiscalité", "Head of the Tax Department"),
          top: 70,
          right: 50,
        },
        {
          name: "Russel NGAKO",
          post: t("Responsable Adjoint du Département Fiscalité", "Deputy Head of the Tax Department"),
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
            alt={t("Nos expertises — D. HAPPI Avocats", "Our expertise — D. HAPPI Attorneys")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t("Nos Expertises", "Our Expertise")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t("Plus de 40 ans d'expertise juridique", "Over 40 years of legal expertise")}
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
                  {t("Cibler là où cela compte", "Focusing where it matters")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t(
                    "Nos avocats ont joué un rôle clé dans plusieurs des transactions les plus complexes et les plus marquantes sur le continent au cours de ces dernières années, en contribuant à la mise en place de structures contractuelles sur mesure et de solutions innovantes en matière d'accords de commercialisation.",
                    "In recent years, our lawyers have played a key role in several of the most complex and significant transactions on the continent, helping to put in place bespoke contractual structures and innovative solutions for marketing agreements."
                  )}
                </p>
              </motion.div>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-6 lg:gap-8 lg:min-h-[700px]">
              {/* Conteneur de l'image avec les rectangles de personnes */}
              <div
                className={`relative w-full max-w-[500px] aspect-square lg:w-[500px] lg:h-[500px] transition-all duration-500 ${
                  showDetails ? "lg:right-[-200px]" : "right-0"
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
                      className="absolute hidden lg:block p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md max-w-[180px] text-left"
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

              {/* Mobile & tablette : responsables affichés sous l'image */}
              {expertises[activeExpertise].persons && (
                <div className="flex flex-wrap justify-center gap-3 lg:hidden w-full">
                  {expertises[activeExpertise].persons.map((person, idx) => (
                    <div
                      key={activeExpertise + "-m-" + idx}
                      className="p-3 bg-white rounded-lg shadow-md text-left border border-border/50"
                    >
                      <p className="font-bold text-secondary text-sm">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.post}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Titre et description - à gauche, compact */}
              <motion.div
                key={`${activeExpertise}-${showDetails}`}
                initial="initial"
                whileInView="animate"
                variants={contentVariants}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative w-full lg:absolute lg:left-8 lg:top-1/4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg z-10 ${
                  showDetails ? "lg:max-w-md lg:h-96 lg:overflow-y-auto" : "lg:max-w-sm"
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
                          aria-label={t("Fermer", "Close")}
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
                  className="relative w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg lg:max-w-xs z-10"
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
                      {t("Voir plus...", "See more...")}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Navigation des expertises - en haut sur mobile, en bas sur grand écran */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:mt-8 order-first lg:order-none">
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
                {t("Besoin d'un conseil juridique ?", "In need of legal advice?")}
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                {t(
                  "Nos experts sont à votre disposition pour analyser votre situation et vous proposer les meilleures solutions juridiques.",
                  "Our experts are at your disposal to analyse your situation and propose the best legal solutions."
                )}
              </p>
              <Button size="lg" className="btn-secondary-premium" asChild>
                <a href="/contact">
                  {t("Prendre rendez-vous", "Book an appointment")}
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
