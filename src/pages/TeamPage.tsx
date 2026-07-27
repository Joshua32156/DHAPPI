import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dieudonneHappi from "@/assets/TeamImages/HomeTeam/HAPPI.jpg";
import vanessa from "@/assets/TeamImages/HomeTeam/Vannessa.jpg";
import lionel from "@/assets/LIONEL NGADJUI.avif";
import djontu from "@/assets/STÉPHANE DJONTU.avif";
import ingrid from "@/assets/INGRID TCHUEM.avif";
import aboutHeader from "@/assets/about-header.jpg";
import { motion } from "framer-motion";
import russel from "@/assets/TeamImages/HomeTeam/Russel.jpg";
import adolphe from "@/assets/TeamImages/Adolphe.avif";
import rosalie from "@/assets/TeamImages/HomeTeam/Rosalie.jpg";
import estelle from "@/assets/TeamImages/HomeTeam/Estelle.jpg";
import ariel from "@/assets/TeamImages/HomeTeam/Ariel.jpg";
import adamou from "@/assets/TeamImages/Adamou.jpg";
import glory from "@/assets/TeamImages/HomeTeam/Glory.jpg";
import nyobe from "@/assets/TeamImages/HomeTeam/NYOBE.jpg";
import tene from "@/assets/TeamImages/HomeTeam/Tene.jpg";
import allyson from "@/assets/TeamImages/HomeTeam/Allyson.jpg";
import judicael from "@/assets/TeamImages/HomeTeam/Judicael.jpg";

interface TeamMember {
  name: string;
  role: string;
  // speciality: string;
  image: string;
  description: string;
  link: string;
}

const TeamPage = () => {
  const team = [
    {
      name: "Dieudonné Happi",
      role: "Associé Fondateur",
      speciality: "Droit des Affaires & Fiscalité",
      image: dieudonneHappi,
      description:
        "Avocat au barreau du Cameroun depuis 35 ans, Me Happi est associé principal de DH Avocats.",
      link: "/team/dieudonne-happi",
    },
    {
      name: "Vanessa de HAPPI",
      role: "Of Counsel",
      speciality: "Contentieux & Arbitrage",
      image: vanessa,
      description:
        "Diplômée en droit français, en droit québécois et en Common Law.",
      link: "/team/vanessa-de-happi",
    },
    {
      name: "Lionel NGADJUI",
      role: "Avocat",
      speciality: "Conformité & Réglementation",
      image: lionel,
      description:
        "Lionel supervise les activités des départements Conseil et Contentieux.",
      link: "/team/lionel-ngadjui",
    },
    {
      name: "Joël TENE",
      role: "Expert en Douanes Agréé CEMAC",
      speciality: "Consultant Douanes, Changes & Transport",
      image: tene,
      description:
        "Joël TENE est actuellement inscrit en doctorat en Droit des Affaires...",
      link: "/team/joel-tene",
    },
    {
      name: "Judicaël Nguelefack",
      role: "legal Counsel",
      speciality: "Juriste Contentieux",
      image: judicael,
      description:
        "La pratique de Judicaël inclut les matières relatives au contentieux pénal, civil, administratif et OHADA.",
      link: "/team/judicael-nguelefack",
    },
    {
      name: "Ingrid TCHUEM",
      role: "Avocat",
      // speciality: "",
      image: ingrid,
      description:
        "Ingrid se spécialise en contentieux des affaires, droit administratif et bancaire.",
      link: "/team/ingrid-tchuem",
    },
    {
      name: "Russel NGAKO",
      role: "Legal Counsel",
      speciality: "Responsable du Département Conseil",
      image: russel,
      description: "Juriste collaborateur pluridisciplinaire, Russel est titulaire d'une Maîtrise en droit Privé Fondamental.",
      link: "/team/russel-ngako",
    },
    {
      name: "Rosalie DIPITA",
      role: "Assistante Juridique",
      // speciality: "Juriste Conseil",
      image: rosalie,
      description: "Rosalie est le pilier autour duquel tourne l'organisation de l'équipe de D. HAPPI Avocats.",
      link: "/team/rosalie-dipita",
    },
    {
      name: "Estelle TAHOUE",
      role: "Executive Assistant",
      // speciality: "Juriste Conseil",
      image: estelle,
      description: "Estelle apporte un soutien administrative et opérationnel à la direction du cabinet.",
      link: "/team/estelle-tahoue",
    },
    {
      name: "Dr Ariel BOLANGA OGOLONG",
      role: "Legal Counsel",
      speciality: "Docteur en Droit Privé",
      image: ariel,
      description: "Dr Ariel BOLANGA OGOLONG est un juriste spécialisé en droit des affaires et en conseil juridique.",
      link: "/team/ariel-bolanga-ogolong",
    },
    {
      name: "Adamou MFONZIE",
      role: "Expert Fiscal Agréé CEMAC",
      speciality: "Responsable du Département Fiscal",
      image: adamou,
      description: "Adamou MFONZIE est Fiscaliste et Responsable du Département Fiscalité de D. HAPPI Avocats, qu’il a rejoint en 2024.",
      link: "/team/adamou-mfonzie",
    },
    {
      name: "Me Glory HUAMBO",
      role: "Expert en droit social",
      speciality: "",
      image: glory,
      description: "Maître Glory HUAMBO justifie de douze (12) années d’expérience professionnelle, dont cinq (05) années en cabinet...",
      link: "/team/glory-huambo",
    },
    {
      name: "Esther NGO NYOBE",
      role: "Doctorante en droit des affaires",
      speciality: "Juriste Conseil",
      image: nyobe,
      description: "Esther est juriste financière, disposant de cinq (05) années d’expérience professionnelle, ...",
      link: "/team/esther-ngo-nyobe",
    },
    {
      name: "Allyson MPONDO",
      role: "Juriste Conseil",
      speciality: "",
      image: allyson,
      description: "Titulaire d’un Master II en droit des affaires de l’Université de Buea, Allyson poursuit actuellement un Master ...",
      link: "/team/allyson-mpondo",
    },
    {
      name: "Jodie NGODEM",
      role: "Avocat stagiaire",
      speciality: "",
      image: allyson,
      description: "Avocat en stage au Barreau du Cameroun et diplômée de l'Institute of Legal Practice and Development au Rwanda...",
      link: "/team/jodie-ngodem",
    },
    {
      name: "Pascale-Lavande ONANA",
      role: "Stagiaire en Droit",
      speciality: "",
      image: allyson,
      description: "Titulaire d’une licence en droit privé, Pascale-Lavande poursuit actuellement un Master 2 en droit des affaires...",
      link: "/team/pascal-lavande-onana",
    },
    {
      name: "Grace EPOTE",
      role: "Avocat stagiaire",
      speciality: "",
      image: allyson,
      description: "Titulaire d’une licence en droit public, et d’un niveau master en droit public international...",
      link: "/team/grace-epote",
    },
  ];

  // VARIANTES D'ANIMATION
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Démarrage en cascade des enfants
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ctaVariants = {
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

  const ctaButtonVariants = {
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
            src="https://images.pexels.com/photos/17257616/pexels-photo-17257616.jpeg"
            alt="À propos de D. Legal"
            className="w-full h-full object-cover object-[50%_70%]"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Notre Équipe
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Des experts juridiques dévoués à votre service
              </p>
            </div>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Une Équipe d'Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Notre équipe multidisciplinaire réunit des avocats expérimentés
                et spécialisés, unis par la passion du droit et l'engagement
                envers l'excellence. Chaque membre apporte son expertise unique
                pour vous offrir des solutions juridiques complètes et
                innovantes.
              </p>
            </div>

            {/* Team Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {team.map((member: TeamMember, index: number) => (
                <motion.div
                  key={index}
                  className="max-w-sm mx-auto overflow-hidden rounded-lg" // Classes déplacées ici
                  variants={cardItemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Rétablissement de l'effet au survol
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={member.link}>
                    <Card className="h-full">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-56 object-cover object-top"
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
                              href={`mailto:contact@dlega.com?subject=Contact pour ${member.name}`}
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
            </motion.div>
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
                Rejoignez Notre Équipe
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Nous recrutons des talents passionnés par le droit et désireux
                de contribuer à l'excellence de notre D.. Découvrez nos
                opportunités de carrière.
              </p>
              <motion.div variants={ctaButtonVariants}>
                <Button size="lg" className="btn-secondary-premium" asChild>
                  <a href="/carrieres">Voir les Offres d'Emploi</a>
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
