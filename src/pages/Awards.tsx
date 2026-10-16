import { Trophy, Award, Star, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import legalpowerlist from "@/assets/legalpowerlist.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chambers1 from "@/assets/Chambers 2025.jpg";
import chambers2 from "@/assets/Chambers 2024.jpg";
import africabusiness from "@/assets/Africa business.jpg";
import iflr from "@/assets/iflr.jpg";
import africalawfirms from "@/assets/africa-law-firms.webp";
import legaledition from "@/assets/legal-edition-2024.webp";
import powerlist from "@/assets/Powerlist.jpg";
import awardsHeader from "@/assets/awardsup.webp";
import chambers4 from "@/assets/Chambers Global 4.png";
import chambers3 from "@/assets/chambers-global-guide-vdh.webp";
import EMEA from "@/assets/EMEA_Leading_firm_2026.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Awards = () => {
  const { t } = useLanguage();
  const awards = [
    {
      year: t("édition 2025", "2025 edition"),
      title: "AFRICA LAW FIRMS POWERLIST",
      image: powerlist,
      link: "https://www.linkedin.com/posts/dhappi_classement-africabusinessplus-classement2025-activity-7356247208905580544-D8f_?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: t("édition 2025", "2025 edition"),
      title: "AFRICA 100 LEGAL POWERLIST",
      image: legalpowerlist,
      link: "https://www.linkedin.com/posts/dhappi_ranking-africanlawfirmspowerlist-jeuneafrique-activity-7353351574699528192-UFQH?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: t("édition 2025", "2025 edition"),
      title: "Up and Coming lawyer of the Year",
      image: chambers2,
      link: "https://www.linkedin.com/posts/dhappi_chambersglobal2025-legalrankings-businesslaw-activity-7304788117595574274-oKlc?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: t("édition 2025", "2025 edition"),
      title: "Chambers Global Ranked In",
      image: chambers1,
      link: "https://www.linkedin.com/posts/dhappi_dhappi-avocats-chambers-2025-ranking-activity-7303351500070633472-OfZG?utm_source=share&utm_medium=member_ios&rcm=ACoAAD6sONABdg-CwAFR3vOMGgQD67R-b_pVMhQ",
    },
    {
      year: t("édition 2024", "2024 edition"),
      title: "Africa Legal 100 Powerlist",
      image: legaledition,
    },
    {
      year: t("édition 2024", "2024 edition"),
      title: "IFLR 1000 Notable Firm",
      image: iflr,
    },
    {
      year: t("édition 2023", "2023 edition"),
      title: "Africa Law Firms Powerlist",
      image: africalawfirms,
    },
    {
      year: t("édition 2025", "2025 edition"),
      title: "Leading partner",
      image: chambers4,
    },
    {
      year: t("édition 2026", "2026 edition"),
      title: "leading Firm",
      image: chambers3,
    },
  ];

  const certifications = [
    t("Certification ISO 9001:2015 - Qualité des Services", "ISO 9001:2015 Certification - Service Quality"),
    t("Accréditation Barreau du Cameroun", "Accreditation by the Cameroon Bar"),
    t("Membre de l'Union Internationale des Avocats (UIA)", "Member of the International Association of Lawyers (UIA)"),
    t("Certification OHADA - Droit des Affaires", "OHADA Certification - Business Law"),
    t("Membre de l'Association Africaine de Droit International", "Member of the African Association of International Law"),
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        {/* Page Header */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={awardsHeader}
            alt={t("Awards et Reconnaissances", "Awards and Recognition")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {t("Awards & Reconnaissances", "Awards & Recognition")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t("Excellence reconnue dans le domaine juridique", "Recognised excellence in the legal field")}
              </p>
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {t("Nos Distinctions", "Our Distinctions")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "Notre engagement envers l'excellence juridique a été reconnu par de nombreuses institutions prestigieuses au niveau international.",
                  "Our commitment to legal excellence has been recognised by numerous prestigious institutions internationally."
                )}
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
                          {t("En savoir plus", "Learn more")}
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
