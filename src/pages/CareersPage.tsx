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
import { useLanguage } from "@/i18n/LanguageContext";

const CareersPage = () => {
  const { t } = useLanguage();
  const openPositions = [
    {
      title: t("Avocat Senior - Droit des Affaires", "Senior Lawyer - Business Law"),
      department: t("Conseil Juridique", "Legal Advisory"),
      location: t("Douala, Cameroun", "Douala, Cameroon"),
      type: t("CDI", "Permanent contract"),
      experience: t("7+ ans", "7+ years"),
      description:
        t("Nous recherchons un avocat expérimenté pour rejoindre notre équipe de conseil en droit des affaires. Le candidat idéal aura une solide expérience en transactions commerciales et en conseil aux entreprises.", "We are seeking an experienced lawyer to join our business law advisory team. The ideal candidate will have solid experience in commercial transactions and corporate advisory work."),
      requirements: [
        t("Master en Droit des Affaires ou équivalent", "Master's degree in Business Law or equivalent"),
        t("Minimum 7 ans d'expérience en cabinet d'avocats", "At least 7 years' experience in a law firm"),
        t("Excellente maîtrise du français et de l'anglais", "Excellent command of French and English"),
        t("Connaissance approfondie du droit OHADA", "In-depth knowledge of OHADA law"),
      ],
    },
    {
      title: t("Juriste Fiscaliste", "Tax Lawyer"),
      department: t("Fiscalité", "Tax"),
      location: t("Douala, Cameroun", "Douala, Cameroon"),
      type: t("CDI", "Permanent contract"),
      experience: t("3-5 ans", "3-5 years"),
      description:
        t("Poste de juriste spécialisé en fiscalité pour accompagner nos clients dans leurs problématiques fiscales complexes et les représenter dans les contentieux fiscaux.", "A position for a tax specialist lawyer to advise our clients on complex tax matters and represent them in tax disputes."),
      requirements: [
        t("Master en Droit Fiscal", "Master's degree in Tax Law"),
        t("3 à 5 ans d'expérience en fiscalité", "3 to 5 years' experience in tax"),
        t("Maîtrise des logiciels comptables", "Proficiency in accounting software"),
        t("Capacité de rédaction et d'analyse", "Strong drafting and analytical skills"),
      ],
    },
    {
      title: t("Avocat Junior - Contentieux", "Junior Lawyer - Litigation"),
      department: t("Contentieux", "Litigation"),
      location: t("Maroua, Cameroun", "Maroua, Cameroon"),
      type: t("CDI", "Permanent contract"),
      experience: t("1-3 ans", "1-3 years"),
      description:
        t("Opportunité pour un jeune avocat de développer ses compétences en contentieux civil et commercial au sein d'une équipe expérimentée.", "An opportunity for a young lawyer to develop their skills in civil and commercial litigation within an experienced team."),
      requirements: [
        t("CAPA ou équivalent", "CAPA (French bar qualification) or equivalent"),
        t("1 à 3 ans d'expérience en contentieux", "1 to 3 years' experience in litigation"),
        t("Excellentes compétences rédactionnelles", "Excellent drafting skills"),
        t("Esprit d'équipe et autonomie", "Team spirit and autonomy"),
      ],
    },
    {
      title: t("Assistante Juridique", "Legal Assistant"),
      department: t("Support", "Support"),
      location: t("Douala, Cameroun", "Douala, Cameroon"),
      type: t("CDD", "Fixed-term contract"),
      experience: t("2+ ans", "2+ years"),
      description:
        t("Poste d'assistance pour soutenir l'équipe d'avocats dans la gestion administrative des dossiers et la relation client.", "An assistant role supporting the team of lawyers with the administrative management of files and client relations."),
      requirements: [
        t("BTS Juridique ou équivalent", "BTS in Law or equivalent"),
        t("Minimum 2 ans d'expérience similaire", "At least 2 years' experience in a similar role"),
        t("Maîtrise des outils bureautiques", "Proficiency in office software"),
        t("Sens de l'organisation et discrétion", "Strong organisational skills and discretion"),
      ],
    },
  ];

  const benefits = [
    {
      image: teamwork,
      title: t("Équipe Dynamique", "Dynamic Team"),
      description: t(
        "Travaillez avec des professionnels passionnés et expérimentés",
        "Work alongside passionate and experienced professionals"
      ),
    },
    {
      image: projets,
      title: t("Projets Stimulants", "Stimulating Projects"),
      description: t("Participez à des dossiers complexes et enrichissants", "Take part in complex and rewarding matters"),
    },
    {
      image: interprise,
      title: t("Culture d'entreprise", "Corporate Culture"),
      description: t(
        "Profitez d'un environnement de travail collaboratif et une ambiance positive.",
        "Enjoy a collaborative working environment and a positive atmosphere."
      ),
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
          alt={t("Carrières — D. HAPPI Avocats", "Careers — D. HAPPI Attorneys")}
          className="w-full h-full object-cover object-[50%_40%]"
        />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t("Carrières & Emploi", "Careers & Employment")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t("Rejoignez notre équipe d'excellence juridique", "Join our team of legal excellence")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {t("Pourquoi Nous Rejoindre ?", "Why Join Us?")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "Notre cabinet offre un environnement stimulant où l'excellence juridique rencontre l'innovation, dans une culture d'équipe collaborative et respectueuse.",
                  "Our firm offers a stimulating environment where legal excellence meets innovation, within a collaborative and respectful team culture."
                )}
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
                {t("Postes Ouverts", "Open Positions")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "Découvrez les opportunités actuelles et rejoignez une équipe de professionnels dédiés à l'excellence juridique.",
                  "Discover our current opportunities and join a team of professionals dedicated to legal excellence."
                )}
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
                        {t("Postuler", "Apply")}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {t("Profil Recherché :", "Candidate Profile:")}
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
                  {t("Candidature Spontanée", "Speculative Application")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("Envoyez-nous votre candidature spontanée.", "Send us your speculative application.")}
                </p>
              </div>

              <Card className="premium-scale">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">{t("Prénom *", "First name *")}</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t("Nom *", "Last name *")}</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">{t("Email *", "Email *")}</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">{t("Téléphone", "Phone")}</Label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div>
                      <Label htmlFor="position">{t("Poste visé", "Position sought")}</Label>
                      <Input
                        id="position"
                        placeholder={t("Ex: Avocat en droit des affaires", "E.g. Business law lawyer")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">{t("Expérience (années)", "Experience (years)")}</Label>
                      <Input id="experience" type="number" min="0" />
                    </div>

                    <div>
                      <Label htmlFor="motivation">{t("Lettre de motivation *", "Cover letter *")}</Label>
                      <Textarea
                        id="motivation"
                        rows={6}
                        placeholder={t("Parlez-nous de vos motivations et de ce qui vous intéresse dans notre cabinet...", "Tell us about your motivations and what interests you about our firm...")}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cv">{t("CV (PDF) *", "CV (PDF) *")}</Label>
                      <Input id="cv" type="file" accept=".pdf" required />
                    </div>

                    <Button
                      type="submit"
                      className="btn-secondary-premium w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {t("Envoyer ma candidature", "Submit my application")}
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
