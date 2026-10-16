import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutHeader from '@/assets/about-header.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: Phone,
      title: t("Téléphone", "Phone"),
      details: ["+237 233 42 14 29", "+237 654 28 23 54"],
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["secretariat@dhavocats.com"],
      color: "bg-primary"
    },
    {
      icon: MapPin,
      title: t("Adresse", "Address"),
      details: ["Bonapriso, 341 rue École Primaire Dominique Savio", t("B.P. 1929 Douala, Cameroun", "P.O. Box 1929 Douala, Cameroon")],
      color: "bg-primary"
    },
    {
      icon: Clock,
      title: t("Horaires", "Opening Hours"),
      details: [t("Lun - Ven: 8h00 - 18h30", "Mon - Fri: 8:00 am - 6:30 pm")],
      color: "bg-primary"
    }
  ];

  const offices = [
    // {
    //   city: "Douala",
    //   address: "341 rue École Primaire Dominique Savio, Bonapriso",
    //   phone: "+237 233 42 14 29",
    //   email: "secretariat@dhavocats.com"
    // },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
      {/* Page Header */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="https://www.nia.nih.gov/sites/default/files/niacontact_.jpg"
          alt={t("Contact — D. HAPPI Avocats", "Contact — D. HAPPI Attorneys")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {t("Contactez-nous", "Contact us")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              {t("Nous sommes là pour vous accompagner", "We are here to support you")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center premium-scale">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                {t("Envoyez-nous un Message", "Send us a Message")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t(
                  "N'hésitez pas à nous faire part de vos questions ou besoins spécifiques. Notre équipe vous répondra dans les plus brefs délais.",
                  "Please do not hesitate to share your questions or specific needs with us. Our team will respond as soon as possible."
                )}
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">{t("Prénom *", "First name *")}</Label>
                    <Input id="firstname" placeholder={t("Votre prénom", "Your first name")} required />
                  </div>
                  <div>
                    <Label htmlFor="lastname">{t("Nom *", "Last name *")}</Label>
                    <Input id="lastname" placeholder={t("Votre nom", "Your last name")} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder={t("votre@email.com", "your@email.com")} required />
                </div>

                <div>
                  <Label htmlFor="phone">{t("Téléphone", "Phone")}</Label>
                  <Input id="phone" type="tel" placeholder="+237 6XX XXX XXX" />
                </div>

                <div>
                  <Label htmlFor="subject">{t("Sujet *", "Subject *")}</Label>
                  <Input id="subject" placeholder={t("Objet de votre demande", "Subject of your enquiry")} required />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder={t("Décrivez votre situation ou vos besoins...", "Describe your situation or needs...")}
                    rows={6}
                    required
                  />
                </div>

                <Button size="lg" className="w-full btn-secondary-premium">
                  <Send className="h-5 w-5 mr-2" />
                  {t("Envoyer le Message", "Send Message")}
                </Button>
              </form>
            </div>

            {/* Offices */}
            <div>
              {/* <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Nos Bureaux
              </h2>
              <p className="text-muted-foreground mb-8">
                Nous disposons de plusieurs bureaux pour mieux vous servir 
                à travers le territoire camerounais.
              </p> */}

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="premium-scale">
                    <CardHeader>
                      <CardTitle className="text-secondary">
                        {t(`Bureau de ${office.city}`, `${office.city} Office`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {office.email}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                {/* <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Localisation
                </h3> */}
                <div className="w-full h-64 bg-muted rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d9.7043!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDQuMCJOIDnCsDQyJzE1LjUiRQ!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm&q=341+rue+École+Primaire+Dominique+Savio,+Bonapriso,+Douala,+Cameroun"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("Localisation du Cabinet D.HAPPI - Douala", "D.HAPPI Firm location - Douala")}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;