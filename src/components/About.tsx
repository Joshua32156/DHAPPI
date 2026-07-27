import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Protection absolue de vos informations et respect du secret professionnel"
    },
    {
      icon: Target,
      title: "Rigueur",
      description: "Analyse précise et stratégies juridiques adaptées à chaque situation"
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Une équipe à votre écoute, disponible et réactive à vos besoins"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Standards les plus élevés en matière de conseil et représentation juridique"
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
                Excellence juridique 
                <span className="text-secondary block">depuis 1985</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre D. d'avocats international accompagne entreprises et particuliers 
                dans leurs défis juridiques les plus complexes. Avec plus de 40 ans d'expérience 
                et une présence dans plusieurs pays, nous sommes votre partenaire de confiance 
                pour naviguer dans un environnement juridique en constante évolution.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-primary">
                Notre Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Être le D. de référence en Afrique centrale, reconnu pour son expertise, 
                son innovation et son engagement envers l'excellence. Nous œuvrons quotidiennement 
                pour offrir des solutions juridiques sur mesure, alliant tradition et modernité.
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
                    Notre D. en Chiffres
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">35+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Bureaux</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Experts juridiques</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground italic">
                    "L'excellence juridique au service de votre réussite"
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