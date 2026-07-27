import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dieudonneHappi from "@/assets/dieudonne-happi.jpg";
import vanessa from "@/assets/VANESSA DE HAPPI.avif";
import lionel from "@/assets/LIONEL NGADJUI.avif";
import djontu from "@/assets/ARNOLD KAMDEM.avif";
import arnold from "@/assets/TeamImages/Arnold Kamdem.avif";

const Team = () => {
  const teamMembers = [
    {
      name: "Dieudonné HAPPI",
      position: "Associé fondateur",
      specialty: "Droit des affaires & Contentieux",
      image: dieudonneHappi,
      bio: "Avocat au barreau du Cameroun depuis 35 ans, Me Happi est associé principal de DH Avocats.",
    },
    {
      name: "Vanessa de HAPPI",
      position: "Of Counsel",
      specialty: "Fiscalité & Conformité",
      image: vanessa,
      bio: "Diplômée en droit français, en droit québécois et en Common Law.",
    },
    {
      name: "Lionel NGADJUI",
      position: "Avocat senior",
      specialty: "Changes & Investissements",
      image: lionel,
      bio: "Lionel supervise les activités des départements Conseil et Contentieux.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Notre Équipe
            <span className="text-secondary block text-3xl md:text-4xl">
              d'experts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des professionnels d'exception, reconnus pour leur expertise et leur
            engagement au service de vos intérêts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-card-premium premium-scale h-full">
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
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
              <div className="text-muted-foreground">Professionnels dédiés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                5
              </div>
              <div className="text-muted-foreground">Domaines d'expertise</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Clients accompagnés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                40 ans
              </div>
              <div className="text-muted-foreground">D'expérience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Rejoignez notre équipe d'exception
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous recherchons constamment des talents pour renforcer notre
            équipe. Découvrez nos opportunités de carrière.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary-premium">
              <a href="/equipe">
              Découvrir toute l'équipe
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              <a href="/carrieres">
              Offres d'emploi
              </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
