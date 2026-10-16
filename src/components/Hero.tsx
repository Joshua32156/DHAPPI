import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-law-firm.jpg";
import heroImage2 from "@/assets/hero-law-firm-2.jpg";
import heroImage3 from "@/assets/hero-law-firm-3.jpg";
import logoGold from "@/assets/Logo gold.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counter, setCounter] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: t("Bâtissons une relation de confiance", "Let us build a relationship of trust"),
      subtitle: t("Éthique - Efficacité - Professionnalisme", "Ethics - Efficiency - Professionalism"),
    },
    {
      image: heroImage2,
      title: t("Excellence et confiance", "Excellence and trust"),
      subtitle: t("depuis 1985", "since 1985"),
    },
    {
      image: heroImage3,
      title: t("40 ans à vos côtés,", "40 years by your side,"),
      subtitle: t("pour défendre vos droits et concrétiser vos rêves", "defending your rights and bringing your ambitions to life"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animation du compteur
  useEffect(() => {
    if (currentSlide === 0) {
      setCounter(0);
      const counterTimer = setInterval(() => {
        setCounter((prev) => {
          if (prev >= 20) {
            clearInterval(counterTimer);
            return 20;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(counterTimer);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden overflow-x-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
      ))}

      {/* Content */}
<div className="relative z-10 h-full flex items-center">
  <div className="container-premium px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-4xl text-center mx-auto text-white">
      <div className="premium-fade-in">
        {currentSlide === 1 ? (
          // Slide 2 - Logo only
          <div className="flex items-center justify-center">
            <img
              src={logoGold}
              alt="Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-32"
            />
          </div>
        ) : (
          // Slides 1 et 3
          <>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 px-2 leading-tight">
              {slides[currentSlide].title}
              <span className="block text-secondary text-base sm:text-lg md:text-2xl lg:text-4xl mt-2 font-normal">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
          </>
        )}
      </div>
    </div>
  </div>
</div>

{/* Stats - en bas de la slide, séparées gauche/droite */}
{currentSlide === 0 && (
  <div className="absolute bottom-12 left-0 right-0 px-8 flex justify-between items-end text-white/90 z-20 pb-2">
    {/* Gauche */}
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg border border-secondary/30 bg-secondary/20">
          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" />
        </div>
        <div>
          <div className="text-xs sm:text-sm md:text-base">{t("Année de création", "Founded")}</div>
          <div className="text-lg sm:text-2xl md:text-3xl font-bold">1985</div>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg border border-secondary/30 bg-secondary/20">
          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" />
        </div>
        <div>
          <div className="text-xs sm:text-sm md:text-base">{t("Indépendant", "Independent")}</div>
          <div className="text-lg sm:text-2xl md:text-3xl font-bold">100%</div>
        </div>
      </div>
    </div>

    {/* Droite */}
    <div className="text-right">
      <div className="text-xl sm:text-3xl md:text-4xl font-bold">+{counter}</div>
      <div className="text-xs sm:text-sm md:text-base">{t("Professionnels dédiés", "Dedicated professionals")}</div>
    </div>
  </div>
)}


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition z-20"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition z-20"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 sm:w-6 md:w-8 h-1 sm:h-1.5 md:h-2 rounded-sm transition-colors ${
              index === currentSlide ? "bg-secondary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
