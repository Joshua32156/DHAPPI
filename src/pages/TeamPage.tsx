import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  // speciality: string;
  image: string;
  description: string;
  link: string;
}

import { getTeamData } from "@/data/team";
import { useLanguage } from "@/i18n/LanguageContext";
import teamHero from "@/assets/team-hero.webp";

const TeamPage = () => {
  const { lang, t } = useLanguage();
  const teamData = getTeamData(lang);
  // Convert object to array for mapping
  const team = Object.entries(teamData).map(([slug, data]) => ({
    name: data.name,
    role: data.role,
    speciality: data.expertise && data.expertise.length > 0 ? data.expertise[0] : "",
    image: data.image,
    description: data.description || (data.shortDescription ? (data.shortDescription.length > 100 ? data.shortDescription.substring(0, 100) + "..." : data.shortDescription) : ""),
    link: `/team/${slug}`,
  }));

  // VARIANTES D'ANIMATION
  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ctaButtonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4, // Un léger délai pour qu'il apparaisse après le texte
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Page Header */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={teamHero}
            alt={t("Équipe — D. HAPPI Avocats", "Team — D. HAPPI Attorneys")}
            className="w-full h-full object-cover object-[50%_70%]"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t("Notre Équipe", "Our Team")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t("Des experts juridiques dévoués à votre service", "Legal experts dedicated to serving you")}
              </p>
            </div>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {t("Une Équipe d'Excellence", "A Team of Excellence")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "Notre équipe multidisciplinaire réunit des avocats expérimentés et spécialisés, unis par la passion du droit et l'engagement envers l'excellence. Chaque membre apporte son expertise unique pour vous offrir des solutions juridiques complètes et innovantes.",
                  "Our multidisciplinary team brings together experienced, specialist lawyers united by a passion for the law and a commitment to excellence. Each member contributes their unique expertise to provide you with comprehensive and innovative legal solutions."
                )}
              </p>
            </div>

            {/* Team Grid */}
            {/* Chaque carte s'anime individuellement : sur mobile la grille fait
                plus de 10 000px de haut, une animation globale ne se déclenchait jamais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member: TeamMember, index: number) => (
                <motion.div
                  key={index}
                  className="max-w-sm mx-auto overflow-hidden rounded-lg" // Classes déplacées ici
                  variants={cardItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Rétablissement de l'effet au survol
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={member.link}>
                    <Card className="h-full">
                      <div className="relative">
                        <img
                          src={member.image}
                          loading="lazy"
                          decoding="async"
                          alt={member.name}
                          className="w-full h-80 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-heading font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-secondary font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-4">
                          {/* <p className="text-sm font-medium text-secondary mb-2">
                            Spécialité : {member.speciality}
                          </p> */}
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {member.description}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            asChild
                          >
                            <a
                              href={`mailto:contact@dlega.com?subject=${t("Contact pour", "Contact for")} ${member.name}`}
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              Contact
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={ctaVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {t("Rejoignez Notre Équipe", "Join Our Team")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                {t(
                  "Nous recrutons des talents passionnés par le droit et désireux de contribuer à l'excellence de notre cabinet. Découvrez nos opportunités de carrière.",
                  "We recruit talented individuals who are passionate about the law and eager to contribute to the excellence of our firm. Discover our career opportunities."
                )}
              </p>
              <motion.div variants={ctaButtonVariants}>
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/carrieres">{t("Voir les Offres d'Emploi", "View Job Openings")}</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
