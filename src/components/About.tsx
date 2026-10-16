import { Shield, Target, Users, Award } from 'lucide-react';
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: Shield,
      title: t("Confidentialité", "Confidentiality"),
      description: t("Protection absolue de vos informations et respect du secret professionnel", "Absolute protection of your information and strict observance of professional secrecy")
    },
    {
      icon: Target,
      title: t("Rigueur", "Rigour"),
      description: t("Analyse précise et stratégies juridiques adaptées à chaque situation", "Precise analysis and legal strategies tailored to each situation")
    },
    {
      icon: Users,
      title: t("Accessibilité", "Accessibility"),
      description: t("Une équipe à votre écoute, disponible et réactive à vos besoins", "A team that listens, available and responsive to your needs")
    },
    {
      icon: Award,
      title: t("Excellence", "Excellence"),
      description: t("Standards les plus élevés en matière de conseil et représentation juridique", "The highest standards in legal advice and representation")
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                {t("Excellence juridique", "Legal excellence")}{" "}
                <span className="text-secondary block">{t("depuis 1985", "since 1985")}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Notre cabinet d'avocats international accompagne entreprises et particuliers dans leurs défis juridiques les plus complexes. Avec plus de 40 ans d'expérience et une présence dans plusieurs pays, nous sommes votre partenaire de confiance pour naviguer dans un environnement juridique en constante évolution.",
                  "Our international law firm supports businesses and individuals through their most complex legal challenges. With over 40 years of experience and a presence in several countries, we are your trusted partner in navigating an ever-changing legal environment."
                )}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-primary">
                {t("Notre Vision", "Our Vision")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Être le cabinet de référence en Afrique centrale, reconnu pour son expertise, son innovation et son engagement envers l'excellence. Nous œuvrons quotidiennement pour offrir des solutions juridiques sur mesure, alliant tradition et modernité.",
                  "To be the leading law firm in Central Africa, recognised for its expertise, innovation and commitment to excellence. We work every day to deliver bespoke legal solutions that combine tradition and modernity."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-card-premium premium-scale">
                  <value.icon className="h-8 w-8 text-secondary mb-4" />
                  <h4 className="font-heading font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats */}
          <div className="relative">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elevation">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {t("Notre Cabinet en Chiffres", "Our Firm in Figures")}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">35+</div>
                    <div className="text-sm text-muted-foreground">{t("Années d'expérience", "Years of experience")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">{t("Clients satisfaits", "Satisfied clients")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">{t("Bureaux", "Offices")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">{t("Experts juridiques", "Legal experts")}</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground italic">
                    {t("\"L'excellence juridique au service de votre réussite\"", "\"Legal excellence in the service of your success\"")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;