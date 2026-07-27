import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import vanessa from '@/assets/VANESSA DE HAPPI.avif';

const pascalData = {
  name: "Pascal-Lavande ONANA",
  role: "Stagiaire en Droit",
  speciality: "",
  image: vanessa,
  shortDescription:
    "Diplômée en droit français (Université de Montpellier I), en droit québécois (Université de Montréal) et en Common Law (Université de Sherbrooke), Me Vanessa de Happi est membre des barreaux du Cameroun et du Québec. Elle a débuté sa carrière comme avocate en Conformité au sein de l’un des plus grands groupes financiers du Canada (Desjardins Group), pour ensuite rejoindre le cabinet Norton Rose Fulbright, un cabinet international d’avocats d’affaires parmi les plus prestigieux. ",
  longDescription: `
    <p>Titulaire d’une licence en droit privé, Pascale-Lavande poursuit actuellement un Master 2 en droit des affaires à l’université de Douala. Ses recherches portent sur les conventions extra-statutaire et la résolution des conflits entre associés en droit OHADA, un sujet qui reflète son intérêt pour les mécanismes de gouvernance et la sécurisation des relations entre partenaires économiques.</p><br/>
    <p>Elle a rejoint le Département Conseil du cabinet en tant que stagiaire, où elle développe ses compétences en droit des Sociétés et en droit des contrats d’affaires. Son engagement et sa curiosité l’ont également amenée à se rapprocher du Département Contentieux afin d’approfondir ses connaissances sur les mécanismes de résolution des conflits.</p><br/>
    <p>Soucieuse d’élargir son expertise, elle s’intéresse particulièrement au droit de l’arbitrage, au droit de la concurrence, au droit social, au droit fiscal, ainsi qu’au droit bancaire et financier. Elle aspire à une carrière combinant Conseil et Contentieux, avec une approche stratégique pour accompagner efficacement les entreprises dans un environnement économique exigeant.</p><br/>
    `,
//   expertiseAreas: [
//     "Conformité légale et réglementaire",
//     "Droit des sociétés",
//     "Droit des contrats",
//     "Droit bancaire et financier",
//     "Droit des investissements",
//     "Droit du numérique",
//     "Trade and commodities",
//   ],
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
  linkedin: " https://www.linkedin.com/in/pascale-lavande-onana-abomo-71aa90250?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "plonana@dhavocats.com",
};

const PascalLavandeOnanaPage = () => {
  return <ProfilePage expertData={pascalData} />;
};

export default PascalLavandeOnanaPage;