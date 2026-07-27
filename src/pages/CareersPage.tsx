import { Briefcase, Clock, MapPin, Users, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamwork from "@/assets/Team work.jpg";
import projets from "@/assets/Projets.jpg";
import interprise from "@/assets/Enterprise.jpg";
import aboutHeader from "@/assets/about-header.jpg";
import career from "@/assets/carriere.jpg";

const CareersPage = () => {
  const openPositions = [
    {
      title: "Avocat Senior - Droit des Affaires",
      department: "Conseil Juridique",
      location: "Douala, Cameroun",
      type: "CDI",
      experience: "7+ ans",
      description:
        "Nous recherchons un avocat expérimenté pour rejoindre notre équipe de conseil en droit des affaires. Le candidat idéal aura une solide expérience en transactions commerciales et en conseil aux entreprises.",
      requirements: [
        "Master en Droit des Affaires ou équivalent",
        "Minimum 7 ans d'expérience en D. d'avocats",
        "Excellente maîtrise du français et de l'anglais",
        "Connaissance approfondie du droit OHADA",
      ],
    },
    {
      title: "Juriste Fiscaliste",
      department: "Fiscalité",
      location: "Douala, Cameroun",
      type: "CDI",
      experience: "3-5 ans",
      description:
        "Poste de juriste spécialisé en fiscalité pour accompagner nos clients dans leurs problématiques fiscales complexes et les représenter dans les contentieux fiscaux.",
      requirements: [
        "Master en Droit Fiscal",
        "3 à 5 ans d'expérience en fiscalité",
        "Maîtrise des logiciels comptables",
        "Capacité de rédaction et d'analyse",
      ],
    },
    {
      title: "Avocat Junior - Contentieux",
      department: "Contentieux",
      location: "Maroua, Cameroun",
      type: "CDI",
      experience: "1-3 ans",
      description:
        "Opportunité pour un jeune avocat de développer ses compétences en contentieux civil et commercial au sein d'une équipe expérimentée.",
      requirements: [
        "CAPA ou équivalent",
        "1 à 3 ans d'expérience en contentieux",
        "Excellentes compétences rédactionnelles",
        "Esprit d'équipe et autonomie",
      ],
    },
    {
      title: "Assistante Juridique",
      department: "Support",
      location: "Douala, Cameroun",
      type: "CDD",
      experience: "2+ ans",
      description:
        "Poste d'assistance pour soutenir l'équipe d'avocats dans la gestion administrative des dossiers et la relation client.",
      requirements: [
        "BTS Juridique ou équivalent",
        "Minimum 2 ans d'expérience similaire",
        "Maîtrise des outils bureautiques",
        "Sens de l'organisation et discrétion",
      ],
    },
  ];

  const benefits = [
    {
      image: teamwork,
      title: "Équipe Dynamique",
      description:
        "Travaillez avec des professionnels passionnés et expérimentés",
    },
    {
      image: projets,
      title: "Projets Stimulants",
      description: "Participez à des dossiers complexes et enrichissants",
    },
    {
      image: interprise,
      title: "Culture d'entreprise",
      description:
        "Profitez d'un environnement de travail collaboratif et une ambiance positive.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Page Header */}
        <section className="relative h-64 overflow-hidden">
          <img
          src={career}
          alt="À propos de D. Legal"
          className="w-full h-full object-cover object-[50%_40%]"
        />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Carrières & Emploi
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Rejoignez notre équipe d'excellence juridique
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Pourquoi Nous Rejoindre ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Notre cabinet offre un environnement stimulant où l'excellence
                juridique rencontre l'innovation, dans une culture d'équipe
                collaborative et respectueuse.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="premium-scale overflow-hidden h-[320px] flex flex-col"
                >
                  {/* Partie image avec zoom au hover */}
                  <div className="h-2/3 w-full relative overflow-hidden group">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Partie texte sur fond bleu, hauteur réduite */}
                  <div className="h-1/3 w-full bg-primary flex flex-col justify-center px-6 py-3">
                    <h3 className="text-xl font-heading font-bold text-white mb-2 text-left">
                      {benefit.title}
                    </h3>
                    <p className="text-white text-left">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-accent/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Postes Ouverts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez les opportunités actuelles et rejoignez une équipe de
                professionnels dédiés à l'excellence juridique.
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <Card key={index} className="premium-scale">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-2">
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <Badge className="bg-secondary text-secondary-foreground">
                            {position.department}
                          </Badge>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{position.type}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                            <span className="text-sm">
                              {position.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button className="btn-secondary-premium">
                        Postuler
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Profil Recherché :
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Candidature Spontanée
                </h2>
                <p className="text-lg text-muted-foreground">
                  Envoyez-nous votre candidature spontanée.
                </p>
              </div>

              <Card className="premium-scale">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div>
                      <Label htmlFor="position">Poste visé</Label>
                      <Input
                        id="position"
                        placeholder="Ex: Avocat en droit des affaires"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Expérience (années)</Label>
                      <Input id="experience" type="number" min="0" />
                    </div>

                    <div>
                      <Label htmlFor="motivation">Lettre de motivation *</Label>
                      <Textarea
                        id="motivation"
                        rows={6}
                        placeholder="Parlez-nous de vos motivations et de ce qui vous intéresse dans notre D...."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cv">CV (PDF) *</Label>
                      <Input id="cv" type="file" accept=".pdf" required />
                    </div>

                    <Button
                      type="submit"
                      className="btn-secondary-premium w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer ma candidature
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
