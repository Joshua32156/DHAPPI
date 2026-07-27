import { ArrowRight, Shield, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import aboutHeader from '@/assets/about-header.jpg';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

const About = () => {
  const values = [
    {
      icon: GavelIcon,
      title: "Éthique",
      description: "Engagement ferme envers la confidentialité et l'intégrité professionnelle"
    },
    {
      icon: TrendingUpIcon,
      title: "Efficacité ",
      description: "Nous vous apportons des solutions juridiques rapides et pragmatiques."
    },
    {
      icon: BusinessCenterIcon,
      title: "Professionnalisme",
      description: "Nous mettons notre expertise au service de vos besoins."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
      {/* Page Header */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7781900/pexels-photo-7781900.jpeg"
          alt="À propos de D. Legal"
          className="w-full h-full object-cover object-[50%_67%]"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              À propos de nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Plus de 40 ans d'expertise juridique
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
              Notre Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis 40 ans, le cabinet D.HAPPI Avocats accompagne vos
                      rêves, défend vos droits et se tient à vos côtés dans les
                      moments décisifs. Grâce à notre expertise et à notre
                      engagement, nous avons bâti une relation de confiance
                      durable avec vous, en nous battant pour vos intérêts avec
                      passion et dévouement. Nous avons choisi de privilégier
                      une approche humaine et accessible.
                      Ce sont votre confiance et votre fidélité qui nous
                        permettent de maintenir notre indépendance, d'innover
                        dans nos solutions juridiques et de rendre nos services
                        accessibles à un public diversifié. Merci d’avoir fait
                        partie de notre histoire et de continuer à nous donner
                        la force de défendre vos droits et vos aspirations. D.
                        HAPPI Avocats, c’est votre histoire autant que la nôtre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Notre Vision
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Continuer à être l'un des cabinets de référence au Cameroun et en Afrique centrale, 
                reconnu pour notre excellence, notre intégrité et notre capacité à anticiper 
                les évolutions du droit dans un monde en constante mutation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons en une approche collaborative et innovante du droit, 
                où la technologie et l'expertise humaine se complètent pour offrir 
                des solutions juridiques optimales à nos clients.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Nos Engagements
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Accompagnement personnalisé adapté à chaque situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Transparence totale dans nos relations client</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Formation continue pour rester à la pointe du droit</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Respect strict de la déontologie professionnelle</span>
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
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre pratique quotidienne 
              et nos relations avec nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center premium-scale">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-secondary-foreground" />
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