import { useState, useEffect, useRef } from 'react';
import { Building, Briefcase, Globe, Calculator, Scale } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      year: "1985",
      title: "Prestation de serment",
      short: "Début de la carrière d'un des fondateurs du D., marquant les premières pierres de notre expertise juridique.",
      detail: "Le fondateur du cabinet prête serment devant la Cour d'Appel de Yaoundé en présence de ses pairs. Cette journée solennelle marque le début d'une vocation portée par une conviction profonde : rendre le droit accessible et défendre l'équité avec rigueur. Dès ses premières années, il se distingue par sa maîtrise du contentieux civil et sa capacité à naviguer dans les arcanes d'un système juridique en pleine construction.",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
      color: "text-secondary"
    },
    {
      year: "1990",
      title: "Ouverture du cabinet de Maroua",
      short: "Premier bureau pour se rapprocher de la clientèle locale et étendre notre présence régionale.",
      detail: "Face à une demande croissante dans l'Extrême-Nord, le cabinet ouvre ses portes à Maroua avec une équipe de trois collaborateurs. Ce bureau devient rapidement un point de référence pour les entreprises agricoles et les collectivités locales. En moins de deux ans, le cabinet traite plus de 200 dossiers annuels et noue des partenariats avec les institutions régionales.",
      icon: Building,
      color: "text-primary"
    },
    {
      year: "2000",
      title: "Ouverture du cabinet de Douala",
      short: "Expansion vers la capitale économique, renforçant notre position sur le marché des affaires.",
      detail: "L'implantation à Douala représente un tournant stratégique majeur. Le cabinet y déploie une offre orientée vers le droit des affaires, les fusions-acquisitions et les contrats internationaux. Cette présence permet d'accompagner des multinationales opérant dans les secteurs pétrolier, portuaire et des télécommunications.",
      icon: Briefcase,
      color: "text-secondary"
    },
    {
      year: "2017",
      title: "Département Conseil & Conformité",
      short: "Retour de Me Vanessa de HAPPI au sein du cabinet et création du département conseil.",
      detail: "En réponse aux exigences croissantes de gouvernance d'entreprise et aux nouvelles réglementations OHADA, le cabinet crée un département dédié au conseil stratégique et à la conformité. Une équipe de six juristes spécialisés accompagne désormais les entreprises dans l'audit de leurs pratiques, la mise en place de chartes éthiques et la gestion des risques juridiques.",
      icon: Scale,
      color: "text-primary"
    },
    {
      year: "2021",
      title: "Département Douanes & Changes",
      short: "Création d'un département spécialisé dans le commerce international et les opérations transfrontalières.",
      detail: "La montée en puissance des échanges commerciaux sous-régionaux conduit le cabinet à structurer un pôle entièrement dédié aux questions douanières et aux opérations de change. Ce département accompagne importateurs, exportateurs et investisseurs étrangers dans la gestion des formalités et le contentieux avec l'administration fiscale douanière.",
      icon: Globe,
      color: "text-secondary"
    },
    {
      year: "2024",
      title: "Département Fiscalité",
      short: "Assistance complète en stratégie fiscale et contentieux, complétant notre offre de services.",
      detail: "Le cabinet finalise son offre en lançant un département fiscalité composé d'experts en droit fiscal camerounais et OHADA. Ce pôle propose une assistance sur mesure allant de l'optimisation de la charge fiscale à la représentation devant les juridictions fiscales. Dès sa première année, le département accompagne plus de 40 entreprises.",
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
            Notre Histoire
            <span className="text-secondary block text-3xl md:text-4xl">depuis 1985</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les moments clés qui ont façonné notre cabinet et forgé notre expertise
            au service de nos clients.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-secondary via-primary to-secondary rounded-full" />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedItems.includes(index);
              const isVisible = visibleItems.includes(index);
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="timeline-item relative flex items-center justify-center"
                  data-index={index}
                >
                  {/* ── LEFT SIDE ── */}
                  {isLeft ? (
                    <>
                      {/* Card — left */}
                      <div className="w-[calc(50%-2.5rem)] mr-auto pr-8 text-right">
                        <div
                          className={`bg-gradient-card p-8 rounded-xl shadow-elevation transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                        >
                          {/* Icon / Image */}
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 ml-auto overflow-hidden">
                            {item.image ? (
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
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
                            {isExpanded ? 'Voir moins ↑' : 'Voir plus ↓'}
                          </button>
                        </div>
                      </div>

                      {/* Dot */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-secondary border-4 border-background shadow-premium z-10 transition-all duration-700 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      />

                      {/* Expanded detail — right of line */}
                      <div className="w-[calc(50%-2.5rem)] ml-auto pl-8 text-left">
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 pointer-events-none'
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
                      <div className="w-[calc(50%-2.5rem)] mr-auto pr-8 text-right">
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 pointer-events-none'
                          }`}
                        >
                          <div className="border-r-4 border-secondary bg-gradient-card rounded-l-xl p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Dot */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-secondary border-4 border-background shadow-premium z-10 transition-all duration-700 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      />

                      {/* Card — right */}
                      <div className="w-[calc(50%-2.5rem)] ml-auto pl-8 text-left">
                        <div
                          className={`bg-gradient-card p-8 rounded-xl shadow-elevation transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                        >
                          {/* Icon */}
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mr-auto overflow-hidden">
                            {item.image ? (
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
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
                            {isExpanded ? 'Voir moins ↑' : 'Voir plus ↓'}
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
            Plus de 40 ans d'excellence au service du droit
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Timeline;