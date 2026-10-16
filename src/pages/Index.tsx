import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Us from "@/assets/us.webp";
import {Link} from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Introduction Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl shadow-blue-100/20 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* Colonnes texte */}
                <motion.div
                  className="md:col-span-2 flex flex-col justify-center"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                    {t("Qui sommes-nous ?", "Who We Are")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p className="text-slate-700 leading-relaxed text-lg text-justify">
                      {t(
                        "Depuis 40 ans, le cabinet D.HAPPI Avocats accompagne vos rêves, défend vos droits et se tient à vos côtés dans les moments décisifs. Grâce à notre expertise et à notre engagement, nous avons bâti une relation de confiance durable avec vous, en nous battant pour vos intérêts avec passion et dévouement. Nous avons choisi de privilégier une approche humaine et accessible.",
                        "For 40 years, D.HAPPI Avocats has supported your ambitions, defended your rights and stood by your side at decisive moments. Through our expertise and commitment, we have built a lasting relationship of trust with you, fighting for your interests with passion and dedication. We have chosen to favour a personal and accessible approach."
                      )}
                    </p>
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-slate-700 leading-relaxed text-lg text-justify mb-4">
                        {t(
                          "Ce sont votre confiance et votre fidélité qui nous permettent de maintenir notre indépendance, d'innover dans nos solutions juridiques et de rendre nos services accessibles à un public diversifié. Merci d’avoir fait partie de notre histoire et de continuer à nous donner la force de défendre vos droits et vos aspirations. D. HAPPI Avocats, c’est votre histoire autant que la nôtre.",
                          "It is your trust and loyalty that enable us to maintain our independence, to innovate in our legal solutions and to make our services accessible to a diverse clientele. Thank you for being part of our story and for continuing to give us the strength to defend your rights and aspirations. D. HAPPI Avocats is your story as much as ours."
                        )}
                      </p>
                      <div>
                        <Link
                          to="/a-propos"
                          className="group inline-flex items-center font-semibold text-secondary hover:underline hover:text-secondary/80 transform hover:scale-105 transition-all duration-300"
                        >
                          <span>{t("En savoir plus", "Learn more")}</span>
                          <svg
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-secondary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* Image proportionnelle */}
                <motion.div
                  className="flex items-center justify-center"
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="w-full h-[28rem] md:h-auto aspect-[3/4] bg-gray-200 rounded-3xl border border-white/50 shadow-xl shadow-blue-100/20 relative overflow-hidden flex items-center justify-center">
                    <ImageWithSkeleton
                      src={Us}
                      loading="lazy"
                      decoding="async"
                      alt={t("Cabinet D.HAPPI", "D.HAPPI law firm")}
                      className="object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Expertise />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
