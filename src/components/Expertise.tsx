import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import logoBlueRound from "@/assets/Logo blueround.png";
import heroLawFirm from "@/assets/hero-law-firm.jpg";
import heroLawFirm2 from "@/assets/hero-law-firm-2.jpg";
import heroLawFirm3 from "@/assets/hero-law-firm-3.jpg";
import expertiseHeader from "@/assets/expertise-header.jpg";
import aboutHeader from "@/assets/about-header.jpg";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Conseil juridique",
      description:
        "Accompagnement personnalisé pour entreprises et particuliers",
      position: "top-left",
      backgroundImage: heroLawFirm,
    },
    {
      title: "Contentieux",
      description: "Défense experte et stratégie judiciaire",
      position: "top-right",
      backgroundImage: heroLawFirm2,
    },
    {
      title: "Conformité légale",
      description: "Solutions complètes pour votre conformité",
      position: "left",
      backgroundImage: expertiseHeader,
    },
    {
      title: "Douanes, Changes & Investissements",
      description: "Expertise en opérations internationales",
      position: "right",
      backgroundImage: heroLawFirm3,
    },
    {
      title: "Fiscalité",
      description: "Stratégie fiscale optimisée",
      position: "bottom",
      backgroundImage: aboutHeader,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Notre Expertise
            <span className="text-secondary block text-3xl md:text-4xl">
              juridique
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une approche personnalisée et des solutions sur mesure pour chaque
            défi juridique
          </p>
        </div>

        {/* Design centré avec services gravitant autour */}
        <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] overflow-visible">
          {/* Image/Avatar central */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Cercle principal avec dégradé soft */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 backdrop-blur-sm border border-secondary/20 shadow-2xl flex items-center justify-center">
                <img src={logoBlueRound} alt="Logo D.HAPPI" />
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
          {expertiseAreas.map((area, index) => {
            const total = expertiseAreas.length;
            const rotation = 10;
            const angle = (360 / total) * index - 90 + rotation;
            const radius = 320;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius - 145; // Décalage de 30px à gauche
            const y = Math.sin(rad) * radius - 80; // Décalage de 20px vers le haut

            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, {
              once: true,
              amount: 0.5,
            });

            return (
              <motion.div
                key={index}
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
                <div
                  className="relative overflow-hidden rounded-2xl shadow-lg border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl w-full h-full"
                  style={{
                    backgroundImage: `url(${area.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
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
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-xs font-semibold text-secondary group-hover:text-secondary/80">
                        <span>En savoir plus</span>
                        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              Une expertise à votre service
            </h3>
            <p className="text-muted-foreground mb-6">
              Chaque situation est unique. Nos experts analysent votre contexte
              pour vous proposer des solutions personnalisées et efficaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary-premium">
                <Link to="/equipe">Contacter un expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
