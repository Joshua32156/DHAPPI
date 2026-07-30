import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Accueil", href: "/" },
      { name: "À propos", href: "/a-propos" },
      { name: "Expertises", href: "/expertise" },
      { name: "Équipe", href: "/equipe" },
      { name: "Blog", href: "/blog" },
      { name: "Awards", href: "/awards" },
      { name: "Contact", href: "/contact" },
      { name: "Carrières", href: "/carrieres" },
    ],
    expertise: [
      { name: "Conseil juridique", href: "/expertise#conseil-juridique" },
      { name: "Contentieux", href: "/expertise#contentieux" },
      {
        name: "Conformité légale et réglementaire",
        href: "/expertise#conformite-legale-reglementaire",
      },
      {
        name: "Douanes, Changes & Investissements",
        href: "/expertise#changes-investissements",
      },
      { name: "Fiscalité", href: "/expertise#fiscalite" },
    ],
    legal: [
      { name: "Mentions légales", href: "#mentions" },
      { name: "Politique de confidentialité", href: "#confidentialite" },
      { name: "Conditions générales", href: "#conditions" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Facebook, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-premium py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/Logo gold.png"
                alt="D.Happi Logo"
                className="h-15 w-auto mb-4"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                Bâtissons une relation de confiance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm">+237 233 42 14 29</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm">secretariat@dhavocats.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  341 rue École Primaire Dominique Savio, Bonapriso
                  <br />
                  B.P. 1929 Douala, Cameroun
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Navigation</h3>
            <div className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Nos Expertises
            </h3>
            <div className="space-y-3">
              {footerLinks.expertise.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Recevez nos actualités juridiques et analyses d'experts.
            </p>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-sm text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary-dark transition-colors">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="text-sm font-medium mb-3">Suivez-nous</div>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4 group-hover:text-secondary-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              {currentYear} D. Legal. Tous droits réservés.
            </div>

            <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
              <span>Ordre des Avocats du Cameroun</span>
              <span>•</span>
              <span>Membre OHADA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
