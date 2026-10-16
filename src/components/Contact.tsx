import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const offices = [
    {
      name: t("Siège Social - Douala", "Head Office - Douala"),
      address: "341 rue École Primaire Dominique Savio, Bonapriso",
      city: t("Douala, Cameroun", "Douala, Cameroon"),
      phone: "+237 233 42 14 29",
      email: "douala@D.-legal.com",
      hours: t("Lun-Ven: 8h-18h30", "Mon-Fri: 8am-6:30pm")
    },
    {
      name: t("Bureau de Maroua", "Maroua Office"), 
      address: "Quartier Domayo, Avenue des Martyrs",
      city: t("Maroua, Cameroun", "Maroua, Cameroon"),
      phone: "+237 691 234 568",
      email: "maroua@D.-legal.com",
      hours: t("Lun-Ven: 8h-17h", "Mon-Fri: 8am-5pm")
    },
    {
      name: t("Bureau International", "International Office"),
      address: t("À venir - Expansion régionale", "Coming soon - Regional expansion"),
      city: t("Afrique Centrale", "Central Africa"),
      phone: "+237 691 234 569",
      email: "international@D.-legal.com",
      hours: t("Sur rendez-vous", "By appointment")
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t("Contactez-nous", "Contact us")}
            <span className="text-secondary block text-3xl md:text-4xl">{t("pour une consultation", "for a consultation")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Notre équipe est à votre disposition pour analyser votre situation juridique et vous proposer des solutions adaptées.",
              "Our team is at your disposal to analyse your legal situation and propose tailored solutions."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-xl shadow-elevation">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              {t("Demande de consultation", "Consultation request")}
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("Prénom *", "First name *")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder={t("Votre prénom", "Your first name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("Nom *", "Last name *")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder={t("Votre nom", "Your last name")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder={t("votre@email.com", "your@email.com")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("Téléphone", "Telephone")}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder="+237 xxx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("Domaine juridique *", "Area of law *")}
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors">
                  <option value="">{t("Sélectionnez un domaine", "Select an area")}</option>
                  <option value="conseil">{t("Conseil juridique", "Legal Advisory")}</option>
                  <option value="contentieux">{t("Contentieux", "Litigation")}</option>
                  <option value="conformite">{t("Conformité légale", "Legal Compliance")}</option>
                  <option value="changes">{t("Changes & investissements", "Exchange & Investments")}</option>
                  <option value="fiscalite">{t("Fiscalité", "Tax")}</option>
                  <option value="autre">{t("Autre", "Other")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-none"
                  placeholder={t("Décrivez brièvement votre situation juridique...", "Briefly describe your legal situation...")}
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-secondary border-border rounded focus:ring-secondary"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  {t("J'accepte que mes données soient utilisées pour me recontacter concernant ma demande.", "I agree that my data may be used to contact me regarding my request.")}{" "}
                  {t("Voir notre", "See our")} <a href="#" className="text-secondary hover:underline">{t("politique de confidentialité", "privacy policy")}</a>.
                </label>
              </div>

              <Button className="btn-secondary-premium w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                {t("Envoyer ma demande", "Send my request")}
              </Button>
            </form>
          </div>

          {/* Office Information */}
          {/* <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                {t("Nos bureaux", "Our offices")}
              </h3>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-card-premium border border-border">
                    <h4 className="font-heading font-bold text-primary mb-4">
                      {office.name}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-foreground">{office.address}</div>
                          <div className="text-muted-foreground text-sm">{office.city}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-foreground hover:text-secondary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-foreground hover:text-secondary transition-colors">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>

        {/* Map Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            {t("Nos localisations", "Our locations")}
          </h3>
          <div className="bg-card rounded-xl shadow-elevation overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>{t("Carte interactive à intégrer", "Interactive map to be added")}</p>
                <p className="text-sm">{t("Google Maps ou service de cartographie", "Google Maps or mapping service")}</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;