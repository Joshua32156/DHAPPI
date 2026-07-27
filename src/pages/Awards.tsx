import { Trophy, Award, Star, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import legalpowerlist from "@/assets/Legalpowerlist.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chambers1 from "@/assets/Chambers 2025.jpg";
import chambers2 from "@/assets/Chambers 2024.jpg";
import africabusiness from "@/assets/Africa business.jpg";
import iflr from "@/assets/iflr.jpg";
import africalawfirms from "@/assets/africa law firms.jpg";
import legaledition from "@/assets/Legal edition 2024.jpg";
import powerlist from "@/assets/Powerlist.jpg";
import awardsHeader from "@/assets/awardsup.jpg";
import chambers4 from "@/assets/Chambers Global 4.png";
import chambers3 from "@/assets/Chambers Global Guide VDH.png";
import EMEA from "@/assets/EMEA_Leading_firm_2026";

const Awards = () => {
  const awards = [
    {
      year: "édition 2025",
      title: "AFRICA LAW FIRMS POWERLIST",
      image: powerlist,
      link: "https://www.linkedin.com/posts/dhappi_classement-africabusinessplus-classement2025-activity-7356247208905580544-D8f_?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: "édition 2025",
      title: "AFRICA 100 LEGAL POWERLIST",
      image: legalpowerlist,
      link: "https://www.linkedin.com/posts/dhappi_ranking-africanlawfirmspowerlist-jeuneafrique-activity-7353351574699528192-UFQH?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: "édition 2025",
      title: "Up and Coming lawyer of the Year",
      image: chambers2,
      link: "https://www.linkedin.com/posts/dhappi_chambersglobal2025-legalrankings-businesslaw-activity-7304788117595574274-oKlc?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: "édition 2025",
      title: "Chambers Global Ranked In",
      image: chambers1,
      link: "https://www.linkedin.com/posts/dhappi_dhappi-avocats-chambers-2025-ranking-activity-7303351500070633472-OfZG?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: "édition 2024",
      title: "Africa Legal 100 Powerlist",
      image: legaledition,
    },
    {
      year: "édition 2024",
      title: "IFLR 1000 Notable Firm",
      image: iflr,
    },
    {
      year: "édition 2023",
      title: "Africa Law Firms Powerlist",
      image: africalawfirms,
    },
    {
      year: "édition 2025",
      title: "Leading partner",
      image: chambers4,
    },
    {
      year: "édition 2026",
      title: "leading Firm",
      image: chambers3,
    },
  ];

  const certifications = [
    "Certification ISO 9001:2015 - Qualité des Services",
    "Accréditation Barreau du Cameroun",
    "Membre de l'Union Internationale des Avocats (UIA)",
    "Certification OHADA - Droit des Affaires",
    "Membre de l'Association Africaine de Droit International",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Page Header */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={awardsHeader}
            alt="Awards et Reconnaissances"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Awards & Reconnaissances
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Excellence reconnue dans le domaine juridique
              </p>
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Nos Distinctions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Notre engagement envers l'excellence juridique a été reconnu par
                de nombreuses institutions prestigieuses au niveau
                international.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="premium-scale relative overflow-hidden group cursor-pointer"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 transition-all duration-300 group-hover:blur-sm"
                    style={{
                      backgroundImage: `url(${award.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      zIndex: 0,
                    }}
                  />
                  {/* Overlay visible uniquement au hover */}
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <CardContent className="py-24 px-10 relative z-20 flex items-center justify-center h-full w-full min-h-[320px]">
                    {/* Infos visibles uniquement au hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex flex-col justify-center absolute inset-0 bg-primary/80 rounded-xl">
                      <div className="flex flex-col items-center text-white">
                        <Badge
                          variant="outline"
                          className="mb-2 text-white border-white"
                        >
                          {award.year}
                        </Badge>
                        <h3 className="text-lg font-heading font-bold mb-2">
                          {award.title}
                        </h3>
                      </div>
                      <div className="absolute bottom-6 right-6">
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium text-accent"
                        >
                          En savoir plus
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        {/* <section className="section-padding bg-accent/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Certifications & Accréditations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nos certifications témoignent de notre engagement envers les plus hauts 
              standards de qualité et de professionnalisme.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

        {/* Recognition Stats */}
        {/* <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">
                  6+
                </div>
                <p className="text-muted-foreground">Awards Reçus</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">
                  5+
                </div>
                <p className="text-muted-foreground">Certifications</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">
                  35+
                </div>
                <p className="text-muted-foreground">Années d'Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Engagement Qualité</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Awards;
