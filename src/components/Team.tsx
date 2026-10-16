import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dieudonneHappi from "@/assets/dieudonne-happi.jpg";
import vanessa from "@/assets/VANESSA DE HAPPI.avif";
import lionel from "@/assets/LIONEL NGADJUI.avif";
import djontu from "@/assets/ARNOLD KAMDEM.avif";
import arnold from "@/assets/TeamImages/Arnold Kamdem.avif";
import { useLanguage } from "@/i18n/LanguageContext";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

const Team = () => {
  const { t } = useLanguage();
  const teamMembers = [
    {
      name: "Dieudonné HAPPI",
      position: t("Associé fondateur", "Founding Partner"),
      specialty: t("Droit des affaires & Contentieux", "Business Law & Litigation"),
      image: dieudonneHappi,
      bio: t("Avocat au barreau du Cameroun depuis 35 ans, Me Happi est associé principal de DH Avocats.", "A member of the Cameroon Bar for 35 years, Mr Happi is the senior partner of DH Avocats."),
    },
    {
      name: "Vanessa de HAPPI",
      position: "Of Counsel",
      specialty: t("Fiscalité & Conformité", "Tax & Compliance"),
      image: vanessa,
      bio: t("Diplômée en droit français, en droit québécois et en Common Law.", "Holds degrees in French law, Quebec law and Common Law."),
    },
    {
      name: "Lionel NGADJUI",
      position: t("Avocat senior", "Senior Associate"),
      specialty: t("Changes & Investissements", "Exchange & Investments"),
      image: lionel,
      bio: t("Lionel supervise les activités des départements Conseil et Contentieux.", "Lionel oversees the activities of the Advisory and Litigation departments."),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("Notre Équipe", "Our Team")}
            <span className="text-secondary block text-3xl md:text-4xl">
              {t("d'experts", "of experts")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Des professionnels d'exception, reconnus pour leur expertise et leur engagement au service de vos intérêts.",
              "Exceptional professionals, recognised for their expertise and their commitment to serving your interests."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-card-premium premium-scale h-full">
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <ImageWithSkeleton
                    src={member.image}
                    loading="lazy"
                    decoding="async"
                    alt={member.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                      <Mail className="h-4 w-4 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                      <Linkedin className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <div className="text-secondary font-medium mb-2">
                    {member.position}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mb-4">
                    {member.specialty}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-card p-8 rounded-xl shadow-elevation mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                +20
              </div>
              <div className="text-muted-foreground">{t("Professionnels dédiés", "Dedicated professionals")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                5
              </div>
              <div className="text-muted-foreground">{t("Domaines d'expertise", "Areas of expertise")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">{t("Clients accompagnés", "Clients supported")}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {t("40 ans", "40 years")}
              </div>
              <div className="text-muted-foreground">{t("D'expérience", "Of experience")}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            {t("Rejoignez notre équipe d'exception", "Join our exceptional team")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t(
              "Nous recherchons constamment des talents pour renforcer notre équipe. Découvrez nos opportunités de carrière.",
              "We are always looking for talented people to strengthen our team. Discover our career opportunities."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-premium">
              <a href="/equipe">
              {t("Découvrir toute l'équipe", "Meet the whole team")}
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              <a href="/carrieres">
              {t("Offres d'emploi", "Job openings")}
              </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
