import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import fontteam from "@/assets/fondteam.webp";
import { useLanguage } from "@/i18n/LanguageContext";

interface ExpertData {
  name: string;
  role: string;
  speciality?: string;
  grade?: string;
  image: string;
  shortDescription?: string;
  longDescription: string;
  expertiseAreas?: string[];
  ParcoursAcadémique?: string[];
  DistinctionsEtClassements?: string[];
  Langue?: string[];
  linkedin?: string;
  email?: string;
}

interface ProfilePageProps {
  expertData: ExpertData;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const PHOTO_H_MD = 384; // 24rem
const PHOTO_H_SM = 288; // 18rem
const OVERFLOW_MD = PHOTO_H_MD / 2;
const OVERFLOW_SM = PHOTO_H_SM / 2;

const ProfilePage: React.FC<ProfilePageProps> = ({ expertData }) => {
  const { t } = useLanguage();
  const {
    name,
    role,
    speciality,
    grade,
    image,
    longDescription,
    expertiseAreas = [],
    ParcoursAcadémique = [],
    DistinctionsEtClassements = [],
    Langue = [],
    linkedin,
    email,
  } = expertData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.div
        className="flex-grow pt-24"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <section className="bg-background relative pb-24">
          <div className="relative w-full bg-primary overflow-visible pt-16 pb-4 md:pb-4">
            <img
              src={fontteam}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/95" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-10">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="w-full flex flex-col items-start text-left text-white pb-0 lg:pr-[360px]">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
                    {name}
                  </h1>
                  <p className="mt-2 text-lg text-white/80 font-medium">
                    {role}
                    {speciality ? ` • ${speciality}` : ""}
                  </p>
                  {grade && (
                    <p className="text-sm text-white/60 mt-1">{grade}</p>
                  )}

                  {/* Les domaines d'expertise sont maintenant affichés dans les listes déroulantes */}

                  <div className="mt-6 flex gap-3">
                    {email && (
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="border-white/30 bg-transparent text-white hover:bg-white/10"
                      >
                        <a
                          href={`mailto:${email}`}
                          aria-label={t(`Envoyer un email à ${name}`, `Email ${name}`)}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {linkedin && (
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="border-white/30 bg-transparent text-white hover:bg-white/10"
                      >
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t(`Voir le profil LinkedIn de ${name}`, `View ${name}'s LinkedIn profile`)}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex justify-center lg:mt-0 lg:block lg:absolute lg:top-full lg:right-16 lg:-translate-y-1/2 z-10">
                <motion.div
                  className="w-56 h-72 lg:w-72 lg:h-96 overflow-hidden shadow-2xl bg-background rounded-none"
                  variants={imageVariants}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-2 pt-10 lg:pt-16">
                <div className="prose max-w-none text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: longDescription }} />
                </div>
              </div>

              <div className="lg:col-span-1 flex justify-center lg:justify-end lg:mt-[210px]">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full lg:max-w-[288px]"
                >
                  {expertiseAreas.length > 0 && (
                    <AccordionItem
                      value="expertise"
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="font-semibold text-foreground text-left py-4">
                        {t("Domaines d'expertise", "Practice areas")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-none space-y-2 text-sm text-muted-foreground text-left pb-4">
                          {expertiseAreas.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {ParcoursAcadémique.length > 0 && (
                    <AccordionItem
                      value="parcours"
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="font-semibold text-foreground text-left py-4">
                        {t("Parcours académique", "Education")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-none space-y-2 text-sm text-muted-foreground text-left pb-4">
                          {ParcoursAcadémique.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {DistinctionsEtClassements.length > 0 && (
                    <AccordionItem
                      value="distinctions"
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="font-semibold text-foreground text-left py-4">
                        {t("Distinctions & classements", "Awards & rankings")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-none space-y-2 text-sm text-muted-foreground text-left pb-4">
                          {DistinctionsEtClassements.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {Langue.length > 0 && (
                    <AccordionItem
                      value="langues"
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="font-semibold text-foreground text-left py-4">
                        {t("Langues parlées", "Languages")}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-none space-y-2 text-sm text-muted-foreground text-left pb-4">
                          {Langue.map((l, i) => (
                            <li key={i}>{l}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
