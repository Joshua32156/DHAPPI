import { useState, useEffect, useRef } from 'react';
import { Building, Briefcase, Globe, Calculator, Scale } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import timeline1985 from '@/assets/timeline-1985.webp';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const timelineData = [
    {
      year: "1985",
      title: t("Prestation de serment", "Swearing-in"),
      short: t("Début de la carrière d'un des fondateurs du cabinet, marquant les premières pierres de notre expertise juridique.", "The start of one of our founders' careers, laying the foundations of our legal expertise."),
      detail: t("Le fondateur du cabinet prête serment devant la Cour d'Appel de Yaoundé en présence de ses pairs. Cette journée solennelle marque le début d'une vocation portée par une conviction profonde : rendre le droit accessible et défendre l'équité avec rigueur. Dès ses premières années, il se distingue par sa maîtrise du contentieux civil et sa capacité à naviguer dans les arcanes d'un système juridique en pleine construction.", "The firm's founder is sworn in before the Yaoundé Court of Appeal in the presence of his peers. This solemn day marks the beginning of a vocation driven by a deep conviction: making the law accessible and rigorously upholding fairness. From his very first years, he stands out for his command of civil litigation and his ability to navigate the intricacies of a legal system still under construction."),
      image: timeline1985,
      color: "text-secondary"
    },
    {
      year: "1990",
      title: t("Ouverture du cabinet de Maroua", "Opening of the Maroua office"),
      short: t("Premier bureau pour se rapprocher de la clientèle locale et étendre notre présence régionale.", "Our first office, bringing us closer to local clients and extending our regional presence."),
      detail: t("Face à une demande croissante dans l'Extrême-Nord, le cabinet ouvre ses portes à Maroua avec une équipe de trois collaborateurs. Ce bureau devient rapidement un point de référence pour les entreprises agricoles et les collectivités locales. En moins de deux ans, le cabinet traite plus de 200 dossiers annuels et noue des partenariats avec les institutions régionales.", "In response to growing demand in the Far North region, the firm opens its doors in Maroua with a team of three associates. The office quickly becomes a point of reference for agricultural businesses and local authorities. Within two years, the firm handles more than 200 matters a year and builds partnerships with regional institutions."),
      icon: Building,
      color: "text-primary"
    },
    {
      year: "2000",
      title: t("Ouverture du cabinet de Douala", "Opening of the Douala office"),
      short: t("Expansion vers la capitale économique, renforçant notre position sur le marché des affaires.", "Expansion to the economic capital, strengthening our position in the business market."),
      detail: t("L'implantation à Douala représente un tournant stratégique majeur. Le cabinet y déploie une offre orientée vers le droit des affaires, les fusions-acquisitions et les contrats internationaux. Cette présence permet d'accompagner des multinationales opérant dans les secteurs pétrolier, portuaire et des télécommunications.", "Setting up in Douala marks a major strategic turning point. There, the firm develops a practice focused on business law, mergers and acquisitions and international contracts, enabling it to support multinationals operating in the oil, port and telecommunications sectors."),
      icon: Briefcase,
      color: "text-secondary"
    },
    {
      year: "2017",
      title: t("Département Conseil & Conformité", "Advisory & Compliance Department"),
      short: t("Retour de Me Vanessa de HAPPI au sein du cabinet et création du département conseil.", "Vanessa de HAPPI returns to the firm and the advisory department is created."),
      detail: t("En réponse aux exigences croissantes de gouvernance d'entreprise et aux nouvelles réglementations OHADA, le cabinet crée un département dédié au conseil stratégique et à la conformité. Une équipe de six juristes spécialisés accompagne désormais les entreprises dans l'audit de leurs pratiques, la mise en place de chartes éthiques et la gestion des risques juridiques.", "In response to growing corporate governance requirements and new OHADA regulations, the firm creates a department dedicated to strategic advice and compliance. A team of six specialised lawyers now assists companies in auditing their practices, implementing ethics charters and managing legal risks."),
      icon: Scale,
      color: "text-primary"
    },
    {
      year: "2021",
      title: t("Département Douanes & Changes", "Customs & Exchange Department"),
      short: t("Création d'un département spécialisé dans le commerce international et les opérations transfrontalières.", "Creation of a department specialised in international trade and cross-border transactions."),
      detail: t("La montée en puissance des échanges commerciaux sous-régionaux conduit le cabinet à structurer un pôle entièrement dédié aux questions douanières et aux opérations de change. Ce département accompagne importateurs, exportateurs et investisseurs étrangers dans la gestion des formalités et le contentieux avec l'administration fiscale douanière.", "The rise of sub-regional trade leads the firm to set up a practice entirely dedicated to customs matters and foreign exchange transactions. This department assists importers, exporters and foreign investors with formalities and disputes with the customs and tax authorities."),
      icon: Globe,
      color: "text-secondary"
    },
    {
      year: "2024",
      title: t("Département Fiscalité", "Tax Department"),
      short: t("Assistance complète en stratégie fiscale et contentieux, complétant notre offre de services.", "Comprehensive support in tax strategy and tax disputes, completing our range of services."),
      detail: t("Le cabinet finalise son offre en lançant un département fiscalité composé d'experts en droit fiscal camerounais et OHADA. Ce pôle propose une assistance sur mesure allant de l'optimisation de la charge fiscale à la représentation devant les juridictions fiscales. Dès sa première année, le département accompagne plus de 40 entreprises.", "The firm completes its offering by launching a tax department made up of experts in Cameroonian and OHADA tax law. The practice provides tailored support ranging from tax optimisation to representation before the tax courts. In its first year, the department assists more than 40 companies."),
      icon: Calculator,
      color: "text-primary"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("Notre Histoire", "Our History")}
            <span className="text-secondary block text-3xl md:text-4xl">{t("depuis 1985", "since 1985")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Découvrez les moments clés qui ont façonné notre cabinet et forgé notre expertise au service de nos clients.",
              "Discover the key moments that have shaped our firm and forged our expertise in the service of our clients."
            )}
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-secondary via-primary to-secondary rounded-full" />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedItems.includes(index);
              const isVisible = visibleItems.includes(index);
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="timeline-item relative flex flex-col md:flex-row md:items-center md:justify-center pl-10 md:pl-0"
                  data-index={index}
                >
                  {/* ── LEFT SIDE ── */}
                  {isLeft ? (
                    <>
                      {/* Card — left */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto md:pr-8 text-left md:text-right">
                        <div
                          className={`bg-gradient-card p-6 md:p-8 rounded-xl shadow-elevation transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                        >
                          {/* Icon / Image */}
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 md:ml-auto overflow-hidden">
                            {item.image ? (
                              <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            ) : IconComponent ? (
                              <IconComponent className="w-8 h-8 text-white" />
                            ) : null}
                          </div>

                          {/* Year */}
                          <div className={`text-4xl font-heading font-bold ${item.color} mb-3`}>
                            {item.year}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-heading font-bold text-primary mb-3">
                            {item.title}
                          </h3>

                          {/* Short description */}
                          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                            {item.short}
                          </p>

                          {/* Voir plus */}
                          <button
                            onClick={() => toggleExpand(index)}
                            className={`text-sm font-medium underline underline-offset-2 transition-colors duration-200 ${item.color} hover:opacity-70 cursor-pointer bg-transparent border-none p-0`}
                          >
                            {isExpanded ? t('Voir moins ↑', 'See less ↑') : t('Voir plus ↓', 'See more ↓')}
                          </button>
                        </div>
                      </div>

                      {/* Dot */}
                      <div
                        className={`absolute left-4 top-10 md:top-auto md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-secondary border-4 border-background shadow-premium z-10 transition-all duration-700 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      />

                      {/* Expanded detail — right of line */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-8 text-left">
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isExpanded ? 'opacity-100 max-h-[40rem] mt-4 md:mt-0' : 'opacity-0 max-h-0 pointer-events-none'
                          }`}
                        >
                          <div className="border-l-4 border-secondary bg-gradient-card rounded-r-xl p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Expanded detail — left of line */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto md:pr-8 text-left md:text-right order-2 md:order-none">
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isExpanded ? 'opacity-100 max-h-[40rem] mt-4 md:mt-0' : 'opacity-0 max-h-0 pointer-events-none'
                          }`}
                        >
                          <div className="border-l-4 md:border-l-0 md:border-r-4 border-secondary bg-gradient-card rounded-r-xl md:rounded-r-none md:rounded-l-xl p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Dot */}
                      <div
                        className={`absolute left-4 top-10 md:top-auto md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-secondary border-4 border-background shadow-premium z-10 transition-all duration-700 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      />

                      {/* Card — right */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-8 text-left">
                        <div
                          className={`bg-gradient-card p-6 md:p-8 rounded-xl shadow-elevation transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                        >
                          {/* Icon */}
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mr-auto overflow-hidden">
                            {item.image ? (
                              <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            ) : IconComponent ? (
                              <IconComponent className="w-8 h-8 text-white" />
                            ) : null}
                          </div>

                          {/* Year */}
                          <div className={`text-4xl font-heading font-bold ${item.color} mb-3`}>
                            {item.year}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-heading font-bold text-primary mb-3">
                            {item.title}
                          </h3>

                          {/* Short description */}
                          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                            {item.short}
                          </p>

                          {/* Voir plus */}
                          <button
                            onClick={() => toggleExpand(index)}
                            className={`text-sm font-medium underline underline-offset-2 transition-colors duration-200 ${item.color} hover:opacity-70 cursor-pointer bg-transparent border-none p-0`}
                          >
                            {isExpanded ? t('Voir moins ↑', 'See less ↑') : t('Voir plus ↓', 'See more ↓')}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {t("Plus de 40 ans d'excellence au service du droit", "More than 40 years of excellence in the service of the law")}
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Timeline;