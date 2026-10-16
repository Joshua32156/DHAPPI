import { Calendar, User, ArrowRight, Tag, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import covid from "@/assets/covid.avif";
import focus from "@/assets/focus special.jpeg";
import congrat from "@/assets/congrat.avif";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();
  const articles = [
    {
      title:
        t("COVID-19 et finalisation des contrats d’affaires: signature électronique alternative pour le signing", "COVID-19 and the finalisation of business contracts: electronic signature as an alternative for signing"),
      excerpt:
        t("La pandémie de la Covid-19 qui secoue actuellement la planète a contraint les États à prendre des mesures restrictives dans le but de juguler sa propagation. ", "The Covid-19 pandemic currently shaking the world has forced States to adopt restrictive measures in order to curb its spread. "),
      author: "Boris Minlo",
      date: t("9 avril 2021", "9 April 2021"),
      category: t("Droit des affaires", "Business Law"),
      image: covid,
      readTime: "5 min",
    },
    {
      title:
        t("Me Vanessa de Happi, Symbole de la Génération Montante, selon Cameroon CEO Magazine", "Ms Vanessa de Happi, Symbol of the Rising Generation, according to Cameroon CEO Magazine"),
      excerpt:
        t(
          "Aux côtés d'autres grandes figures féminines du Barreau Camerounais, Me Vanessa De Happi, Of Counsel au Cabinet DH AVOCATS, fait l'objet d'un article dans l'édition du mois de mars 2021 du journal #CAMEROONCEO, un magazine d'information sur les personnes qui marquent l'actualité des affaires au Cameroun.",
          "Alongside other leading women of the Cameroonian Bar, Ms Vanessa De Happi, Of Counsel at DH AVOCATS, is featured in the March 2021 edition of #CAMEROONCEO, a news magazine profiling the people shaping business news in Cameroon."
        ),
      author: "Boris Minlo",
      date: t("6 avril 2021", "6 April 2021"),
      category: t("Conformité", "Compliance"),
      image: focus,
      readTime: "7 min",
    },
    {
      title:
        t("Me HAPPI, Président de la Commission Électorale de l'assemblée générale élective 2021 de la CAF", "Mr HAPPI, Chairman of the Electoral Commission for the 2021 CAF Elective General Assembly"),
      excerpt:
        t(
          "Notre Associé Fondateur, Me Dieudonné HAPPI, Vice-Président de la Commission de Gouvernance de la Confédération Africaine de Football (CAF), a récemment été nommé Président de la Commission Électorale de l’assemblée générale élective 2021 de cette institution. À ce titre, il était en charge de l'organisation des élections et de la supervision du processus électoral lors de l'assemblée générale qui s’est tenue le 12 mars dernier à Rabat au Maroc. ",
          "Our Founding Partner, Mr Dieudonné HAPPI, Vice-Chairman of the Governance Committee of the Confederation of African Football (CAF), was recently appointed Chairman of the Electoral Commission for the institution's 2021 Elective General Assembly. In this capacity, he was responsible for organising the elections and supervising the electoral process at the General Assembly held on 12 March in Rabat, Morocco. "
        ),
      author: "Boris Minlo",
      date: t("01 Mars 2024", "1 March 2024"),
      category: t("Fiscalité", "Tax"),
      image: congrat,
      readTime: "6 min",
    },
  ];

  const categories = [
    t("Droit des affaires", "Business Law"),
    t("Fiscalité", "Tax"),
    t("Conformité", "Compliance"),
    t("Contentieux", "Litigation"),
    "International",
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("Actualités Juridiques", "Legal News")}
            <span className="text-secondary block text-3xl md:text-4xl">
              & Publications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Restez informé des dernières évolutions juridiques et découvrez nos analyses d'experts sur les sujets qui impactent votre activité.",
              "Stay informed of the latest legal developments and discover our expert analysis on the issues that affect your business."
            )}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-card-premium premium-scale h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-secondary/10 transition-colors duration-300"
                  >
                    {t("Lire l'article", "Read the article")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Voir toutes les publications */}
        <div className="text-center mb-16">
          <Button className="btn-secondary-premium" size="lg" asChild>
            <a href="/blog">
              {t("Voir toutes nos publications", "View all our publications")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-hero p-8 md:p-12 rounded-xl shadow-elevation text-center text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {t("Ne manquez aucune actualité juridique", "Never miss a legal update")}
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {t(
              "Restez informé des dernières actualités juridiques en recevant nos analyses, conseils et revues brèves directement par e-mail.",
              "Stay up to date with the latest legal news by receiving our analysis, advice and briefings directly by email."
            )}
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t("Votre adresse email", "Your email address")}
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="btn-secondary-premium whitespace-nowrap">
                {t("S'abonner", "Subscribe")}
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="bg-card overflow-hidden">
            <div className="h-96 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d9.7043!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDQuMCJOIDnCsDQyJzE1LjUiRQ!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm&q=341+rue+École+Primaire+Dominique+Savio,+Bonapriso,+Douala,+Cameroun"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("Localisation du Cabinet D.HAPPI - Douala", "D.HAPPI law firm location - Douala")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
