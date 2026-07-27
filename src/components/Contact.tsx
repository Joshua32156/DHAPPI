import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const offices = [
    {
      name: "Siège Social - Douala",
      address: "341 rue École Primaire Dominique Savio, Bonapriso",
      city: "Douala, Cameroun",
      phone: "+237 233 42 14 29",
      email: "douala@D.-legal.com",
      hours: "Lun-Ven: 8h-18h30"
    },
    {
      name: "Bureau de Maroua", 
      address: "Quartier Domayo, Avenue des Martyrs",
      city: "Maroua, Cameroun",
      phone: "+237 691 234 568",
      email: "maroua@D.-legal.com",
      hours: "Lun-Ven: 8h-17h"
    },
    {
      name: "Bureau International",
      address: "À venir - Expansion régionale",
      city: "Afrique Centrale",
      phone: "+237 691 234 569",
      email: "international@D.-legal.com",
      hours: "Sur rendez-vous"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Contactez-nous
            <span className="text-secondary block text-3xl md:text-4xl">pour une consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour analyser votre situation juridique 
            et vous proposer des solutions adaptées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-xl shadow-elevation">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Demande de consultation
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Votre nom"
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
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder="+237 xxx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Domaine juridique *
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors">
                  <option value="">Sélectionnez un domaine</option>
                  <option value="conseil">Conseil juridique</option>
                  <option value="contentieux">Contentieux</option>
                  <option value="conformite">Conformité légale</option>
                  <option value="changes">Changes & investissements</option>
                  <option value="fiscalite">Fiscalité</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez brièvement votre situation juridique..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-secondary border-border rounded focus:ring-secondary"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. 
                  Voir notre <a href="#" className="text-secondary hover:underline">politique de confidentialité</a>.
                </label>
              </div>

              <Button className="btn-secondary-premium w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Envoyer ma demande
              </Button>
            </form>
          </div>

          {/* Office Information */}
          {/* <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Nos bureaux
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
            Nos localisations
          </h3>
          <div className="bg-card rounded-xl shadow-elevation overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Carte interactive à intégrer</p>
                <p className="text-sm">Google Maps ou service de cartographie</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;