import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import logoBlueRound from "@/assets/Logo blueround.png";
import heroLawFirm from "@/assets/hero-law-firm.webp";
import heroLawFirm2 from "@/assets/hero-law-firm-2.webp";
import heroLawFirm3 from "@/assets/hero-law-firm-3.webp";
import expertiseHeader from "@/assets/expertise-header.webp";
import aboutHeader from "@/assets/about-header.webp";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type ExpertiseArea = {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
};

// Contenu d'une carte (partagé entre la version orbite et la version grille)
const ExpertiseCard = ({ area, moreLabel }: { area: ExpertiseArea; moreLabel: string }) => (
  <Link
    to={`/expertise#${area.id}`}
    className="relative block overflow-hidden rounded-2xl shadow-lg border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl w-full h-full"
    style={{
      backgroundImage: `url(${area.backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dégradé permanent pour garder le texte lisible sur la photo */}
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
    {/* Blue overlay that appears on hover */}
    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-white transition-colors duration-300">
        {area.title}
      </h3>
      <p className="text-sm text-white/90 leading-relaxed opacity-90">
        {area.description}
      </p>
      {/* Indicateur hover */}
      <div className="mt-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center text-xs font-semibold text-secondary group-hover:text-secondary/80">
          <span>{moreLabel}</span>
          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300 text-secondary" />
        </div>
      </div>
    </div>
  </Link>
);

// Carte positionnée en orbite autour du logo (grands écrans uniquement)
const OrbitCard = ({
  area,
  index,
  total,
  moreLabel,
}: {
  area: ExpertiseArea;
  index: number;
  total: number;
  moreLabel: string;
}) => {
  const itemRef = useRef(null);
  const isItemInView = useInView(itemRef, { once: true, amount: 0.5 });

  const rotation = 10;
  const angle = (360 / total) * index - 90 + rotation;
  const radius = 320;
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius - 145; // Décalage de 30px à gauche
  const y = Math.sin(rad) * radius - 80; // Décalage de 20px vers le haut

  return (
    <motion.div
      ref={itemRef}
      style={{
        position: "absolute",
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        width: "260px",
        height: "192px",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
      }}
      className="group cursor-pointer"
      variants={fadeIn}
      initial="hidden"
      animate={isItemInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >
      <ExpertiseCard area={area} moreLabel={moreLabel} />
    </motion.div>
  );
};

const Expertise = () => {
  const { t } = useLanguage();
  const moreLabel = t("En savoir plus", "Learn more");

  const expertiseAreas: ExpertiseArea[] = [
    {
      id: "conseil-juridique",
      title: t("Conseil juridique", "Legal Advisory"),
      description: t(
        "Accompagnement personnalisé pour entreprises et particuliers",
        "Tailored support for businesses and individuals"
      ),
      backgroundImage: heroLawFirm,
    },
    {
      id: "contentieux",
      title: t("Contentieux", "Litigation"),
      description: t("Défense experte et stratégie judiciaire", "Expert advocacy and litigation strategy"),
      backgroundImage: heroLawFirm2,
    },
    {
      id: "conformite-legale-reglementaire",
      title: t("Conformité légale", "Legal Compliance"),
      description: t("Solutions complètes pour votre conformité", "Comprehensive compliance solutions"),
      backgroundImage: expertiseHeader,
    },
    {
      id: "changes-investissements",
      title: t("Douanes, Changes & Investissements", "Customs, Exchange & Investments"),
      description: t("Expertise en opérations internationales", "Expertise in cross-border transactions"),
      backgroundImage: heroLawFirm3,
    },
    {
      id: "fiscalite",
      title: t("Fiscalité", "Tax"),
      description: t("Stratégie fiscale optimisée", "Optimised tax strategy"),
      backgroundImage: aboutHeader,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("Notre Expertise", "Our Legal")}
            <span className="text-secondary block text-3xl md:text-4xl">
              {t("juridique", "Expertise")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Une approche personnalisée et des solutions sur mesure pour chaque défi juridique",
              "A personalised approach and tailor-made solutions for every legal challenge"
            )}
          </p>
        </div>

        {/* Mobile & tablette : grille simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              className={`group h-48 ${index === expertiseAreas.length - 1 ? "sm:col-span-2" : ""}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ExpertiseCard area={area} moreLabel={moreLabel} />
            </motion.div>
          ))}
        </div>

        {/* Grand écran : design centré avec services gravitant autour */}
        <div className="relative max-w-6xl mx-auto h-[700px] hidden lg:block">
          {/* Image/Avatar central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Cercle principal avec dégradé soft */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 backdrop-blur-sm border border-secondary/20 shadow-2xl flex items-center justify-center">
                <img loading="lazy" decoding="async" src={logoBlueRound} alt="Logo D. HAPPI" />
              </div>

              {/* Cercles décoratifs animés */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-8 -left-8 w-4 h-4 bg-secondary/40 rounded-full animate-pulse delay-500"></div>
              <div className="absolute -bottom-15 left-60 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute -top-20 left-20 w-4 h-4 bg-secondary/40 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Services gravitant autour */}
          {expertiseAreas.map((area, index) => (
            <OrbitCard
              key={area.id}
              area={area}
              index={index}
              total={expertiseAreas.length}
              moreLabel={moreLabel}
            />
          ))}
        </div>

        {/* Bottom CTA modernisé */}
        <div className="text-center mt-20">
          <motion.div
            className="bg-gradient-to-r from-card/50 via-card/80 to-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/30 max-w-4xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              {t("Une expertise à votre service", "Expertise at your service")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Chaque situation est unique. Nos experts analysent votre contexte pour vous proposer des solutions personnalisées et efficaces.",
                "Every situation is unique. Our experts analyse your context to offer you effective, tailored solutions."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-secondary-premium">
                <Link to="/equipe">{t("Contacter un expert", "Contact an expert")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
