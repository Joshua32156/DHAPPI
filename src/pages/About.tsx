import { ArrowRight, Shield, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import aboutHeader from '@/assets/about-header.webp';
import { Gavel, Briefcase, TrendingUp } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import { useLanguage } from '@/i18n/LanguageContext';
import aboutHero from "@/assets/about-hero.webp";

const About = () => {
  const { t } = useLanguage();
  const values = [
    {
      title: t("Excellence Juridique", "Legal Excellence"),
      description: t("Une maîtrise approfondie du droit combinée à une compréhension fine de vos enjeux business.", "In-depth command of the law combined with a keen understanding of your business challenges."),
      icon: Gavel,
    },
    {
      title: t("Vision Stratégique", "Strategic Vision"),
      description: t("Au-delà du droit, nous vous accompagnons dans vos décisions stratégiques les plus complexes.", "Beyond the law, we support you in your most complex strategic decisions."),
      icon: TrendingUp,
    },
    {
      title: t("Partenaire de Confiance", "Trusted Partner"),
      description: t("Une relation basée sur la transparence, la réactivité et la confidentialité absolue.", "A relationship built on transparency, responsiveness and absolute confidentiality."),
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
      {/* Page Header */}
      <section className="relative h-64 overflow-hidden">
        <img
          src={aboutHero}
          alt={t("À propos de D. HAPPI Avocats", "About D. HAPPI Attorneys")}
          className="w-full h-full object-cover object-[50%_67%]"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {t("À propos de nous", "About us")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              {t("Plus de 40 ans d'expertise juridique", "Over 40 years of legal expertise")}
            </p>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              {t("Notre Mission", "Our Mission")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Depuis 40 ans, le cabinet D.HAPPI Avocats accompagne vos rêves, défend vos droits et se tient à vos côtés dans les moments décisifs. Grâce à notre expertise et à notre engagement, nous avons bâti une relation de confiance durable avec vous, en nous battant pour vos intérêts avec passion et dévouement. Nous avons choisi de privilégier une approche humaine et accessible. Ce sont votre confiance et votre fidélité qui nous permettent de maintenir notre indépendance, d'innover dans nos solutions juridiques et de rendre nos services accessibles à un public diversifié. Merci d’avoir fait partie de notre histoire et de continuer à nous donner la force de défendre vos droits et vos aspirations. D. HAPPI Avocats, c’est votre histoire autant que la nôtre.",
                "For 40 years, D.HAPPI Avocats has supported your ambitions, defended your rights and stood by your side at decisive moments. Through our expertise and commitment, we have built a lasting relationship of trust with you, fighting for your interests with passion and dedication. We have chosen to favour a human and accessible approach. It is your trust and loyalty that enable us to maintain our independence, to innovate in our legal solutions and to make our services accessible to a diverse public. Thank you for being part of our history and for continuing to give us the strength to defend your rights and aspirations. D. HAPPI Avocats is your story as much as ours."
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                {t("Notre Vision", "Our Vision")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
              {t(
                "Continuer à être l'un des cabinets de référence au Cameroun et en Afrique centrale, reconnu pour notre excellence, notre intégrité et notre capacité à anticiper les évolutions du droit dans un monde en constante mutation.",
                "To remain one of the leading firms in Cameroon and Central Africa, recognised for our excellence, our integrity and our ability to anticipate legal developments in a constantly changing world."
              )}
            </p>
              <p className="text-muted-foreground leading-relaxed">
              {t(
                "Nous croyons en une approche collaborative et innovante du droit, où la technologie et l'expertise humaine se complètent pour offrir des solutions juridiques optimales à nos clients.",
                "We believe in a collaborative and innovative approach to law, in which technology and human expertise complement each other to deliver optimal legal solutions for our clients."
              )}
            </p>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                {t("Nos Engagements", "Our Commitments")}
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("Accompagnement personnalisé adapté à chaque situation", "Personalised support tailored to every situation")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("Transparence totale dans nos relations client", "Complete transparency in our client relationships")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("Formation continue pour rester à la pointe du droit", "Continuous training to stay at the forefront of the law")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("Respect strict de la déontologie professionnelle", "Strict adherence to professional ethics")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-accent/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              {t("Nos Valeurs", "Our Values")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Les principes fondamentaux qui guident notre pratique quotidienne et nos relations avec nos clients.",
                "The fundamental principles that guide our daily practice and our relationships with our clients."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center premium-scale">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;