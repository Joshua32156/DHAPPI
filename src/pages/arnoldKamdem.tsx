import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import arnold from '@/assets/TeamImages/Arnold Kamdem.avif';

const arnoldData = {
  name: "Arnold KAMDEM",
  role: "Legal Counsel",
  speciality: "Responsable du Département Conseil",
  image: arnold,
  shortDescription:
    "Arnold a rejoint le cabinet en 2017, après une riche expérience acquise auprès d'entreprises de la place.",
  longDescription: `
    <p>Arnold a rejoint le cabinet en 2017, après une riche expérience acquise au sein des entreprises Globeleq Cameroon Management Services S.A., Kribi Power Development Company S.A. et Dibamba Power Development Company S.A., en qualité de juriste assistant chargé des affaires juridiques, commerciales et de conformité.</p><br/>
    <p>Titulaire d’un Master en Contentieux et Arbitrage des Affaires de l’Université Catholique d’Afrique Centrale et d’une Maîtrise en droit des affaires et de l’entreprise de l’Université de Dschang, Arnold accompagne les clients du cabinet en matière de conseil en droit des affaires.</p><br/>
    <p>Arnold jouit d’une solide expérience en matière de droit des investissements, droit des affaires OHADA et droit de l’énergie. C’est fort de cette expérience, qu’il participe activement au sein du cabinet à la négociation et au traitement d’importants dossiers de financement, à la négociation de partenariats commerciaux, à la gestion du secrétariat juridique d’entreprises et à l’assistance des Start-up sur le plan juridique.</p><br/>
    `,
  expertiseAreas: [
    "Droit des investissements",
    "Droit des affaires OHADA",
    "Droit de l'énergie",
    "Montage de contrats complexes",
    "Audit juridique",
  ],
//   ParcoursAcadémique: [
//     "Global Executive MBA SKEMA Business School (En cours)",
//     "Médiateur certifié en droit commercial OHADA McGill University",
//     "LL.M en Common Law et droit transnational Université de Sherbrooke",
//     "Master II en droit du commerce international Université de Montpellier",
//     "Master I en droit des affaires Université de Montpellier",
//   ],
//   DistinctionsEtClassements: [
//     "Jeune Afrique Business+ – 100 Legal Powerlist (depuis 2020)",
//     "Chambers & Partners : Up and Coming Lawyer of the Year in Africa (2024) | Leading lawyer (2025, 2026)",
//     "The Legal 500 – Leading Partner (2026)",
//   ],
//   Langue: [
//     "Français",
//     "Anglais",
//   ],
  linkedin: "https://www.linkedin.com/in/arnold-kamdem-kouogue-307962143/",
  email: "akamdem@dhavocats.com",
};

const ArnoldKamdemPage = () => {
  return <ProfilePage expertData={arnoldData} />;
};

export default ArnoldKamdemPage;